/* =====================================================
   mates.rico — script.js  v2
   ===================================================== */

// Si los íconos (feather) no cargan, que la tienda siga andando igual
if (!window.feather) window.feather = { replace() {} };

// ═══════════════════════════════════════════════════════
// 📦 PRODUCTOS — ordenados: Mates → Yerbas → Bombillas → Accesorios
// ═══════════════════════════════════════════════════════
const productos = [


  // ─── MATES ───────────────────────────────────────────
  {
    id: 3,
    nombre: "Imperial Algarrobo",
    descripcion: "Imperial de madera de algarrobo con guarda de acero inoxidable. Veta natural única en cada pieza — ningún mate es igual a otro. Disponible en tamaño chico y mediano.",
    precio: 30000,
    stock: 0,
    llega: "2026-10-26",          // ← fecha en que entra (se muestra en Próximamente)
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
    id: 17,
    nombre: "Imperial Negro — Guarda Cincelada Plateada",
    descripcion: "Imperial de calabaza en negro mate con guarda cincelada plateada. Cuerpo oscuro, detalles finos. Bombilla no incluida.",
    precio: 30000,
    stock: 0,
    llega: "2026-10-26",          // ← fecha en que entra (se muestra en Próximamente)
    imagen: "img/imperial_clasico.jpg",
    categoria: "Mates",
    features: [
      "Calabaza en negro mate",
      "Guarda cincelada plateada",
      "Base tipo pata clásica",
      "Acabado premium",
      "Bombilla no incluida",
    ],
  },
  {
    id: 8,
    nombre: "Imperial Alpaca Grabado Boca Juniors",
    descripcion: "Imperial de calabaza con cuero alpaca y grabado exclusivo Boca Juniors. La pieza más premium para el fanático xeneize. Solo 1 unidad disponible. Bombilla no incluida.",
    precio: 50000,
    descuento: 10000,               // ← promo de lanzamiento
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
    id: 43,
    nombre: "Camionero Criollo",
    descripcion: "Camionero de calabaza curada con base de cuero crudo natural, sin curtir ni teñir. Boca ancha, forma criolla clásica. Bombilla no incluida.",
    precio: 24000,
    stock: 1,
    imagen: "img/camionero_criollo_natural.jpg",
    categoria: "Mates",
    features: [
      "Calabaza 100%",
      "Base cuero crudo natural, sin teñir",
      "Boca ancha, forma criolla",
      "Terminación prolija",
      "Bombilla no incluida",
    ],
  },
  {
    id: 46,
    nombre: "Camionero Criollo Cincelado",
    descripcion: "Camionero de calabaza con base de cuero crudo trenzado tipo canasta y virola plateada cincelada con motivos florales. Boca ancha, terminación prolija. Bombilla no incluida.",
    precio: 46000,
    descuento: 4000,               // ← promo de lanzamiento
    stock: 3,
    imagen: "img/camionero_criollo_cincelado.jpg",
    categoria: "Mates",
    features: [
      "Calabaza curada",
      "Virola plateada cincelada, motivos florales",
      "Base de cuero trenzado tipo canasta",
      "Boca ancha, forma criolla",
      "Bombilla no incluida",
    ],
  },
  {
    id: 37,
    nombre: "Camionero Cuero Crudo — Virola Volteada con Doble Anillo",
    descripcion: "Camionero de calabaza con cuero crudo natural, virola plateada volteada con doble anillo cincelado. Una pieza de carácter único, con el color natural del cuero sin curtir. Bombilla no incluida.",
    precio: 69000,
    stock: 1,
    imagen: "img/camionero_cuero_crudo_doble_anillo.jpg",
    categoria: "Mates",
    features: [
      "Cuero crudo natural sin curtir",
      "Virola plateada volteada",
      "Doble anillo cincelado",
      "Forma camionero clásica",
      "Bombilla no incluida",
    ],
  },
  {
    id: 38,
    nombre: "Mate Coquito",
    descripcion: "Coquito de calabaza curada, versión normal, sin apliques. Cómodo, liviano y con la forma de coco tradicional. Bombilla no incluida.",
    precio: 23000,
    stock: 2,
    imagen: "img/mate_coquito.jpg",
    categoria: "Mates",
    features: [
      "Forma de coco tradicional",
      "Calabaza curada",
      "Terminación simple",
      "Liviano y cómodo",
      "Bombilla no incluida",
    ],
  },
  {
    id: 18,
    nombre: "Mate Porito Cincelado",
    descripcion: "Porito de calabaza con guarda cincelada plateada. Compacto, liviano y con mucho carácter. El clásico argentino en su versión más pura. Bombilla no incluida.",
    precio: 21000,
    stock: 1,
    imagen: "img/mate_porito.jpg",
    categoria: "Mates",
    features: [
      "Forma porito tradicional",
      "Calabaza curada",
      "Guarda cincelada plateada",
      "Compacto y liviano",
      "Bombilla no incluida",
    ],
  },
  {
    id: 19,
    nombre: "Torpedo Uruguayo Cincelado",
    descripcion: "Torpedo estilo uruguayo con guarda cincelada plateada y cuerpo negro. La forma más reconocida del litoral, con la elegancia del cincelado a mano. Bombilla no incluida.",
    precio: 42000,
    stock: 0,
    imagen: "img/mate_torpedo_uruguayo.jpg",
    categoria: "Mates",
    features: [
      "Estilo torpedo uruguayo",
      "Cuerpo negro mate",
      "Guarda cincelada plateada",
      "Acabado prolijo",
      "Bombilla no incluida",
    ],
  },
  {
    id: 25,
    nombre: "Torpedo Uruguayo — Apliques en Bronce",
    descripcion: "Torpedo uruguayo de calabaza negra con guarda cincelada plateada y apliques en bronce dorado. La combinación de plata y bronce le da un carácter único. Bombilla no incluida.",
    precio: 54000,
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
    id: 39,
    nombre: "Torpedo al Lacre — Borravino",
    descripcion: "Torpedo de calabaza en color borravino, con virola plateada cincelada con motivos florales. Una pieza con color y carácter propio. Bombilla no incluida.",
    precio: 48000,
    stock: 0,
    imagen: "img/torpedo_borravino.jpg",
    categoria: "Mates",
    features: [
      "Forma torpedo tradicional",
      "Calabaza curada color borravino",
      "Virola plateada cincelada, motivos florales",
      "Base con patas",
      "Bombilla no incluida",
    ],
  },
  {
    id: 40,
    nombre: "Torpedo al Lacre — Negro",
    descripcion: "Torpedo de calabaza en negro mate, con virola plateada cincelada con motivos florales. Elegante y con mucho carácter. Bombilla no incluida.",
    precio: 48000,
    descuento: 3000,               // ← promo de lanzamiento
    stock: 2,
    imagen: "img/torpedo_negro.jpg",
    categoria: "Mates",
    features: [
      "Forma torpedo tradicional",
      "Calabaza curada en negro mate",
      "Virola plateada cincelada, motivos florales",
      "Base con patas",
      "Bombilla no incluida",
    ],
  },
  {
    id: 41,
    nombre: "Torpedo Criollo — Base Canasta Premium, Cincelado al Lacre",
    descripcion: "Torpedo criollo con base canasta premium y virola cincelada al lacre. Terminación de alta gama, con guarda plateada trabajada a mano. Bombilla no incluida.",
    precio: 50000,
    descuento: 2000,               // ← promo de lanzamiento
    stock: 3,
    imagen: "img/torpedo_base_canasta.jpg",
    categoria: "Mates",
    features: [
      "Forma torpedo tradicional",
      "Base canasta premium",
      "Virola cincelada al lacre",
      "Guarda plateada trabajada a mano",
      "Bombilla no incluida",
    ],
  },
  {
    id: 44,
    nombre: "Torpedo Cuero Crudo — Cincelado al Lacre",
    descripcion: "Torpedo de calabaza con cuero crudo natural y virola plateada cincelada al lacre, con motivos florales. Costura en tiento. Bombilla no incluida.",
    precio: 60000,
    descuento: 5000,               // ← promo de lanzamiento
    stock: 2,
    imagen: "img/torpedo_cuero_crudo_lacre.jpg",
    categoria: "Mates",
    features: [
      "Forma torpedo tradicional",
      "Cuero crudo natural, sin teñir",
      "Virola plateada cincelada al lacre, motivos florales",
      "Costura en tiento",
      "Bombilla no incluida",
    ],
  },
  {
    id: 45,
    nombre: "Torpedo Avejentado — Sol de Mayo, Cincelado al Lacre",
    descripcion: "Torpedo de calabaza avejentada con virola plateada cincelada al lacre y aplique de Sol de Mayo en bronce. Una pieza con identidad bien argentina. Bombilla no incluida.",
    precio: 60000,
    stock: 0,
    llega: "2026-10-26",          // ← fecha en que entra (se muestra en Próximamente)
    imagen: "img/torpedo_avejentado_sol_de_mayo.jpg",
    categoria: "Mates",
    features: [
      "Forma torpedo tradicional",
      "Calabaza avejentada",
      "Virola plateada cincelada al lacre",
      "Aplique de Sol de Mayo en bronce",
      "Bombilla no incluida",
    ],
  },
  {
    id: 15,
    nombre: "Mate Ranchero",
    descripcion: "Mate ranchero de madera con terminación bicolor natural. Cada pieza tiene su propia veta y manchas únicas — ningún ranchero es igual al otro. Bombilla no incluida.",
    precio: 40000,
    stock: 0,
    llega: "2026-10-26",          // ← fecha en que entra (se muestra en Próximamente)
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
      "Calabaza curada",
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
    stock: 0,
    imagen: "img/mate_galleta_simple.jpg",
    categoria: "Mates",
    features: [
      "Forma galleta ergonómica",
      "Calabaza curada",
      "Terminación simple y resistente",
      "Ideal para uso diario",
      "Bombilla no incluida",
    ],
  },
  {
    id: 49,
    nombre: "Regalo para Mamá",
    etiqueta: "Regalo",           // ← lo que dice la etiqueta de la foto (en vez de "Mates")
    descripcion: "El regalo perfecto para tu mamá: mate de algarrobo con su bombilla, una canastita tejida, vela, bombones y una tarjeta escrita. Llega armado en su caja, listo para dar.",
    precio: 50000,
    stock: 4,
    mostrarStock: true,           // ← este sí muestra "Quedan 4"
    imagen: "img/box_dia_de_la_madre.jpg",
    categoria: "Mates",
    // Opciones para elegir antes de agregar (cambiá nombre e imagen de cada grabado)
    opciones: {
      titulo: "Elegí el grabado del mate",
      lista: [
        { nombre: "Esa es mi mamá", detalle: "“Fuerte, hermosa, valiente y única · Esa es mi mamá ♡”", imagen: "img/grabado_esa_es_mi_mama.jpg" },
        { nombre: "Te amo ma", detalle: "“Que tus mates sean eternos · Te amo ma ♡”", imagen: "img/grabado_te_amo_ma.jpg" },
      ],
    },
    features: [
      "Mate de algarrobo con bombilla",
      "Canastita tejida con flores",
      "Vela",
      "Bombones Bon o Bon",
      "Tarjeta con dedicatoria",
      "Caja de regalo mates.rico",
    ],
  },
  // ─── YERBAS ──────────────────────────────────────────
  {
    id: 22,
    nombre: "Yerba Verdecita 1kg",
    descripcion: "Yerba Verdecita elaborada despalada, padrón uruguayo. Selección especial de Brasil y Argentina — suave al paladar, cebadas largas y aroma fresco.",
    precio: 8500,
    stock: 0,
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
    precio: 11500,
    stock: 0,
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
    precio: 23000,
    stock: 2,
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
    stock: 0,
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
    stock: 0,
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
    stock: 0,
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

  // ─── BOMBILLAS ───────────────────────────────────────
  {
    id: 26,
    nombre: "Bombilla Pico de Loro — Acero Inoxidable",
    descripcion: "Bombilla pico de loro de 16cm en acero inoxidable. El filtro que usan los materos de verdad — no tapa, no se dobla, dura años. Compatible con cualquier mate.",
    precio: 5000,
    stock: 0,
    imagen: "img/bombilla_acero.jpg",
    categoria: "Bombillas",
    features: [
      "Pico de loro 16cm",
      "Acero inoxidable",
      "Filtro resistente y duradero",
      "Fácil de limpiar",
      "Compatible con cualquier mate",
    ],
  },
  {
    id: 35,
    nombre: "Bombillón Obrero — 100% Alpaca",
    descripcion: "Bombillón de 16cm, 100% alpaca, con cuerpo trenzado y filtro cuchara. Un clásico robusto para el mate de todos los días.",
    precio: 32000,
    stock: 0,
    llega: "2026-10-26",          // ← fecha en que entra (se muestra en Próximamente)
    imagen: "img/bombillon_obrero.jpg",
    categoria: "Bombillas",
    features: [
      "16cm de largo",
      "100% alpaca",
      "Cuerpo trenzado",
      "Filtro tipo cuchara",
      "Compatible con cualquier mate",
    ],
  },
  {
    id: 36,
    nombre: "Bombillón Oro — Alpaca y Bronce",
    descripcion: "Bombillón de 16cm, combinación de alpaca y bronce, con cuerpo trenzado y filtro cuchara. Un brillo distinto para destacar en la ronda de mate.",
    precio: 32000,
    stock: 0,
    imagen: "img/bombillon_oro.jpg",
    categoria: "Bombillas",
    features: [
      "16cm de largo",
      "Alpaca y bronce",
      "Cuerpo trenzado",
      "Filtro tipo cuchara",
      "Compatible con cualquier mate",
    ],
  },

  {
    id: 42,
    nombre: "Bombillón Pampa — Alpaca y Bronce",
    descripcion: "Bombillón de alpaca y bronce, con cuerpo trenzado y filtro cuchara. Terminación combinada que le da un brillo distinto a la ronda de mate.",
    precio: 32000,
    stock: 0,
    imagen: "img/bombillon_pampa.jpg",
    categoria: "Bombillas",
    features: [
      "Alpaca y bronce",
      "Cuerpo trenzado",
      "Filtro tipo cuchara",
      "Terminación combinada",
      "Compatible con cualquier mate",
    ],
  },

  {
    id: 48,
    nombre: "Bombillón Pico de Loro — Alpaca y Bronce",
    descripcion: "Bombillón pico de loro en alpaca y bronce, con cuerpo trenzado y filtro cuchara. Terminación combinada que le suma un brillo distinto a cada cebada.",
    precio: 32000,
    stock: 0,
    imagen: "img/bombillon_pico_de_loro.jpg",
    categoria: "Bombillas",
    features: [
      "Pico de loro",
      "Alpaca y bronce",
      "Cuerpo trenzado",
      "Filtro tipo cuchara",
      "Compatible con cualquier mate",
    ],
  },

  // ─── ACCESORIOS ──────────────────────────────────────
  {
    id: 47,
    nombre: "Canasta Cuero Crudo",
    descripcion: "Canasta de mano en cuero ancho de Laguna, forrada en gamuza por dentro. Asas trenzadas a mano, resistentes y con mucho estilo. Ideal para llevar todo el set de mate junto — yerba, bombilla y termo — con onda y prolijidad.",
    precio: 70000,
    stock: 0,
    llega: "2026-10-26",          // ← fecha en que entra (se muestra en Próximamente)
    imagen: "img/canasta_cuero_crudo.jpg",
    categoria: "Accesorios",
    features: [
      "Cuero ancho de Laguna",
      "Forrada en gamuza por dentro",
      "Asas trenzadas a mano",
      "Ideal para llevar el set de mate completo",
      "Pieza única, hecha a mano",
    ],
  },
  {
    id: 20,
    nombre: "Termo 1L Acero Inoxidable",
    descripcion: "Termo Marwal de 1 litro en acero inoxidable. Mantiene el agua caliente por horas. El compañero ideal para matear donde vayas.",
    precio: 25000,
    stock: 0,
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
    stock: 2,
    imagen: "img/kit_matera_negra.jpg",
    categoria: "Accesorios",
    features: [
      "Porta mate de cuero negro",
      "Premium",
      "Costuras a mano",
      "Broches metálicos",
      "Ideal para llevar a todos lados",
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
  // ─── SOLO PARA PROBAR EL PAGO CON TARJETA (se ve únicamente con ?tarjeta) ── BORRAR después de la prueba
  {
    id: 999,
    nombre: "Producto de prueba",
    descripcion: "Solo para probar el pago con tarjeta. No se envía nada.",
    precio: 100,
    stock: 5,
    soloPrueba: true,
    imagen: "img/logo.png",
    categoria: "Accesorios",
    features: ["Prueba de pago"],
  },
];
  

// ═══════════════════════════════════════════════════════
// 💐 DÍA DE LA MADRE — producto destacado
//    Se muestra arriba de todo y primero en el catálogo.
//    "visibleHasta": desde ese día se oculta solo.
// ═══════════════════════════════════════════════════════
const destacado = {
  id: 100,
  nombre: "Box Día de la Madre",
  bajada: "Un regalo con todo el amor, listo para dar.",
  descripcion: "Una caja pensada para mamá: mate de algarrobo con su bombilla, una canastita tejida, vela, bombones y una tarjeta escrita. Llega armada, lista para regalar.",
  precio: 50000,
  stock: 20,                                   // ← cuántas cajas quedan
  imagen: "img/box_dia_de_la_madre.jpg",
  categoria: "Día de la Madre",
  features: [
    "Mate de algarrobo con bombilla",
    "Canastita tejida con flores",
    "Vela",
    "Bombones Bon o Bon",
    "Tarjeta con dedicatoria",
    "Caja de regalo mates.rico",
  ],
  fechaLimite: "En la zona lo entregamos hasta el mismo domingo 18",
  visibleHasta: "2026-10-19",
};

// ═══════════════════════════════════════════════════════
// 🏷️ PROMO DE LANZAMIENTO
//    Los productos con "descuento" bajan ese monto hasta esta fecha.
//    Después vuelven solos al precio normal.
// ═══════════════════════════════════════════════════════
const PROMO = {
  titulo: "Ofertas limitadas",
  hasta: "2026-10-23T20:01:00-03:00",
};
const promoActiva = () => Date.now() < new Date(PROMO.hasta).getTime();
const tieneDescuento = (p) => !!(p && p.descuento && promoActiva() && p.stock > 0);
const precioDe = (p) => tieneDescuento(p) ? p.precio - p.descuento : p.precio;
const porcentajeDe = (p) => Math.round((p.descuento / p.precio) * 100);
// ═══════════════════════════════════════════════════════
// 💳 TARJETA EN CUOTAS (Mercado Pago)
// ═══════════════════════════════════════════════════════
// TARJETA_ACTIVA = false → nadie lo ve, salvo entrando con ?tarjeta al final del link (para probar).
// TARJETA_ACTIVA = true  → todos ven el precio con tarjeta, las cuotas y el botón de Mercado Pago.
const TARJETA_ACTIVA = false;
const PAGOS_API = "https://mates-rico-pagos.mateoricci05.workers.dev";
const FACTOR_TARJETA = 0.78;   // precio con tarjeta = precio real / 0,78 (tiene que coincidir con pagos/src/index.js)
const CUOTAS = 3;
const OFF_TRANSFERENCIA = 22;  // % que se muestra como descuento por transferencia
const modoTarjeta = (() => {
  try {
    if (new URLSearchParams(location.search).has("tarjeta")) sessionStorage.setItem("mrTarjeta", "1");
    return TARJETA_ACTIVA || sessionStorage.getItem("mrTarjeta") === "1";
  } catch { return TARJETA_ACTIVA; }
})();
const precioLista = (n) => Math.ceil(n / FACTOR_TARJETA / 100) * 100;

const precioHtml = (p) => {
  if (!modoTarjeta) return tieneDescuento(p)
    ? `<s class="precio-antes">${fmt(p.precio)}</s>${fmt(precioDe(p))}`
    : fmt(p.precio);
  const real = precioDe(p), lista = precioLista(real);
  return `<s class="pl-tachado">${fmt(lista)}</s>`
    + `<span class="pl-transfer"><span class="pl-t-row"><b>${fmt(real)}</b><i>${OFF_TRANSFERENCIA}% OFF</i></span><span class="pl-t-txt">por transferencia</span></span>`
    + `<span class="pl-cuotas">o ${CUOTAS} cuotas sin interés de ${fmt(Math.round(lista / CUOTAS))}</span>`;
};

// ═══════════════════════════════════════════════════════
// ⚙️ CONFIG
// ═══════════════════════════════════════════════════════
const WHATSAPP_NUMBER = "5493543650854";

// Datos para transferir (se muestran con botón "Copiar")
const PAGO = {
  alias: "mates.rico",
  titular: "Mateo Ricci Vázquez",
};

// Costo de envío fijo por zona. 0 = gratis.
const ZONAS_ENVIO = {
  "Río Ceballos": 0,
  "Salsipuedes": 3000,
  "Unquillo": 3000,
  "Villa Allende": 5000,
};
// Resto del país (Correo Argentino): gratis desde este monto, si no se cotiza aparte.
const ENVIO_GRATIS_MINIMO = 100000;

// ═══════════════════════════════════════════════════════
// 🗃️ ESTADO
// ═══════════════════════════════════════════════════════
const IMG_FALLBACK = "data:image/svg+xml," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='#eaf3e8'/>" +
  "<text x='200' y='210' text-anchor='middle' font-family='Georgia,serif' font-style='italic' font-size='34' fill='#3a6b35'>mates.rico</text></svg>");

let carrito = [];
let categoriaActual = "Todos";
let zonaElegida = "";              // una de ZONAS_ENVIO, "otra" o ""
let pagoElegido = "Transferencia"; // "Transferencia" | "Efectivo" (efectivo solo en la zona)
let tipoEntregaElegido = "domicilio";

// ═══════════════════════════════════════════════════════
// ✨ SPLASH SCREEN
// ═══════════════════════════════════════════════════════
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;
  const cerrar = () => { splash.classList.add("oculto"); setTimeout(() => splash.remove(), 700); };
  let visto = false;
  try { visto = sessionStorage.getItem("splashVisto") === "1"; sessionStorage.setItem("splashVisto", "1"); } catch {}
  if (visto) { splash.remove(); return; }
  const timer = setTimeout(cerrar, 900);
  splash.addEventListener("click", () => { clearTimeout(timer); cerrar(); });
}

document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  prepararDestacado();
  recuperarPedido();
  renderizarDestacado();
  renderizarProductos();
  initPromo();
  initNavbar();
  initFiltros();
  initModalProducto();
  initCarrito();
  initTarjeta();
  initCopiar();
  actualizarBadge();
  document.getElementById("barra-pedido")?.addEventListener("click", abrirCarritoLateral);
  initReveal();
  feather.replace();
  procesarVueltaMP();
});

