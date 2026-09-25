// Laboratorios del programa: ubicación, aforo, responsables y contacto.
// Fuente: planilla de laboratorios que pasó el programa (no está en docs/).
// El número (`n`) es el que trae la planilla original; no hay un N.° 4 en la
// fuente, así que no se inventó uno.

import imgAguas from '../assets/laboratorios/aguas.webp';
import imgTecnologiasLimpias from '../assets/laboratorios/tecnologias-limpias.webp';
import imgResiduosSolidos from '../assets/laboratorios/residuos-solidos.webp';
import imgCienciasAmbientales from '../assets/laboratorios/ciencias-ambientales.webp';
import imgComputo from '../assets/laboratorios/computo.webp';

export interface Laboratorio {
  n: number;
  nombre: string;
  ubicacion: string;
  aforo: string;
  responsables: string[];
  correo?: string;
  telefono?: string;
  horarioAtencion?: string;
  // Ruta de la foto o null (usa un ícono de respaldo). Ver README.md en
  // profiles/escuela/assets/laboratorios/ para el nombre de archivo esperado.
  imagen?: string | null;
}

export const laboratorios: Laboratorio[] = [
  {
    n: 1,
    nombre: 'Laboratorio de Investigación en Aguas',
    ubicacion: 'Pabellón Ambiental, 1er piso',
    aforo: '16 personas',
    responsables: ['Gustavo Raúl Fernández Essenwanger', 'Luis Antonio Ávalos Rodríguez'],
    correo: 'liar@unitru.edu.pe',
    telefono: '922 630 851',
    horarioAtencion: 'Jueves y viernes, 08:00 a. m. a 09:00 a. m.',
    imagen: imgAguas,
  },
  {
    n: 2,
    nombre: 'Laboratorio de Investigación de Tecnologías Limpias y/o Emergentes',
    ubicacion: 'Pabellón Ambiental, 2do piso',
    aforo: '16 personas',
    responsables: ['Medardo Alberto Quezada Álvarez'],
    correo: 'liteli@unitru.edu.pe',
    telefono: '964 197 877',
    // TODO: confirmar que la foto corresponde a este laboratorio (asignada
    // por descarte / por el póster de biorreactor que sale en la imagen).
    imagen: imgTecnologiasLimpias,
  },
  {
    n: 3,
    nombre: 'Laboratorio de Investigación de Residuos Sólidos y Peligrosos',
    ubicacion: 'Pabellón Ambiental, 2do piso',
    aforo: '16 personas',
    responsables: ['Walter Moreno Eustaquio', 'Carlos Alberto Valqui Mendoza'],
    correo: 'lirsop@unitru.edu.pe',
    telefono: '969 819 999',
    imagen: imgResiduosSolidos,
  },
  {
    n: 5,
    nombre: 'Laboratorio de Investigación y Desarrollo en Ciencias Ambientales',
    ubicacion: 'Pabellón Ambiental, 1er piso',
    aforo: '16 personas',
    responsables: ['Medardo Alberto Quezada Álvarez', 'Carlos Octavio Purizaca Jacinto'],
    correo: 'lideca@unitru.edu.pe',
    telefono: '964 197 877',
    imagen: imgCienciasAmbientales,
  },
  {
    n: 6,
    nombre: 'Laboratorio de Cómputo',
    ubicacion: 'Pabellón Ambiental, 3er piso',
    aforo: '30 personas',
    responsables: ['Elías Haro Aro'],
    telefono: '957 979 893',
    // TODO: confirmar que la foto corresponde a este laboratorio (asignada
    // por descarte: es la única que quedaba sin nombre claro).
    imagen: imgComputo,
  },
];
