import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

interface Miembro {
  nombre: string;
  cargo: string;
}

interface ComiteRosterProps {
  titulo: string;
  descripcion?: string;
  resolucion: string;
  miembros: Miembro[];
  bg?: string;
}

/**
 * ComiteRoster — roster de un comité con sus miembros y cargo, más la
 * resolución que lo conforma. Pensado para comités con miembros confirmados;
 * los que aún no los tienen siguen usando <EnConstruccion/>.
 */
export default function ComiteRoster({ titulo, descripcion, resolucion, miembros, bg = 'bg-white' }: ComiteRosterProps) {
  return (
    <div className={`${bg} py-16 md:py-20`}>
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title={titulo} subtitle={descripcion} center />

        <div className="max-w-2xl mx-auto -mt-4 mb-8 flex justify-center">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
            {resolucion}
          </span>
        </div>

        <ul className="max-w-2xl mx-auto divide-y divide-gray-100 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {miembros.map((m, i) => (
            <li key={i} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-4">
              <span className="font-display font-bold text-primary text-sm">{m.nombre}</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">{m.cargo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
