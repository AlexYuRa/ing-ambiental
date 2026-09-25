import type { SeoConfig } from '@/profile-types';

// Estos datos se escriben en el <head> de index.html al compilar (vite.config.ts),
// así las vistas previas al compartir el enlace (WhatsApp, Facebook, etc.), que
// no ejecutan JavaScript, muestran el título, la descripción y la imagen reales.
export const seo: SeoConfig = {
  title: 'Ingeniería Ambiental | Universidad Nacional de Trujillo',
  description:
    'Escuela Profesional de Ingeniería Ambiental de la Universidad Nacional de Trujillo (UNT), acreditada por ICACIT. Plan de estudios, admisión, docentes e investigación.',
  lang: 'es',
  url: 'https://ambiental.unitru.edu.pe/',
  siteName: 'Ingeniería Ambiental · UNT',
  image: 'og-image.jpg',
  locale: 'es_PE',
};
