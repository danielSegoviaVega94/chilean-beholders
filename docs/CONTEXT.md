# CONTEXT.md — Chilean Beholders

## Glosario del dominio
| Término | Significado | En código |
|---|---|---|
| Tienda | El negocio real del DM: Chilean Beholders | `TIENDA` |
| Master / DM | Dueño de la tienda y narrador de las partidas | — |
| Producto | Artículo del catálogo | `PRODUCTOS[]`, `tarjetaProducto()` |
| Categoría | Agrupación de productos (los valores actuales son de ejemplo) | `CATEGORIAS[]` |
| Pedido | Contacto por Instagram o WhatsApp para comprar. No hay carrito | `enlacePedido()` |
| Partida / sesión | Una sesión de juego en la mesa del Master, usada como promoción | `PARTIDAS` |
| Crónica | Página autocontenida que narra una sesión | `PARTIDAS.cronicas[]`, `cronicas/NN-slug/` |
| Campamento | Módulo de XP de Chaid (Vaeloria). Fase 4 | `modulos/campamento/` |
| Provisorio / ejemplo | Contenido de relleno de diseño, todavía no real | `ejemplo: true`, `.provisorio` |

## Reglas de naming
- Identificadores, archivos y clases CSS en **español**, sin tildes: `tarjetaProducto`, `.producto`, `estilo.css` (igual que Vaeloria).
- Variables y funciones en `camelCase`. Constantes de datos en `MAYUSCULAS`.
- Carpetas de crónica: `NN-slug` (`01-gusano-purpura`).

## Decisiones clave
### ADR-001: mismo stack que Vaeloria
- **Fecha:** 2026-11-23
- **Contexto:** el módulo de Chaid se va a integrar después, y él ya trabaja sin build.
- **Decisión:** HTML, CSS y JS planos, scripts clásicos y GitHub Pages.
- **Descartado:** Astro, Next o Vite. Son más herramientas para un sitio chico y obligarían a adaptar Vaeloria.
- **Consecuencia:** todos los archivos JS comparten un solo ámbito global, así que no se pueden repetir nombres entre `app.js` y los módulos.

### ADR-002: pedidos por mensaje, sin carrito
- **Fecha:** 2026-11-23
- **Contexto:** la tienda vende por Instagram.
- **Decisión:** cada producto lleva a Instagram DM, o a WhatsApp con el texto prellenado si hay número.
- **Descartado (por ahora):** carrito y pago en línea.

## Flujo del usuario
```
1. Llega desde Instagram o desde un link de crónica → ve la portada.
2. Filtra la tienda por categoría → toca «Pedir» → se abre el DM o WhatsApp.
3. Ve las partidas → lee una crónica → pide un cupo para la próxima.
```
