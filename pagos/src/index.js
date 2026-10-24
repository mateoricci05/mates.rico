/* =====================================================
   mates.rico — servidor de pagos (Cloudflare Worker)

   Arma el cobro de Mercado Pago con los precios REALES de la web
   (los lee de script.js publicado, así nadie puede cambiar un precio
   desde el navegador) y verifica los pagos cuando el cliente vuelve.

   Rutas:
     POST /pagar        → cobra con tarjeta desde el formulario de la web (sin salir de la tienda)
     POST /preferencia  → crea el cobro y devuelve el link de pago (Checkout Pro, de respaldo)
     GET  /pago?id=123  → estado de un pago (para confirmar al volver)

   Secreto necesario (se carga en Cloudflare, nunca en el código):
     MP_ACCESS_TOKEN = Access Token de producción de Mercado Pago
   ===================================================== */

const FACTOR_TARJETA = 0.78;   // precio con tarjeta = precio real / 0,78 (22% OFF por transferencia)
const CUOTAS = 3;              // cuotas sin interés que ofrece la cuenta
const MP_API = "https://api.mercadopago.com";

const precioLista = (n) => Math.ceil(n / FACTOR_TARJETA / 100) * 100;

export default {
  async fetch(request, env) {
    const origen = request.headers.get("Origin") || "";
    const cors = corsHeaders(origen, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    const url = new URL(request.url);
    try {
      if (url.pathname === "/pagar" && request.method === "POST") {
        return json(await pagarConTarjeta(await request.json(), env), 200, cors);
      }
      if (url.pathname === "/preferencia" && request.method === "POST") {
        return json(await crearPreferencia(await request.json(), env), 200, cors);
      }
      if (url.pathname === "/pago" && request.method === "GET") {
        const ref = url.searchParams.get("ref");
        return json(ref ? await buscarPorReferencia(ref, env) : await consultarPago(url.searchParams.get("id"), env), 200, cors);
      }
      if (url.pathname === "/" ) return json({ ok: true, servicio: "mates.rico pagos" }, 200, cors);
      return json({ error: "Ruta no encontrada" }, 404, cors);
    } catch (e) {
      const status = e.status || 500;
      return json({ error: e.publico || "No pudimos procesar el pago. Probá de nuevo o escribinos por WhatsApp." }, status, cors);
    }
  },
};

// ───────────────────────── Cobro ─────────────────────────

// Arma los ítems con precios reales de la web (precio con tarjeta) y el envío
async function armarPedido(body, env) {
  const cat = await catalogo(env.SITIO);

  const pedido = Array.isArray(body?.items) ? body.items : [];
  if (!pedido.length || pedido.length > 30) throw falla(400, "Tu pedido está vacío.");

  const items = [];
  let totalReal = 0;
  for (const it of pedido) {
    const p = cat.productos.get(Number(it.id));
    const cantidad = Math.floor(Number(it.cantidad));
    if (!p) throw falla(400, "Un producto de tu pedido ya no está disponible.");
    if (!(cantidad >= 1) || cantidad > p.stock) throw falla(409, `No tenemos stock suficiente de ${p.nombre}.`);
    if (p.opciones.length && !p.opciones.includes(it.opcion)) throw falla(400, `Elegí una opción para ${p.nombre}.`);
    const real = precioReal(p, cat);
    totalReal += real * cantidad;
    items.push({
      id: String(p.id),
      title: p.nombre + (it.opcion ? ` (grabado "${it.opcion}")` : ""),
      quantity: cantidad,
      unit_price: precioLista(real),
      currency_id: "ARS",
    });
  }

  const envio = costoEnvio(body.zona, totalReal, cat);
  if (envio === null) throw falla(400, "Para pagar con tarjeta necesitamos el costo del envío. Elegí tu zona.");
  if (envio > 0) {
    items.push({ id: "envio", title: `Envío (${body.zona})`, quantity: 1, unit_price: precioLista(envio), currency_id: "ARS" });
  }
  const total = items.reduce((a, i) => a + i.unit_price * i.quantity, 0);
  return { items, total };
}

const nuevaRef = () => "MR-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();

// Pago con tarjeta desde el formulario de Mercado Pago dentro de la web (Card Payment Brick)
async function pagarConTarjeta(body, env) {
  if (!env.MP_ACCESS_TOKEN) throw falla(500, "Falta configurar Mercado Pago.");
  const { items, total } = await armarPedido(body, env);
  const t = body?.tarjeta || {};
  if (!t.token || !t.payment_method_id) throw falla(400, "Faltan los datos de la tarjeta.");
  if (Math.abs(Number(t.transaction_amount) - total) > 0.5) throw falla(409, "El total de tu pedido cambió. Volvé al pedido y probá de nuevo.");
  const email = String(t.payer?.email || body?.cliente?.email || "").trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) throw falla(400, "Necesitamos un email válido para el comprobante.");
  const nombre = String(body?.cliente?.nombre || "").slice(0, 80);
  const ref = nuevaRef();

  const pago = {
    transaction_amount: total,
    token: t.token,
    description: "Pedido mates.rico",
    installments: Math.max(1, Math.floor(Number(t.installments) || 1)),
    payment_method_id: t.payment_method_id,
    issuer_id: t.issuer_id ? Number(t.issuer_id) || t.issuer_id : undefined,
    payer: {
      email,
      identification: t.payer?.identification?.number ? t.payer.identification : undefined,
      first_name: nombre || undefined,
    },
    external_reference: ref,
    statement_descriptor: "MATES.RICO",
    binary_mode: true,
    additional_info: { items: items.map(i => ({ id: i.id, title: i.title, quantity: i.quantity, unit_price: i.unit_price })) },
    metadata: { zona: String(body.zona || ""), cliente: nombre },
  };
  const r = await fetch(`${MP_API}/v1/payments`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${env.MP_ACCESS_TOKEN}`, "Content-Type": "application/json", "X-Idempotency-Key": ref },
    body: JSON.stringify(pago),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok || !d.id) {
    console.log("MP pago error", r.status, JSON.stringify(d).slice(0, 600));
    throw falla(402, "No pudimos procesar la tarjeta. Revisá los datos o probá con otra.");
  }
  return { id: d.id, estado: d.status, detalle: d.status_detail, monto: d.transaction_amount, cuotas: d.installments, ref };
}

async function crearPreferencia(body, env) {
  if (!env.MP_ACCESS_TOKEN) throw falla(500, "Falta configurar Mercado Pago.");
  const sitio = env.SITIO;
  const { items } = await armarPedido(body, env);

  const ref = nuevaRef();
  const nombre = String(body?.cliente?.nombre || "").slice(0, 80);
  const email = String(body?.cliente?.email || "");

  const preferencia = {
    items,
    external_reference: ref,
    statement_descriptor: "MATES.RICO",
    payment_methods: {
      installments: CUOTAS,
      excluded_payment_types: [{ id: "ticket" }, { id: "atm" }], // sin Rapipago/Pago Fácil: solo pagos al instante
    },
    back_urls: {
      success: `${sitio}?mp=ok`,
      failure: `${sitio}?mp=error`,
      pending: `${sitio}?mp=pendiente`,
    },
    auto_return: "approved",
    binary_mode: true,   // aprobado o rechazado al instante, sin pagos "pendientes"
    payer: { name: nombre || undefined, email: /^\S+@\S+\.\S+$/.test(email) ? email : undefined },
    metadata: { zona: String(body.zona || ""), cliente: nombre },
  };

  const r = await fetch(`${MP_API}/checkout/preferences`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.MP_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      "X-Idempotency-Key": ref,
    },
    body: JSON.stringify(preferencia),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok || !data.init_point) {
    console.log("MP error", r.status, JSON.stringify(data).slice(0, 500));
    throw falla(502, "Mercado Pago no respondió. Probá de nuevo en un ratito.");
  }

  const totalTarjeta = items.reduce((a, i) => a + i.unit_price * i.quantity, 0);
  return { url: data.init_point, ref, totalTarjeta, cuotas: CUOTAS };
}

async function consultarPago(id, env) {
  if (!/^\d{5,20}$/.test(String(id || ""))) throw falla(400, "Pago inválido.");
  const r = await fetch(`${MP_API}/v1/payments/${id}`, {
    headers: { "Authorization": `Bearer ${env.MP_ACCESS_TOKEN}` },
  });
  if (!r.ok) throw falla(404, "No encontramos ese pago.");
  const p = await r.json();
  return {
    id: p.id,
    estado: p.status,                      // approved | pending | rejected | ...
    monto: p.transaction_amount,
    cuotas: p.installments,
    ref: p.external_reference,
    items: (p.additional_info?.items || []).map(i => ({ titulo: i.title, cantidad: Number(i.quantity), precio: Number(i.unit_price) })),
  };
}

// Busca el pago de un pedido por su referencia (para cuando la app de MP no devuelve a la web)
async function buscarPorReferencia(ref, env) {
  if (!/^MR-[A-Z0-9-]{4,40}$/.test(String(ref || ""))) throw falla(400, "Pedido inválido.");
  const r = await fetch(`${MP_API}/v1/payments/search?external_reference=${encodeURIComponent(ref)}&sort=date_created&criteria=desc&limit=10`, {
    headers: { "Authorization": `Bearer ${env.MP_ACCESS_TOKEN}` },
  });
  if (!r.ok) throw falla(502, "No pudimos consultar el pago.");
  const lista = (await r.json()).results || [];
  const p = lista.find(x => x.status === "approved") || lista[0];
  if (!p) return { estado: "sin_pago", ref };
  return { id: p.id, estado: p.status, monto: p.transaction_amount, cuotas: p.installments, ref: p.external_reference };
}

// ─────────────── Catálogo: se lee de la web publicada ───────────────

let cache = { t: 0, data: null };

async function catalogo(sitio) {
  if (cache.data && Date.now() - cache.t < 60_000) return cache.data;
  const r = await fetch(`${sitio}script.js?t=${Math.floor(Date.now() / 60_000)}`);
  if (!r.ok) throw falla(503, "No pudimos leer los precios. Probá de nuevo.");
  const data = parsearCatalogo(await r.text());
  cache = { t: Date.now(), data };
  return data;
}

// Lee productos, promo y zonas de script.js sin ejecutarlo
export function parsearCatalogo(js) {
  const ini = js.indexOf("const productos = [");
  const fin = js.indexOf("\n];", ini);
  if (ini < 0 || fin < 0) throw falla(503, "No pudimos leer los precios.");
  const productos = new Map();
  for (const bloque of objetosDeNivel1(js.slice(ini + "const productos = ".length, fin + 2))) {
    const num = (k) => { const m = bloque.match(new RegExp(`\\b${k}:\\s*(\\d+)`)); return m ? Number(m[1]) : null; };
    const id = num("id"), precio = num("precio");
    if (id == null || precio == null) continue;
    const nombre = (bloque.match(/\bnombre:\s*"([^"]*)"/) || [])[1] || `Producto ${id}`;
    const iOp = bloque.indexOf("opciones:");
    const opciones = iOp >= 0 ? [...bloque.slice(iOp).matchAll(/\bnombre:\s*"([^"]*)"/g)].map(m => m[1]) : [];
    productos.set(id, { id, nombre, precio, descuento: num("descuento") || 0, stock: num("stock") || 0, opciones });
  }
  const promoHasta = (js.match(/const PROMO\s*=\s*\{[^}]*?hasta:\s*"([^"]+)"/) || [])[1] || null;
  const zonasTxt = (js.match(/const ZONAS_ENVIO\s*=\s*\{([^}]*)\}/) || [])[1] || "";
  const zonas = Object.fromEntries([...zonasTxt.matchAll(/"([^"]+)":\s*(\d+)/g)].map(m => [m[1], Number(m[2])]));
  const envioGratisMinimo = Number((js.match(/const ENVIO_GRATIS_MINIMO\s*=\s*(\d+)/) || [])[1] || Infinity);
  return { productos, promoHasta, zonas, envioGratisMinimo };
}

// Separa los { ... } de primer nivel de un array literal, respetando strings
function objetosDeNivel1(txt) {
  const out = [];
  let prof = 0, ini = -1, str = null;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (str) { if (c === "\\") i++; else if (c === str) str = null; continue; }
    if (c === '"' || c === "'" || c === "`") { str = c; continue; }
    if (c === "/" && txt[i + 1] === "/") { const nl = txt.indexOf("\n", i); i = nl < 0 ? txt.length : nl; continue; }
    if (c === "{") { if (++prof === 1) ini = i; }
    else if (c === "}") { if (--prof === 0 && ini >= 0) { out.push(txt.slice(ini, i + 1)); ini = -1; } }
  }
  return out;
}

function precioReal(p, cat) {
  const promo = cat.promoHasta && Date.now() < new Date(cat.promoHasta).getTime();
  return p.descuento && promo && p.stock > 0 ? p.precio - p.descuento : p.precio;
}

// número = costo · 0 = gratis · null = sin costo conocido
function costoEnvio(zona, totalReal, cat) {
  if (zona && zona in cat.zonas) return cat.zonas[zona];
  if (zona === "otra" && totalReal >= cat.envioGratisMinimo) return 0;
  return null;
}

// ───────────────────────── util ─────────────────────────

function corsHeaders(origen, env) {
  const permitidos = String(env.ORIGENES || "").split(",").map(s => s.trim()).filter(Boolean);
  const ok = permitidos.includes(origen) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origen);
  return {
    "Access-Control-Allow-Origin": ok ? origen : (permitidos[0] || "*"),
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status, headers: { ...headers, "Content-Type": "application/json; charset=utf-8" } });
}

function falla(status, publico) {
  const e = new Error(publico);
  e.status = status;
  e.publico = publico;
  return e;
}
