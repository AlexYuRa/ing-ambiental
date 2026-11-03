// Plana docente. Cada docente:
//   - grado: etiqueta corta del grado (Doctor, Magíster…) que aparece en el FRENTE de la card
//   - gradoAcademico: (opcional) grado completo, se muestra en el reverso
//   - departamento: el departamento académico al que pertenece (para filtrar/categorizar)
//   - cursoPrincipal: cargo en la escuela. Si empieza con "Docente del…" se trata como
//     genérico y no se muestra en el reverso (el departamento ya aparece).
//   - cursos: (opcional) cursos a cargo, se listan en el reverso
//   - especialidades: lista que aparece al voltear la card (reverso)
//   - perfil: (opcional) trayectoria / otra información relevante, párrafo en el reverso
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
// Fuente: docs/Docentes.md (fichas llenadas por cada docente, nov. 2026), sobre la base
// anterior de docs/CONTENIDO MÍNIMO DE LAS PÁGINAS WEB...
//
// Notas:
//   - Moncada, Mendoza, Quezada y Solís enviaron la ficha vacía: se mantienen como estaban.
//   - Benites no figura en Docentes.md; se mantiene con la información previa.
//   - oculto: (opcional) true para no mostrar al docente en la web (p. ej. ficha incompleta).
//     Urquiaga está oculto hasta tener su ficha.
//   - Carlos Antonio Pérez Calderón ya no tiene cargo (la ficha pide retirarlo): no se lista.
//   - Docentes.md escribe "Merardo"; se mantiene "Medardo", que es como figura en sus
//     publicaciones y en la página de laboratorios.
//   - Cada docente tiene una segunda toma (NOMBRE_1.webp) sin usar.

import fotoHaroAro from '../assets/docentes/ELIAS_HARO.webp';
import fotoMoncadaAlbitres from '../assets/docentes/LUIS_MONCADA.webp';
import fotoVeraHerrera from '../assets/docentes/MANUEL_VERA.webp';
import fotoMorenoEustaquio from '../assets/docentes/WALTER_MORENO.webp';
import fotoQuezadaAlvarez from '../assets/docentes/MERARDO_QUEZADA.webp';
import fotoMendozaBobadilla from '../assets/docentes/JORGE_MENDOZA.webp';
import fotoDiazDiaz from '../assets/docentes/NATALIA_PILAR.webp';
import fotoGutierrezEscarcena from '../assets/docentes/LAURA_GUTIERREZ.webp';
import fotoVegaTang from '../assets/docentes/MODESTO_VEGA.webp';
import fotoSolisMunoz from '../assets/docentes/HANIEL_SOLIS.webp';
import fotoCastilloRamirez from '../assets/docentes/ALBERTO_CASTILLO.webp';
import fotoFernandezEssenwanger from '../assets/docentes/GUSTAVO_FERNÁNDEZ.webp';
import fotoSilvaUgaz from '../assets/docentes/ALOIS_SILVA.webp';
import fotoLazaroPerez from '../assets/docentes/BEBSI_LAZARO.webp';
import fotoAlexBenites from '../assets/docentes/ALEX-BENITES.webp';

const DEPARTAMENTO = 'Departamento Académico de Ingeniería Ambiental';
const DOCENTE_GENERICO = 'Docente del Departamento Académico de Ingeniería Ambiental';
const AUXILIAR_TC = 'Docente Auxiliar a Tiempo Completo';

