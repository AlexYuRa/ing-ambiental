import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import InfoCard from '../../components/ui/InfoCard';
import { convenios } from '@profile/content/investigacion';

// 'DD/MM/AAAA' → Date (fin del día de término). Si no es una fecha (p. ej.
// "Indefinido"), devuelve null y el convenio se considera vigente.
function parseFecha(texto: string): Date | null {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(texto.trim());
  if (!m) return null;
  return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]), 23, 59, 59);
}

function estaVigente(termino: string, hoy = new Date()): boolean {
  const fin = parseFecha(termino);
  return fin === null || fin >= hoy;
}

export default function Convenios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Convenios **Institucionales**" center subtitle="Alianzas estratégicas que potencian el desarrollo académico y las prácticas profesionales." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {convenios.map((convenio) => {
            const vigente = estaVigente(convenio.termino);
            return (
              <InfoCard
                key={`${convenio.institucion}-${convenio.resolucion}`}
                titulo={convenio.institucion}
                tipo={convenio.tipo}
                estado={vigente ? { texto: 'Vigente', variant: 'success' } : { texto: 'Vencido', variant: 'gray' }}
                descripcion={convenio.descripcion}
                detalles={[
                  { label: 'Resolución', valor: convenio.resolucion },
                  { label: 'Coordinador', valor: convenio.coordinador },
                ]}
                metaLabel="Vigencia"
                metaValor={`${convenio.inicio} – ${convenio.termino}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
