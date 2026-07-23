/* =====================================================
   mates.rico — script.js  v2
   ===================================================== */

// ═══════════════════════════════════════════════════════
// 📦 PRODUCTOS — ordenados: Mates → Yerbas → Accesorios
// ═══════════════════════════════════════════════════════
const productos = [

  // ─── MATES ───────────────────────────────────────────
  {
    id: 3,
    nombre: "Imperial Algarrobo",
    descripcion: "Imperial de madera de algarrobo con guarda de acero inoxidable. Veta natural única en cada pieza — ningún mate es igual a otro. Disponible en tamaño chico y mediano.",
    precio: 30000,
    stock: 0,
    imagen: "img/imperial_algarrobo_nuevo.jpg",
    categoria: "Mates",
    features: [
      "Madera de algarrobo auténtica",
      "Guarda de acero inoxidable",
      "Disponible recto",
      "Tamaño chico / Tamaño mediano",
      "Veta única en cada pieza",
    ],
  },
  {
    id: 13,
    nombre: "Mate Camionero Criollo",
    descripcion: "Camionero de calabaza curada con base de cuero premium y trenzado de cuero crudo a mano. Robusto, cómodo y con un acabado rústico único. Bombilla no incluida.",
    precio: 33000,
    stock: 5,
    imagen: "img/mate_camionero_criollo.jpg",
    categoria: "Mates",
    features: [
      "Calabaza curada artesanalmente",
      "Base de cuero premium",
      "Trenzado de cuero crudo a mano",
      "Forma camionero clásica",
      "Bombilla no incluida",
    ],
  },
  {
    id: 16,
    nombre: "Mate Coquito",
    descripcion: "Coquito de calabaza curada con base de cuero premium y trenzado de cuero crudo. Sin adornos, pura esencia matera. Bombilla no incluida.",
    precio: 32000,
    stock: 5,
    imagen: "img/mate_torpedo_criollo.jpg",
    categoria: "Mates",
    features: [
      "Forma Coquito tradicional",
      "Calabaza curada artesanalmente",
      "Base de cuero premium",
      "Trenzado de cuero crudo a mano",
      "Bombilla no incluida",
    ],
  },
  {
    id: 18,
    nombre: "Mate Porito Cincelado",
    descripcion: "Porito de calabaza con guarda cincelada plateada. Compacto, liviano y con mucho carácter. El clásico argentino en su versión más pura. Bombilla no incluida.",
    precio: 20000,
    stock: 1,
    imagen: "img/mate_porito.jpg",
    categoria: "Mates",
    features: [
      "Forma porito tradicional",
      "Calabaza curada artesanalmente",
      "Guarda cincelada plateada",
      "Compacto y liviano",
      "Bombilla no incluida",
    ],
  },
  {
    id: 17,
    nombre: "Imperial Negro — Guarda Cincelada Plateada",
    descripcion: "Imperial de calabaza en negro mate con guarda cincelada plateada. Cuerpo oscuro, detalles finos. Bombilla no incluida.",
    precio: 39000,
    stock: 5,
    imagen: "img/imperial_clasico.jpg",
    categoria: "Mates",
    features: [
      "Calabaza en negro mate",
      "Guarda cincelada plateada",
      "Base tipo pata clásica",
      "Acabado premium artesanal",
      "Bombilla no incluida",
    ],
  },
  {
    id: 19,
    nombre: "Torpedo Uruguayo Cincelado",
    descripcion: "Torpedo estilo uruguayo con guarda cincelada plateada y cuerpo negro. La forma más reconocida del litoral, con la elegancia del cincelado artesanal. Bombilla no incluida.",
    precio: 42000,
    stock: 0,
    imagen: "img/mate_torpedo_uruguayo.jpg",
    categoria: "Mates",
    features: [
      "Estilo torpedo uruguayo",
      "Cuerpo negro mate",
      "Guarda cincelada plateada",
      "Acabado artesanal",
      "Bombilla no incluida",
    ],
  },
  {
    id: 25,
    nombre: "Torpedo Uruguayo — Apliques en Bronce",
    descripcion: "Torpedo uruguayo de calabaza negra con guarda cincelada plateada y apliques en bronce dorado. La combinación de plata y bronce le da un carácter único. Bombilla no incluida.",
    precio: 58000,
    stock: 1,
    imagen: "img/torpedo_uruguayo_bronce.jpg",
    categoria: "Mates",
    features: [
      "Forma torpedo uruguayo",
      "Calabaza negra curada",
      "Guarda cincelada plateada",
      "Apliques en bronce dorado",
      "Bombilla no incluida",
    ],
  },
  {
    id: 15,
    nombre: "Mate Ranchero",
    descripcion: "Mate ranchero de madera con terminación bicolor natural. Cada pieza tiene su propia veta y manchas únicas — ningún ranchero es igual al otro. Bombilla no incluida.",
    precio: 40000,
    stock: 1,
    imagen: "img/mate_ranchero.jpg",
    categoria: "Mates",
    features: [
      "Madera con terminación bicolor",
      "Veta y manchas únicas en cada pieza",
      "Diseño ranchero tradicional",
      "Liviano y cómodo",
      "Bombilla no incluida",
    ],
  },
  {
    id: 14,
    nombre: "Mate Galleta Premium",
    descripcion: "Mate galleta de calabaza con base de cuero premium y trenzado de cuero crudo. La forma más cómoda para cebar. Bombilla no incluida.",
    precio: 40000,
    stock: 0,
    imagen: "img/mate_galleta.jpg",
    categoria: "Mates",
    features: [
      "Forma galleta ergonómica",
      "Calabaza curada artesanalmente",
      "Base de cuero premium",
      "Trenzado de cuero crudo a mano",
      "Bombilla no incluida",
    ],
  },
  {
    id: 30,
    nombre: "Mate Galleta",
    descripcion: "Mate galleta de calabaza curada, forma cómoda para cebar. Versión sencilla, sin apliques, ideal para el uso diario. Bombilla no incluida.",
    precio: 20000,
    stock: 10,
    imagen: "img/mate_galleta_simple.jpg",
    categoria: "Mates",
    features: [
      "Forma galleta ergonómica",
      "Calabaza curada artesanalmente",
      "Terminación simple y resistente",
      "Ideal para uso diario",
      "Bombilla no incluida",
    ],
  },
  {
    id: 8,
    nombre: "Imperial Alpaca Grabado Boca Juniors",
    descripcion: "Imperial de calabaza con cuero alpaca y grabado exclusivo Boca Juniors. La pieza más premium para el fanático xeneize. Solo 1 unidad disponible. Bombilla no incluida.",
    precio: 50000,
    stock: 1,
    imagen: "img/imperial_alpaca_boca.jpg",
    categoria: "Mates",
    features: [
      "Imperial calabaza con alpaca",
      "Grabado Boca Juniors exclusivo",
      "Edición especial",
      "Bombilla no incluida",
      "Solo 1 unidad disponible",
    ],
  },
  {
    id: 9,
    nombre: "Camionero River Plate — Edición Oficial",
    descripcion: "Camionero de madera con virola grabada oficial River Plate, bombilla incluida y caja de presentación negra. Club Atlético River Plate — 1901.",
    precio: 35000,
    stock: 0,
    imagen: "img/mate_river_plate.jpg",
    categoria: "Mates",
    features: [
      "Forma camionero artesanal",
      "Virola con grabado oficial River Plate",
      "Madera curada artesanalmente",
      "Bombilla incluida",
      "Caja de presentación negra",
    ],
  },
  {
    id: 2,
    nombre: "Torpedo Virola Alpaca Premium — Cuero Negro",
    descripcion: "Mate torpedo con virola cincelada de alpaca, cuero liso negro y base de alpaca con pelotitas de bronce. Bombilla no incluida.",
    precio: 55000,
    stock: 0,
    imagen: "img/torpedo_virola_alpaca.jpg",
    categoria: "Mates",
    features: [
      "Virola de alpaca cincelada",
      "Cuero liso negro",
      "Base alpaca con pelotitas de bronce",
      "Forma torpedo tradicional",
      "Bombilla no incluida",
    ],
  },
  {
    id: 1,
    nombre: "Imperial Guarda Alpaca Premium — Cuero Borravino",
    descripcion: "Imperial de calabaza con guarda de alpaca cincelada a mano, cuero liso borravino y base de alpaca ancha. Una pieza única con identidad propia. Bombilla no incluida.",
    precio: 60000,
    stock: 0,
    imagen: "img/imperial_guarda_alpaca_borravino.jpg",
    categoria: "Mates",
    features: [
      "Guarda de alpaca cincelada",
      "Cuero liso borravino",
      "Base de alpaca ancha",
      "Calabaza curada artesanalmente",
      "Bombilla no incluida",
    ],
  },

  // ─── YERBAS ──────────────────────────────────────────
  {
    id: 22,
    nombre: "Yerba Verdecita 1kg",
    descripcion: "Yerba Verdecita elaborada despalada, padrón uruguayo. Selección especial de Brasil y Argentina — suave al paladar, cebadas largas y aroma fresco.",
    precio: 8500,
    stock: 15,
    imagen: "img/yerba_verdecita.jpg",
    categoria: "Yerbas",
    features: [
      "Elaborada despalada",
      "Padrón uruguayo",
      "Selección especial Brasil-Argentina",
      "Suave al paladar",
      "Peso neto 1kg",
    ],
  },
  {
    id: 5,
    nombre: "Yerba Baldo 1kg",
    descripcion: "Yerba Baldo 1kg — sabor equilibrado, aroma intenso y cebadas largas. La preferida por los materos exigentes.",
    precio: 11000,
    stock: 20,
    imagen: "img/yerba_baldo.jpg",
    categoria: "Yerbas",
    features: [
      "Yerba Baldo seleccionada",
      "Peso neto 1kg",
      "Sabor equilibrado y aroma intenso",
      "Cebadas largas",
      "Bolsa resellable",
    ],
  },
  {
    id: 32,
    nombre: "Latas Baldo",
    descripcion: "Lata metálica de Yerba Baldo, edición coleccionable. Diseño clásico con ventana medidora de nivel y guía de preparación impresa. Ideal para tener en la mesada o para regalar.",
    precio: 22000,
    stock: 3,
    imagen: "img/latas_baldo.jpg",
    categoria: "Yerbas",
    features: [
      "Lata metálica coleccionable",
      "Ventana medidora de nivel",
      "Guía de preparación impresa",
      "Envase de lata reutilizable, mantiene la yerba fresca por más tiempo",
      "Ideal para regalar",
    ],
  },
  {
    id: 23,
    nombre: "Yerba Canarias 1kg",
    descripcion: "Yerba Canarias 1kg — sabor tradicional, industria brasileña. Cebadas generosas, sabor firme y aroma intenso. Ideal para el mate de todos los días.",
    precio: 11000,
    stock: 2,
    imagen: "img/yerba_canarias.jpg",
    categoria: "Yerbas",
    features: [
      "Sabor tradicional",
      "Industria brasileña",
      "Cebadas generosas",
      "Sabor firme y aroma intenso",
      "Peso neto 1kg",
    ],
  },
  {
    id: 31,
    nombre: "Yerba Canarias 1kg — Sabor Suave",
    descripcion: "Yerba Canarias 1kg sabor suave, industria brasileña. Cebadas suaves y aroma delicado, ideal para quienes prefieren un mate menos amargo.",
    precio: 12900,
    stock: 0,
    imagen: "img/yerba_canarias_suave.jpg",
    categoria: "Yerbas",
    features: [
      "Sabor suave",
      "Industria brasileña",
      "Cebadas suaves y aroma delicado",
      "Ideal para paladares sensibles",
      "Peso neto 1kg",
    ],
  },
  {
    id: 24,
    nombre: "Yerba Baldo 5kg",
    descripcion: "Yerba Baldo en formato familiar de 5kg. Procedente de reservas naturales del Brasil. El mismo sabor equilibrado de siempre, en el tamaño que dura.",
    precio: 49500,
    stock: 0,
    imagen: "img/baldo_5kg.jpg",
    categoria: "Yerbas",
    features: [
      "Yerba Baldo seleccionada",
      "Formato familiar 5kg",
      "Reservas naturales del Brasil",
      "Sabor equilibrado y aroma intenso",
      "Bolsa resellable",
    ],
  },
  {
    id: 33,
    nombre: "Yerba Esmeralda 1kg",
    descripcion: "Yerba Esmeralda Super Extra tipo P.U.1, sin adición de azúcar. Producida y cosechada de forma sustentable. Cebadas parejas y sabor limpio.",
    precio: 14500,
    stock: 8,
    imagen: "img/yerba_esmeralda.jpg",
    categoria: "Yerbas",
    features: [
      "Super Extra tipo P.U.1",
      "Sin adición de azúcar",
      "Producida y cosechada de forma sustentable",
      "Cebadas parejas, sabor limpio",
      "Peso neto 1kg",
    ],
  },
  {
    id: 34,
    nombre: "Yerba Sara Coco 500g — Edición Limitada",
    descripcion: "Yerba Sara saborizada a coco, edición limitada. Libre de gluten, envase biopack sustentable. Ideal para quienes buscan un mate distinto y dulce.",
    precio: 9500,
    stock: 8,
    imagen: "img/yerba_sara_coco.jpg",
    categoria: "Yerbas",
    features: [
      "Sabor coco, edición limitada",
      "Libre de gluten",
      "Envase biopack sustentable",
      "Yerba mate saborizada",
      "Peso neto 500g",
    ],
  },

  // ─── ACCESORIOS ──────────────────────────────────────
  {
    id: 26,
    nombre: "Bombilla Pico de Loro — Acero Inoxidable",
    descripcion: "Bombilla pico de loro de 16cm en acero inoxidable. El filtro que usan los materos de verdad — no tapa, no se dobla, dura años. Compatible con cualquier mate.",
    precio: 5000,
    stock: 30,
    imagen: "img/bombilla_acero.jpg",
    categoria: "Accesorios",
    features: [
      "Pico de loro 16cm",
      "Acero inoxidable",
      "Filtro resistente y duradero",
      "Fácil de limpiar",
      "Compatible con cualquier mate",
    ],
  },
  {
    id: 20,
    nombre: "Termo 1L Acero Inoxidable",
    descripcion: "Termo Marwal de 1 litro en acero inoxidable. Mantiene el agua caliente por horas. El compañero ideal para matear donde vayas.",
    precio: 25000,
    stock: 5,
    imagen: "img/termo_1l.jpg",
    categoria: "Accesorios",
    features: [
      "Capacidad 1 litro",
      "Acero inoxidable doble pared",
      "Mantiene temperatura por horas",
      "Tapa rosca segura",
      "Liviano y resistente",
    ],
  },
  {
    id: 21,
    nombre: "Matera Color Negro",
    descripcion: "Matera de color negro. Costuras a mano, broches metálicos. Todo lo que necesitás para llevar tu ritual a cualquier lugar con estilo.",
    precio: 25000,
    stock: 0,
    imagen: "img/kit_matera_negra.jpg",
    categoria: "Accesorios",
    features: [
      "Porta mate de cuero negro",
      "Premium",
      "Costuras artesanales",
      "Broches metálicos",
      "Ideal para llevar a todos lados",
    ],
  },
  {
    id: 27,
    nombre: "Termo System Messi Goat | Edición Especial 800ml",
    descripcion: "Termo Stanley edición especial Goat Messi de 800ml en rosa. Incluye mate térmico y bombilla de regalo. Vacuum Bottle BPA Free — mantiene temperatura 24hs. Con caja original.",
    precio: 60000,
    stock: 0,
    imagen: "img/stanley_goat_messi.jpg",
    categoria: "Accesorios",
    features: [
      "Stanley Edición Especial Goat Messi",
      "Capacidad 800ml",
      "Incluye mate térmico Stanley chico",
      "Bombilla de regalo",
      "Pico System",
    ],
  },
  {
    id: 28,
    nombre: "Termo Stanley System Azul | 1.2 lts",
    descripcion: "Termo Stanley System 1.2L color azul marino. BPA Free, acero inoxidable, mantiene temperatura 24hs. Bombilla de regalo incluida. El clásico de Stanley en su versión más reconocida.",
    precio: 49000,
    stock: 0,
    imagen: "img/stanley_system_azul.jpg",
    categoria: "Accesorios",
    features: [
      "Stanley Classic Vacuum Bottle",
      "Capacidad 1.2L",
      "Color azul marino",
      "Pico System",
      "Bombilla de regalo",
    ],
  },
  {
    id: 29,
    nombre: "Termo Stanley System Negro | 1.2 lts",
    descripcion: "Termo Stanley System 1.2L color negro mate. BPA Free, acero inoxidable, mantiene temperatura 24hs. Bombilla de regalo incluida. El más elegante de la línea Classic.",
    precio: 49000,
    stock: 0,
    imagen: "img/stanley_system_negro.jpg",
    categoria: "Accesorios",
    features: [
      "Stanley Classic Vacuum Bottle",
      "Capacidad 1.2L",
      "Color negro mate",
      "Pico System",
      "Bombilla de regalo",
    ],
  },
];
  

