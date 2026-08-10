export const gradoAcademico = "Bachiller en Ingeniería Ambiental";
export const tituloProfesional = "Ingeniero Ambiental";

// Fuente: Perfil del ingresante según el Modelo Educativo (contenido mínimo del programa).
export const perfilIngresante = [
  {
    area: "Capacidades básicas",
    descripcion: "Razonamiento verbal y matemático, con base en Ciencia, Tecnología y Ambiente, y en Biología, Física y Química."
  },
  {
    area: "Competencias procedimentales",
    descripcion: "Capacidad de análisis y síntesis, de argumentación, manejo básico de TIC y comprensión de textos."
  },
  {
    area: "Actitudes",
    descripcion: "Vocación e interés por la ingeniería ambiental y la investigación, capacidad de trabajo en equipo y liderazgo, y responsabilidad, honestidad y perseverancia para alcanzar sus metas."
  }
];

// Fuente: Perfil del egresado según el Modelo Educativo (contenido mínimo del programa).
export const perfilEgresado = [
  {
    area: "Aplicación de conocimientos ambientales",
    descripcion: "Aplica los conocimientos fundamentales y científicos de la Ingeniería Ambiental, con identidad cultural, humanista, integración y eticidad, para la identificación, formulación, resolución y evaluación de asuntos ambientales, usando investigación e innovación tecnológica con liderazgo interdisciplinario y responsabilidad social."
  },
  {
    area: "Análisis y diseño de sistemas ambientales",
    descripcion: "Analiza y comunica problemas ambientales para el diseño de sistemas de ingeniería ambiental, evaluando aspectos sociales, de salud, seguridad, legales y culturales."
  },
  {
    area: "Investigación aplicada",
    descripcion: "Conduce estudios de problemas de ingeniería ambiental aplicando conocimientos de ciencias e ingeniería basados en la investigación científica, con ética y responsabilidad según las normas de la práctica profesional."
  },
  {
    area: "Diseño de soluciones sostenibles",
    descripcion: "Diseña y desarrolla soluciones a problemas ambientales con aprendizaje permanente, mediante el uso de herramientas modernas, en concordancia con los principios y objetivos del programa."
  }
];

export const titulacion = [
  {
    modalidad: "Modalidad de titulación 1",
    descripcion: "Descripción breve de la primera modalidad para obtener el título profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3"
    ]
  },
  {
    modalidad: "Modalidad de titulación 2",
    descripcion: "Descripción breve de la segunda modalidad para obtener el título profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2"
    ]
  }
];

export const tramites = [
  {
    id: "bachiller",
    titulo: "Grado de Bachiller",
    descripcion: "Descripción del trámite y procedimiento para obtener el Grado Académico de Bachiller.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3",
      "Requisito 4"
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Bachiller.pdf`
  },
  {
    id: "titulo",
    titulo: "Título Profesional",
    descripcion: "Descripción del trámite y procedimiento para obtener el Título Profesional.",
    requisitos: [
      "Requisito 1",
      "Requisito 2",
      "Requisito 3",
      "Requisito 4"
    ],
    pdfUrl: `${import.meta.env.BASE_URL}Requisitos_Titulo.pdf`
  }
];

// Oportunidades de movilidad e intercambio (estudiantil y docente).
// Misma forma que `convenios`: se muestran como tarjetas.
export const movilidad = [
  {
    institucion: "Universidad o institución de destino",
    tipo: "Movilidad estudiantil",
    descripcion: "Descripción breve de la oportunidad de movilidad para estudiantes: destino, qué cubre y requisitos.",
    modalidad: "Semestral",
  },
  {
    institucion: "Universidad o institución de destino",
    tipo: "Movilidad docente",
    descripcion: "Descripción breve de la oportunidad de movilidad para docentes: estancias, intercambio o investigación.",
    modalidad: "Estancia corta",
  },
];
