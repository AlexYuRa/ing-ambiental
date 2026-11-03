// Personal administrativo y técnico de la escuela.
// Fuente: docs/ADMINISTRATIVOS AMBIENTAL.md (nov. 2026), sobre la base anterior de
// docs/CONTENIDO MÍNIMO DE LAS PÁGINAS WEB... y docs/actuyalizar pag. web.doc (sección XV).
// Las descripciones de laboratorio que traen las fichas se usan en laboratorios.ts.

// Mirian Miñano y Eva Herrera van sin foto (silueta) por indicación del programa.
import fotoAvalosRodriguez from '../assets/administrativos/LUIS_AVALOS.webp';
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
    categoria: 'Técnico Administrativo',
    area: 'Secretaría de Escuela y URT EPIA',
  },
  {
    nombre: 'Tec. Eva Sara Herrera Valle',
    categoria: 'Secretaria',
    area: 'Departamento Académico de Ingeniería Ambiental',
  },
  {
    nombre: 'Ing. Luis Antonio Ávalos Rodríguez',
    categoria: 'Ingeniero de Laboratorio',
    area: 'Laboratorio de Investigación de Aguas',
    foto: fotoAvalosRodriguez,
  },
  {
    nombre: 'Ing. Carlos Octavio Purizaca Jacinto',
    categoria: 'Técnico de Laboratorio',
    area: 'Laboratorio de Investigación y Desarrollo de Ciencias Ambientales',
    foto: fotoPurizacaJacinto,
  },
  {
    nombre: 'Ing. Carlos Alberto Valqui Mendoza',
    categoria: 'Ingeniero de Laboratorio',
    area: 'Laboratorio de Investigación de Residuos Sólidos y Peligrosos',
    foto: fotoValquiMendoza,
  },
];
