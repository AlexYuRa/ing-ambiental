import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import AutoridadCard from '../../components/personas/AutoridadCard';
import { director } from '@profile/content/autoridades';
import { site } from '@/profile';

export default function Direccion() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Órganos de **Dirección**" center subtitle={`Autoridades encargadas de la gestión académica y administrativa del ${site.denominacion}.`} />

        <div className="max-w-3xl mx-auto mt-8">
          <AutoridadCard autoridad={director} principal={true} />
        </div>
      </div>
    </div>
  );
}