// ═══════════════════════════════════════════════════════
// ⚙️ CONFIG
// ═══════════════════════════════════════════════════════
const WHATSAPP_NUMBER = "5493543650854";
// Costo de envío fijo por zona. 0 = gratis.
const ZONAS_ENVIO = {
  "río ceballos": 0,
  "rio ceballos": 0,
  "salsipuedes": 2000,
  "unquillo": 2000,
  "villa allende": 4000,
};
// Para el resto del país (envío por Correo Argentino, "otra localidad"):
// si la compra llega a este monto, el envío sale gratis. Si no, se cotiza aparte.
const ENVIO_GRATIS_MINIMO = 100000;

// ═══════════════════════════════════════════════════════
// 🗃️ ESTADO
// ═══════════════════════════════════════════════════════
let carrito = [];
let categoriaActual = "Todos";
let localidadElegida = "";
let tipoEntregaElegido = "domicilio"; // "domicilio" | "sucursal", solo aplica a "otra localidad"
let datosEnvioNacional = null; // se completa solo si es "otra localidad"

// ═══════════════════════════════════════════════════════
// ✨ SPLASH SCREEN
// ═══════════════════════════════════════════════════════
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  const timer = setTimeout(() => {
    splash.classList.add("oculto");
    setTimeout(() => splash.remove(), 700);
  }, 1800);
  splash.addEventListener("click", () => {
    clearTimeout(timer);
    splash.classList.add("oculto");
    setTimeout(() => splash.remove(), 700);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  renderizarProductos();
  initNavbar();
  initFiltros();
  initModalProducto();
  initModalCarrito();
  initModalEnvio();
  initReveal();
  feather.replace();
});

