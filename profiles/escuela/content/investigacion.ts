export const lineasInvestigacion = [
  {
    nombre: "Línea de investigación 1",
    descripcion: "Descripción breve de la primera línea de investigación del programa.",
    responsable: "Nombre del Responsable"
  },
  {
    nombre: "Línea de investigación 2",
    descripcion: "Descripción breve de la segunda línea de investigación del programa.",
    responsable: "Nombre del Responsable"
  },
  {
    nombre: "Línea de investigación 3",
    descripcion: "Descripción breve de la tercera línea de investigación del programa.",
    responsable: "Nombre del Responsable"
  }
];

export const proyectos = [
  {
    titulo: "Título del proyecto de investigación 1",
    estado: "En ejecución",
    año: "2023-2024",
    descripcion: "Descripción breve del primer proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  },
  {
    titulo: "Título del proyecto de investigación 2",
    estado: "Finalizado",
    año: "2022-2023",
    descripcion: "Descripción breve del segundo proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  }
];

// Publicaciones científicas reales, transcritas de la planilla que pasó el
// programa (no está en docs/). NOTA: transcripción desde una captura de
// pantalla, no desde el archivo original — hay riesgo de error en textos muy
// pequeños, sobre todo los DOI del bloque de Quezada Álvarez (n.° 40-49):
// conviene contrastarlos con la fuente antes de darlos por definitivos.
// Títulos que terminan en "…" se veían cortados por el ancho de columna en la
// captura; falta el texto completo. Se omitieron los docentes marcados
// "No se encontró" (sin publicaciones registradas).
//
// Las 5 primeras entradas (Libro, ReligacionPress) tenían el mismo título y
// DOI repetidos en 3 filas (Haro Aro, Gutiérrez Escarcena, Solís Muñoz): se
// fusionaron en una sola entrada con los 3 como coautores, en vez de mostrar
// la misma publicación 3 veces.
export interface Publicacion {
  titulo: string;
  tipo: "Artículo" | "Libro" | "Patente";
  autores: string[];
  año?: string;
  url?: string;
  // Registro de la patente cuando la planilla no trae un link directo (p. ej. "INDECOPI").
  registro?: string;
}

const HARO_GUTIERREZ_SOLIS = ["Elías Fernando Haro Aro", "Laura Isabel Gutiérrez Escarcena", "Haniel Solís Muñoz"];

export const publicaciones: Publicacion[] = [
  // ── Alex Antenor Benites Aliaga ──
  {
    titulo: "Labor motivation in SMEs in the construction sector, Lima",
    tipo: "Artículo",
    autores: ["Alex Antenor Benites Aliaga"],
    año: "2023",
    url: "http://www.doi.org/10.52080/RVGLUZ.28.101.8",
  },
  {
    titulo: "Beneficios de la metodología 5s en la Industria Manufacturera: Una revisión de literatura 2017-2022",
    tipo: "Artículo",
    autores: ["Alex Antenor Benites Aliaga"],
    año: "2023",
    url: "http://www.scopus.com/inward/record.url?partnerID=HzOxMe3b&scp=85172312821",
  },
  {
    titulo: "Gestión de los Residuos Biocontaminados en la Pandemia del Covid 19",
    tipo: "Artículo",
    autores: ["Alex Antenor Benites Aliaga"],
    año: "2022",
    url: "http://www.doi.org/10.47797/LLAMKASUN.V3I2.105",
  },
  {
    titulo: "Application of the PHVA cycle to increase productivity in the Frescor production area of ARY",
    tipo: "Artículo",
    autores: ["Alex Antenor Benites Aliaga"],
    año: "2021",
    url: "https://www.redalyc.org/articulo.oa?id=573669774004",
  },
  {
    titulo: "Efecto de las estrategias de cobranza en la efectividad en la recaudación del Servicio de…",
    tipo: "Artículo",
    autores: ["Alex Antenor Benites Aliaga"],
    año: "2021",
    url: "https://www.redalyc.org/articulo.oa?id=573666758004",
  },
  {
    titulo: "Ergonuni: Respaldo Ergonómico",
    tipo: "Patente",
    autores: ["Alex Antenor Benites Aliaga"],
  },
  {
    titulo: "Sea Light: Energía eléctrica a partir del agua de mar",
    tipo: "Patente",
    autores: ["Alex Antenor Benites Aliaga"],
  },
  {
    titulo: "TERMICORT: Cortinas con Aislantes Térmicos",
    tipo: "Patente",
    autores: ["Alex Antenor Benites Aliaga"],
  },

  // ── Haro Aro, Gutiérrez Escarcena y Solís Muñoz (coautoría, ReligacionPress) ──
  {
    titulo: "Biopolímero quitosano comercial. Impacto en la eliminación de metales pesados en los ríos",
    tipo: "Libro",
    autores: HARO_GUTIERREZ_SOLIS,
    año: "2023-II",
    url: "https://doi.org/10.46652/ReligacionPress.106",
  },
  {
    titulo: "Producción de biofertilizante en biorreactor con cúpula flotante a partir de guano de la isla Guañape",
    tipo: "Libro",
    autores: HARO_GUTIERREZ_SOLIS,
    año: "2023-II",
    url: "https://doi.org/10.46652/ReligacionPress.105",
  },
  {
    titulo: "Industria hotelera y consumo de agua. Una propuesta para la reutilización del residuo hídrico",
    tipo: "Libro",
    autores: HARO_GUTIERREZ_SOLIS,
    año: "2023-II",
    url: "https://doi.org/10.46652/ReligacionPress.96",
  },
  {
    titulo: "Vinaza. Evaluación de su impacto en un campo de cultivo",
    tipo: "Libro",
    autores: HARO_GUTIERREZ_SOLIS,
    año: "2023-II",
    url: "https://doi.org/10.46652/ReligacionPress.69",
  },
  {
    titulo: "Humedal Altoandino Collotacocha. Biodisponibilidad de metales en sedimentos del bofedal",
    tipo: "Libro",
    autores: HARO_GUTIERREZ_SOLIS,
    año: "2024-I",
    url: "https://doi.org/10.46652/ReligacionPress.157",
  },

  // ── Laura Isabel Gutiérrez Escarcena (adicionales) ──
  {
    titulo: "Análisis multitemporal de distribución geográfica potencial del llama guanicoe",
    tipo: "Artículo",
    autores: ["Laura Isabel Gutiérrez Escarcena"],
    año: "2024-I",
    url: "https://doi.org/10.17268/rev.cyt.2024.01.07",
  },
  {
    titulo: "Metodología de la investigación aplicada a la ingeniería química ambiental",
    tipo: "Libro",
    autores: ["Laura Isabel Gutiérrez Escarcena"],
    año: "2025-I",
    url: "https://doi.org/10.46652/ReligacionPress.259",
  },
  {
    titulo: "Los factores socioambientales y la generación de puntos críticos de acumulación de residuos sólidos",
    tipo: "Artículo",
    autores: ["Laura Isabel Gutiérrez Escarcena"],
    año: "2025-II",
    url: "https://doi.org/10.18800/kawsaypacha.202502.D009",
  },

  // ── Javier Francisco Urquiaga Ríos ──
  {
    titulo: "Electrochemical separation of chromium/collagen from wet blue in a single step: recycling of tannery…",
    tipo: "Artículo",
    autores: ["Javier Francisco Urquiaga Ríos"],
    año: "2025-I",
    url: "https://doi.org/10.1016/j.rineng.2025.104828",
  },
  {
    titulo: "Leaching and heat treatment of chrome shavings: Stability of chromium (III)",
    tipo: "Artículo",
    autores: ["Javier Francisco Urquiaga Ríos"],
    año: "2023-II",
    url: "https://doi.org/10.1016/j.cscee.2023.100481",
  },

  // ── Jorge Luis Mendoza Bobadilla ──
  {
    titulo: "Analysis of Seawater Desalination Research Data: Trends and Perspectives",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2025",
    url: "https://doi.org/10.5755/j01.erem.81.1.36208",
  },
  {
    titulo: "Fly Ash High-Strength Geopolymers: Effect of Grinding and Extra Water Content",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2023",
    url: "https://doi.org/10.3303/CET23100121",
  },
  {
    titulo: "Characterization by XRD and FTIR of Zeolite A and Zeolite X Obtained from Fly Ash",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2023",
    url: "https://doi.org/10.3303/CET2399114",
  },
  {
    titulo: "Optimization of Coagulation Parameters in the Removal of Turbidity and…",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2023",
    url: "https://hdl.handle.net/20.500.13067/2908",
  },
  {
    titulo: "Influence Modeling and optimization of sulphide removal by catalytic oxidation of tannery fur effluents",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2021",
    url: "https://doi.org/10.32829/eesj.v5i1.126",
  },
  {
    titulo: "Growth evaluation of the microalgae Chlorella sp. with tannery effluent from the soaking stage",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2021",
    url: "https://doi.org/10.32829/eesj.v5i1.129",
  },
  {
    titulo: "Simulación de la cinética de fermentación etanólica tipo lote alimentado utilizando el método Runge…",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2021",
    url: "https://doi.org/10.47422/ac.v2i3.40",
  },
  {
    titulo: "Remoción de turbidez de aguas del canal madre de Chavimochic empleando diseño de mezcla de…",
    tipo: "Artículo",
    autores: ["Jorge Luis Mendoza Bobadilla"],
    año: "2021",
    url: "https://doi.org/10.47422/ac.v2i3.41",
  },

  // ── Haniel Solís Muñoz ──
  {
    titulo: "Infusions based on medicinal plants and their benefit in metabolic syndrome diseases. A systematic…",
    tipo: "Artículo",
    autores: ["Haniel Solís Muñoz"],
    año: "2022-II",
    url: "https://laccei.org/LEIRD2022-VirtualEdition/meta/FP26.html",
  },
  {
    titulo: "Effectiveness of ultrasonic and high pressure homogenization in food suspensions: a systematic…",
    tipo: "Artículo",
    autores: ["Haniel Solís Muñoz"],
    año: "2022-II",
    url: "https://laccei.org/LEIRD2022-VirtualEdition/meta/FP29.html",
  },
  {
    titulo: "Methods for the treatment of solid waste for a sustainable final disposal. A systematic review",
    tipo: "Artículo",
    autores: ["Haniel Solís Muñoz"],
    año: "2022-II",
    url: "https://laccei.org/LEIRD2022-VirtualEdition/meta/FP24.html",
  },
  {
    // Posible duplicado con "Lignin-Degrading Bacteria in Rodriguez-Paper Mill
    // Sludge" (Quezada Álvarez, más abajo): mismo DOI en la planilla. Se
    // dejaron como entradas separadas por no tener certeza; revisar.
    titulo: "Lignin-Degrading Bacteria in Paper Mill Sludge",
    tipo: "Artículo",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-I",
    url: "https://doi.org/10.3390/microorganisms11051168",
  },
  {
    titulo: "Environmental impact of a design for a solid waste plant in the Francisco Morales Bermúdez market",
    tipo: "Artículo",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    url: "https://doi.org/10.18687/LACCEI2023.1.1.468",
  },
  {
    titulo: "Bioremediation Using Manure from Cavia porcellus and Helianthus annuus in a Soil Contaminated by…",
    tipo: "Artículo",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    url: "https://dx.doi.org/10.18687/LEIRD2023.1.1.322",
  },
  {
    titulo: "MEVAP: Simulación y diseño de evaporadores",
    tipo: "Patente",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    registro: "INDECOPI",
  },
  {
    titulo: "MCOMPR: Laboratorio de transporte de gases",
    tipo: "Patente",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    registro: "INDECOPI",
  },
  {
    titulo: "M-ENVIRONMENTAL: Herramientas de Ingeniería Ambiental",
    tipo: "Patente",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    registro: "INDECOPI",
  },
  {
    titulo: "MPUMP: Laboratorio de transporte de líquidos",
    tipo: "Patente",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    registro: "INDECOPI",
  },
  {
    titulo: "MMASS: Laboratorio de transferencia de masa",
    tipo: "Patente",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    registro: "INDECOPI",
  },
  {
    titulo: "MHEATX: Laboratorio de intercambiadores de calor",
    tipo: "Patente",
    autores: ["Haniel Solís Muñoz"],
    año: "2023-II",
    registro: "INDECOPI",
  },

  // ── Modesto Lorenzo Vega Tang ──
  {
    titulo: "Performance of the Reaction to Obtain Biodiesel, from used Domestic Oils, using Microwaves as a…",
    tipo: "Artículo",
    autores: ["Modesto Lorenzo Vega Tang"],
    año: "2024-I",
    url: "https://www.mksciceset.com/articles_file/615-_article1713863117.pdf",
  },
  {
    titulo: "Biocidal Effect of the Ethanolic Extract of Nerium Oleander, in the Control of Larvae of Prodiplosis…",
    tipo: "Artículo",
    autores: ["Modesto Lorenzo Vega Tang"],
    año: "2024-I",
    url: "https://www.researchgate.net/publication/395886310_Biocidal_Effect_of_the_Ethanolic_Extract_of_Nerium_Oleander_in_the_Control_of_Larvae_of_Prodiplosis",
  },

  // ── Medardo Alberto Quezada Álvarez ──
  // DOI de este bloque: texto muy pequeño en la captura, verificar antes de publicar.
  {
    titulo: "Bioelectricity production from blueberry waste",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2021",
    url: "https://doi.org/10.3390/su9031001",
  },
  {
    titulo: "Use of Leuconostoc Mesenteroides to Produce a Dextran Bioflocculant",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2022",
    url: "https://doi.org/10.5755/j01.erem.78.1.29591",
  },
  {
    titulo: "Production of Polyhydroxyalkanoate by Bacillus thuringiensis Isolated from Agricultural Soils of Pleurotus ostreatus Mycelium and Sugarcane Bagasse as Substrate for Environmental-Friendly…",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2022",
    url: "https://doi.org/10.1590/1678-4324-2022220107",
  },
  {
    // Posible duplicado con "Lignin-Degrading Bacteria in Paper Mill Sludge"
    // (Solís Muñoz, más arriba): mismo DOI en la planilla. Revisar.
    titulo: "Lignin-Degrading Bacteria in Rodriguez-Paper Mill Sludge",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2023",
    url: "https://doi.org/10.3390/microorganisms11051168",
  },
  {
    titulo: "Effect of Beef and Chicken Manure Compost on the Nutritional Content of Calcium and Phosphorus in…",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2023",
    url: "https://doi.org/10.1063/5.0171985",
  },
  {
    titulo: "Bioelectricity generation through Microbial Fuel Cells using Serratia fonticola bacteria and Rhodotorula",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2023",
    url: "https://doi.org/10.1016/J.EGYR.2023.05.255",
  },
  {
    titulo: "Use of Enzymatic Hydrolysate from Agroindustrial Asparagus Waste as Substrate for the Production of…",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2024",
    url: "https://doi.org/10.5755/J01.EREM.80.2.34237",
  },
  {
    titulo: "Efficacy of indigenous Bacteria in the Biodegradation…",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2024",
    url: "https://doi.org/10.3390/MICROORGANISMS12031036",
  },
  {
    titulo: "Compositional and structural characterization of eleve…",
    tipo: "Artículo",
    autores: ["Medardo Alberto Quezada Álvarez"],
    año: "2024",
    url: "https://doi.org/10.17268/SCI.AGROPECU.2024.038",
  },
];

export const convenios = [
  {
    institucion: "Nombre de la institución aliada",
    tipo: "Interinstitucional",
    descripcion: "Descripción breve del convenio: con quién y para qué.",
    vigencia: "2022 - 2027"
  }
];
