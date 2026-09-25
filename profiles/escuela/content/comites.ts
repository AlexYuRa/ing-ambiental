// Comités del programa y la resolución que conforma cada uno.
// Fuente: docs/actuyalizar pag. web.doc (secciones III a VIII). Los nombres se
// escriben "Nombres Apellidos"; el título académico de cada persona es el que
// figura en la resolución del comité (el documento es la fuente de verdad, aunque
// una misma persona aparezca con títulos distintos en comités distintos).

export interface MiembroComite {
  nombre: string;
  cargo: string;
}

export interface Comite {
  /** Función del comité (texto breve de presentación; no viene del documento). */
  descripcion: string;
  resolucion: string;
  /** Fecha de la resolución, p. ej. '8 de julio de 2026'. Opcional: el documento no la trae. */
  fecha?: string;
  /** cargo 'Miembro' se muestra sin etiqueta; cualquier otro cargo, como etiqueta. */
  miembros: MiembroComite[];
}

export const comiteCalidad: Comite = {
  descripcion:
    'Conduce la autoevaluación y la mejora continua del programa, con miras a sus procesos de acreditación.',
  resolucion: 'Resolución de Decanato N.° 482-2026-FIQ/UNT',
  miembros: [
    { nombre: 'Ms. Walter Moreno Eustaquio', cargo: 'Presidente' },
    { nombre: 'Dr. Elías Fernando Haro Aro', cargo: 'Secretario' },
    { nombre: 'Dr. Haniel Solís Muñoz', cargo: 'Miembro docente' },
    { nombre: 'Est. Juan Francisco Díaz Bazán', cargo: 'Miembro estudiante' },
    { nombre: 'Ms. Mirian Marivel Miñano Guevara', cargo: 'Administrativo' },
    { nombre: 'Tec. Eva Sara Herrera Valle', cargo: 'Administrativo' },
  ],
};

// COTECCU = Comité Técnico de Currículo.
export const comiteCurriculo: Comite = {
  descripcion:
    'Revisa, actualiza y da seguimiento al plan de estudios y a la malla curricular del programa.',
  resolucion: 'Resolución de Decanato N.° 519-2026-FAC-FIQ/UNT',
  miembros: [
    { nombre: 'Ms. Elías Fernando Haro Aro', cargo: 'Presidente' },
    { nombre: 'Dra. Natalia del Pilar Díaz Díaz', cargo: 'Secretaria' },
    { nombre: 'Dr. Walter Moreno Eustaquio', cargo: 'Miembro' },
    { nombre: 'Dr. Manuel Isaías Vera Herrera', cargo: 'Miembro' },
    { nombre: 'Dr. Medardo Alberto Quezada Álvarez', cargo: 'Miembro' },
    { nombre: 'Dr. Haniel Solís Muñoz', cargo: 'Miembro' },
    { nombre: 'Ms. Jorge Luis Mendoza Bobadilla', cargo: 'Miembro' },
    { nombre: 'Dr. Modesto Lorenzo Vega Tang', cargo: 'Miembro' },
    { nombre: 'Ms. Mirian Marivel Miñano Guevara', cargo: 'Miembro administrativo' },
    { nombre: 'Tec. Eva Sara Herrera Valle', cargo: 'Miembro administrativo' },
    { nombre: 'Est. Andrea Isabel Lachira Castillo', cargo: 'Miembro estudiantil' },
    { nombre: 'Est. Rodrigo Alexander Viera Sánchez', cargo: 'Miembro estudiantil' },
  ],
};

// Transcrito tal cual de la resolución (emitida antes del cambio de Director
// de Escuela): figura el Dr. Moncada como presidente.
export const comiteTutoria: Comite = {
  descripcion:
    'Acompaña a los estudiantes en su desarrollo académico y personal a lo largo de su formación.',
  resolucion: 'Resolución Directoral N.° 113-2026-EPIA/FIQ',
  miembros: [
    { nombre: 'Dr. Luis Orlando Moncada Albitres', cargo: 'Presidente' },
    { nombre: 'Docentes tutores por ciclo', cargo: 'Designados por el Dpto. Académico de Ing. Ambiental' },
    { nombre: 'Ms. Walter Moreno Eustaquio', cargo: 'Coordinador de Tutoría' },
    { nombre: 'Dra. Laura Isabel Gutiérrez Escarcena', cargo: 'Presidenta del Comité de Calidad EPIA' },
    { nombre: 'Est. Mirian Alvites Castañeda', cargo: 'Representante estudiantil (Presidenta del CEIAM)' },
    { nombre: 'Lic. Yuly Raquel Aredo Zavaleta', cargo: 'Representante de Bienestar Universitario' },
  ],
};

export const comiteInvestigacion: Comite = {
  descripcion:
    'Promueve y da seguimiento a la investigación que desarrollan docentes y estudiantes del programa.',
  resolucion: 'Resolución de Decanato N.° 541-2026-FIQ/UNT',
  miembros: [
    { nombre: 'Dr. Medardo Alberto Quezada Álvarez', cargo: 'Miembro' },
    { nombre: 'Mg. Jorge Luis Mendoza Bobadilla', cargo: 'Miembro' },
    { nombre: 'Dr. Gustavo Raúl Fernández Essenwanger', cargo: 'Miembro' },
  ],
};

export const comiteSeguimientoEgresado: Comite = {
  descripcion:
    'Mantiene el vínculo con los egresados y recoge información sobre su inserción y desempeño profesional.',
  resolucion: 'Resolución de Decanato N.° 540-2026-FIQ/UNT',
  miembros: [
    { nombre: 'Mg. Javier Francisco Urquiaga Ríos', cargo: 'Miembro' },
    { nombre: 'Mg. Betsy Melany Lázaro Pérez', cargo: 'Miembro' },
    { nombre: 'Dr. Daniel Alfredo Cribilleros Ríos', cargo: 'Miembro' },
  ],
};

export const comiteResponsabilidadSocial: Comite = {
  descripcion:
    'Impulsa las acciones de responsabilidad social y ambiental del programa con la comunidad.',
  resolucion: 'Resolución de Decanato N.° 539-2026-FIQ/UNT',
  miembros: [
    { nombre: 'Dra. Laura Isabel Gutiérrez Escarcena', cargo: 'Miembro' },
    { nombre: 'Ms. Alberto Mariano Castillo Ramírez', cargo: 'Miembro' },
    { nombre: 'Dr. Haniel Solís Muñoz', cargo: 'Miembro' },
  ],
};
