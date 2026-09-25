import React from 'react';
import { Card } from '../ui/Card';
import { User, Mail, GraduationCap } from 'lucide-react';

interface Autoridad {
  cargo: string;
  nombre: string;
  bio?: string;
  /** Grados y títulos, uno por elemento. */
  formacion?: string[];
  correo: string;
  foto?: string | null;
  /** Encuadre de la foto; solo aplica si la foto no tiene proporción 2:3. */
  fotoPosicion?: string;
}

interface AutoridadCardProps {
  autoridad: Autoridad;
  principal?: boolean;
}

/**
 * Tarjeta de autoridad: información a la izquierda y la foto completa (2:3) a
 * la derecha. En móvil se apila con la foto arriba.
 */
export default function AutoridadCard({ autoridad, principal = false }: AutoridadCardProps) {
  return (
    <Card
      className={`overflow-hidden p-0 grid grid-cols-1 md:grid-cols-[1fr_auto] ${principal ? 'border-2 border-primary/30 shadow-lg' : ''}`}
    >
      {/* Información */}
      <div className="p-6 md:p-10 flex flex-col justify-center text-left">
        <span className="text-gold font-black text-xs md:text-sm tracking-[0.12em] uppercase mb-2">
          {autoridad.cargo}
        </span>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary leading-tight mb-5">
          {autoridad.nombre}
        </h3>
        <div className="w-16 h-[3px] bg-gold rounded-full mb-5" />

        {autoridad.bio && <p className="text-gray-600 font-body text-sm mb-5 leading-relaxed">{autoridad.bio}</p>}

        {autoridad.formacion && autoridad.formacion.length > 0 && (
          <>
            <p className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-wider mb-3">
              <GraduationCap className="w-4 h-4 text-gold" aria-hidden="true" /> Formación académica
            </p>
            <ul className="text-gray-600 font-body text-sm leading-relaxed space-y-2 list-disc pl-5 marker:text-gold mb-6">
              {autoridad.formacion.map((grado) => (
                <li key={grado}>{grado}</li>
              ))}
            </ul>
          </>
        )}

        <a
          href={`mailto:${autoridad.correo}`}
          className="self-start inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold transition-colors"
        >
          <Mail className="w-4 h-4" /> {autoridad.correo}
        </a>
      </div>

      {/* Foto completa: arriba en móvil, a la derecha en escritorio */}
      <div className="order-first md:order-none bg-primary/5 flex justify-center md:items-center">
        <div className="w-full max-w-[18rem] md:max-w-none md:w-72 lg:w-80 aspect-[2/3] bg-primary/10 flex items-center justify-center text-primary">
          {autoridad.foto ? (
            <img
              src={autoridad.foto}
              alt={autoridad.nombre}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition: autoridad.fotoPosicion ?? 'center top' }}
            />
          ) : (
            <User className="w-20 h-20 opacity-60" />
          )}
        </div>
      </div>
    </Card>
  );
}
