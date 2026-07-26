import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import HitoTimeline from '../../components/identidad/HitoTimeline';
import { CalendarCheck } from 'lucide-react';
import { historia } from '@profile/content/identidad';

export default function Historia() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Nuestra **Historia**" center subtitle="Formando ingenieros ambientales comprometidos con la sostenibilidad." />

        {/* Disciplina: qué es la Ingeniería Ambiental */}
        <div className="max-w-2xl mx-auto mt-12 mb-16 text-center">
          <p className="text-gray-600 font-body text-lg leading-relaxed">{historia.disciplina}</p>
        </div>

        {/* Creación del programa */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative bg-white border border-gray-100 rounded-2xl shadow-sm p-8 overflow-hidden">
            <div className="absolute left-0 top-0 right-0 h-1 bg-gradient-to-r from-primary to-gold" />
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                <CalendarCheck className="w-4 h-4" /> {historia.creacion.fecha}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {historia.creacion.resolucion}
              </span>
            </div>
            <p className="text-gray-600 font-body leading-relaxed">{historia.creacion.descripcion}</p>
          </div>
        </div>

        {/* Antecedentes */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-6">Antecedentes</h3>
            <ul className="space-y-4">
              {historia.antecedentes.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea de tiempo */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-primary mb-12">Línea de Tiempo <span className="text-gold">Histórica</span></h3>
          <HitoTimeline hitos={historia.hitos} />
        </div>
      </div>
    </div>
  );
}
