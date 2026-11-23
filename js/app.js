/* ============================================================
   Chilean Beholders — interfaz. Lee TIENDA, CATEGORIAS, PRODUCTOS,
   GALERIA, EVENTOS y PARTIDAS de datos/tienda.js (se carga antes).
   Los datos entran siempre por textContent, nunca por innerHTML.
   ============================================================ */

'use strict';

const $ = (s) => document.querySelector(s);
const crear = (tag, clase, texto) => {
  const e = document.createElement(tag);
  if (clase) e.className = clase;
  if (texto != null) e.textContent = texto;
  return e;
};
const imagen = (src, alt) => {
  const img = crear('img');
  img.src = src; img.alt = alt; img.loading = 'lazy'; img.decoding = 'async';
  return img;
};
const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const ICONO = { Dados: '🎲', Miniaturas: '🐉', 'Cajas de dados': '📦', 'Mesa de juego': '🗺️' };

/* ---------- Contacto ---------- */
/* Con WhatsApp el mensaje va prellenado; por Instagram se abre el chat (DM) directo. */
function enlacePedido(producto) {
  if (TIENDA.whatsapp) {
    const txt = producto ? `Hola, me interesa: ${producto.nombre}` : 'Hola, quiero hacer un pedido';
    return `https://wa.me/${TIENDA.whatsapp}?text=${encodeURIComponent(txt)}`;
  }
  return TIENDA.dm;
}
const abrirFuera = (a) => { a.target = '_blank'; a.rel = 'noopener'; return a; };

$('#ig').href = TIENDA.dm;
if (TIENDA.whatsapp) { $('#wa').href = enlacePedido(); $('#wa').hidden = false; }
document.querySelectorAll('[data-pedido]').forEach((a) => { a.href = enlacePedido(); abrirFuera(a); });
$('#zona').textContent = TIENDA.zona;
$('#zona-pie').textContent = TIENDA.zona;
$('#lema').textContent = TIENDA.lema;
$('#sublema').textContent = TIENDA.sublema;
$('#bio').textContent = TIENDA.bio;
$('#bio-ig').href = TIENDA.instagram;
$('#anio').textContent = new Date().getFullYear();

/* ---------- Tienda ---------- */
let filtro = 'Todo';

function tarjetaProducto(p) {
  const art = crear('article', 'producto');
  const foto = crear('div', 'foto');
  foto.append(p.foto ? imagen(p.foto, p.nombre) : crear('span', 'foto__ico', ICONO[p.cat] ?? '✦'));
  if (p.nota) foto.append(crear('span', 'provisorio', p.nota));

  const cuerpo = crear('div', 'cuerpo');
  cuerpo.append(crear('span', 'cat', p.cat), crear('h3', null, p.nombre));
  if (p.detalle) cuerpo.append(crear('p', 'detalle', p.detalle));
  const pie = crear('div', 'pie');
  pie.append(p.precio != null
    ? crear('span', 'precio', CLP.format(p.precio))
    : crear('span', 'precio precio--consultar', 'Consultar por DM 🔮'));
  const pedir = abrirFuera(crear('a', 'boton boton--chico', 'Pedir'));
  pedir.href = enlacePedido(p);
  pie.append(pedir);
  cuerpo.append(pie);

  art.append(foto, cuerpo);
  return art;
}

function pintarTienda() {
  $('#chips').replaceChildren(...['Todo', ...CATEGORIAS].map((c) => {
    const b = crear('button', 'chip', c);
    b.type = 'button';
    b.setAttribute('aria-pressed', c === filtro);
    b.addEventListener('click', () => { filtro = c; pintarTienda(); });
    return b;
  }));
  $('#productos').replaceChildren(...PRODUCTOS.filter((p) => filtro === 'Todo' || p.cat === filtro).map(tarjetaProducto));
}
pintarTienda();

/* ---------- Días de tienda ---------- */
const FECHA = new Intl.DateTimeFormat('es-CL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
$('#eventos').replaceChildren(...EVENTOS.map((ev) => {
  const art = crear('article', 'tarjeta evento');
  const pasado = new Date(ev.fecha + 'T23:59:59') < new Date();
  art.append(
    crear('span', 'antetitulo', pasado ? 'Días de tienda · ya pasó' : 'Días de tienda · próximo'),
    crear('h3', null, ev.nombre),
    crear('p', null, `${FECHA.format(new Date(ev.fecha))}, ${ev.horario}`),
    crear('p', 'sub', `📍 ${ev.lugar}`),
    crear('span', 'sello-evento', ev.sello)
  );
  return art;
}));

/* ---------- Partidas ---------- */
$('#px-fecha').textContent = PARTIDAS.proxima.fecha ?? 'Por confirmar';
$('#px-cupos').textContent = PARTIDAS.proxima.cupos ?? 'Por confirmar';

$('#cronicas').replaceChildren(...PARTIDAS.cronicas.map((c) => {
  const art = crear('article', 'tarjeta cronica');
  const txt = crear('div', 'txt');
  txt.append(crear('span', 'antetitulo', 'Crónica de sesión'), crear('h3', null, c.titulo), crear('p', 'gancho', c.gancho));
  const cifras = crear('div', 'cifras');
  for (const [num, etiqueta] of c.cifras) {
    const d = crear('div'); d.append(crear('b', null, num), crear('span', null, etiqueta)); cifras.append(d);
  }
  const leer = crear('a', 'boton', 'Leer la crónica →'); leer.href = c.enlace;
  txt.append(cifras, leer);
  art.append(imagen(c.imagen, `Viñeta de la sesión «${c.titulo}»`), txt);
  return art;
}));

/* ---------- Galería ---------- */
$('#galeria-fotos').replaceChildren(...GALERIA.map((g) => {
  const a = abrirFuera(crear('a', 'galeria__item'));
  a.href = IG_POST + g.post + '/';
  a.setAttribute('aria-label', `${g.alt} (ver en Instagram)`);
  a.append(imagen(g.foto, g.alt));
  return a;
}));
