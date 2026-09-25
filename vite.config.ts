import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Perfil de escuela activo (build-time). Crear una escuela nueva = añadir
// `profiles/<slug>/` y construir con PROFILE=<slug>. El slug de deploy
// (outDir/base) es independiente del perfil y se mantiene fijo.
const PROFILE = process.env.PROFILE ?? 'escuela';

// Slug del theme de WordPress donde se publica el build (carpeta dist).
// Cámbialo aquí (o vía `THEME_SLUG=<slug> npm run build`) si tu programa se
// publica en otro theme. Es independiente del PROFILE.
const THEME_SLUG = process.env.THEME_SLUG ?? 'educacion-primaria';

// Subconjunto de SeoConfig (src/profile-types.ts) que usa el plugin. Se declara
// aquí porque la config de Node (tsconfig.node.json) no incluye src/.
interface SeoConfig {
  title: string;
  description: string;
  lang: string;
  url?: string;
  siteName?: string;
  image?: string;
  locale?: string;
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Escribe en el <head> de index.html el título, la descripción y las etiquetas
 * Open Graph/Twitter del perfil (config/seo.ts). Las vistas previas al compartir
 * el enlace (WhatsApp, Facebook…) no ejecutan JavaScript: solo leen este HTML.
 */
function seoHead(seo: SeoConfig, base: string): Plugin {
  return {
    name: 'profile-seo-head',
    transformIndexHtml(html) {
      const title = escapeAttr(seo.title);
      const description = escapeAttr(seo.description);
      const tags = [
        `<title>${title}</title>`,
        `<meta name="description" content="${description}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta name="twitter:title" content="${title}" />`,
        `<meta name="twitter:description" content="${description}" />`,
      ];
      if (seo.siteName) tags.push(`<meta property="og:site_name" content="${escapeAttr(seo.siteName)}" />`);
      if (seo.locale) tags.push(`<meta property="og:locale" content="${escapeAttr(seo.locale)}" />`);
      if (seo.url) {
        tags.push(`<meta property="og:url" content="${escapeAttr(seo.url)}" />`);
        tags.push(`<link rel="canonical" href="${escapeAttr(seo.url)}" />`);
      }
      if (seo.url && seo.image) {
        const imageUrl = escapeAttr(new URL(`${base}${seo.image}`, seo.url).href);
        tags.push(
          `<meta property="og:image" content="${imageUrl}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="${escapeAttr(seo.siteName ?? seo.title)}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:image" content="${imageUrl}" />`,
        );
      }
      return html
        .replace(/<html lang="[^"]*">/, `<html lang="${escapeAttr(seo.lang)}">`)
        .replace('<!--seo-head-->', tags.join('\n    '));
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {
  const isVercel = process.env.VERCEL === '1';
  const base = isVercel || command === 'serve' ? '/' : `/wp-content/themes/${THEME_SLUG}/dist/`;
  // SEO del perfil activo (se empaqueta junto con esta config).
  const { seo } = (await import(`./profiles/${PROFILE}/config/seo.ts`)) as { seo: SeoConfig };

  return {
    plugins: [react(), seoHead(seo, base)],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@profile': fileURLToPath(new URL(`./profiles/${PROFILE}`, import.meta.url)),
      },
    },
    base,
    build: {
      outDir: isVercel ? 'dist' : `../wp-content/themes/${THEME_SLUG}/dist`,
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Agrupa las dependencias de terceros en chunks separados y cacheables,
          // así no se redescargan cuando cambia el código de la app.
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
    }
  };
})