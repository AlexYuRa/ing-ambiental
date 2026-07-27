// Personal administrativo y técnico de la escuela.
// Fuente: docs/CONTENIDO MÍNIMO DE LAS PÁGINAS WEB... (tabla de administrativos).

export interface Administrativo {
  nombre: string;
  categoria: string;
  area: string;
}

export const administrativos: Administrativo[] = [
  {
    nombre: 'Ms. Mirian Marivel Miñano Guevara',
    categoria: 'Técnico Administrativo II STC',
    area: 'Secretaría de Escuela y URT EPIA',
  },
  {
    nombre: 'Eco. María Elena Olaya Sánchez',
    categoria: 'Técnico Administrativo',
    area: 'Secretaría de Departamento de Ingeniería Ambiental',
  },
  {
    nombre: 'Ing. Luis Antonio Ávalos Rodríguez',
    categoria: 'Técnico de Laboratorio',
    area: 'Laboratorio de Investigación de Aguas',
  },
  {
    nombre: 'Ing. Carlos Octavio Purizaca Jacinto',
    categoria: 'Técnico de Laboratorio',
    area: 'Laboratorio de Investigación y Desarrollo de Ciencias Ambientales',
  },
  {
    nombre: 'Ing. Carlos Alberto Valqui Mendoza',
    categoria: 'Técnico de Laboratorio',
    area: 'Laboratorio de Investigación de Residuos Sólidos y Peligrosos',
  },
];
