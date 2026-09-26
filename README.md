# Ingeniería Ambiental · UNT — Sitio web

Sitio web oficial de la **Escuela Profesional de Ingeniería Ambiental** de la
Facultad de Ingeniería Química, **Universidad Nacional de Trujillo**.

**Publicado en:** <https://ambiental.unitru.edu.pe/>

Reúne la información que el programa debe tener publicada: identidad (misión, visión,
valores, historia), organización (dirección, docentes, administrativos, comités),
plan de estudios y malla curricular, laboratorios, investigación, admisión, noticias
y contacto.

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **TailwindCSS 3** (colores institucionales en `tailwind.config.js`)
- **React Router 6** (rutas), **Framer Motion** (animación)
- **ReactFlow** + **dagre** (malla curricular interactiva)
- **lucide-react** (iconografía)

## Arranque rápido

Requisitos: **Node 18+** y npm.

```bash
npm install     # una vez
npm run dev     # desarrollo en el navegador (http://localhost:5173)
npm run build   # genera el sitio para publicar (ver "Publicar")
```

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila el sitio a la carpeta del theme de WordPress |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run typecheck` | Verifica tipos con TypeScript |
| `npm run lint` | Linter sobre `src/` |

## Dónde está cada cosa

El **contenido** (textos, personas, fotos) está separado del **código** (diseño y
páginas). Para actualizar información casi siempre basta con editar
`profiles/escuela/`; no hace falta tocar `src/`.

```
profiles/escuela/
  config/         Identidad del sitio, logos, SEO y menú
  content/        Todo el contenido de las páginas
  assets/         Fotos e imágenes (docentes, administrativos, noticias, hero, laboratorios…)
public/           Archivos que se copian tal cual (favicon, og-image.jpg)
src/              Código: páginas, componentes, router, estilos
docs/             Documentos fuente del programa (no se sube al repo)
```

| Quiero cambiar… | Archivo |
|---|---|
| Mensaje de bienvenida del director, cifras del Inicio, hero | `config/site.ts` |
| Título, descripción e imagen al compartir el enlace | `config/seo.ts` (+ `public/og-image.jpg`) |
| Etiquetas del menú | `config/navigation.ts` |
| Director de Escuela y de Departamento | `content/autoridades.ts` |
| Plana docente | `content/docentes.ts` |
| Personal administrativo | `content/administrativos.ts` |
| Comités (miembros, resoluciones) | `content/comites.ts` |
| Noticias (y el banner de avisos) | `content/noticias.ts` |
| Malla curricular y prerrequisitos | `content/malla.ts` |
| Misión, visión, valores, historia | `content/identidad.ts` |
| Objetivos, perfiles de ingreso/egreso | `content/objetivos.ts`, `content/academico.ts` |
| Laboratorios | `content/laboratorios.ts` |
| Líneas, proyectos y publicaciones | `content/investigacion.ts` |
| Dirección, teléfono, correos, horario, mapa | `content/contacto.ts` |

> Las rutas de `profiles/escuela/` se omiten en la tabla: `config/…` y
> `content/…` están dentro de esa carpeta.

## Tareas frecuentes

### Agregar una noticia

En `content/noticias.ts`, agrega un objeto a `noticias` con:

- `slug`: la parte final de la URL (`/noticias/<slug>`), en minúsculas y con guiones.
- `titulo`, `categoria`, `resumen` (texto de la tarjeta) y `contenido` (un párrafo por elemento).
- `imagen` (portada) y `galeria` (todas las fotos).
- `fecha`/`fechaFormateada` son opcionales; si no están, no se muestran.

Las fotos van en `assets/noticias/<slug>/01.webp`, `02.webp`… Cada noticia tiene
su propia página con galería. El **banner de avisos** se arma solo con las
noticias: muestra sus títulos una vez y se oculta.

### Fotos de docentes y administrativos

- Formato **webp**, vertical **400 × 600 px**, con la cara en la parte superior.
- Van en `assets/docentes/` o `assets/administrativos/`, con el nombre de la
  persona (p. ej. `ELIAS_HARO.webp`), y se asignan en el `foto` de cada persona.
- Quien no tiene foto muestra una silueta.
- La segunda toma de cada persona (`NOMBRE_1.webp`) no la usa el sitio y está
  excluida del repo en `.gitignore`.

### Docentes

La tarjeta muestra la foto, el grado y el nombre (sin el título abreviado, que ya
indica el grado). Al pasar el cursor se voltea y muestra la condición
(nombrado/contratado), el departamento, el cargo (si tiene uno) y las
`especialidades` (cuando se registren).

### Comités

Cada comité en `content/comites.ts` tiene `descripcion`, `resolucion`, `fecha`
(opcional) y `miembros`. El cargo `'Miembro'` se muestra sin etiqueta; cualquier
otro cargo aparece como etiqueta.

### Vista previa al compartir el enlace

WhatsApp, Facebook y demás no ejecutan JavaScript: leen las etiquetas del
`<head>`. Al compilar, `vite.config.ts` escribe en `index.html` el título, la
descripción y las etiquetas Open Graph a partir de `config/seo.ts`. La imagen es
`public/og-image.jpg` (1200 × 630 px).

Si tras publicar la vista previa sigue saliendo vieja, es la caché de la red
social: se refresca en el [Depurador de Facebook](https://developers.facebook.com/tools/debug/)
("Volver a extraer").

## Publicar

El sitio se publica como **theme de WordPress** en el servidor de la universidad.

```bash
npm run build
```

- El build sale a `../wp-content/themes/educacion-primaria/dist/` (fuera de este
  repo), con `base` `/wp-content/themes/educacion-primaria/dist/`.
- Sube esa carpeta `dist/` completa al theme del servidor.
- El slug del theme se cambia en `vite.config.ts` (`THEME_SLUG`) o con
  `THEME_SLUG=<slug> npm run build`.
- Con `VERCEL=1` el build sale a `dist/` con `base` `/` (despliegue en Vercel).

## Colores institucionales

Definidos en `tailwind.config.js`:

| Token | Uso |
|---|---|
| `primary` `#12377B` | Azul institucional (color base, superficies oscuras) |
| `gold` `#E6AD09` | Dorado institucional (acentos, íconos, bordes) |
| `gold-deep` `#C49308` | Hover del dorado |
| `ink` `#1E1A17` | Texto base |
| `success` / `danger` | Estados de éxito y error |

## Fuente del contenido

El contenido sale de los documentos que entrega el programa: resoluciones, fichas
de docentes, planillas de laboratorios, etc. Esos archivos se guardan en `docs/`,
que está excluido del repo. Cuando llega información nueva, **el documento
vigente del programa manda** sobre lo que ya estaba publicado.

## Convenciones

- Para cambiar contenido, edita `profiles/escuela/`, no `src/`.
- En `config/navigation.ts` se cambian **etiquetas** del menú, no **rutas**
  (las define `src/router`).
- Mantén `npm run typecheck`, `npm run lint` y `npm run build` sin errores antes
  de publicar.

## Nota técnica: perfiles

El código nació como plantilla para varias escuelas: el contenido se lee del
*perfil* activo mediante el alias `@profile` (por defecto `profiles/escuela`,
configurable con `PROFILE=<carpeta>`). `profiles/_template/` es un perfil en
blanco de referencia. Para este sitio solo se usa `profiles/escuela/`.