export const docentes = [
  {
    nombre: 'Dr. Elías Fernando Haro Aro',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Director de la Escuela Profesional de Ingeniería Ambiental',
    cursos: ['Saneamiento Ambiental', 'Tesis I', 'Trabajo de Investigación'],
    especialidades: [],
    foto: fotoHaroAro,
    fotoPosicion: 'center 15%',
    investigador: true,
    categoriaInvestigacion: 'RENACYT Nivel VII',
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Luis Orlando Moncada Albitres',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    especialidades: [],
    foto: fotoMoncadaAlbitres,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Manuel Isaías Vera Herrera',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Director del Departamento Académico de Ingeniería Ambiental',
    cursos: ['Control de Contaminación Atmosférica', 'Trabajo de Investigación'],
    especialidades: [],
    foto: fotoVeraHerrera,
    fotoPosicion: 'center 15%',
    investigador: true,
    categoriaInvestigacion: 'Junior',
    condicion: 'Nombrado',
  },
  {
    nombre: 'Ms. Walter Moreno Eustaquio',
    grado: 'Magíster',
    gradoAcademico: 'Maestro en Ciencias Económicas',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Presidente del Comité de Calidad',
    cursos: ['Balance de Materia y Energía', 'Trabajo de Investigación'],
    especialidades: [],
    foto: fotoMorenoEustaquio,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Medardo Alberto Quezada Álvarez',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    especialidades: [],
    foto: fotoQuezadaAlvarez,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Ms. Jorge Luis Mendoza Bobadilla',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    especialidades: [],
    foto: fotoMendozaBobadilla,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dra. Natalia del Pilar Díaz Díaz',
    grado: 'Doctora',
    gradoAcademico: 'Doctora en Planificación y Gestión',
    departamento: DEPARTAMENTO,
    cursoPrincipal: AUXILIAR_TC,
    cursos: [
      'Saneamiento Ambiental',
      'Prácticas Preprofesionales',
      'Instrumentos de Gestión Ambiental',
      'Auditoría Ambiental',
    ],
    especialidades: ['Gestión y supervisión ambiental'],
    perfil:
      'Ha trabajado como especialista ambiental en el OEFA, el MINAM, el Ministerio de Transportes y Comunicaciones y HATCH, liderando procesos de supervisión, remediación y evaluación de impacto ambiental. Una trayectoria dedicada a la gestión ambiental sostenible y responsable.',
    foto: fotoDiazDiaz,
    fotoPosicion: 'center 15%',
    investigador: true,
    categoriaInvestigacion: 'RENACYT Nivel IV',
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dra. Laura Isabel Gutiérrez Escarcena',
    grado: 'Doctora',
    gradoAcademico: 'Doctora en Ingeniería Química Ambiental',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    cursos: [
      'Diseño de Plantas de Tratamiento de Aguas Residuales',
      'Energías Renovables',
      'Modelamiento y Simulación Ambiental',
      'Ingeniería de Procesos Industriales Sostenibles',
    ],
    especialidades: [
      'Tratamiento de aguas',
      'Gestión ambiental',
      'Modelamiento ambiental',
      'Energías renovables',
      'Gestión de la calidad e investigación',
    ],
    perfil:
      'Máster Universitario en Evaluación de la Calidad y Procesos de Certificación en Educación Superior por la Universidad Internacional de La Rioja (España). Experiencia profesional en el sector minero en Gold Fields La Cima S.A. y Sociedad Minera Cerro Verde, en gestión ambiental, geoquímica, monitoreo ambiental, tratamiento de aguas y sistemas de gestión ambiental. Autora y coautora de libros y artículos científicos en ingeniería ambiental y sostenibilidad, incluyendo publicaciones sobre residuos sólidos, metodología de investigación e ingeniería ambiental. Reconocida por la Universidad Nacional de Trujillo por su excelencia y desempeño docente durante los últimos años.',
    foto: fotoGutierrezEscarcena,
    fotoPosicion: 'center 15%',
    investigador: true,
    categoriaInvestigacion: 'RENACYT Nivel I',
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Modesto Lorenzo Vega Tang',
    grado: 'Doctor',
    gradoAcademico: 'Doctor en Ciencias Químicas',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Coordinador del Laboratorio de Investigación y Calidad de Aire',
    cursos: [
      'Contaminación y Tratamiento de Agua',
      'Caracterización y Monitoreo Ambiental',
      'Trabajo de Investigación',
    ],
    especialidades: [
      'Gestión ambiental',
      'Tratamiento de aguas residuales y potables',
      'Sistemas integrados de gestión: ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018',
      'Auditoría ambiental ISO 14000 y normas ISO 18000',
      'Sistemas de gestión de la calidad de laboratorios de ensayo ISO/IEC 17025:2005',
      'Gestión de calidad e inocuidad en alimentos y bebidas',
      'Gerencia en operaciones unitarias y procesos',
      'Diplomado en Gestión Pública',
    ],
    perfil:
      'Consultor auditor en procesos químicos ambientales desde 2013, avalado por PRODUCE. Consultor SENACE Nivel I.',
    foto: fotoVegaTang,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Haniel Solís Muñoz',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    especialidades: [],
    foto: fotoSolisMunoz,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Dr. Gustavo Raúl Fernández Essenwanger',
    grado: 'Doctor',
    gradoAcademico: 'Doctor en Ingeniería Ambiental',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Jefe del Laboratorio de Investigación de Aguas',
    cursos: [
      'Energías Renovables',
      'Métodos Numéricos',
      'Contaminación y Remediación de Suelos Contaminados',
      'Modelamiento Ambiental',
    ],
    especialidades: ['Tratamiento de efluentes mineros'],
    perfil:
      'Máster en Ingeniería Ambiental. Experiencia en el manejo de planta Merrill-Crowe en minería, plantas de tratamiento de aguas ácidas, de agua potable y de aguas residuales, y PAD de lixiviación.',
    foto: fotoFernandezEssenwanger,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Nombrado',
  },
  {
    nombre: 'Ms. Alberto Mariano Castillo Ramírez',
    grado: 'Magíster',
    gradoAcademico: 'Magíster en Ecología y Gestión Ambiental',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    cursos: [
      'Gestión de Riesgos',
      'Planificación Urbana y Ordenamiento Territorial',
      'Edafología y Geomorfología',
      'Mecánica de Fluidos',
      'Balance de Masa',
      'Diseño de Plantas de Tratamiento de Aguas Residuales y Bioseguridad',
      'Ingeniería de Procesos Industriales Sostenibles',
      'Manejo Integral de Residuos Sólidos',
    ],
    especialidades: [],
    perfil:
      'Experiencia en procesos industriales en los sectores agroindustrial y pesquero, y en normas de calidad HACCP, GMP B2 y seguridad y salud ocupacional (SSO).',
    foto: fotoCastilloRamirez,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Dr. Alex Antenor Benites Aliaga',
    grado: 'Doctor',
    departamento: DEPARTAMENTO,
    cursoPrincipal: DOCENTE_GENERICO,
    especialidades: [],
    foto: fotoAlexBenites,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Ms. Alois Silva Ugaz',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: AUXILIAR_TC,
    cursos: [
      'Proyectos Ambientales',
      'Diseño de Rellenos Sanitarios',
      'Diseño de Plantas de Tratamiento de Aguas Residuales',
      'Balance de Materia y Energía',
      'Ecoeficiencia',
      'Gestión de Residuos Sólidos',
    ],
    especialidades: [],
    foto: fotoSilvaUgaz,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    nombre: 'Ms. Bebsi Melany Lázaro Pérez',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: AUXILIAR_TC,
    cursos: [
      'Auditoría Ambiental',
      'Instrumentos de Gestión Ambiental',
      'Biotecnología Ambiental',
    ],
    especialidades: ['Legislación y fiscalización ambiental'],
    perfil:
      'Con conocimiento en gestión ambiental, ISO 14001, cálculo de huella de carbono y huella de agua, gestión integral de residuos sólidos, monitoreos ambientales, instrumentos de gestión ambiental, normativa ambiental vigente y certificaciones FSMA, Global G.A.P., SMETA pilar 4 y Rainforest. Experiencia en el sector agroindustrial (planta y fundos), salud ambiental y OEFA.',
    foto: fotoLazaroPerez,
    fotoPosicion: 'center 15%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
  {
    // OCULTO hasta completar su ficha (foto, cursos, grado completo). Perfil armado con lo
    // que ya consta en la web: comités (comites.ts) y publicaciones (investigacion.ts).
    // Para mostrarlo, cambiar `oculto` a false.
    oculto: true,
    nombre: 'Mg. Javier Francisco Urquiaga Ríos',
    grado: 'Magíster',
    departamento: DEPARTAMENTO,
    cursoPrincipal: 'Miembro del Comité de Seguimiento al Egresado',
    especialidades: [],
    perfil:
      'Su investigación aborda el tratamiento y la valorización de residuos de curtiembre. Autor de "Electrochemical separation of chromium/collagen from wet blue in a single step: recycling of tannery…" (Results in Engineering, 2025) y "Leaching and heat treatment of chrome shavings: Stability of chromium (III)" (Case Studies in Chemical and Environmental Engineering, 2023).',
    foto: null,
    fotoPosicion: 'center 25%',
    investigador: false,
    categoriaInvestigacion: null,
    condicion: 'Contratado',
  },
];
