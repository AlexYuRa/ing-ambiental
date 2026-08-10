import { BookOpen, Users, FlaskConical, GraduationCap, Handshake, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import imgAguas from '../assets/laboratorios/aguas.webp';
import imgResiduosSolidos from '../assets/laboratorios/residuos-solidos.webp';
import imgCienciasAmbientales from '../assets/laboratorios/ciencias-ambientales.webp';

// Contenido de la página de Inicio (accesos rápidos + ambientes destacados).

export interface AccesoRapido {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  link: string;
}

export const accesosRapidos: AccesoRapido[] = [
  { titulo: 'Perfiles Académicos', descripcion: 'Perfil de ingreso y de egreso del programa.', icono: UserCheck, link: '/academico/perfiles' },
  { titulo: 'Plan de Estudios', descripcion: 'Malla curricular actualizada por ciclos.', icono: BookOpen, link: '/academico/malla-curricular' },
  { titulo: 'Plana Docente', descripcion: 'Profesores e investigadores comprometidos.', icono: Users, link: '/organizacion/docentes' },
  { titulo: 'Investigación', descripcion: 'Líneas, proyectos y publicaciones activas.', icono: FlaskConical, link: '/investigacion/proyectos' },
  { titulo: 'Grados y Títulos', descripcion: 'Pasos y requisitos para tu titulación.', icono: GraduationCap, link: '/academico/titulacion' },
  { titulo: 'Convenios', descripcion: 'Alianzas con instituciones y empresas aliadas.', icono: Handshake, link: '/academico/convenios' },
];

export interface Ambiente {
  badge: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

// Nombres y ubicación reales (planilla de laboratorios que pasó el programa).
// El detalle completo (aforo, responsables, contacto, horario) vive en
// content/laboratorios.ts, para la página /academico/laboratorios. Aquí solo
// van 3 laboratorios como destacados del Inicio (elegí Aguas, Residuos Sólidos
// y Ciencias Ambientales; Tecnologías Limpias y Cómputo quedan solo en la
// lista completa — dime si prefieres otra selección de 3).
//
export const ambientes: Ambiente[] = [
  {
    badge: 'Laboratorio',
    titulo: 'Laboratorio de Investigación en Aguas',
    descripcion:
      'Ubicado en el Pabellón Ambiental, dedicado al análisis y monitoreo de la calidad del agua, usado en la formación práctica de los estudiantes y en proyectos de investigación del programa.',
    imagen: imgAguas,
    alt: 'Laboratorio de Investigación en Aguas',
  },
  {
    badge: 'Laboratorio',
    titulo: 'Laboratorio de Investigación de Residuos Sólidos y Peligrosos',
    descripcion:
      'Ubicado en el Pabellón Ambiental, dedicado al estudio y manejo de residuos sólidos y peligrosos, usado en la formación práctica y en la investigación del programa.',
    imagen: imgResiduosSolidos,
    alt: 'Laboratorio de Investigación de Residuos Sólidos y Peligrosos',
  },
  {
    badge: 'Laboratorio',
    titulo: 'Laboratorio de Investigación y Desarrollo en Ciencias Ambientales',
    descripcion:
      'Ubicado en el Pabellón Ambiental, espacio para la investigación aplicada en ciencias ambientales, donde estudiantes y docentes desarrollan proyectos y prácticas del programa.',
    imagen: imgCienciasAmbientales,
    alt: 'Laboratorio de Investigación y Desarrollo en Ciencias Ambientales',
  },
];
