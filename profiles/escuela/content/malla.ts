import type { Edge } from 'reactflow';

// Datos del plan de estudios de la escuela (contenido del perfil).
// El componente MallaFlow (sistema) consume estos datos vía @profile/content/malla.

// ── Tipos ──────────────────────────────────────────────────────────────────
export type AreaType = 'general' | 'especifico' | 'especialidad';

export interface CourseData {
  /** Código del curso en el plan (p. ej. '3.1'). */
  id: string;
  name: string;
  type: AreaType;
  credits: number;
  /** Horas teóricas/prácticas y descripción: opcionales, se ocultan si faltan. */
  hoursT?: number;
  hoursP?: number;
  cycle: string;
  isElective: boolean;
  description?: string;
}

// ── Plan de Estudios 2018 — Ingeniería Ambiental ─────────────────────────────
// Fuente: imagen de la malla en docs/actuyalizar pag. web.doc (sección IX).
// Área según el color de la imagen: verde = general, naranja = específico,
// celeste = especialidad. 22 créditos por ciclo, 220 en total. El documento no
// trae horas teóricas/prácticas ni sumillas.
const TALLER_EG = 'Taller de Estudios Generales (cód. 1.7 a 1.9 / 2.7 a 2.9): se elige uno.';

export const CURRICULUM_DATA: CourseData[] = [
  // CICLO I
  { id: '1.1', name: 'Química General', type: 'especifico', credits: 4, cycle: 'Ciclo I', isElective: false },
  { id: '1.2', name: 'Introducción a la Ingeniería', type: 'general', credits: 4, cycle: 'Ciclo I', isElective: false },
  { id: '1.3', name: 'Desarrollo Personal', type: 'general', credits: 3, cycle: 'Ciclo I', isElective: false },
  { id: '1.4', name: 'Desarrollo del Pensamiento Lógico y Matemático', type: 'general', credits: 3, cycle: 'Ciclo I', isElective: false },
  { id: '1.5', name: 'Introducción al Análisis Matemático', type: 'general', credits: 4, cycle: 'Ciclo I', isElective: false },
  { id: '1.6', name: 'Lectura Crítica y Redacción de Textos Académicos', type: 'general', credits: 3, cycle: 'Ciclo I', isElective: false },
  { id: 'EG1', name: 'Taller EG1', type: 'general', credits: 1, cycle: 'Ciclo I', isElective: true, description: TALLER_EG },

  // CICLO II
  { id: '2.1', name: 'Química Orgánica', type: 'especifico', credits: 4, cycle: 'Ciclo II', isElective: false },
  { id: '2.2', name: 'Biología General', type: 'general', credits: 4, cycle: 'Ciclo II', isElective: false },
  { id: '2.3', name: 'Sociedad, Cultura y Ecología', type: 'general', credits: 3, cycle: 'Ciclo II', isElective: false },
  { id: '2.4', name: 'Ética, Convivencia Humana y Ciudadanía', type: 'general', credits: 3, cycle: 'Ciclo II', isElective: false },
  { id: '2.5', name: 'Análisis Matemático', type: 'general', credits: 4, cycle: 'Ciclo II', isElective: false },
  { id: '2.6', name: 'Cultura Investigativa y Pensamiento Crítico', type: 'general', credits: 3, cycle: 'Ciclo II', isElective: false },
  { id: 'EG2', name: 'Taller EG2', type: 'general', credits: 1, cycle: 'Ciclo II', isElective: true, description: TALLER_EG },

  // CICLO III
  { id: '3.1', name: 'Química Ambiental', type: 'especifico', credits: 5, cycle: 'Ciclo III', isElective: false },
  { id: '3.2', name: 'Ecología, Biodiversidad y Recursos Naturales', type: 'especifico', credits: 4, cycle: 'Ciclo III', isElective: false },
  { id: '3.3', name: 'Física General', type: 'especifico', credits: 4, cycle: 'Ciclo III', isElective: false },
  { id: '3.4', name: 'Metodología de la Investigación Científica', type: 'especifico', credits: 3, cycle: 'Ciclo III', isElective: false },
  { id: '3.5', name: 'Métodos Numéricos', type: 'especifico', credits: 3, cycle: 'Ciclo III', isElective: false },
  { id: '3.6', name: 'Topografía Aplicada a la Ingeniería Ambiental', type: 'especifico', credits: 3, cycle: 'Ciclo III', isElective: false },

  // CICLO IV
  { id: '4.1', name: 'Química Analítica', type: 'especifico', credits: 4, cycle: 'Ciclo IV', isElective: false },
  { id: '4.2', name: 'Edafología y Geomorfología', type: 'especifico', credits: 4, cycle: 'Ciclo IV', isElective: false },
  { id: '4.3', name: 'Fenómenos de Transporte', type: 'especifico', credits: 4, cycle: 'Ciclo IV', isElective: false },
  { id: '4.4', name: 'Balance de Materia y Energía', type: 'especifico', credits: 4, cycle: 'Ciclo IV', isElective: false },
  { id: '4.5', name: 'Meteorología y Climatología', type: 'especifico', credits: 3, cycle: 'Ciclo IV', isElective: false },
  { id: '4.6', name: 'Diseño Asistido por Computadora', type: 'especifico', credits: 3, cycle: 'Ciclo IV', isElective: false },

  // CICLO V
  { id: '5.1', name: 'Fisicoquímica', type: 'especifico', credits: 4, cycle: 'Ciclo V', isElective: false },
  { id: '5.2', name: 'Bioquímica Ambiental', type: 'especifico', credits: 4, cycle: 'Ciclo V', isElective: false },
  { id: '5.3', name: 'Mecánica de Fluidos', type: 'especifico', credits: 3, cycle: 'Ciclo V', isElective: false },
  { id: '5.4', name: 'Estadística Aplicada', type: 'especifico', credits: 3, cycle: 'Ciclo V', isElective: false },
  { id: '5.5', name: 'Economía y Valoración Ambiental', type: 'especifico', credits: 4, cycle: 'Ciclo V', isElective: false },
  { id: '5.6', name: 'Cartografía y Teledetección', type: 'especifico', credits: 4, cycle: 'Ciclo V', isElective: false },

  // CICLO VI
  { id: '6.1', name: 'Análisis Instrumental', type: 'especifico', credits: 4, cycle: 'Ciclo VI', isElective: false },
  { id: '6.2', name: 'Contaminación y Remediación de Suelos', type: 'especialidad', credits: 4, cycle: 'Ciclo VI', isElective: false },
  { id: '6.3', name: 'Hidrología y Gestión de Cuencas Hidrográficas', type: 'especifico', credits: 3, cycle: 'Ciclo VI', isElective: false },
  { id: '6.4', name: 'Seguridad e Higiene Industrial', type: 'especifico', credits: 3, cycle: 'Ciclo VI', isElective: false },
  { id: '6.5', name: 'Costos y Presupuestos en Ingeniería Ambiental', type: 'especifico', credits: 4, cycle: 'Ciclo VI', isElective: false },
  { id: '6.6', name: 'Sistemas de Información Georreferenciada', type: 'especifico', credits: 4, cycle: 'Ciclo VI', isElective: false },

  // CICLO VII
  { id: '7.1', name: 'Gestión de Riesgos y Desastres', type: 'especialidad', credits: 4, cycle: 'Ciclo VII', isElective: false },
  { id: '7.2', name: 'Microbiología Ambiental', type: 'especifico', credits: 4, cycle: 'Ciclo VII', isElective: false },
  { id: '7.3', name: 'Manejo Integral de Residuos Sólidos', type: 'especialidad', credits: 4, cycle: 'Ciclo VII', isElective: false },
  { id: '7.4', name: 'Saneamiento Ambiental', type: 'especialidad', credits: 3, cycle: 'Ciclo VII', isElective: false },
  { id: '7.5', name: 'Ecoeficiencia', type: 'especialidad', credits: 3, cycle: 'Ciclo VII', isElective: false },
  { id: '7.6', name: 'Caracterización y Monitoreo Ambiental', type: 'especialidad', credits: 4, cycle: 'Ciclo VII', isElective: false },

  // CICLO VIII
  { id: '8.1', name: 'Derecho Ambiental', type: 'especialidad', credits: 3, cycle: 'Ciclo VIII', isElective: false },
  { id: '8.2', name: 'Biotecnología Ambiental', type: 'especialidad', credits: 4, cycle: 'Ciclo VIII', isElective: false },
  { id: '8.3', name: 'Control de la Contaminación Atmosférica', type: 'especialidad', credits: 4, cycle: 'Ciclo VIII', isElective: false },
  { id: '8.4', name: 'Contaminación y Tratamiento de Agua', type: 'especialidad', credits: 4, cycle: 'Ciclo VIII', isElective: false },
  { id: '8.5', name: 'Gestión de Proyectos Ambientales', type: 'especialidad', credits: 4, cycle: 'Ciclo VIII', isElective: false },
  { id: '8.6', name: 'Planificación Urbana y Ordenamiento Territorial', type: 'especialidad', credits: 3, cycle: 'Ciclo VIII', isElective: false },

  // CICLO IX
  { id: '9.1', name: 'Investigación y Tesis I', type: 'especialidad', credits: 3, cycle: 'Ciclo IX', isElective: false },
  { id: '9.2', name: 'Ingeniería de Procesos Industriales Sostenibles', type: 'especialidad', credits: 3, cycle: 'Ciclo IX', isElective: false },
  { id: '9.3', name: 'Modelamiento y Simulación Ambiental', type: 'especialidad', credits: 3, cycle: 'Ciclo IX', isElective: false },
  { id: '9.4', name: 'Sistemas Integrados de Gestión', type: 'especialidad', credits: 3, cycle: 'Ciclo IX', isElective: false },
  { id: '9.5', name: 'Prácticas Preprofesionales', type: 'especialidad', credits: 10, cycle: 'Ciclo IX', isElective: false },

  // CICLO X
  { id: '10.1', name: 'Investigación y Tesis II', type: 'especialidad', credits: 4, cycle: 'Ciclo X', isElective: false },
  { id: '10.2', name: 'Diseño de Plantas de Tratamiento de Aguas Residuales', type: 'especialidad', credits: 4, cycle: 'Ciclo X', isElective: false },
  { id: '10.3', name: 'Diseño de Relleno Sanitario y de Bioseguridad', type: 'especialidad', credits: 3, cycle: 'Ciclo X', isElective: false },
  { id: '10.4', name: 'Instrumentos de Gestión Ambiental', type: 'especialidad', credits: 4, cycle: 'Ciclo X', isElective: false },
  { id: '10.5', name: 'Energías Renovables', type: 'especialidad', credits: 3, cycle: 'Ciclo X', isElective: false },
  { id: '10.6', name: 'Auditoría Ambiental', type: 'especialidad', credits: 4, cycle: 'Ciclo X', isElective: false },
];

