import React from 'react';
import { motion } from 'framer-motion';
import { User, Check, FlaskConical, BadgeCheck, Building2, Briefcase } from 'lucide-react';
import { quitarTituloAcademico } from '../../utils/formatters';

/**
 * DocenteCard — Tarjeta con volteo 3D (flip).
 * Frente: foto · grado · línea separadora · nombre (sin el título abreviado,
 * porque el grado ya se muestra arriba).
 * Reverso (al hacer hover o enfocar con teclado): la información disponible —
 * condición, departamento, cargo (si tiene uno) y especialidades (si las hay).
 * El flip es solo visual; ambas caras viven en el DOM, así los lectores de
 * pantalla acceden a todo. Respeta prefers-reduced-motion (flip instantáneo).
 */
interface Docente {
  grado: string;
  nombre: string;
  departamento?: string;
  cursoPrincipal: string;
  foto?: string | null;
  /** CSS object-position de la foto (ej. 'center 25%'). Opcional: cada foto
   *  puede necesitar un encuadre distinto. Por defecto 'center 25%'. */
  fotoPosicion?: string;
  especialidades?: string[];
  investigador?: boolean;
  categoriaInvestigacion?: string | null;
  condicion?: string | null;
}

// `cursoPrincipal` genérico ("Docente del Departamento…") no aporta en el
// reverso: el departamento ya se muestra. Solo se muestra si es un cargo real.
const esCargo = (texto: string) => Boolean(texto) && !/^Docente del/i.test(texto);

export default function DocenteCard({ docente }: { docente: Docente }) {
  const nombre = quitarTituloAcademico(docente.nombre);
  const especialidades = docente.especialidades ?? [];
  const cargo = esCargo(docente.cursoPrincipal) ? docente.cursoPrincipal : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      tabIndex={0}
      aria-label={`${docente.grado} ${nombre}. Enfoca o pasa el cursor para ver su información.`}
      className="group h-[390px] rounded-2xl outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <div className="relative h-full w-full transition-transform duration-1000 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">

        {/* ── FRENTE ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          {/* Foto: ocupa todo el alto que no usa el bloque de texto */}
          <div className="relative flex-1 min-h-0 overflow-hidden bg-primary rounded-t-2xl border-2 border-primary">
            {docente.foto ? (
              <img src={docente.foto} alt={nombre} loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: docente.fotoPosicion ?? 'center 25%' }} />
            ) : (
              <>
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                />
                <div className="w-full h-full flex items-end justify-center">
                  <User className="w-20 h-20 text-white/25 -mb-2" />
                </div>
              </>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          </div>

          {/* Grado · línea separadora · nombre (alto fijo: todas las fotos quedan alineadas) */}
          <div className="flex flex-col justify-center shrink-0 h-[5.75rem] px-4 text-center">
            <p className="text-gold text-[10px] font-black uppercase tracking-[0.08em]">
              {docente.grado}
            </p>
            <div className="border-t border-gray-100 my-1.5" />
            <h4 className="font-display font-bold text-primary text-sm leading-tight">
              {nombre}
            </h4>
          </div>
        </div>

        {/* ── REVERSO ── */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-primary rounded-2xl shadow-lg overflow-hidden flex flex-col p-5 text-white">
          <div className="text-center shrink-0">
            <p className="text-gold text-[10px] font-black uppercase tracking-[0.2em]">
              {docente.grado}
            </p>
            <h4 className="font-display font-bold text-base leading-tight mt-1">
              {nombre}
            </h4>

            {/* Etiquetas: condición (nombrado/contratado), investigador y su categoría */}
            {(docente.condicion || docente.investigador) && (
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {docente.condicion && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 border border-white/25 text-white text-[9px] font-black uppercase tracking-wide px-2 py-0.5">
                    <BadgeCheck className="w-3 h-3" aria-hidden="true" />
                    {docente.condicion}
                  </span>
                )}
                {docente.investigador && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold text-primary text-[9px] font-black uppercase tracking-wide px-2 py-0.5">
                    <FlaskConical className="w-3 h-3" aria-hidden="true" />
                    Investigador
                  </span>
                )}
                {docente.investigador && docente.categoriaInvestigacion && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-gold/40 text-gold text-[9px] font-bold px-2 py-0.5">
                    {docente.categoriaInvestigacion}
                  </span>
                )}
              </div>
            )}

            <div className="border-t border-white/20 my-4" />
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar pr-1 space-y-4 text-left">
            {cargo && (
              <div>
                <p className="flex items-center gap-1.5 text-gold text-[10px] font-black uppercase tracking-[0.14em] mb-1">
                  <Briefcase className="w-3.5 h-3.5" aria-hidden="true" /> Cargo
                </p>
                <p className="text-xs text-white/90 leading-snug">{cargo}</p>
              </div>
            )}

            {docente.departamento && (
              <div>
                <p className="flex items-center gap-1.5 text-gold text-[10px] font-black uppercase tracking-[0.14em] mb-1">
                  <Building2 className="w-3.5 h-3.5" aria-hidden="true" /> Departamento
                </p>
                <p className="text-xs text-white/90 leading-snug">{docente.departamento}</p>
              </div>
            )}

            {especialidades.length > 0 && (
              <div>
                <p className="text-gold text-[10px] font-black uppercase tracking-[0.14em] mb-2">
                  Especialidades
                </p>
                <ul className="space-y-2">
                  {especialidades.map((esp, i) => (
                    <li key={i} className="flex gap-2 text-xs text-white/90 leading-snug">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{esp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