// ═══════════════════════════════════════════════════════
// 💐 DESTACADO
// ═══════════════════════════════════════════════════════
function prepararDestacado() {
  const hoy = new Date().toLocaleDateString("sv-SE"); // AAAA-MM-DD en hora local
  const activo = !destacado.visibleHasta || hoy < destacado.visibleHasta;
  if (activo) productos.unshift({ ...destacado, esDestacado: true });
  // Todo lo marcado con data-solo-madre se oculta cuando termina la fecha
  document.querySelectorAll("[data-solo-madre]").forEach(el => el.style.display = activo ? "" : "none");
}

function renderizarDestacado() {
  const sec = document.getElementById("dia-de-la-madre");
  const d = productos.find(p => p.esDestacado);
  if (!sec || !d) return;
  const agotado = d.stock === 0;
  sec.innerHTML = `
    <div class="container">
      <div class="madre-card">
        <div class="madre-foto">
          <img src="${d.imagen}" alt="${d.nombre}" onerror="this.onerror=null;this.src=IMG_FALLBACK"/>
        </div>
        <div class="madre-info">
          <p class="section-tag">Domingo 18 de octubre</p>
          <h2 class="madre-titulo">Box Día de la <em>Madre</em></h2>
          <p class="madre-bajada">${d.bajada}</p>
          <ul class="madre-incluye">
            ${d.features.map(f => `<li><span class="mp-feature-dot"></span>${f}</li>`).join("")}
          </ul>
          <div class="madre-compra">
            <span class="madre-precio">${fmt(d.precio)}</span>
            <button class="btn btn-primary" id="btn-madre" ${agotado ? "disabled" : ""}>
              ${agotado ? "Agotado" : "Lo quiero"}
            </button>
          </div>
          ${d.fechaLimite && !agotado ? `<p class="madre-fecha">${d.fechaLimite}</p>` : ""}
        </div>
      </div>
    </div>`;
  document.getElementById("btn-madre")?.addEventListener("click", () => agregarAlCarrito(d.id, { abrirCarrito: true }));
}

