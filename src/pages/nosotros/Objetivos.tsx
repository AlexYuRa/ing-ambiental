import React, { useState } from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';
import CurriculumVersionSwitch from '../../components/academico/CurriculumVersionSwitch';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Quote } from 'lucide-react';
import {
  objetivosEducacionales,
  objetivoAcademicoGeneral,
  objetivosAcademicosEspecificos,
} from '@profile/content/objetivos';

/**
 * Página agrupada "Objetivos". El navbar muestra "Objetivos educativos" y
 * "Objetivos académicos" por separado; ambos llevan aquí (#educativos / #academicos).
 */
export default function Objetivos() {
  // El plan vigente es el 2018 (ver historia.hitos): por defecto se abre ahí,
  // no en "2027" (que todavía no existe como plan real).
  const [version, setVersion] = useState('2018');

  return (
    <>
      {/* Selector de versión del plan curricular (2018 / 2027) */}
      <div className="bg-white pt-10">
        <div className="container mx-auto px-4 md:px-8">
          <CurriculumVersionSwitch value={version} onChange={setVersion} />
        </div>
      </div>

      {version === '2018' ? (
        <>
          <AnchoredSection id="academicos">
            <div className="bg-white py-16 md:py-20">
              <div className="container mx-auto px-4 md:px-8">
                <SectionTitle
                  title="Objetivos **Académicos**"
                  center
                  subtitle="Lo que persigue formar el plan de estudios en cada egresado."
                />

                {/* Objetivo general: párrafo destacado, no una tarjeta más. Es un
                    texto largo (resolución), por eso el tamaño se queda moderado
                    en vez del tratamiento "declaración corta" que sí usan los hitos. */}
                <div className="relative max-w-3xl mx-auto mt-4 mb-16 text-center">
                  <Quote className="w-9 h-9 text-gold/25 mx-auto mb-3" aria-hidden="true" />
                  <p className="font-display font-medium text-primary text-lg md:text-xl leading-relaxed">
                    {objetivoAcademicoGeneral}
                  </p>
                </div>

                {/* Objetivos específicos: tarjetas numeradas, mismo lenguaje visual que Valores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                  {objetivosAcademicosEspecificos.map((obj, idx) => (
                    <div
                      key={obj.codigo}
                      className="group h-full bg-white rounded-2xl border border-gray-100 hover:border-gold/40 hover:shadow-lg transition duration-300 p-6 flex gap-4 items-start"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                        <span className="text-white font-display font-black text-sm">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-gray-600 font-body text-sm leading-relaxed pt-1.5">{obj.descripcion}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
                    Resolución de Decanato N.° 0324-2026-FIQ/UNT
                  </span>
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
      ) : (
        <EnConstruccion titulo="Objetivos **2027**" descripcion="Los objetivos del plan 2027 estarán disponibles próximamente." />
      )}
    </>
  );
}
