# NEXT_STEPS.md — chilean-beholders

> Última actualización: 2026-11-23

## Estado actual
- Fase 0 y gran parte de la fase 1 están listas. El repo está creado (`git init`, sin commits).
- `index.html` usa el **logo real** y **9 fotos** del Instagram (`recursos/instagram/`), la bio, el lema, la zona y el evento del Castillo de Coquimbo.
- Look and feel decidido: «Papel» en modo claro y «Noche» automático en modo oscuro (ver `blueprint.md`).
- Las secciones son: portada, tienda (5 productos), detrás del mostrador, partidas con la crónica del Gusano Púrpura, galería con enlaces a las publicaciones, y contacto por DM de Instagram.

## Bloqueo
Parcial. Faltan datos que no están publicados en el Instagram:
- los **precios** y los nombres comerciales de los productos (hoy dicen «Consultar por DM»);
- si hay **WhatsApp**, **despacho** o punto de retiro;
- las **partidas**: dónde se juega, la próxima fecha, los cupos y si se cobra;
- qué son las «**tabernas roleras**» de la bio;
- el **visto bueno del Master** para usar sus fotos y su logo en el sitio.

## Siguiente acción
Mostrarle el boceto al Master y anotar sus respuestas. Luego, rol **ejecutor**, riesgo 2: cargarlas en `datos/tienda.js` y quitar la franja de «BOCETO».

## Pendientes
- [ ] Precios, contacto y partidas reales en `datos/tienda.js`.
- [ ] Quitar la franja `.boceto` y las etiquetas «por confirmar» cuando haya datos.
- [ ] Probar en un celular real (360 px, modo claro y oscuro).
- [ ] Crear el repo en GitHub y activar Pages (lo hace el usuario).
- [ ] Fase 4: hablar con Chaid sobre la integración de Vaeloria como `modulos/campamento/`.

## Historial breve
- 2026-11-23 — Fase 0 (evidencia: `node --check js/app.js && node --check datos/tienda.js` → sin errores)
- 2026-11-23 — Datos del Instagram integrados (revisado en Chrome sin iniciar sesión)
- 2026-11-23 — Logo y fotos reales. Paleta Papel/Noche. Evidencia: capturas headless a 1280 px (claro y oscuro) y a 360 px sin desborde; las 10 rutas de imagen existen.