// ═══════════════════════════════════════════════════════
// 🧱 RENDER PRODUCTOS
// ═══════════════════════════════════════════════════════
function renderizarProductos(categoria = "Todos") {
  const grid = document.getElementById("productos-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtrados = categoria === "Todos"
    ? productos
    : productos.filter(p => p.categoria === categoria);

  if (filtrados.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gris-med);">No hay productos en esta categoría.</div>`;
    return;
  }

  filtrados.forEach((p, i) => {
    const agotado = p.stock === 0;
    const card = document.createElement("div");
    card.className = "producto-card reveal";
    card.style.transitionDelay = `${i * 50}ms`;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver ${p.nombre}`);
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="producto-img-wrap">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x400/eaf3e8/3a6b35?text=mates.rico'"/>
        <span class="producto-badge">${p.categoria}</span>
      </div>
      <div class="producto-info">
        <div class="producto-cat">${p.categoria}</div>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-desc">${p.descripcion.substring(0, 85)}…</p>
        <div class="producto-footer">
          <span class="producto-precio">${fmt(p.precio)}</span>
          <button class="btn-comprar" ${agotado ? "disabled" : ""}>
            ${agotado ? "Agotado" : "Agregar"}
          </button>
        </div>
      </div>`;

    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("btn-comprar")) abrirModalProducto(p.id);
    });
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") abrirModalProducto(p.id); });
    card.querySelector(".btn-comprar")?.addEventListener("click", (e) => {
      e.stopPropagation();
      agregarAlCarrito(p.id);
    });

    grid.appendChild(card);
  });

  initReveal();
  feather.replace();
}

