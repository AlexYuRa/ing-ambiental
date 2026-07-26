import type { SiteConfig } from '@/profile-types';

/**
 * Identidad del programa de estudios. Editar este archivo (y `branding.ts`) cubre
 * la mayor parte de la re-tematización para un programa nuevo.
 *
 * Los textos de abajo son PLANTILLA: describen qué va en cada campo. Reemplázalos
 * por los datos de tu programa.
 */
export const site: SiteConfig = {
  programa: {
    nombre: 'Escuela Académico Profesional de Ingeniería Ambiental',
    nombreCorto: 'Ingeniería Ambiental',
  },
  universidad: {
    nombre: 'Universidad Nacional de Trujillo',
    siglas: 'UNT',
    url: 'https://www.unitru.edu.pe/',
    // Dominio para acotar el buscador del navbar (site:dominio). Déjalo vacío
    // para una búsqueda general en Google. TODO: confirmar el dominio exacto.
    dominio: '',
  },
  facultad: 'Facultad de Ingeniería Química',

  // Denominación del tipo de unidad académica. Se usa en subtítulos genéricos.
  denominacion: 'Escuela Profesional',

  // Wordmark del navbar: se muestra en dos líneas (línea 1 en azul, línea 2 en dorado).
  wordmark: { linea1: 'Ingeniería', linea2: 'Ambiental' },

  tagline:
    'Formando ingenieros ambientales con ética y calidad, comprometidos con el desarrollo sostenible de la región y del país.',

  hero: {
    eyebrow: 'Escuela Profesional de',
    titulo: { linea1: 'Ingeniería', linea2: 'Ambiental' },
    descripcion:
      'Formamos ingenieros capaces de analizar, diseñar e implementar soluciones sostenibles frente a los problemas de calidad del aire, agua y suelo, con base científica, tecnológica y ética, en la Universidad Nacional de Trujillo.',
    ctas: {
      primary: { label: 'Ver Plan de Estudios', to: '/academico/malla-curricular' },
      secondary: { label: 'Perfiles académicos', to: '/academico/perfiles' },
    },
  },

  // TODO: confirmar el estado real de acreditación antes de activar el sello.
  // Hoy solo consta un Comité de Autoevaluación y Acreditación conformado
  // (Resolución Rectoral N° 163-2026/UNT); no hay constancia de acreditación
  // otorgada, así que el sello queda oculto (`mostrarSello: false`).
  acreditacion: {
    entidad: 'SINEACE',
    estado: 'en-proceso',
    texto: 'Proceso de autoevaluación y acreditación en curso',
    mostrarSello: false,
  },

  // Cifras reales del programa (fuentes en docs/).
  cifras: [
    { numero: '20', etiqueta: 'Años de trayectoria', sub: 'Formando ingenieros ambientales desde 2006' },
    { numero: '17', etiqueta: 'Docentes', sub: 'Con grado de doctor y magíster' },
    { numero: '3', etiqueta: 'Laboratorios especializados', sub: 'Aguas, ciencias ambientales y residuos sólidos' },
  ],

  // Nombre y cargo son datos oficiales (Director de Escuela). El mensaje de
  // bienvenida y el video son palabras suyas: quedan pendientes hasta que el
  // director los proporcione, no se redactan por su cuenta.
  decana: {
    nombre: 'Dr. Luis Orlando Moncada Albitres',
    cargo: 'Director de la Escuela Profesional de Ingeniería Ambiental',
    mensaje: 'Pendiente: mensaje de bienvenida del Director de Escuela.',
    video: { youtubeId: '', start: 0 },
  },

  enlaces: {
    libroReclamaciones: 'https://reclamos.servicios.gob.pe/?institution_id=247',
    bolsaTrabajo: '#',
  },

  enlacesInstitucionales: [
    { label: 'Guía del Postulante', url: 'https://www.admisionunt.info/guiapostulante' },
    { label: 'Enlace institucional 2', url: '#' },
    { label: 'Enlace institucional 3', url: '#' },
  ],
};