// Cartel de arriba y cuenta regresiva de la promo
function initPromo() {
  const banner = document.getElementById("promo-banner");
  const hayPromo = promoActiva() && productos.some(tieneDescuento);
  if (banner) banner.hidden = !hayPromo;
  if (!hayPromo) return;
  const tick = () => {
    const falta = new Date(PROMO.hasta).getTime() - Date.now();
    if (falta <= 0) { location.reload(); return; }
    const h = Math.floor(falta / 3600000), m = Math.floor(falta / 60000) % 60, s = Math.floor(falta / 1000) % 60;
    const txt = `quedan ${h}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
    document.querySelectorAll("[data-cuenta-promo]").forEach(el => el.textContent = txt);
  };
  tick(); setInterval(tick, 1000);
  document.getElementById("promo-ver")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  });
}

// ═══════════════════════════════════════════════════════
// 🧱 RENDER PRODUCTOS
// ═══════════════════════════════════════════════════════
function renderizarProductos(categoria = "Todos") {
  const grid = document.getElementById("productos-grid");
  if (!grid) return;
  grid.innerHTML = "";

  // Primero lo que hay. Lo que no tiene stock aparece al final como "Próximamente".
  const visibles = productos.filter(p => !p.soloPrueba || modoTarjeta);
  const deCategoria = categoria === "Todos" ? visibles : visibles.filter(p => p.categoria === categoria);
  const disponibles = deCategoria.filter(p => p.stock > 0)
    .sort((a, b) => (!!b.soloPrueba - !!a.soloPrueba) || (tieneDescuento(b) - tieneDescuento(a)));
  const proximamente = deCategoria.filter(p => p.stock === 0 && !p.esDestacado)
    .sort((a, b) => !!llegaTexto(b) - !!llegaTexto(a));

  if (disponibles.length === 0 && proximamente.length === 0) {
    grid.innerHTML = `<div class="grid-vacio">Por ahora no hay productos en esta categoría.</div>`;
    return;
  }

  disponibles.forEach((p, i) => grid.appendChild(crearCard(p, i)));

  if (proximamente.length) {
    const sep = document.createElement("div");
    sep.className = "grid-proximamente";
    sep.innerHTML = `
      <p class="section-tag">Próximamente</p>
      <h3>Vuelven pronto</h3>
      <p>Tocá <strong>Avisame</strong> y te escribimos apenas los tengamos.</p>`;
    grid.appendChild(sep);
    proximamente.forEach((p, i) => grid.appendChild(crearCard(p, i)));
  }

  initReveal();
  feather.replace();
}

function crearCard(p, i) {
  const pronto = p.stock === 0;
  const card = document.createElement("div");
  card.className = `producto-card reveal${pronto ? " pronto" : ""}`;
  card.style.transitionDelay = `${Math.min(i, 6) * 50}ms`;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver ${p.nombre}`);
  card.tabIndex = 0;

  let badgeStock = "";
  if (pronto) badgeStock = llegaTexto(p)
    ? `<span class="badge-stock badge-llega">Llega el ${llegaTexto(p)}</span>`
    : `<span class="badge-stock badge-pronto">Próximamente</span>`;
  else if (tieneDescuento(p)) badgeStock = `<span class="badge-stock badge-promo">${porcentajeDe(p)}% OFF</span>`;
  else if (p.mostrarStock) badgeStock = `<span class="badge-stock">${p.stock === 1 ? "Última unidad" : `Quedan ${p.stock}`}</span>`;

  const enPedido = carrito.find(x => x.id === p.id);
  card.innerHTML = `
    <div class="producto-img-wrap">
      <img src="${miniatura(p.imagen)}" alt="${p.nombre}" ${i < 4 && !pronto ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" data-grande="${p.imagen}" onload="this.classList.add('cargada')" onerror="if(this.dataset.grande&&this.src.indexOf('/mini/')>-1){this.src=this.dataset.grande}else{this.onerror=null;this.src=IMG_FALLBACK}"/>
      <span class="producto-badge${p.esDestacado || p.etiqueta ? " producto-badge--madre" : ""}">${p.etiqueta || p.categoria}</span>
      ${badgeStock}
    </div>
    <div class="producto-info">
      <h3 class="producto-nombre">${p.nombre}</h3>
      <p class="producto-desc">${recortar(p.descripcion, 85)}</p>
      <div class="producto-footer">
        <span class="producto-precio">${precioHtml(p)}</span>
        ${pronto
          ? `<a class="btn-comprar btn-avisame" href="${linkAvisame(p)}" target="_blank" rel="noopener">Avisame</a>`
          : p.opciones
            ? `<button class="btn-comprar btn-elegir">${p.opciones.titulo.includes("grabado") ? "Elegir grabado" : "Elegir"}</button>`
            : `<button class="btn-comprar${enPedido ? " en-pedido" : ""}" data-id="${p.id}">${enPedido ? "✓ Agregado" : "Agregar"}</button>`}
      </div>
    </div>`;

  card.addEventListener("click", (e) => {
    if (!e.target.closest(".btn-comprar")) abrirModalProducto(p.id);
  });
  card.addEventListener("keydown", (e) => { if (e.key === "Enter") abrirModalProducto(p.id); });
  card.querySelector("button.btn-comprar")?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (p.opciones) { abrirModalProducto(p.id); return; }
    const antes = cantidadDe(p.id);
    agregarAlCarrito(p.id);
    if (cantidadDe(p.id) > antes) animarAgregado(card.querySelector(".producto-img-wrap img"), e.currentTarget);
  });
  return card;
}

