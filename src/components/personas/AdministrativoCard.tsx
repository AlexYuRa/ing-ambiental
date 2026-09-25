import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import type { Administrativo } from '@profile/content/administrativos';

/**
 * Tarjeta de personal administrativo (mismo alto que DocenteCard): foto a todo el tamaño con un
 * degradado inferior y los datos encima. Sin foto, muestra una silueta sobre
 * el color institucional con el mismo bloque de texto.
 */
export default function AdministrativoCard({ persona, index = 0 }: { persona: Administrativo; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="relative h-[390px] overflow-hidden rounded-2xl bg-primary shadow-sm"
    >
      {persona.foto ? (
        <img
          src={persona.foto}
          alt={persona.nombre}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 flex items-start justify-center pt-[18%]" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
          />
          <User className="w-20 h-20 text-white/20" />
        </div>
      )}

      {/* Degradado inferior para que el texto se lea sobre la foto */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-primary via-primary/75 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-white text-center">
        <p className="text-gold text-[10px] font-black uppercase tracking-[0.08em]">{persona.categoria}</p>
        <h3 className="font-display font-bold text-sm leading-tight mt-1">{persona.nombre}</h3>
        <p className="text-white/85 text-xs leading-snug mt-1">{persona.area}</p>
      </div>
    </motion.article>
  );
}
