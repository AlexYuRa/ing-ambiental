import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import {
  objetivosEducacionales,
  objetivosAcademicos,
} from '@profile/content/objetivos';

/**
 * Página agrupada "Objetivos". El navbar muestra "Objetivos educativos" y
 * "Objetivos académicos" por separado; ambos llevan aquí (#educativos / #academicos).
 *
 * Sin selector de versión de plan: hoy solo hay un plan vigente (2018) con
 * información real. El switch 2018/2027 se retira hasta que exista contenido
 * real del plan 2027; mostrarlo antes solo invita a hacer clic en algo vacío.
 */
export default function Objetivos() {
  return (
    <>
      <AnchoredSection id="academicos">
        <div className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="Objetivos **Académicos**"
              center
              subtitle="Lo que persigue formar el plan de estudios en cada egresado."
            />

            {/* Tarjetas numeradas, mismo lenguaje visual que Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto mt-4">
              {objetivosAcademicos.map((descripcion, idx) => (
                <div
                  key={idx}
                  className="group h-full bg-white rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-lg transition duration-300 p-6 flex gap-4 items-start"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <span className="text-white font-display font-black text-sm">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-gray-600 font-body text-sm leading-relaxed pt-1.5">{descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnchoredSection>

      <AnchoredSection id="educativos">
        <div className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle
              title="Objetivos **Educacionales**"
              center
              subtitle="Lo que logrará el egresado dentro de los primeros cuatro años tras graduarse."
            />

            {/* OEP1–4: el código oficial es el protagonista, es como los cita la propia acreditación */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-4">
              {objetivosEducacionales.map((obj) => (
                <div
                  key={obj.codigo}
                  className="bg-white rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-lg transition duration-300 p-6"
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-gold font-display font-black text-sm tracking-wide mb-4">
                    {obj.codigo}
                  </span>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">{obj.descripcion}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center text-center">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
                RD N.° 029-2022-EPIA-FIQ/UNT · RCF N.° 001-2023-FIQ/UNT
              </span>
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