// ═══════════════════════════════════════════════════════
// 🖼️ MODAL DETALLE PRODUCTO
// ═══════════════════════════════════════════════════════
function abrirModalProducto(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById("modal-producto-overlay");
  const inner = document.getElementById("modal-producto-inner");
  if (!overlay || !inner) return;

  const agotado = p.stock === 0;
  const stockBajo = p.stock <= 2 && p.stock > 0;
  const stockLabel = agotado
    ? "Sin stock"
    : stockBajo
      ? `<strong class="bajo">${p.stock === 1 ? "¡Última unidad!" : `Solo ${p.stock} disponibles`}</strong>`
      : `<strong>${p.stock} disponibles</strong>`;
  const stockClass = (agotado || stockBajo) ? "bajo" : "";

  inner.innerHTML = `
    <div class="mp-img">
      <img src="${p.imagen}" alt="${p.nombre}"
        onerror="this.src='https://via.placeholder.com/500x500/eaf3e8/3a6b35?text=mates.rico'"/>
    </div>
    <div class="mp-info">
      <p class="mp-cat">${p.categoria}</p>
      <h2 class="mp-nombre">${p.nombre}</h2>
      <p class="mp-precio">${fmt(p.precio)}</p>
      <p class="mp-desc">${p.descripcion}</p>
      <div class="mp-features">
        ${p.features.map(f => `
          <div class="mp-feature">
            <div class="mp-feature-dot"></div>
            <span>${f}</span>
          </div>`).join("")}
      </div>
      <p class="mp-stock ${stockClass}">Stock: ${stockLabel}</p>
      <button class="btn btn-primary" id="mp-btn-agregar" ${agotado ? "disabled" : ""} style="width:100%;justify-content:center;">
        ${agotado ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  feather.replace();
  document.getElementById("mp-btn-agregar")?.addEventListener("click", () => {
    agregarAlCarrito(id);
    cerrarModalProducto();
  });
}

function cerrarModalProducto() {
  document.getElementById("modal-producto-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModalProducto() {
  const overlay = document.getElementById("modal-producto-overlay");
  const closeBtn = document.getElementById("modal-producto-close");
  closeBtn?.addEventListener("click", cerrarModalProducto);
  overlay?.addEventListener("click", (e) => { if (e.target === overlay) cerrarModalProducto(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarModalProducto(); });
}

// ═══════════════════════════════════════════════════════
// 🛒 CARRITO
// ═══════════════════════════════════════════════════════
function agregarAlCarrito(id) {
  const p = productos.find(x => x.id === id);
  if (!p || p.stock === 0) return;
  const existente = carrito.find(i => i.id === id);
  if (existente) {
    if (existente.cantidad >= p.stock) {
      mostrarToast(`Solo hay ${p.stock} unidad${p.stock > 1 ? "es" : ""} disponible`);
      return;
    }
    existente.cantidad += 1;
  } else {
    carrito.push({ id: p.id, nombre: p.nombre, precio: p.precio, imagen: p.imagen, cantidad: 1 });
  }
  actualizarBadge();
  actualizarBarraEnvio();
  mostrarToast(`✓ ${p.nombre.split(" ").slice(0,3).join(" ")} agregado`);
  renderizarCarrito();
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  const p = productos.find(x => x.id === id);
  const nuevoVal = item.cantidad + delta;
  if (nuevoVal <= 0) { eliminarDelCarrito(id); return; }
  if (p && nuevoVal > p.stock) { mostrarToast(`Máximo ${p.stock} unidades disponibles`); return; }
  item.cantidad = nuevoVal;
  renderizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarBadge();
  renderizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarBadge();
  renderizarCarrito();
}

function calcularTotal() {
  return carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
}

function actualizarBadge() {
  const badge = document.getElementById("carrito-badge");
  if (!badge) return;
  const total = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  badge.textContent = total;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
}

// ═══════════════════════════════════════════════════════
// 🚚 CÁLCULO DE ENVÍO
// ═══════════════════════════════════════════════════════
// Devuelve: número (costo fijo) | 0 (gratis) | null (a cotizar, resto del país)
function calcularCostoEnvio() {
  if (!localidadElegida) return null;
  const key = localidadElegida.toLowerCase().trim();
  if (key in ZONAS_ENVIO) return ZONAS_ENVIO[key];
  // "Otra localidad" → resto del país por Correo Argentino
  const total = calcularTotal();
  return total >= ENVIO_GRATIS_MINIMO ? 0 : null;
}

// ═══════════════════════════════════════════════════════
// 🚚 BARRA ENVÍO GRATIS
// ═══════════════════════════════════════════════════════
function actualizarBarraEnvio() {
  const wrap = document.getElementById("envio-progress-wrap");
  const fill = document.getElementById("envio-progress-fill");
  const texto = document.getElementById("envio-progress-texto");
  const falta = document.getElementById("envio-falta");
  if (!wrap || !fill) return;

  const total = calcularTotal();
  const porcentaje = Math.min((total / ENVIO_GRATIS_MINIMO) * 100, 100);
  const restante = Math.max(ENVIO_GRATIS_MINIMO - total, 0);
  fill.style.width = porcentaje + "%";

  const key = localidadElegida ? localidadElegida.toLowerCase().trim() : "";
  const esZonaConocida = key in ZONAS_ENVIO;

  // Zona con precio fijo (Río Ceballos, Salsipuedes, Unquillo, Villa Allende)
  if (localidadElegida && esZonaConocida) {
    const costo = ZONAS_ENVIO[key];
    const barWrap = wrap.querySelector(".envio-progress-bar");
    if (barWrap) barWrap.style.display = "none";
    if (costo === 0) {
      wrap.className = "envio-progress-wrap zona-gratis";
      if (texto) texto.innerHTML = "📍 Tu zona tiene <strong>envío gratis</strong> 🎉";
    } else {
      wrap.className = "envio-progress-wrap zona-fija";
      if (texto) texto.innerHTML = `📍 Envío a tu zona: <strong>${fmt(costo)}</strong>`;
    }
    return;
  }

  // Sin localidad elegida todavía
  if (!localidadElegida) {
    wrap.className = "envio-progress-wrap";
    const barWrap = wrap.querySelector(".envio-progress-bar");
    if (barWrap) barWrap.style.display = "none";
    if (texto) texto.innerHTML = "Elegí tu localidad para ver el costo de envío";
    return;
  }

  // "Otra localidad" → resto del país, por Correo Argentino
  const barWrap = wrap.querySelector(".envio-progress-bar");
  if (barWrap) barWrap.style.display = "";

  if (total >= ENVIO_GRATIS_MINIMO) {
    wrap.className = "envio-progress-wrap alcanzado";
    if (texto) texto.innerHTML = "🎉 ¡Superaste los $100.000! <strong>Envío gratis</strong>";
    if (falta) falta.textContent = "";
  } else {
    wrap.className = "envio-progress-wrap";
    if (texto) texto.innerHTML = `Te faltan <strong id="envio-falta">${fmt(restante)}</strong> para envío gratis. Si no, el envío se cotiza aparte por Correo Argentino.`;
  }
}

function renderizarCarrito() {
  const body = document.getElementById("modal-body");
  const footer = document.getElementById("modal-footer");
  const totalEl = document.getElementById("carrito-total-precio");
  if (!body) return;

  if (carrito.length === 0) {
    body.innerHTML = `
      <div class="carrito-vacio">
        <i data-feather="shopping-bag"></i>
        <p>Tu carrito está vacío.<br/>¡Agregá algo!</p>
      </div>`;
    if (footer) footer.style.display = "none";
    actualizarBarraEnvio();
    feather.replace();
    return;
  }

  if (footer) footer.style.display = "flex";
  body.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img class="carrito-item-img" src="${item.imagen}" alt="${item.nombre}"
        onerror="this.src='https://via.placeholder.com/54x54/eaf3e8/3a6b35?text=M'"/>
      <div class="carrito-item-info">
        <div class="carrito-item-nombre">${item.nombre}</div>
        <div class="carrito-item-precio">${fmt(item.precio)}</div>
        <div class="carrito-item-cantidad">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-valor">${item.cantidad}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <button class="carrito-item-eliminar" data-id="${item.id}" aria-label="Eliminar">
        <i data-feather="trash-2"></i>
      </button>
    </div>`).join("");

  if (totalEl) totalEl.textContent = fmt(calcularTotal());
  actualizarBarraEnvio();

  body.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => cambiarCantidad(+btn.dataset.id, +btn.dataset.delta));
  });
  body.querySelectorAll(".carrito-item-eliminar").forEach(btn => {
    btn.addEventListener("click", () => eliminarDelCarrito(+btn.dataset.id));
  });
  feather.replace();
}

