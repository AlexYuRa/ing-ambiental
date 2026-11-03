import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { Badge } from './Badge';

/**
 * Tarjeta informativa genérica: título + badge de tipo + descripción + un dato
 * meta al pie (etiqueta + valor). La usan Convenios ("Vigencia") y Movilidad
 * ("Modalidad"); antes eran dos componentes casi idénticos.
 * Opcionales: `estado` (badge extra junto al tipo) y `detalles` (pares
 * etiqueta/valor listados antes del meta).
 */
interface InfoCardProps {
  titulo: string;
  tipo: string;
  descripcion: string;
  metaLabel: string;
  metaValor: string;
  estado?: { texto: string; variant: 'success' | 'gray' };
  detalles?: { label: string; valor: string }[];
}

export default function InfoCard({ titulo, tipo, descripcion, metaLabel, metaValor, estado, detalles }: InfoCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="h-full">
      <Card className="h-full p-6 flex flex-col">
        <div className="mb-2">
          <h3 className="text-lg font-display font-bold text-primary">{titulo}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="info" className="w-fit">{tipo}</Badge>
          {estado && <Badge variant={estado.variant} className="w-fit">{estado.texto}</Badge>}
        </div>
        <p className="text-gray-600 font-body text-sm mb-4 flex-grow">{descripcion}</p>
        {detalles && detalles.length > 0 && (
          <dl className="space-y-2 mb-4 text-sm">
            {detalles.map((d) => (
              <div key={d.label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{d.label}</dt>
                <dd className="text-gray-700">{d.valor}</dd>
              </div>
            ))}
          </dl>
        )}
        <p className="text-xs font-bold text-gray-600 mt-auto bg-gray-50 p-2 rounded inline-block w-fit">
          {metaLabel}: {metaValor}
        </p>
      </Card>
    </motion.div>
  );
}
