import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import ValorItem from '../../components/identidad/ValorItem';
import { valores } from '@profile/content/identidad';

export default function Valores() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Nuestros **Valores**"
          subtitle="Principios que guían a nuestra comunidad universitaria."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-6xl mx-auto">
          {valores.map((valor, idx) => (
            <ValorItem key={idx} valor={valor} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
