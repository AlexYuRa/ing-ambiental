import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MisionCard from '../../components/identidad/MisionCard';
import { mision, vision, misionVisionResolucion } from '@profile/content/identidad';
import { Target, Telescope } from 'lucide-react';

export default function MisionVision() {
  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Misión y **Visión**"
          subtitle="Los propósitos que guían nuestro camino hacia la excelencia y la sostenibilidad."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
          <div id="mision" className="scroll-mt-[180px]">
            <MisionCard
              title="Nuestra Misión"
              description={mision}
              icon={<Target className="w-6 h-6 text-gold" />}
            />
          </div>
          <div id="vision" className="scroll-mt-[180px]">
            <MisionCard
              title="Nuestra Visión"
              description={vision}
              icon={<Telescope className="w-6 h-6 text-gold" />}
            />
          </div>
        </div>

        {/* Resolución que aprueba ambas (definida en el perfil). Sin ella, no se muestra. */}
        {misionVisionResolucion && (
          <div className="mt-8 flex justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200">
              Vigentes según {misionVisionResolucion}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}