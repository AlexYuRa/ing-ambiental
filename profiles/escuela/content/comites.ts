// Comités del programa con miembros confirmados en el documento fuente.
// Los demás comités (Tutoría, Seguimiento al Egresado, Investigación,
// Responsabilidad Social) no tienen miembros listados en el documento todavía.

export interface MiembroComite {
  nombre: string;
  cargo: string;
}

export const comiteCalidad = {
  resolucion: 'Resolución Rectoral N.° 163-2026/UNT',
  miembros: [
    { nombre: 'Dra. Laura Isabel Gutiérrez Escarcena', cargo: 'Presidenta' },
    { nombre: 'Dr. Haniel Solís Muñoz', cargo: 'Secretario' },
    { nombre: 'Dra. Natalia del Pilar Díaz Díaz', cargo: 'Vocal 1' },
    { nombre: 'Est. Andrea Isabel Lachira Castillo', cargo: 'Estudiante' },
    { nombre: 'Ms. Mirian Marivel Miñano Guevara', cargo: 'Administrativo' },
    { nombre: 'Eco. María Elena Olaya Sánchez', cargo: 'Administrativo' },
  ] as MiembroComite[],
};

// COTECCU = Comité Técnico de Currículo.
export const comiteCurriculo = {
  resolucion: 'Resolución de Decanato N.° 081-2026-FIQ',
  miembros: [
    { nombre: 'Ms. Walter Moreno Eustaquio', cargo: 'Presidente' },
    { nombre: 'Dra. Natalia del Pilar Díaz Díaz', cargo: 'Secretaria' },
    { nombre: 'Dr. Elías Fernando Haro Aro', cargo: 'Miembro' },
    { nombre: 'Dr. Manuel Isaías Vera Herrera', cargo: 'Miembro' },
    { nombre: 'Dr. Medardo Alberto Quezada Álvarez', cargo: 'Miembro' },
    { nombre: 'Dra. Laura Isabel Gutiérrez Escarcena', cargo: 'Miembro' },
    { nombre: 'Ms. Jorge Luis Mendoza Bobadilla', cargo: 'Miembro' },
    { nombre: 'Dr. Modesto Lorenzo Vega Tang', cargo: 'Miembro' },
    { nombre: 'Ms. Mirian Marivel Miñano Guevara', cargo: 'Miembro administrativo' },
    { nombre: 'Eco. María Elena Olaya Sánchez', cargo: 'Miembro administrativo' },
    { nombre: 'Est. Andrea Isabel Lachira Castillo', cargo: 'Miembro estudiantil' },
    { nombre: 'Est. Rodrigo Alexander Viera Sánchez', cargo: 'Miembro estudiantil' },
  ] as MiembroComite[],
};
