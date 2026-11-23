/* ============================================================
   Datos del sitio. Script clásico (sin módulos ni build) para que
   index.html funcione abriéndolo directo desde el disco.

   REGLA: no inventar. Fuente de lo que hay aquí: el perfil público
   de Instagram @dnd.chileanbeholders, revisado el 2026-11-23.
   Lo que no salía ahí queda en null o con `nota: 'por confirmar'`.
   ============================================================ */

'use strict';

const TIENDA = {
  nombre: 'D&D Chilean Beholders',
  usuario: 'dnd.chileanbeholders',
  instagram: 'https://www.instagram.com/dnd.chileanbeholders/',
  dm: 'https://ig.me/m/dnd.chileanbeholders',     // abre el chat directo de Instagram
  whatsapp: null,                                  // PENDIENTE: ¿hay número para pedidos?
  zona: 'Coquimbo y La Serena',                    // bio: «#Coquimbo #laserena»
  lema: 'Dungeons & Dragons para el mundo.',      // flyer de la Expo Fantasy Role-play
  sublema: 'Venta de dados y miniaturas D&D.',    // mismo flyer
  lemaProvisorio: false,
  /* Bio de Instagram, textual. */
  bio: 'Maestro de juego, postulante de ideas roleras, miniaturista y vendedor de tabernas roleras de #Coquimbo #laserena. Consultas al dm 🔮',
};

/* Categorías según lo que aparece en las fotos del perfil. */
const CATEGORIAS = ['Dados', 'Miniaturas', 'Cajas de dados', 'Mesa de juego'];

/* Un producto por tipo de cosa que se ve en las publicaciones. Los nombres son
   descriptivos (de las fotos), no los nombres comerciales del Master. */
const PRODUCTOS = [
  { id: 'dados-set',     cat: 'Dados',          nombre: 'Sets de dados',                 detalle: 'Sets de 7 en varios colores: azules, nacarados, translúcidos.',  precio: null, foto: 'recursos/instagram/dados-surtido.jpg', nota: 'por confirmar' },
  { id: 'dados-grabados',cat: 'Dados',          nombre: 'Dados con relieve',             detalle: 'Diseño grabado, como el set negro con magenta.',                 precio: null, foto: 'recursos/instagram/dados-relieve.jpg', nota: 'por confirmar' },
  { id: 'minis',         cat: 'Miniaturas',     nombre: 'Miniaturas D&D',                detalle: 'Monstruos y aventureros. El Master también es miniaturista.',   precio: null, foto: 'recursos/instagram/minis-beholder.jpg', nota: 'por confirmar' },
  { id: 'caja-hex',      cat: 'Cajas de dados', nombre: 'Caja hexagonal de madera',      detalle: 'Guarda un set de dados. Tapa grabada (dragón, beholder…).',      precio: null, foto: 'recursos/instagram/cajas-hex.jpg', nota: 'por confirmar' },
  { id: 'grilla',        cat: 'Mesa de juego',  nombre: 'Grilla de batalla',             detalle: 'Hojas cuadriculadas con textura de pergamino.',                  precio: null, foto: 'recursos/instagram/grilla.jpg', nota: '¿se vende?' },
];

/* Galería: fotos del perfil con enlace a su publicación. */
const IG_POST = 'https://www.instagram.com/dnd.chileanbeholders/p/';
const GALERIA = [
  { foto: 'recursos/instagram/dados-nacarados.jpg', alt: 'Set de dados azul nacarado con números dorados', post: 'DYSybcXDrjq' },
  { foto: 'recursos/instagram/minis-beholder.jpg',  alt: 'Miniaturas de un beholder, un dragón y un ogro',  post: 'DYSyFMejsBH' },
  { foto: 'recursos/instagram/dados-relieve.jpg',   alt: 'Dados negros con relieve magenta',               post: 'DYSy_v-kX4F' },
  { foto: 'recursos/instagram/cajas-hex.jpg',       alt: 'Cajas hexagonales de madera con dados dentro',   post: 'DYRNajEFrgn' },
  { foto: 'recursos/instagram/dados-azules.jpg',    alt: 'Set de dados azules',                             post: 'DYSxSAficOs' },
  { foto: 'recursos/instagram/dados-surtido.jpg',   alt: 'Muchos sets de dados de colores sobre la mesa',  post: 'DYSwuegDUQG' },
];

/* «Días de tienda»: ferias donde ha estado la tienda. */
const EVENTOS = [
  {
    nombre: 'Expo Fantasy Role-play: «El resurgir del castillo»',
    fecha: '2026-04-05',                      // flyer: «DOM 05/04 de 12 a 21 hrs»
    horario: '12 a 21 h',
    lugar: 'Castillo de Coquimbo, Camino al Fuerte #231',
    sello: 'Magitienda confirmada',
  },
];

/* Partidas: la vitrina promocional. Las crónicas son reales; la próxima fecha no. */
const PARTIDAS = {
  proxima: { fecha: null, cupos: null },    // PENDIENTE
  cronicas: [
    {
      id: '01-gusano-purpura',
      titulo: 'El Gusano Púrpura',
      gancho: 'Cinco aventureros, una caravana, un grifo bajo la luna y un gusano de VD 15 a las 3 de la mañana.',
      cifras: [['282', 'de daño al gusano'], ['15.000', 'PX repartidos'], ['52', 'de daño en un solo golpe']],
      imagen: 'cronicas/01-gusano-purpura/vineta-gusano.jpg',
      enlace: 'cronicas/01-gusano-purpura/',
    },
  ],
};