// ── Prerrequisitos [prerrequisito, curso] ────────────────────────────────────
// Fuente: tabla de prerrequisitos del Plan 2018 que envió el programa (líneas
// de conexión de la malla). Sin prerrequisito: todo el Ciclo I, 2.3, 2.4, los
// talleres EG, 3.3 Física General, 3.6 Topografía y 4.5 Meteorología.
// Nota: 10.4 → 10.6 une dos cursos del mismo ciclo; así figura en la tabla.
const PREREQUISITES: [string, string][] = [
  // Ciclo II
  ['1.1', '2.1'], ['1.2', '2.2'], ['1.4', '2.5'], ['1.6', '2.6'],
  // Ciclo III
  ['2.1', '3.1'], ['2.2', '3.2'], ['2.5', '3.5'], ['2.6', '3.4'],
  // Ciclo IV
  ['3.1', '4.1'], ['3.2', '4.2'], ['3.3', '4.3'], ['3.4', '4.4'], ['3.5', '4.6'],
  // Ciclo V
  ['4.1', '5.1'], ['4.2', '5.2'], ['4.3', '5.3'], ['4.4', '5.4'], ['4.5', '5.5'], ['4.6', '5.6'],
  // Ciclo VI
  ['5.1', '6.1'], ['5.2', '6.2'], ['5.3', '6.3'], ['5.4', '6.4'], ['5.5', '6.5'], ['5.6', '6.6'],
  // Ciclo VII
  ['6.1', '7.1'], ['6.2', '7.2'], ['6.3', '7.3'], ['6.4', '7.4'], ['6.5', '7.5'], ['6.6', '7.6'],
  // Ciclo VIII
  ['7.1', '8.1'], ['7.2', '8.2'], ['7.3', '8.3'], ['7.4', '8.4'], ['7.5', '8.5'], ['7.6', '8.6'],
  // Ciclo IX
  ['8.1', '9.1'], ['8.2', '9.2'], ['8.3', '9.3'], ['8.4', '9.4'], ['8.6', '9.5'],
  // Ciclo X
  ['8.5', '10.4'], ['9.1', '10.1'], ['9.2', '10.2'], ['9.3', '10.3'], ['9.4', '10.5'], ['10.4', '10.6'],
];

// Color de la línea según el área del curso de destino.
const EDGE_COLORS: Record<AreaType, string> = {
  general: '#10b981',
  especifico: '#f97316',
  especialidad: '#38bdf8',
};

export const PREREQUISITES_EDGES: Edge[] = PREREQUISITES.map(([source, target]) => {
  const area = CURRICULUM_DATA.find((c) => c.id === target)?.type ?? 'especialidad';
  return {
    id: `e-${source}-${target}`,
    source,
    target,
    style: { stroke: EDGE_COLORS[area], strokeWidth: 2 },
  };
});

export const CYCLE_COLUMNS: Record<string, number> = {
  'Ciclo I': 0, 'Ciclo II': 320, 'Ciclo III': 640, 'Ciclo IV': 960, 'Ciclo V': 1280,
  'Ciclo VI': 1600, 'Ciclo VII': 1920, 'Ciclo VIII': 2240, 'Ciclo IX': 2560, 'Ciclo X': 2880,
};
