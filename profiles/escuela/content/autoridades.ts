// Correo y bio pendientes de confirmación; nombre y cargo son datos oficiales.
export const director = {
  nombre: "Dr. Luis Orlando Moncada Albitres",
  cargo: "Director de la Escuela Profesional de Ingeniería Ambiental",
  correo: "direccion@universidad.edu.pe",
  bio: "Pendiente: breve reseña del director (grado académico, especialidad y experiencia).",
  foto: null // Reemplaza por la ruta de la foto o deja null para la silueta
};

export const coordinadores = [
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) Académico",
    correo: "coordinacion.academica@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Investigación",
    correo: "coordinacion.investigacion@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Prácticas Preprofesionales",
    correo: "coordinacion.practicas@universidad.edu.pe"
  }
];

// Estructura según el Estatuto UNT vigente (2021, pág. 18): una Facultad se
// compone de Escuela Profesional, Departamentos Académicos, Unidad de Segunda
// Especialidad, Unidad de Investigación y Unidad de Posgrado.
export const organigrama = {
  nombre: "Facultad de Ingeniería Química",
  cargo: "Decano(a)",
  hijos: [
    { nombre: "Escuela Profesional", cargo: "Director(a) de Escuela" },
    { nombre: "Departamentos Académicos", cargo: "Jefe(s) de Departamento" },
    { nombre: "Unidad de Segunda Especialidad", cargo: "" },
    { nombre: "Unidad de Investigación", cargo: "" },
    { nombre: "Unidad de Posgrado", cargo: "" }
  ]
};