// img/x.jpg → img/mini/x.jpg (versión liviana para el catálogo)
function miniatura(src) {
  return src.startsWith("img/") ? "img/mini/" + src.slice(4) : src;
}

// ✨ Animación al agregar: la foto vuela hasta la barra "Tu pedido"
function animarAgregado(img, boton) {
  boton?.classList.remove("pop"); void boton?.offsetWidth; boton?.classList.add("pop");
  const barra = document.getElementById("barra-pedido");
  const cant = document.getElementById("barra-cant");
  cant?.classList.remove("flash"); void cant?.offsetWidth; cant?.classList.add("flash");
  if (!img || !barra || barra.hidden) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const desde = img.getBoundingClientRect();
  // posición final de la barra (sin la animación de entrada)
  const r = barra.getBoundingClientRect();
  const hasta = { left: barra.offsetLeft || r.left, top: barra.offsetTop || r.top, height: r.height };
  const lado = Math.min(desde.width, desde.height, 120);
  const vuela = document.createElement("img");
  vuela.src = img.currentSrc || img.src;
  vuela.className = "vuela-al-pedido";
  Object.assign(vuela.style, {
    left: `${desde.left + desde.width / 2 - lado / 2}px`,
    top: `${desde.top + desde.height / 2 - lado / 2}px`,
    width: `${lado}px`, height: `${lado}px`,
  });
  document.body.appendChild(vuela);
  const dx = hasta.left + 34 - (desde.left + desde.width / 2);
  const dy = hasta.top + hasta.height / 2 - (desde.top + desde.height / 2);
  const anim = vuela.animate([
    { transform: "translate(0,0) scale(1)", opacity: 1 },
    { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 60}px) scale(0.55)`, opacity: 1, offset: 0.55 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.18)`, opacity: 0.2 },
  ], { duration: 650, easing: "cubic-bezier(.5,0,.3,1)" });
  anim.onfinish = () => {
    vuela.remove();
    barra.classList.remove("bump"); void barra.offsetWidth; barra.classList.add("bump");
  };
}

