import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { User } from 'lucide-react';
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-w-6xl mx-auto">
          {administrativos.map((persona, idx) => (
            <Card key={idx} className="p-6 flex gap-4 items-start">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary text-base leading-tight">
                  {persona.nombre}
                </h4>
                <p className="text-gold text-xs font-black uppercase tracking-wide mt-1">
                  {persona.categoria}
                </p>
                <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{persona.area}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
