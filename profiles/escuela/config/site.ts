import type { SiteConfig } from '@/profile-types';
import fotoDirectorEscuela from '../assets/docentes/ELIAS_HARO.webp';

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
    eyebrow: 'Programa de Estudios de',
    titulo: { linea1: 'Ingeniería', linea2: 'Ambiental' },
    descripcion:
      'Formamos ingenieros capaces de analizar, diseñar e implementar soluciones sostenibles frente a los problemas de calidad del aire, agua y suelo, con base científica, tecnológica y ética, en la Universidad Nacional de Trujillo.',
    ctas: {
      primary: { label: 'Ver Plan de Estudios', to: '/academico/malla-curricular' },
      secondary: { label: 'Perfiles académicos', to: '/academico/perfiles' },
    },
  },

  // Acreditado por ICACIT en diciembre de 2019; reconocimiento oficial del
  // SINEACE mediante Resolución de Presidencia N.° 047-2020-DEA ESU
  // (21.02.2020). El Comité de Autoevaluación y Acreditación conformado en
  // 2026 (RR N.° 163-2026/UNT) es un nuevo ciclo de autoevaluación, no una
  // acreditación pendiente.
  acreditacion: {
    entidad: 'ICACIT',
    estado: 'acreditada',
    texto: 'Acreditada por ICACIT · Reconocida por SINEACE',
    mostrarSello: true,
  },

  // Cifras reales del programa (fuentes en docs/).
  cifras: [
    { numero: '20', etiqueta: 'Años de trayectoria', sub: 'Formando ingenieros ambientales desde 2006' },
    { numero: '16', etiqueta: 'Docentes', sub: 'Con grado de doctor y magíster' },
    { numero: '4', etiqueta: 'Laboratorios especializados', sub: 'Aguas, tecnologías limpias, residuos sólidos y ciencias ambientales' },
  ],

  // Director de Escuela y su mensaje de bienvenida (texto literal de
  // docs/actuyalizar pag. web.doc, un párrafo por elemento). El video queda
  // pendiente hasta que el director lo proporcione.
  decana: {
    nombre: 'Dr. Elías Fernando Haro Aro',
    cargo: 'Director de la Escuela Profesional de Ingeniería Ambiental',
    mensaje: [
      'Estimada comunidad académica, estudiantes, investigadores y visitantes:',
      'Es un honor darles la más cordial bienvenida al portal web oficial de la Escuela Profesional de Ingeniería Ambiental. Este espacio digital ha sido diseñado para ser un puente de comunicación, transparencia y difusión de nuestro quehacer académico, científico y de proyección social.',
      'Nuestra misión es formar profesionales de excelencia, capaces de liderar la gestión, conservación y restauración del entorno natural con una visión sistémica y un profundo sentido ético. Ante la crisis climática y los desafíos ecológicos globales y locales, el rol del ingeniero ambiental es hoy más crucial que nunca. Por ello, combinamos una rigurosa preparación científica y tecnológica con el fomento del pensamiento crítico y la innovación, asegurando que nuestros egresados propongan soluciones viables y sostenibles para el sector público y privado.',
      'A nuestros estudiantes, los invitamos a aprovechar al máximo los laboratorios, proyectos de investigación y convenios que ponemos a su disposición. A los futuros postulantes, les abrimos las puertas a una de las disciplinas con mayor impacto social y relevancia de nuestro tiempo.',
      'Les invito a explorar las diferentes secciones de nuestra página para conocer nuestro plan de estudios, plana docente, actividades académicas y los logros que consolidan nuestro compromiso con el desarrollo sostenible.',
      '¡Bienvenidos a nuestra comunidad!',
    ],
    video: { youtubeId: '', start: 0 },
    // Mientras no haya video, se muestra su foto completa (object-contain) en ese lugar.
    foto: fotoDirectorEscuela,
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
