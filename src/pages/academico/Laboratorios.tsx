import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { MapPin, Users, Mail, Phone, Clock, FlaskConical } from 'lucide-react';
import { laboratorios } from '@profile/content/laboratorios';

export default function Laboratorios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Nuestros **Laboratorios**"
          center
          subtitle="Espacios de investigación y práctica del programa, con su ubicación, aforo y responsable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
          {laboratorios.map((lab) => (
            <Card key={lab.n} className="p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                {lab.imagen ? (
                  <img
                    src={lab.imagen}
                    alt={lab.nombre}
                    loading="lazy"
                    className="shrink-0 w-11 h-11 rounded-xl object-cover"
                  />
                ) : (
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                )}
                <h3 className="font-display font-bold text-primary text-base leading-tight pt-2">
                  {lab.nombre}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <span className="flex items-center gap-1.5 text-gray-600">
                  <MapPin className="w-4 h-4 text-gold shrink-0" /> {lab.ubicacion}
                </span>
                <span className="flex items-center gap-1.5 text-gray-600">
                  <Users className="w-4 h-4 text-gold shrink-0" /> {lab.aforo}
                </span>
                {lab.correo && (
                  <a
                    href={`mailto:${lab.correo}`}
                    className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors truncate"
                  >
                    <Mail className="w-4 h-4 text-gold shrink-0" /> {lab.correo}
                  </a>
                )}
                {lab.telefono && (
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <Phone className="w-4 h-4 text-gold shrink-0" /> {lab.telefono}
                  </span>
                )}
                {lab.horarioAtencion && (
                  <span className="col-span-2 flex items-center gap-1.5 text-gray-600">
                    <Clock className="w-4 h-4 text-gold shrink-0" /> {lab.horarioAtencion}
                  </span>
                )}
              </div>

              <div className="border-t border-gray-100 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  {lab.responsables.length > 1 ? 'Responsables' : 'Responsable'}
                </p>
                <p className="text-sm text-gray-700">{lab.responsables.join(' · ')}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
