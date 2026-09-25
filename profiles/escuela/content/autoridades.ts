import fotoDirectorEscuela from '../assets/docentes/ELIAS_HARO.webp';
import fotoDirectorDepartamento from '../assets/docentes/MANUEL_VERA.webp';

// Fuente: docs/actuyalizar pag. web.doc (sección II, Organización).
export const director = {
  nombre: "Dr. Elías Fernando Haro Aro",
  cargo: "Director de la Escuela Profesional de Ingeniería Ambiental",
  correo: "eharoa@unitru.edu.pe",
  formacion: [
    "Ingeniero Químico, Universidad Nacional de Trujillo (17-08-1996)",
    "Licenciado en Educación Secundaria, especialidad de Matemática, Física y Computación, Universidad Privada San Pedro de Chimbote (05-12-2002)",
    "Maestro en Economía, mención Economía de Empresas, Universidad Nacional de Trujillo (18-07-2003)",
    "Doctor en Ingeniería Química Ambiental, Universidad Nacional de Trujillo (07-10-2022)"
  ],
  foto: fotoDirectorEscuela
};

export const jefeDepartamento = {
  nombre: "Dr. Manuel Isaías Vera Herrera",
  cargo: "Director del Departamento Académico de Ingeniería Ambiental",
  correo: "mvera@unitru.edu.pe",
  formacion: [
    "Ingeniero Químico, Universidad Nacional de Trujillo (06-05-1983)",
    "Maestro en Ciencias, mención Gestión Ambiental, Universidad Nacional de Trujillo (29-01-1999)",
    "Doctor en Ingeniería Química Ambiental, Universidad Nacional de Trujillo (15-03-2013)"
  ],
  foto: fotoDirectorDepartamento
};

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