// "Llega el 26/10" mientras la fecha no pasó
function llegaTexto(p) {
  if (!p.llega || p.stock > 0) return "";
  const f = new Date(p.llega + "T23:59:59-03:00");
  if (Date.now() > f.getTime()) return "";
  const [a, m, d] = p.llega.split("-");
  return `${+d}/${+m}`;
}

function linkAvisame(p) {
  const txt = llegaTexto(p)
    ? `¡Hola! Vi en la web que el ${p.nombre} llega el ${llegaTexto(p)}. ¿Me avisás apenas lo tengas? ¡Gracias!`
    : `¡Hola! Vi en la web el ${p.nombre} y figura como "Próximamente". ¿Me avisás cuando vuelva? ¡Gracias!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
}

// Actualiza los botones "Agregar" / "✓ Agregado" sin redibujar el catálogo
function marcarBotonesEnPedido() {
  document.querySelectorAll("button.btn-comprar[data-id]").forEach(btn => {
    const en = cantidadDe(+btn.dataset.id) > 0;
    btn.classList.toggle("en-pedido", en);
    btn.textContent = en ? "✓ Agregado" : "Agregar";
  });
}

function recortar(txt, n) {
  return txt.length > n ? txt.substring(0, n).replace(/\s+\S*$/, "") + "…" : txt;
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
  const stockBajo = p.mostrarStock && p.stock > 0;
  const stockLabel = agotado
    ? "Próximamente"
    : stockBajo
      ? `<strong class="bajo">${p.stock === 1 ? "¡Última unidad!" : `Quedan ${p.stock}`}</strong>`
      : `<strong>Disponible</strong>`;

  inner.innerHTML = `
    <div class="mp-img">
      <img src="${p.imagen}" alt="${p.nombre}" onerror="this.onerror=null;this.src=IMG_FALLBACK"/>
    </div>
    <div class="mp-info">
      <p class="mp-cat">${p.etiqueta || p.categoria}</p>
      <h2 class="mp-nombre">${p.nombre}</h2>
      <p class="mp-precio">${precioHtml(p)}</p>
      ${tieneDescuento(p) ? `<p class="mp-promo">${PROMO.titulo} · ${porcentajeDe(p)}% OFF · <span data-cuenta-promo></span></p>` : ""}
      ${agotado ? `<p class="mp-pronto">${llegaTexto(p) ? `Llega el ${llegaTexto(p)} · avisame y te escribimos` : "Próximamente · vuelve pronto"}</p>` : ""}
      <p class="mp-desc">${p.descripcion}</p>
      ${p.opciones && !agotado ? `
        <div class="mp-opciones" id="mp-opciones">
          <p class="mp-opciones-tit">${p.opciones.titulo}</p>
          <div class="mp-opciones-lista">
            ${p.opciones.lista.map((o, i) => `
              <button type="button" class="mp-opcion" data-i="${i}" aria-pressed="false">
                <img src="${o.imagen}" alt="${o.nombre}" loading="lazy" onerror="this.onerror=null;this.src=IMG_FALLBACK"/>
                <span>${o.nombre}</span>
                ${o.detalle ? `<small>${o.detalle}</small>` : ""}
              </button>`).join("")}
          </div>
        </div>` : ""}
      <div class="mp-features">
        ${p.features.map(f => `
          <div class="mp-feature"><div class="mp-feature-dot"></div><span>${f}</span></div>`).join("")}
      </div>
      ${agotado ? "" : `<p class="mp-stock ${stockBajo ? "bajo" : ""}">Stock: ${stockLabel}</p>`}
      <div class="mp-cta">
        <span class="mp-cta-precio">${fmt(precioDe(p))}</span>
        ${agotado
          ? `<a class="btn btn-outline" href="${linkAvisame(p)}" target="_blank" rel="noopener"><i data-feather="bell"></i> Avisame cuando vuelva</a>`
          : `<button class="btn btn-primary" id="mp-btn-agregar">Agregar al pedido</button>`}
      </div>
    </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  feather.replace();
  // Elegir opción (grabado): cambia la foto grande y habilita el botón
  let opcionElegida = null;
  const btnAgregar = document.getElementById("mp-btn-agregar");
  if (p.opciones && btnAgregar) btnAgregar.textContent = "Elegí el grabado";
  inner.querySelectorAll(".mp-opcion").forEach(b => b.addEventListener("click", () => {
    const o = p.opciones.lista[+b.dataset.i];
    opcionElegida = o.nombre;
    inner.querySelectorAll(".mp-opcion").forEach(x => { x.classList.toggle("selected", x === b); x.setAttribute("aria-pressed", x === b); });
    const img = inner.querySelector(".mp-img img");
    if (img) img.src = o.imagen;
    document.getElementById("mp-opciones")?.classList.remove("falta");
    if (btnAgregar) btnAgregar.textContent = "Agregar al pedido";
  }));
  btnAgregar?.addEventListener("click", () => {
    if (p.opciones && !opcionElegida) {
      const box = document.getElementById("mp-opciones");
      box?.classList.add("falta");
      box?.scrollIntoView({ behavior: "smooth", block: "center" });
      mostrarToast("Elegí cuál grabado querés");
      return;
    }
    cerrarModalProducto();
    agregarAlCarrito(id, { abrirCarrito: true, opcion: opcionElegida });
  });
}