function initModalCarrito() {
  const overlay = document.getElementById("modal-carrito-overlay");
  const fab = document.getElementById("carrito-fab");
  const closeBtn = document.getElementById("modal-carrito-close");
  const btnFin = document.getElementById("btn-finalizar");
  const btnVac = document.getElementById("btn-vaciar");

  fab?.addEventListener("click", () => {
    renderizarCarrito();
    overlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  });
  closeBtn?.addEventListener("click", () => {
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
  });
  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
  btnFin?.addEventListener("click", () => {
    if (carrito.length === 0) { mostrarToast("Tu carrito está vacío"); return; }
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => abrirModalEnvio(), 200);
  });
  btnVac?.addEventListener("click", () => {
    vaciarCarrito();
    mostrarToast("Carrito vaciado");
  });
  const footer = document.getElementById("modal-footer");
  if (footer) footer.style.display = "none";
}

// ═══════════════════════════════════════════════════════
// 🚚 MODAL ENVÍO
// ═══════════════════════════════════════════════════════
function abrirModalEnvio() {
  const overlay = document.getElementById("modal-envio-overlay");
  overlay?.classList.add("open");
  document.body.style.overflow = "hidden";
  localidadElegida = "";
  tipoEntregaElegido = "domicilio";
  datosEnvioNacional = null;
  document.querySelectorAll(".envio-opcion").forEach(b => b.classList.remove("selected"));
  const wrap = document.getElementById("envio-otra-wrap");
  if (wrap) wrap.style.display = "none";
  // Limpiar todos los inputs del formulario de "otra localidad"
  ["envio-localidad-input", "envio-provincia-input", "envio-cp-input",
   "envio-direccion-input", "envio-nombre-input", "envio-codarea-input",
   "envio-celular-input", "envio-email-input"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.querySelectorAll(".envio-tipo-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.envio-tipo-btn[data-tipo="domicilio"]')?.classList.add("active");
  const dirWrap = document.getElementById("envio-direccion-wrap");
  if (dirWrap) dirWrap.style.display = "block";
}

function cerrarModalEnvio() {
  document.getElementById("modal-envio-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModalEnvio() {
  const overlay = document.getElementById("modal-envio-overlay");
  const closeBtn = document.getElementById("modal-envio-close");
  const confirmar = document.getElementById("btn-confirmar-envio");
  const otraWrap = document.getElementById("envio-otra-wrap");
  const dirWrap = document.getElementById("envio-direccion-wrap");

  closeBtn?.addEventListener("click", cerrarModalEnvio);
  overlay?.addEventListener("click", (e) => { if (e.target === overlay) cerrarModalEnvio(); });

  document.querySelectorAll(".envio-opcion").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".envio-opcion").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      if (btn.dataset.loc === "otra") {
        localidadElegida = "";
        if (otraWrap) otraWrap.style.display = "block";
      } else {
        localidadElegida = btn.dataset.loc;
        if (otraWrap) otraWrap.style.display = "none";
        actualizarBarraEnvio();
      }
    });
  });

  // Toggle "Entrega a domicilio" / "Retiro en sucursal" (solo aplica a otra localidad)
  document.querySelectorAll(".envio-tipo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".envio-tipo-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tipoEntregaElegido = btn.dataset.tipo;
      if (dirWrap) dirWrap.style.display = tipoEntregaElegido === "domicilio" ? "block" : "none";
    });
  });

  confirmar?.addEventListener("click", () => {
    const btnOtra = document.querySelector('.envio-opcion[data-loc="otra"]');

    if (btnOtra?.classList.contains("selected")) {
      // ── Envío nacional: validar y juntar todos los datos ──
      const val = (id) => document.getElementById(id)?.value.trim() || "";
      const nombre = val("envio-nombre-input");
      const localidad = val("envio-localidad-input");
      const provincia = val("envio-provincia-input");
      const cp = val("envio-cp-input");
      const direccion = val("envio-direccion-input");
      const codArea = val("envio-codarea-input");
      const celular = val("envio-celular-input");
      const email = val("envio-email-input");

      const faltantes = [];
      if (!nombre) faltantes.push("nombre y apellido");
      if (!localidad) faltantes.push("localidad");
      if (!provincia) faltantes.push("provincia");
      if (!cp) faltantes.push("código postal");
      if (!celular) faltantes.push("celular");
      if (tipoEntregaElegido === "domicilio" && !direccion) faltantes.push("dirección");

      if (faltantes.length > 0) {
        mostrarToast(`Faltan datos: ${faltantes[0]}`);
        return;
      }

      localidadElegida = localidad;
      datosEnvioNacional = { nombre, localidad, provincia, cp, direccion, codArea, celular, email, tipoEntrega: tipoEntregaElegido };
    } else {
      // ── Zona con precio fijo ──
      if (!localidadElegida) {
        mostrarToast("Elegí tu localidad para continuar");
        return;
      }
      datosEnvioNacional = null;
    }

    cerrarModalEnvio();
    generarWhatsapp(localidadElegida);
  });
}

