import React from 'react';
import { motion } from 'framer-motion';

interface Publicacion {
  titulo: string;
  tipo: string;
  autores: string[];
  año?: string;
  url?: string;
  registro?: string;
}

interface PublicacionItemProps {
  publicacion: Publicacion;
  index: number;
}

export default function PublicacionItem({ publicacion, index }: PublicacionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
    >
      <div>
        <span className="inline-block text-[10px] font-black uppercase tracking-wide text-gold bg-gold/10 px-2.5 py-1 rounded-full mb-2">
          {publicacion.tipo}
        </span>
        <h3 className="text-lg font-display font-bold text-primary mb-2">{publicacion.titulo}</h3>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-bold">Autores:</span> {publicacion.autores.join(', ')}
        </p>
        {(publicacion.año || publicacion.registro) && (
          <p className="text-gray-500 text-sm">
            {publicacion.registro && <span className="font-bold">{publicacion.registro}</span>}
            {publicacion.registro && publicacion.año && ' · '}
            {publicacion.año}
          </p>
        )}
      </div>
      {publicacion.url && (
        <a href={publicacion.url} target="_blank" rel="noopener noreferrer"
           className="shrink-0 bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
          Ver publicación
        </a>
      )}
    </motion.div>
  );
}