function cerrarModalProducto() {
  document.getElementById("modal-producto-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModalProducto() {
  const overlay = document.getElementById("modal-producto-overlay");
  document.getElementById("modal-producto-close")?.addEventListener("click", cerrarModalProducto);
  overlay?.addEventListener("click", (e) => { if (e.target === overlay) cerrarModalProducto(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { cerrarModalProducto(); cerrarCarrito(); } });
}

// ═══════════════════════════════════════════════════════
// 🛒 CARRITO + COMPRA (todo en un solo panel)
// ═══════════════════════════════════════════════════════
const claveDe = (id, opcion) => `${id}|${opcion || ""}`;
const cantidadDe = (id) => carrito.filter(i => i.id === id).reduce((a, i) => a + i.cantidad, 0);
const avisoSinMas = (p) => mostrarToast(p.mostrarStock ? `Quedan solo ${p.stock}` : "No tenemos más unidades de este producto");

function agregarAlCarrito(id, { abrirCarrito = false, opcion = null } = {}) {
  const p = productos.find(x => x.id === id);
  if (!p || p.stock === 0) return;
  if (cantidadDe(id) >= p.stock) { avisoSinMas(p); return; }
  const clave = claveDe(id, opcion);
  const existente = carrito.find(i => i.clave === clave);
  if (existente) {
    existente.cantidad += 1;
  } else {
    const img = opcion ? (p.opciones?.lista.find(o => o.nombre === opcion)?.imagen || p.imagen) : p.imagen;
    carrito.push({ clave, id: p.id, opcion, nombre: p.nombre, precio: precioDe(p), precioNormal: p.precio, imagen: img, cantidad: 1 });
  }
  actualizarBadge();
  renderizarCarrito();
  if (abrirCarrito) abrirCarritoLateral();
  // Sin aviso: la barra "Tu pedido" aparece / se mueve sola
}

function esCelu() { return window.matchMedia("(max-width: 640px)").matches; }

function abrirCarritoLateral() {
  document.getElementById("carrito-exito").hidden = true;
  document.getElementById("carrito-items").hidden = false;
  renderizarCarrito();
  document.getElementById("modal-carrito-overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  document.getElementById("modal-carrito-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function cambiarCantidad(clave, delta) {
  const item = carrito.find(i => i.clave === clave);
  if (!item) return;
  const p = productos.find(x => x.id === item.id);
  const nuevoVal = item.cantidad + delta;
  if (nuevoVal <= 0) { eliminarDelCarrito(clave); return; }
  if (p && delta > 0 && cantidadDe(item.id) + delta > p.stock) { avisoSinMas(p); return; }
  item.cantidad = nuevoVal;
  actualizarBadge();
  renderizarCarrito();
}

function eliminarDelCarrito(clave) {
  carrito = carrito.filter(i => i.clave !== clave);
  actualizarBadge();
  renderizarCarrito();
}

function calcularTotal() {
  return carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
}

function actualizarBadge() {
  const cant = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  const badge = document.getElementById("carrito-badge");
  if (badge) {
    badge.textContent = cant;
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }
  // Barra fija de abajo (celu): aparece apenas hay algo en el pedido
  const barra = document.getElementById("barra-pedido");
  if (barra) {
    barra.hidden = cant === 0;
    document.body.classList.toggle("con-barra", cant > 0);
    const txt = document.getElementById("barra-cant");
    if (txt) txt.textContent = `${cant} ${cant === 1 ? "producto" : "productos"} · ${fmt(calcularTotal())}`;
  }
  marcarBotonesEnPedido();
  guardarPedido();
}

// El pedido queda guardado si la persona cierra la web y vuelve
function guardarPedido() {
  try { localStorage.setItem("pedidoMatesRico", JSON.stringify(carrito)); } catch {}
}
function recuperarPedido() {
  try {
    const guardado = JSON.parse(localStorage.getItem("pedidoMatesRico") || "[]");
    carrito = guardado
      .map(i => {
        const p = productos.find(x => x.id === i.id);
        if (!p || p.stock === 0) return null;
        if (p.opciones && !p.opciones.lista.some(o => o.nombre === i.opcion)) return null;
        return { ...i, clave: claveDe(i.id, i.opcion), nombre: p.nombre, precio: precioDe(p), precioNormal: p.precio, cantidad: Math.min(i.cantidad, p.stock) };
      })
      .filter(Boolean);
  } catch { carrito = []; }
}

// número = costo fijo · 0 = gratis · null = a cotizar · undefined = falta elegir zona
function calcularCostoEnvio() {
  if (!zonaElegida) return undefined;
  if (zonaElegida in ZONAS_ENVIO) return ZONAS_ENVIO[zonaElegida];
  return calcularTotal() >= ENVIO_GRATIS_MINIMO ? 0 : null;
}

function renderizarCarrito() {
  const items = document.getElementById("carrito-items");
  const checkout = document.getElementById("checkout");
  const footer = document.getElementById("modal-footer");
  if (!items) return;

  if (carrito.length === 0) {
    items.innerHTML = `
      <div class="carrito-vacio">
        <i data-feather="shopping-bag"></i>
        <p>Tu pedido está vacío.<br/>¡Agregá algo!</p>
      </div>`;
    if (checkout) checkout.hidden = true;
    if (footer) footer.style.display = "none";
    feather.replace();
    return;
  }

  if (checkout) checkout.hidden = false;
  if (footer) footer.style.display = "flex";
  items.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img class="carrito-item-img" src="${item.imagen}" alt="${item.nombre}" onerror="this.onerror=null;this.src=IMG_FALLBACK"/>
      <div class="carrito-item-info">
        <div class="carrito-item-nombre">${item.nombre}</div>
        ${item.opcion ? `<div class="carrito-item-opcion">${item.opcion}</div>` : ""}
        <div class="carrito-item-precio">${item.precioNormal && item.precioNormal > item.precio ? `<s class="precio-antes">${fmt(item.precioNormal)}</s>` : ""}${fmt(item.precio)}</div>
        <div class="carrito-item-cantidad">
          <button class="qty-btn" data-clave="${item.clave}" data-delta="-1" aria-label="Uno menos">−</button>
          <span class="qty-valor">${item.cantidad}</span>
          <button class="qty-btn" data-clave="${item.clave}" data-delta="1" aria-label="Uno más">+</button>
        </div>
      </div>
      <button class="carrito-item-eliminar" data-clave="${item.clave}" aria-label="Eliminar"><i data-feather="trash-2"></i></button>
    </div>`).join("");

  items.querySelectorAll(".qty-btn").forEach(btn =>
    btn.addEventListener("click", () => cambiarCantidad(btn.dataset.clave, +btn.dataset.delta)));
  items.querySelectorAll(".carrito-item-eliminar").forEach(btn =>
    btn.addEventListener("click", () => eliminarDelCarrito(btn.dataset.clave)));

  actualizarResumen();
  feather.replace();
}

function actualizarResumen() {
  const subtotal = calcularTotal();
  const envio = calcularCostoEnvio();
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  set("res-subtotal", fmt(subtotal));
  if (envio === undefined) set("res-envio", `<span class="res-pendiente">Elegí tu zona</span>`);
  else if (envio === null) set("res-envio", `<span class="res-pendiente">A cotizar</span>`);
  else set("res-envio", envio === 0 ? "Gratis" : fmt(envio));
  const esMP = pagoElegido === "Mercado Pago";
  const totalTarj = totalTarjeta();
  set("res-total", fmt(esMP ? totalTarj : subtotal + (envio || 0)));
  if (esMP) {  // con tarjeta, productos y envío también a precio de tarjeta (que la suma cierre)
    const envioTarj = envio > 0 ? precioLista(envio) : 0;
    set("res-subtotal", fmt(totalTarj - envioTarj));
    if (envio > 0) set("res-envio", fmt(envioTarj));
  }
  const alt = document.getElementById("res-alt");
  if (alt) {
    alt.hidden = !modoTarjeta || envio === null || envio === undefined || !carrito.length;
    alt.textContent = esMP
      ? `${CUOTAS} cuotas sin interés de ${fmt(Math.round(totalTarj / CUOTAS))} · por transferencia pagás ${fmt(subtotal + (envio || 0))}`
      : `Con tarjeta: ${fmt(totalTarj)} en ${CUOTAS} cuotas sin interés de ${fmt(Math.round(totalTarj / CUOTAS))}`;
  }
  const btnMP = document.querySelector('.pago-opcion[data-pago="Mercado Pago"]');
  if (btnMP) {
    btnMP.hidden = !modoTarjeta || envio === null;
    if (btnMP.hidden && esMP) { elegirPago("Transferencia"); return; }
  }
  const fin = document.getElementById("btn-finalizar");
  if (fin && !fin.classList.contains("cargando")) {
    fin.classList.toggle("btn-mp", esMP);
    fin.innerHTML = esMP ? `<i data-feather="credit-card"></i> Pagar con Mercado Pago` : `<i data-feather="message-circle"></i> Enviar pedido por WhatsApp`;
    feather.replace();
  }

  const nota = document.getElementById("res-nota");
  if (nota) {
    const falta = ENVIO_GRATIS_MINIMO - subtotal;
    nota.textContent = zonaElegida === "otra" && falta > 0
      ? `Te faltan ${fmt(falta)} para envío gratis a todo el país.`
      : "";
  }

  // El efectivo es solo para la zona
  const btnEfectivo = document.querySelector('.pago-opcion[data-pago="Efectivo"]');
  if (btnEfectivo) {
    btnEfectivo.hidden = zonaElegida === "otra";
    if (zonaElegida === "otra" && pagoElegido === "Efectivo") elegirPago("Transferencia");
  }
}

function elegirPago(pago) {
  pagoElegido = pago;
  document.querySelectorAll(".pago-opcion").forEach(b => b.classList.toggle("selected", b.dataset.pago === pago));
  const alias = document.getElementById("checkout-alias");
  if (alias) alias.hidden = pago !== "Transferencia";
  const mpNota = document.getElementById("checkout-mp");
  if (mpNota) mpNota.hidden = pago !== "Mercado Pago";
  const nota = document.querySelector(".checkout-paso .checkout-nota");
  if (nota) nota.hidden = pago === "Mercado Pago";
  if (document.getElementById("res-total")) actualizarResumen();
}

// Total con tarjeta: mismo cálculo que el servidor (precio por producto + envío, cada uno ÷0,78)
function totalTarjeta() {
  const envio = calcularCostoEnvio();
  return carrito.reduce((a, i) => a + precioLista(i.precio) * i.cantidad, 0) + (envio > 0 ? precioLista(envio) : 0);
}

// Muestra todo lo de tarjeta (opción de pago, textos, pie legal) solo si está activo
function initTarjeta() {
  document.body.classList.toggle("con-tarjeta", modoTarjeta);
  document.querySelectorAll("[data-solo-tarjeta]").forEach(el => el.hidden = !modoTarjeta);
  if (!modoTarjeta) return;
  document.querySelectorAll("[data-texto-tarjeta]").forEach(el => el.innerHTML = el.dataset.textoTarjeta);
  actualizarResumen();
}

function initCarrito() {
  const overlay = document.getElementById("modal-carrito-overlay");
  const otraWrap = document.getElementById("envio-otra-wrap");
  const domWrap = document.getElementById("envio-domicilio-wrap");
  const sucWrap = document.getElementById("envio-sucursal-wrap");

  document.getElementById("carrito-fab")?.addEventListener("click", abrirCarritoLateral);
  document.getElementById("modal-carrito-close")?.addEventListener("click", cerrarCarrito);
  document.getElementById("btn-seguir")?.addEventListener("click", cerrarCarrito);
  overlay?.addEventListener("click", (e) => { if (e.target === overlay) cerrarCarrito(); });

  document.querySelectorAll(".envio-opcion").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".envio-opcion").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      zonaElegida = btn.dataset.loc;
      if (otraWrap) otraWrap.style.display = zonaElegida === "otra" ? "flex" : "none";
      document.getElementById("checkout-zona")?.classList.remove("falta");
      actualizarResumen();
    });
  });

  document.querySelectorAll(".envio-tipo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".envio-tipo-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      tipoEntregaElegido = btn.dataset.tipo;
      if (domWrap) domWrap.style.display = tipoEntregaElegido === "domicilio" ? "" : "none";
      if (sucWrap) sucWrap.style.display = tipoEntregaElegido === "sucursal" ? "" : "none";
    });
  });

  document.querySelectorAll(".pago-opcion").forEach(btn =>
    btn.addEventListener("click", () => elegirPago(btn.dataset.pago)));
  elegirPago(pagoElegido);

  document.getElementById("btn-finalizar")?.addEventListener("click", enviarPedido);
  recuperarDatosCliente();
}

const CAMPOS_ENVIO = ["nombre","email","codarea","celular","provincia","cp","localidad","calle","numero","piso","depto","sucursal"];

function guardarDatosCliente() {
  try {
    const datos = { zona: zonaElegida, pago: pagoElegido, tipo: tipoEntregaElegido, campos: {} };
    CAMPOS_ENVIO.forEach(c => { const el = document.getElementById(`envio-${c}-input`); if (el) datos.campos[c] = el.value; });
    localStorage.setItem("clienteMatesRico", JSON.stringify(datos));
  } catch {}
}

function recuperarDatosCliente() {
  try {
    const d = JSON.parse(localStorage.getItem("clienteMatesRico") || "null");
    if (!d) return;
    Object.entries(d.campos || {}).forEach(([c, v]) => { const el = document.getElementById(`envio-${c}-input`); if (el && v) el.value = v; });
    if (d.tipo) document.querySelector(`.envio-tipo-btn[data-tipo="${d.tipo}"]`)?.click();
    if (d.zona) document.querySelector(`.envio-opcion[data-loc="${d.zona}"]`)?.click();
    if (d.pago) document.querySelector(`.pago-opcion[data-pago="${d.pago}"]:not([hidden])`)?.click();
  } catch {}
}

function enviarPedido() {
  if (carrito.length === 0) { mostrarToast("Tu pedido está vacío"); return; }

  if (!zonaElegida) {
    const zona = document.getElementById("checkout-zona");
    zona?.classList.add("falta");
    zona?.scrollIntoView({ behavior: "smooth", block: "center" });
    mostrarToast("Elegí dónde te lo entregamos");
    return;
  }

  let datos = null;
  if (zonaElegida === "otra") {
    const val = (id) => document.getElementById(id)?.value.trim() || "";
    datos = {
      nombre: val("envio-nombre-input"), email: val("envio-email-input"),
      codArea: val("envio-codarea-input").replace(/\D/g, "").replace(/^0/, ""),
      celular: val("envio-celular-input").replace(/\D/g, ""),
      provincia: val("envio-provincia-input"), cp: val("envio-cp-input"), localidad: val("envio-localidad-input"),
      calle: val("envio-calle-input"), numero: val("envio-numero-input"),
      piso: val("envio-piso-input"), depto: val("envio-depto-input"),
      sucursal: val("envio-sucursal-input"),
      tipoEntrega: tipoEntregaElegido,
    };
    // Si escribió el 15 adelante del celular, se lo sacamos (Correo lo pide sin 15)
    if (datos.celular.startsWith("15") && (datos.codArea + datos.celular).length > 10) datos.celular = datos.celular.slice(2);
    const domicilio = datos.tipoEntrega === "domicilio";
    const faltantes = [
      [!datos.nombre, "nombre y apellido", "envio-nombre-input"],
      [!/^\S+@\S+\.\S+$/.test(datos.email), "un email válido", "envio-email-input"],
      [!datos.codArea, "código de área", "envio-codarea-input"],
      [datos.celular.length < 6, "celular", "envio-celular-input"],
      [!datos.provincia, "provincia", "envio-provincia-input"],
      [!datos.cp, "código postal", "envio-cp-input"],
      [!datos.localidad, "localidad", "envio-localidad-input"],
      [domicilio && !datos.calle, "calle", "envio-calle-input"],
      [domicilio && !datos.numero, "número de la calle", "envio-numero-input"],
    ].filter(f => f[0]);
    if (faltantes.length) {
      mostrarToast(`Falta completar: ${faltantes[0][1]}`);
      const el = document.getElementById(faltantes[0][2]);
      el?.focus();
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
  }

  if (pagoElegido === "Mercado Pago") { pagarConMercadoPago(datos); return; }

  const total = calcularTotal() + (calcularCostoEnvio() || 0);
  const aCotizar = calcularCostoEnvio() === null;
  guardarDatosCliente();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(armarMensaje(datos))}`, "_blank");
  mostrarExito(total, aCotizar);
}

function armarMensaje(d) {
  const tarjeta = pagoElegido === "Mercado Pago";
  const detalle = carrito.map(i => `• ${i.nombre}${i.opcion ? ` (grabado "${i.opcion}")` : ""} x${i.cantidad} — ${fmt((tarjeta ? precioLista(i.precio) : i.precio) * i.cantidad)}${!tarjeta && i.precioNormal > i.precio ? " (oferta limitada)" : ""}`).join("\n");
  const subtotal = tarjeta ? totalTarjeta() - (calcularCostoEnvio() > 0 ? precioLista(calcularCostoEnvio()) : 0) : calcularTotal();
  const envio = tarjeta && calcularCostoEnvio() > 0 ? precioLista(calcularCostoEnvio()) : calcularCostoEnvio();

  let envioTexto, totalTexto;
  if (envio === null) { envioTexto = "Envío: a cotizar por Correo Argentino"; totalTexto = `Subtotal: ${fmt(subtotal)}`; }
  else if (envio === 0) { envioTexto = "Envío: gratis"; totalTexto = `Total: ${fmt(subtotal)}`; }
  else { envioTexto = `Envío: ${fmt(envio)}`; totalTexto = `Total: ${fmt(subtotal + envio)}`; }

  let entrega = `Zona: ${zonaElegida}\n${envioTexto}`;
  if (d) {
    const domicilio = d.tipoEntrega === "domicilio";
    entrega = `Datos para Correo Argentino:\n` +
      `Nombre y apellido: ${d.nombre}\n` +
      `Email: ${d.email}\n` +
      `Celular: (${d.codArea}) ${d.celular}\n` +
      `Entrega: ${domicilio ? "A domicilio" : "Retiro en sucursal"}\n` +
      `Provincia: ${d.provincia}\n` +
      `Localidad: ${d.localidad}\n` +
      `CP: ${d.cp}\n` +
      (domicilio
        ? `Calle: ${d.calle} ${d.numero}` + (d.piso ? ` · Piso ${d.piso}` : "") + (d.depto ? ` · Depto ${d.depto}` : "") + `\n`
        : (d.sucursal ? `Sucursal: ${d.sucursal}\n` : "")) +
      envioTexto;
  }

  if (tarjeta) return `¡Hola! Hice este pedido desde la web y lo pagué con Mercado Pago:\n\n${detalle}\n\n${totalTexto} (con tarjeta, hasta ${CUOTAS} cuotas sin interés)\n\n${entrega}`;
  return `¡Hola! Quiero hacer este pedido desde la web:\n\n${detalle}\n\n${totalTexto}\n\n${entrega}\nPago: ${pagoElegido}\n\n¿Me confirmás que está todo disponible? ¡Gracias!`;
}

function mostrarExito(total, aCotizar) {
  const exito = document.getElementById("carrito-exito");
  if (!exito) return;
  const transferencia = pagoElegido === "Transferencia";
  exito.innerHTML = `
    <div class="exito-icon"><i data-feather="check"></i></div>
    <h4>¡Pedido enviado!</h4>
    <p>Se abrió WhatsApp con tu pedido. Mandalo y te confirmamos al toque.</p>
    ${transferencia ? `
      <div class="exito-pago">
        <p class="exito-label">Total a transferir${aCotizar ? " (+ envío a cotizar)" : ""}</p>
        <p class="exito-total">${fmt(total)}</p>
        ${aliasHtml()}
        <p class="exito-nota">Cuando transfieras, mandanos el comprobante por el mismo chat.</p>
      </div>` : ""}
    <button class="btn btn-outline btn-full" id="btn-exito-cerrar">Seguir mirando</button>`;
  exito.hidden = false;
  document.getElementById("carrito-items").hidden = true;
  document.getElementById("btn-exito-cerrar")?.addEventListener("click", cerrarCarrito);
  carrito = [];
  actualizarBadge();
  renderizarCarrito();
  document.getElementById("modal-body")?.scrollTo(0, 0);
  feather.replace();
}

// ═══════════════════════════════════════════════════════
// 📋 ALIAS CON BOTÓN COPIAR
// ═══════════════════════════════════════════════════════
function aliasHtml() {
  return `
    <div class="alias-box">
      <div>
        <span class="alias-label">Alias</span>
        <strong class="alias-valor">${PAGO.alias}</strong>
        <span class="alias-titular">${PAGO.titular}</span>
      </div>
      <button class="alias-copiar" data-copiar="${PAGO.alias}"><i data-feather="copy"></i> Copiar</button>
    </div>`;
}

function initCopiar() {
  // Rellena todos los lugares donde va el alias
  document.querySelectorAll("[data-alias]").forEach(el => el.innerHTML = aliasHtml());
  feather.replace();
  // Un solo listener para todos los botones "Copiar"
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copiar]");
    if (!btn) return;
    const texto = btn.dataset.copiar;
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const t = document.createElement("textarea");
      t.value = texto; document.body.appendChild(t); t.select();
      document.execCommand("copy"); t.remove();
    }
    btn.classList.add("copiado");
    btn.innerHTML = "✓ Copiado";
    mostrarToast("Alias copiado");
    setTimeout(() => { btn.classList.remove("copiado"); btn.innerHTML = `<i data-feather="copy"></i> Copiar`; feather.replace(); }, 2200);
  });
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
      // Si estaba más abajo en la lista, lo llevamos al principio del catálogo
      const sec = document.getElementById("productos");
      if (sec && window.scrollY > sec.offsetTop + 10) sec.scrollIntoView({ behavior: "smooth" });
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
// 💳 MERCADO PAGO: ir a pagar y volver
// ═══════════════════════════════════════════════════════
async function pagarConMercadoPago(datos) {
  const btn = document.getElementById("btn-finalizar");
  if (btn?.classList.contains("cargando")) return;
  btn?.classList.add("cargando");
  if (btn) btn.innerHTML = "Abriendo Mercado Pago…";
  guardarDatosCliente();
  try {
    const r = await fetch(`${PAGOS_API}/preferencia`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: carrito.map(i => ({ id: i.id, opcion: i.opcion || null, cantidad: i.cantidad })),
        zona: zonaElegida,
        cliente: { nombre: datos?.nombre || "", email: datos?.email || "" },
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.url) throw new Error(j.error || "No pudimos abrir Mercado Pago. Probá de nuevo o pagá por transferencia.");
    try {
      localStorage.setItem("pagoMPMatesRico", JSON.stringify({
        ref: j.ref, mensaje: armarMensaje(datos), total: j.totalTarjeta, carrito, fecha: Date.now(),
      }));
    } catch {}
    location.href = j.url;
  } catch (e) {
    btn?.classList.remove("cargando");
    actualizarResumen();
    mostrarToast(e.message || "No pudimos abrir Mercado Pago. Probá de nuevo.");
  }
}

