// Noticias y eventos institucionales — editar aquí para actualizar el feed.
// Fuente: docs/actuyalizar pag. web.doc (sección XVII). El documento no trae
// fechas: `fecha`/`fechaFormateada` son opcionales y, si faltan, no se muestran.
//   - slug:      identificador de la URL de detalle (/noticias/<slug>)
//   - resumen:   texto corto de la tarjeta
//   - contenido: párrafos de la página de detalle
//   - imagen:    portada (tarjeta y detalle)
//   - galeria:   todas las fotos de la noticia (incluida la portada)
import aniversario01 from '../assets/noticias/aniversario-20-anios/01.webp';
import aniversario02 from '../assets/noticias/aniversario-20-anios/02.webp';
import aniversario03 from '../assets/noticias/aniversario-20-anios/03.webp';
import aniversario04 from '../assets/noticias/aniversario-20-anios/04.webp';
import denuncias01 from '../assets/noticias/capacitacion-procedimiento-denuncias/01.webp';
import denuncias02 from '../assets/noticias/capacitacion-procedimiento-denuncias/02.webp';
import denuncias03 from '../assets/noticias/capacitacion-procedimiento-denuncias/03.webp';
import nivelacion01 from '../assets/noticias/programa-nivelacion-academica-2026/01.webp';
import nivelacion02 from '../assets/noticias/programa-nivelacion-academica-2026/02.webp';

export interface Noticia {
  id: number;
  slug: string;
  categoria: string;
  categoriaColor: string;
  titulo: string;
  resumen: string;
  contenido: string[];
  fecha?: string;
  fechaFormateada?: string;
  imagen: string;
  galeria: string[];
}

export const noticias: Noticia[] = [
  {
    id: 1,
    slug: 'aniversario-20-anios',
    categoria: 'Institucional',
    categoriaColor: 'bg-[#12377B] text-white',
    titulo: '20 años de la Escuela Profesional de Ingeniería Ambiental',
    resumen:
      'Celebramos 20 años de trayectoria de la Escuela Profesional de Ingeniería Ambiental con una ceremonia en el auditorio de nuestra querida Escuela.',
    contenido: [
      'Se llevó a cabo, en el auditorio de nuestra querida Escuela, la celebración de los 20 años de trayectoria de la Escuela Profesional de Ingeniería Ambiental.',
    ],
    imagen: aniversario01,
    galeria: [aniversario01, aniversario02, aniversario03, aniversario04],
  },
  {
    id: 2,
    slug: 'capacitacion-procedimiento-denuncias',
    categoria: 'Capacitación',
    categoriaColor: 'bg-gold text-ink',
    titulo: 'Capacitación sobre el procedimiento de denuncias',
    resumen:
      'El área de Defensoría Universitaria socializó el procedimiento de denuncias con los miembros de la Escuela Profesional de Ingeniería Ambiental.',
    contenido: [
      'Se brindó la socialización del procedimiento de denuncias por parte del área de Defensoría Universitaria a los miembros de la Escuela Profesional de Ingeniería Ambiental: alumnos, docentes y personal administrativo.',
    ],
    imagen: denuncias01,
    galeria: [denuncias01, denuncias02, denuncias03],
  },
  {
    id: 3,
    slug: 'programa-nivelacion-academica-2026',
    categoria: 'Académico',
    categoriaColor: 'bg-primary text-white',
    titulo: 'Programa de Nivelación Académica 2026',
    resumen:
      'Programa de la Escuela para que los estudiantes recuperen, refuercen o adquieran los conocimientos y habilidades esperados para su grado o curso.',
    contenido: [
      'El Programa de Nivelación Académica 2026 de la Escuela Profesional de Ingeniería Ambiental está diseñado para ayudar a los estudiantes a recuperar, reforzar o adquirir conocimientos y habilidades que no han asimilado por completo, permitiéndoles alcanzar el nivel esperado para su grado o curso.',
      'El programa se desarrolla en la sede de Trujillo y en la filial Santiago de Chuco.',
    ],
    imagen: nivelacion01,
    galeria: [nivelacion01, nivelacion02],
  },
];

export const rutaNoticia = (noticia: Pick<Noticia, 'slug'>) => `/noticias/${noticia.slug}`;
