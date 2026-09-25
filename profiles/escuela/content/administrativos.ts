// Personal administrativo y técnico de la escuela.
// Fuente: docs/CONTENIDO MÍNIMO DE LAS PÁGINAS WEB... (tabla de administrativos),
// actualizada con docs/actuyalizar pag. web.doc (sección XV).

import fotoPurizacaJacinto from '../assets/administrativos/CARLOS_PURIZACA.webp';
import fotoValquiMendoza from '../assets/administrativos/CARLOS_VALQUI.webp';

export interface Administrativo {
  nombre: string;
  categoria: string;
  area: string;
  /** Foto vertical (idealmente 2:3) o null para la silueta. */
  foto?: string | null;
}

export const administrativos: Administrativo[] = [
  {
    nombre: 'Ms. Mirian Marivel Miñano Guevara',
    categoria: 'Técnico Administrativo II STC',
    area: 'Secretaría de Escuela y URT EPIA',
  },
  {
    nombre: 'Tec. Eva Sara Herrera Valle',
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
    foto: fotoPurizacaJacinto,
  },
  {
    nombre: 'Ing. Carlos Alberto Valqui Mendoza',
    categoria: 'Técnico de Laboratorio',
    area: 'Laboratorio de Investigación de Residuos Sólidos y Peligrosos',
    foto: fotoValquiMendoza,
  },
];