// Cuando la persona vuelve de Mercado Pago (?mp=ok|error|pendiente)
async function procesarVueltaMP() {
  const q = new URLSearchParams(location.search);
  const estado = q.get("mp");
  if (!estado) return;
  const paymentId = q.get("payment_id") || q.get("collection_id");
  let pend = null;
  try { pend = JSON.parse(localStorage.getItem("pagoMPMatesRico") || "null"); } catch {}
  try { history.replaceState(null, "", location.pathname); } catch {}

  if (estado === "error") {
    mostrarToast("El pago no se completó. Podés probar de nuevo o pagar por transferencia.");
    return;
  }

  let pago = null;
  if (paymentId && paymentId !== "null") {
    try {
      const r = await fetch(`${PAGOS_API}/pago?id=${encodeURIComponent(paymentId)}`);
      if (r.ok) pago = await r.json();
    } catch {}
  }
  const aprobado = pago?.estado === "approved";
  const pendiente = !aprobado && (estado === "pendiente" || pago?.estado === "pending" || pago?.estado === "in_process");
  if (!aprobado && !pendiente) {
    mostrarToast("No pudimos confirmar el pago. Si te lo cobraron, escribinos por WhatsApp.");
    return;
  }

  const base = pend?.mensaje || "¡Hola! Hice un pedido desde la web y lo pagué con Mercado Pago.";
  const linea = aprobado
    ? `✅ PAGADO con Mercado Pago · operación N° ${pago.id} · ${fmt(pago.monto)}${pago.cuotas > 1 ? ` en ${pago.cuotas} cuotas` : ""}`
    : `⏳ Pago PENDIENTE en Mercado Pago${pago?.id ? ` · operación N° ${pago.id}` : ""}`;
  const mensaje = `${base}\n\n${linea}${pend?.ref ? `\nPedido: ${pend.ref}` : ""}`;
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

  if (aprobado) {
    carrito = [];
    actualizarBadge();
    try { localStorage.removeItem("pagoMPMatesRico"); } catch {}
  }

  const exito = document.getElementById("carrito-exito");
  if (!exito) return;
  abrirCarritoLateral();
  exito.innerHTML = `
    <div class="exito-icon"><i data-feather="${aprobado ? "check" : "clock"}"></i></div>
    <h4>${aprobado ? "¡Pago aprobado!" : "Tu pago está pendiente"}</h4>
    <p>${aprobado
      ? "Último paso: mandanos el pedido por WhatsApp así coordinamos la entrega."
      : "Mercado Pago lo está procesando. Mandanos el pedido por WhatsApp y te avisamos apenas se acredite."}</p>
    ${aprobado ? `
      <div class="exito-pago">
        <p class="exito-label">Pagaste</p>
        <p class="exito-total">${fmt(pago.monto)}</p>
        <p class="exito-nota">${pago.cuotas > 1 ? `En ${pago.cuotas} cuotas sin interés · ` : ""}Operación N° ${pago.id}</p>
      </div>` : ""}
    <a class="btn btn-primary btn-full" id="btn-exito-wa" href="${link}" target="_blank" rel="noopener"><i data-feather="message-circle"></i> Enviar pedido por WhatsApp</a>
    <button class="btn btn-ghost btn-full" id="btn-exito-cerrar">Seguir mirando</button>`;
  exito.hidden = false;
  document.getElementById("carrito-items").hidden = true;
  const footer = document.getElementById("modal-footer");
  if (footer) footer.style.display = "none";
  document.getElementById("btn-exito-cerrar")?.addEventListener("click", cerrarCarrito);
  feather.replace();
}

// ═══════════════════════════════════════════════════════
// 🍞 TOAST
// ═══════════════════════════════════════════════════════
let toastTimer = null;
function mostrarToast(msg, accion = null) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  if (accion) {
    const b = document.createElement("button");
    b.className = "toast-accion";
    b.textContent = accion.texto;
    b.addEventListener("click", () => { toast.classList.remove("show"); accion.fn(); });
    toast.appendChild(b);
  }
  toast.classList.toggle("con-accion", !!accion);
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), accion ? 4000 : 2600);
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
