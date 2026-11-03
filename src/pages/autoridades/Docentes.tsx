import React, { useMemo, useState } from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import DocenteCard from '../../components/personas/DocenteCard';
import { docentes as todosLosDocentes } from '@profile/content/docentes';
import { Search } from 'lucide-react';

type Docente = (typeof todosLosDocentes)[number];

interface Filtro {
  valor: string;
  etiqueta: string;
  cumple: (d: Docente) => boolean;
}

// Docentes con `oculto: true` (ficha incompleta) no se muestran ni cuentan.
const docentes = todosLosDocentes.filter((d) => !d.oculto);

const esDoctor = (d: Docente) => /^doctor/i.test(d.grado);
const esMagister = (d: Docente) => /^mag[ií]ster|^maestr/i.test(d.grado);

/**
 * Filtros posibles, construidos a partir de los datos de cada docente. Solo se
 * muestran los que aplican a alguien y no abarcan a todos (un filtro que deja
 * a todos o a nadie no aporta). Así la página sirve como plantilla para
 * cualquier escuela.
 */
function construirFiltros(lista: Docente[]): Filtro[] {
  const candidatos: Filtro[] = [
    { valor: 'nombrados', etiqueta: 'Nombrados', cumple: (d) => d.condicion === 'Nombrado' },
    { valor: 'contratados', etiqueta: 'Contratados', cumple: (d) => d.condicion === 'Contratado' },
    { valor: 'doctores', etiqueta: 'Doctores', cumple: esDoctor },
    { valor: 'magisteres', etiqueta: 'Magísteres', cumple: esMagister },
    { valor: 'investigadores', etiqueta: 'Investigadores', cumple: (d) => Boolean(d.investigador) },
  ];

  // Departamentos: solo si hay más de uno.
  const departamentos = [...new Set(lista.map((d) => d.departamento).filter(Boolean))] as string[];
  if (departamentos.length > 1) {
    candidatos.push(
      ...departamentos.map((dep) => ({
        valor: `dep:${dep}`,
        etiqueta: dep.replace(/^Departamento Académico de /i, ''),
        cumple: (d: Docente) => d.departamento === dep,
      })),
    );
  }

  return candidatos.filter((f) => {
    const n = lista.filter(f.cumple).length;
    return n > 0 && n < lista.length;
  });
}

export default function Docentes() {
  const [filtro, setFiltro] = useState('todos');
  const [query, setQuery] = useState('');

  const filtros = useMemo<Filtro[]>(
    () => [{ valor: 'todos', etiqueta: 'Todos', cumple: () => true }, ...construirFiltros(docentes)],
    [],
  );

  const conteo = useMemo(
    () => Object.fromEntries(filtros.map((f) => [f.valor, docentes.filter(f.cumple).length])),
    [filtros],
  );

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    const activo = filtros.find((f) => f.valor === filtro) ?? filtros[0];
    return docentes.filter((d) => activo.cumple(d) && (!q || d.nombre.toLowerCase().includes(q)));
  }, [filtro, query, filtros]);

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Plana **Docente**"
          subtitle="Profesores, investigadores y especialistas comprometidos con tu formación de calidad."
          center
        />

        {/* Filtros + búsqueda */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 max-w-7xl mx-auto">
          {filtros.length > 1 && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar docentes">
              {filtros.map((f) => (
                <button
                  key={f.valor}
                  type="button"
                  onClick={() => setFiltro(f.valor)}
                  aria-pressed={filtro === f.valor}
                  className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                    filtro === f.valor
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary border border-gray-200 hover:border-gold/50'
                  }`}
                >
                  {f.etiqueta}
                  <span className={`ml-1.5 tabular-nums ${filtro === f.valor ? 'text-white/70' : 'text-gray-400'}`}>
                    {conteo[f.valor]}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="relative w-full lg:w-72 lg:ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar docente por nombre..."
              aria-label="Buscar docente"
              className="w-full pl-9 pr-3 py-2.5 text-base rounded-lg border border-gray-200 bg-white placeholder:text-gray-500 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {filtrados.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10 max-w-7xl mx-auto">
            {filtrados.map((docente, idx) => (
              <DocenteCard key={`${docente.nombre}-${idx}`} docente={docente} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-12">
            No se encontraron docentes con esos criterios. Prueba con otro filtro o búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