// ═══════════════════════════════════════════════════════
// 💬 WHATSAPP
// ═══════════════════════════════════════════════════════
function generarWhatsapp(localidad) {
  if (carrito.length === 0) return;

  const detalle = carrito.map(i => `• ${i.nombre} x${i.cantidad} — ${fmt(i.precio * i.cantidad)}`).join("\n");
  const subtotal = calcularTotal();
  const costoEnvio = calcularCostoEnvio(); // número | 0 | null (a cotizar)

  let envioTexto, totalTexto;
  if (costoEnvio === null) {
    envioTexto = "Envío: a cotizar por Correo Argentino";
    totalTexto = `Subtotal productos: ${fmt(subtotal)}`;
  } else if (costoEnvio === 0) {
    envioTexto = "Envío: gratis";
    totalTexto = `Total: ${fmt(subtotal)}`;
  } else {
    envioTexto = `Envío: ${fmt(costoEnvio)}`;
    totalTexto = `Total (productos + envío): ${fmt(subtotal + costoEnvio)}`;
  }

  let bloqueEnvio = `📍 Localidad: ${localidad}\n${envioTexto}`;

  // Si es envío nacional (otra localidad), agrego todos los datos para MiCorreo
  if (datosEnvioNacional) {
    const d = datosEnvioNacional;
    const tipoTexto = d.tipoEntrega === "domicilio" ? "Entrega a domicilio" : "Retiro en sucursal";
    bloqueEnvio = `Así te paso mis datos para el envío:\n\n` +
      `Nombre y apellido: ${d.nombre}\n` +
      `Tipo de entrega: ${tipoTexto}\n` +
      `CP: ${d.cp}\n` +
      `Provincia: ${d.provincia}\n` +
      `Localidad: ${d.localidad}\n` +
      (d.tipoEntrega === "domicilio" ? `Dirección: ${d.direccion}\n` : "") +
      (d.codArea ? `Cód. área: ${d.codArea}\n` : "") +
      `Celular: ${d.celular}\n` +
      (d.email ? `Email: ${d.email}\n` : "") +
      `\n${envioTexto}`;
  }

  const saludos = ["¡Hola!", "¡Buenas!", "¡Hola, qué tal!"];
  const saludo = saludos[Math.floor(Math.random() * saludos.length)];
  const cierres = [
    "¿Me confirmás si tenés todo esto disponible? ¡Gracias!",
    "¿Está todo disponible? Quedo atento/a, ¡gracias!",
    "¿Me confirmás disponibilidad? ¡Mil gracias!",
  ];
  const cierre = cierres[Math.floor(Math.random() * cierres.length)];

  const mensaje = `${saludo}  Te escribo desde la web de mates.rico, quiero hacer este pedido:\n\n${detalle}\n\n${totalTexto}\n\n${bloqueEnvio}\n\n${cierre} `;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

// ═══════════════════════════════════════════════════════
// 🧭 NAVBAR
// ═══════════════════════════════════════════════════════
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const onScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks?.classList.toggle("open");
  });
  navLinks?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger?.classList.remove("open");
      navLinks?.classList.remove("open");
    });
  });
}

// ═══════════════════════════════════════════════════════
// 🗂️ FILTROS
// ═══════════════════════════════════════════════════════
function initFiltros() {
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      categoriaActual = btn.dataset.cat;
      renderizarProductos(categoriaActual);
    });
  });
}

// ═══════════════════════════════════════════════════════
// 👁️ REVEAL ON SCROLL
// ═══════════════════════════════════════════════════════
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -36px 0px" });
  els.forEach(el => obs.observe(el));
}

// ═══════════════════════════════════════════════════════
// 🍞 TOAST
// ═══════════════════════════════════════════════════════
let toastTimer = null;
function mostrarToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// ═══════════════════════════════════════════════════════
// 💰 FORMATO PRECIO
// ═══════════════════════════════════════════════════════
function fmt(n) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency", currency: "ARS",
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(n);
}
