// Plana docente. Cada docente:
//   - grado: el cargo/grado académico (Doctor, Magíster, Ingeniero…)
//   - departamento: el departamento académico al que pertenece (para filtrar/categorizar)
//   - cursoPrincipal: el curso/área principal que aparece en el FRENTE de la card
//   - especialidades: lista que aparece al voltear la card (reverso). Agrega 2-3 por docente.
//   - foto: ruta de la foto o null (muestra silueta placeholder)
//   - fotoPosicion: (opcional) encuadre de la foto (CSS object-position, ej. "center 25%").
//     Súbelo (menos %) si la foto tapa lo importante por abajo, bájalo (más %) si lo tapa
//     por arriba. Si no se define, usa "center 25%" por defecto.
//   - investigador: true si el docente es investigador (habilita el filtro "Investigadores")
//   - categoriaInvestigacion: categoría/nivel de investigación (p. ej. RENACYT). Solo aplica
//     si investigador === true; se muestra como distintivo en la card.
//   - condicion: régimen laboral del docente, "Nombrado" o "Contratado". Se muestra como
//     etiqueta en la card.
//
// Fuente: docs/CONTENIDO MÍNIMO DE LAS PÁGINAS WEB... (tabla de docentes, código + cat-mod).
// Nombrado = categorías Principal/Asociado/Auxiliar (P/As/Ax + DE/TC); Contratado = "Contratado ...".
//
// PENDIENTE (no está en el documento fuente, no se inventó):
//   - cursoPrincipal / especialidades de cada docente (solo se conoce su rol de autoridad,
//     cuando aplica; el resto queda con una descripción general del departamento).
//   - fotos individuales: solo hay foto confirmada del Director de Escuela
//     (director-escuela.webp). El otro asset disponible, IMG_7617_resultado.webp,
//     no tiene confirmado a qué docente corresponde, así que no se asignó a nadie.
//   - investigador / categoriaInvestigacion (RENACYT): no consta en el documento.

import fotoDirectorEscuela from '../assets/docentes/director-escuela.webp';

const DEPARTAMENTO = 'Departamento Académico de Ingeniería Ambiental';

export const docentes = [
  {
    nombre: 'Dr. Luis Orlando Moncada Albitres',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Dirección de la Escuela Profesional de Ingeniería Ambiental',
    especialidades: [],
    foto: fotoDirectorEscuela,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Manuel Isaías Vera Herrera',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Dirección del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Ms. Walter Moreno Eustaquio',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Medardo Alberto Quezada Álvarez',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Ms. Jorge Luis Mendoza Bobadilla',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dra. Natalia del Pilar Díaz Díaz',
    grado: 'Doctora',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dra. Laura Isabel Gutiérrez Escarcena',
    grado: 'Doctora',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Elías Fernando Haro Aro',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Modesto Lorenzo Vega Tang',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Haniel Solís Muñoz',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Ms. Carlos Antonio Pérez Calderón',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Ms. Alberto Mariano Castillo Ramírez',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Dr. Gustavo Raúl Fernández Essenwanger',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Dr. Alex Antenor Benites Aliaga',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Ms. Alois Silva Ugaz',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Ms.C. Betsy Melany Lázaro Pérez',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Mg. Javier Francisco Urquiaga Ríos',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Docente del Departamento Académico de Ingeniería Ambiental',
    especialidades: [],
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
];
