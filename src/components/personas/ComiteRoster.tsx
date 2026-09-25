import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CalendarDays, Users, type LucideIcon } from 'lucide-react';

interface Miembro {
  nombre: string;
  cargo: string;
}

interface ComiteRosterProps {
  /** Admite `**palabra**` para resaltarla en dorado. */
  titulo: string;
  descripcion?: string;
  resolucion: string;
  fecha?: string;
  miembros: Miembro[];
  icon?: LucideIcon;
  bg?: string;
}

// Cargo genérico: no se muestra como etiqueta (solo los cargos específicos).
const CARGO_SIN_ETIQUETA = 'Miembro';

const renderTitulo = (text: string) =>
  text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <span key={i} className="text-gold">{part}</span> : part
  );

/**
 * ComiteRoster — ficha de un comité en dos columnas: a la izquierda su
 * presentación (ícono, nombre, función, resolución y fecha); a la derecha el
 * panel de integrantes con el cargo de cada uno como etiqueta.
 */
export default function ComiteRoster({
  titulo,
  descripcion,
  resolucion,
  fecha,
  miembros,
  icon: Icon = Users,
  bg = 'bg-white',
}: ComiteRosterProps) {
  return (
    <div className={`${bg} py-14 md:py-20`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-14 items-start">
          {/* Presentación del comité */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:sticky lg:top-32"
          >
            <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-primary leading-tight">
              {renderTitulo(titulo)}
            </h2>
            <div className="flex items-center gap-1 mt-4 mb-5" aria-hidden="true">
              <span className="h-1 w-14 bg-gold rounded-full" />
              <span className="h-1 w-4 bg-primary rounded-full" />
            </div>
            {descripcion && (
              <p className="text-gray-600 font-body leading-relaxed">{descripcion}</p>
            )}

            <ul className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700 font-medium">{resolucion}</span>
              </li>
              {fecha && (
                <li className="flex items-start gap-3">
                  <CalendarDays className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 font-medium">{fecha}</span>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Panel de integrantes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="bg-primary px-6 py-4 text-white">
              <h3 className="font-display font-bold text-base">Integrantes</h3>
              <p className="text-white/70 text-xs mt-0.5">
                {miembros.length} {miembros.length === 1 ? 'miembro' : 'miembros'}
              </p>
            </div>
            <ul className="divide-y divide-gray-100">
              {miembros.map((m) => (
                <li key={m.nombre} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-6 py-3.5">
                  <span className="text-gray-800 text-sm md:text-[15px] font-medium">{m.nombre}</span>
                  {m.cargo && m.cargo !== CARGO_SIN_ETIQUETA && (
                    <span className="text-[11px] font-bold text-primary bg-gold/15 px-3 py-1 rounded-full leading-tight">
                      {m.cargo}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
