import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import AdministrativoCard from '../../components/personas/AdministrativoCard';
import { administrativos } from '@profile/content/administrativos';
import { site } from '@/profile';

export default function Administrativos() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Personal **Administrativo**"
          subtitle={`Equipo técnico y administrativo que da soporte al ${site.programa.nombre}.`}
          center
        />
        {/* Misma cuadrícula que la plana docente: 5 por fila en escritorio. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-12 max-w-7xl mx-auto">
          {administrativos.map((persona, idx) => (
            <AdministrativoCard key={persona.nombre} persona={persona} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
