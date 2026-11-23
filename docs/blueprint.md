# Blueprint — Chilean Beholders

> Origen: conversación del 2026-11-23 (reemplaza el bosquejo `projects/aventura/PLAN-SITIO.md`). Riesgo: **2 (normal)**.

## Objetivo
Un sitio para la tienda real del DM, **Chilean Beholders**, con tres funciones:
1. **Vender:** mostrar el catálogo y llevar a la persona a pedir por mensaje.
2. **Promocionar las partidas:** las sesiones son la vitrina. Muestran cómo se juega en esa mesa y cada una queda como una crónica que se puede compartir.
3. **(Después)** Integrar el módulo de XP de Chaid como un módulo más.

Orden acordado: **primero el look and feel y la tienda.** El módulo de Chaid queda para después.

## Análisis de lo que ya existe

| Pieza | Qué es | Qué se reutiliza |
|---|---|---|
| Crónica «El Gusano Púrpura» (`projects/aventura/index.html` + artifact) | Una página con estilo de manual de D&D: pergamino, cuero y sepia. Datos verificados contra la transcripción | Se copió tal cual a `cronicas/01-gusano-purpura/`. Es la primera pieza promocional. Su viñeta es la imagen de la tarjeta |
| `vineta-gusano.jpg` | Página de cómic del combate (1344×1800), arte del grupo | Imagen de la tarjeta de crónica |
| `transcripcion-sesion.md` | Fuente de verdad de los datos | **No se copia:** es una conversación privada. Queda en `projects/aventura/` |
| Bosquejo `projects/aventura/sitio/` | Primer bosquejo con el supuesto equivocado (tienda dentro del juego) | Solo la idea del libro de sesiones para la XP |
| Vaeloria (repo `vecmaw/vaeloria`, de Chaid) | PWA de XP en GitHub Pages: HTML/CSS/JS planos sin build, tabla 5e en `js/xp.js`, datos en `localStorage` (`dnd-camp-v1`), `almacen.js` como única puerta a los datos | La convención técnica completa (sin build, scripts clásicos, `textContent`). La paleta, como opción C. Fase 4: el módulo entero |

**Consecuencia técnica:** el sitio usa el mismo stack que Vaeloria. Así, sumar el módulo de Chaid es copiar su carpeta a `modulos/campamento/` sin adaptar nada a un framework.

## Stack
- HTML + CSS + JS planos (scripts clásicos con `defer`). Sin build, sin dependencias.
- Datos en `datos/tienda.js`. Si el catálogo crece o lo edita alguien que no programa, se evalúa pasarlo a Google Sheets publicado como CSV (gratis).
- Hosting: **GitHub Pages**. Es gratis, trae HTTPS, se despliega con `git push` y es lo que Chaid ya usa. Más adelante se le puede poner un dominio propio (`.cl` en NIC Chile).
- Pedidos: un enlace a Instagram DM (o a WhatsApp con el mensaje ya escrito si el Master da su número). Por ahora no hay carrito ni pago en línea.

## Datos de la marca (Instagram público, revisado el 2026-11-23)

Revisado en Chrome sin iniciar sesión. Instagram pide login para ver la bio completa y los posts; lo de abajo es lo que se ve sin cuenta.

- **Nombre visible:** «D&D Chilean Beholder». Usuario: `dnd.chileanbeholders`. Unos 873 seguidores y 41 publicaciones.
- **Bio (textual):** «Maestro de juego, postulante de ideas roleras, miniaturista y vendedor de tabernas roleras de #Coquimbo #laserena. Consultas al dm 🔮».
- **Lema (flyer de la Expo):** «Dungeons & Dragons para el mundo. Venta de dados y miniaturas D&D».
- **Logo:** beholder ilustrado a mano, rojo-magenta con detalles naranjos, ojo central amarillo, ojos blancos en los tentáculos, boca con dientes y **bandera de Chile**. Trazo negro sobre fondo blanco.
- **Historias destacadas:** «Tienda rolera», «Días de tienda!», «VTT Project» (un VTT en Unity: «Se vienen cositas»), «D&D characters».
- **Lo que se ve en las fotos:** sets de dados (azules, nacarados, translúcidos, uno negro con relieve magenta), miniaturas (un beholder, un dragón, un ogro y orcos), cajas hexagonales de madera con tapa grabada (dragón, beholder), hojas cuadriculadas con textura de pergamino y una pieza de madera grabada con «Chilean B… D&D».
- **Evento:** Expo Fantasy Role-play «El resurgir del castillo», con el sello «Magitienda confirmada». Domingo 05/04 (2026), de 12 a 21 h, en el Castillo de Coquimbo, Camino al Fuerte #231.
- **Pedidos:** por mensaje directo de Instagram («Consultas al dm»). No hay precios publicados.

## Look and feel (decidido el 2026-11-23)

- **Claro, por defecto: «Papel».** El logo tal cual: tinta negra sobre papel, rojo-magenta, naranjo y ojo amarillo. Bordes y sombras duras de tinta, estilo sticker o cómic, igual que el dibujo del logo.
- **Oscuro, automático con `prefers-color-scheme: dark`: «Noche».** Los colores del flyer de la Expo: azul noche, amarillo y turquesa.
- Se descartó «Taberna», la paleta de Vaeloria. Al integrar el módulo de Chaid, se adaptan sus variables CSS.
- **Logo:** el original del Instagram (`recursos/instagram/logo.jpg`, 640×640, sacado de la publicación fijada del logo). Se usa como sticker en la portada, en la cabecera, como favicon y en el contacto.
- **Fotos:** las de las publicaciones del propio perfil, en `recursos/instagram/`, a 640 px. Se excluyó el flyer porque la publicación es de otra cuenta (`onyria_portal`).

## Estructura del sitio
```
/                      Portada · Tienda · Partidas · Contacto (una página con anclas)
/cronicas/01-gusano-purpura/   crónica autocontenida (se comparte por link)
/modulos/campamento/   (fase 4) Vaeloria
/datos/tienda.js       fuente única
```

## Fases
| Fase | Entrega | Estado |
|---|---|---|
| 0 | Repo, docs y boceto de look and feel con tienda (`index.html`) | ✅ |
| 1 | Datos reales: logo, bio, catálogo con fotos y precios, contacto. Elegir paleta | ⬜ bloqueada por los datos |
| 2 | Pulir la tienda con datos reales y probar en el celular a 360 px | ⬜ |
| 3 | Partidas: fechas, cupos y plantilla para crónicas nuevas. Publicar en GitHub Pages | ⬜ |
| 4 | Módulo de Chaid en `modulos/campamento/`, con XP compartida desde un libro de sesiones | ⬜ |

## Lo que NO es (por ahora)
- No es una tienda con carrito ni pago en línea.
- No tiene cuentas de usuario ni panel de administración.
- No reemplaza al Instagram: lo complementa y lleva gente hacia él.
