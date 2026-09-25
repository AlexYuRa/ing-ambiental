import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

interface GaleriaNoticiaProps {
  imagenes: string[];
  /** Texto base para el alt de cada foto (p. ej. el título de la noticia). */
  titulo: string;
}

/**
 * Galería de fotos de una noticia: cuadrícula de miniaturas y visor a pantalla
 * completa. El visor se cierra con Esc, la X o clic en el fondo; ← → cambian de
 * foto. Al abrir, el foco va al botón de cierre y el scroll de la página se
 * bloquea; al cerrar, el foco vuelve a la miniatura que lo abrió.
 */
export default function GaleriaNoticia({ imagenes, titulo }: GaleriaNoticiaProps) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const miniaturasRef = useRef<(HTMLButtonElement | null)[]>([]);
  const total = imagenes.length;

  const cerrar = useCallback(() => {
    if (abierta !== null) miniaturasRef.current[abierta]?.focus();
    setAbierta(null);
  }, [abierta]);
  const anterior = useCallback(() => setAbierta((i) => (i === null ? i : (i - 1 + total) % total)), [total]);
  const siguiente = useCallback(() => setAbierta((i) => (i === null ? i : (i + 1) % total)), [total]);

  const estaAbierta = abierta !== null;

  useEffect(() => {
    if (!estaAbierta) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar();
      else if (e.key === 'ArrowLeft') anterior();
      else if (e.key === 'ArrowRight') siguiente();
    };
    window.addEventListener('keydown', onKey);
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    cerrarRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflowPrevio;
    };
  }, [estaAbierta, cerrar, anterior, siguiente]);

  if (total === 0) return null;

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {imagenes.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              ref={(el) => { miniaturasRef.current[i] = el; }}
              onClick={() => setAbierta(i)}
              aria-label={`Ampliar foto ${i + 1} de ${total}`}
              className="group relative block w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <img
                src={src}
                alt={`${titulo} — foto ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                <Expand className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {abierta !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${abierta + 1} de ${total}: ${titulo}`}
        >
          {/* Fondo: clic para cerrar */}
          <button type="button" aria-label="Cerrar visor" onClick={cerrar} className="absolute inset-0 cursor-default" tabIndex={-1} />

          <img
            src={imagenes[abierta]}
            alt={`${titulo} — foto ${abierta + 1}`}
            className="relative max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          />

          <button
            type="button"
            ref={cerrarRef}
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute top-3 right-3 md:top-5 md:right-5 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="w-5 h-5" />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={anterior}
                aria-label="Foto anterior"
                className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={siguiente}
                aria-label="Foto siguiente"
                className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-semibold tabular-nums" aria-live="polite">
                {abierta + 1} / {total}
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}
