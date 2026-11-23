# AGENTS.md — chilean-beholders

> Entrada para cualquier agente (Claude Code, Codex, Gemini, Antigravity). `CLAUDE.md` solo contiene `@AGENTS.md`.
> Flujo y roles del workspace: `../../docs/FLUJO.md`. Responder en español de Chile.

## Qué es
Sitio web de **Chilean Beholders**, la tienda real de rol del DM (Instagram: `@dnd.chileanbeholders`). Tiene la tienda, las partidas usadas como promoción (con crónicas de sesión) y, en una fase posterior, el módulo de XP de Chaid. **Estado: prototipo de look and feel.**

## Stack
- HTML + CSS + JS planos, scripts clásicos con `defer`. Sin build, sin dependencias, igual que Vaeloria.
- Datos en `datos/*.js`, que funcionan abriendo el archivo directo, sin servidor.
- Fuentes: Google Fonts (Cinzel Decorative, Cinzel, Alegreya Sans).
- Hosting previsto: GitHub Pages (gratis). No está publicado.

## Comandos
| Para | Comando |
|---|---|
| Ver | abrir `index.html` en el navegador |
| Servidor local (opcional) | `python -m http.server 8000` |
| Revisar sintaxis | `node --check js/app.js && node --check datos/tienda.js` |
| Build / tests | no hay |

## Estructura
| Ruta | Contenido |
|---|---|
| `index.html`, `css/estilo.css`, `js/app.js` | Portada, tienda, partidas y contacto |
| `datos/tienda.js` | **Fuente única**: tienda, catálogo, partidas, crónicas |
| `cronicas/NN-slug/` | Una crónica por sesión, autocontenida (copia de `projects/aventura/`) |
| `modulos/campamento/` | (Futuro) el módulo Vaeloria de Chaid |

## Leer antes de trabajar
1. `docs/NEXT_STEPS.md`: estado y siguiente acción.
2. `docs/CONTEXT.md`: vocabulario.
3. `docs/blueprint.md`: análisis y fases.

## Reglas del proyecto
- No hacer commit ni push (lo hace el usuario).
- **No inventar datos de la tienda.** Productos, precios, bio, horarios y contacto salen del Master o de su Instagram. El relleno de diseño va con `ejemplo: true` o la etiqueta `provisorio`.
- Las transcripciones de sesión no se versionan (`.gitignore`). Son conversaciones privadas de la mesa.
- Los datos del usuario entran al DOM con `textContent`, nunca con `innerHTML`.
- Mobile-first: probar a 360 px sin scroll horizontal.
