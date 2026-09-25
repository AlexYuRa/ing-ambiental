import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { type Noticia, rutaNoticia } from '@profile/content/noticias';

/** Tarjeta de noticia (Inicio, /noticias y "Otras noticias" del detalle). */
export default function NoticiaCard({ noticia }: { noticia: Noticia }) {
  return (
    <Link to={rutaNoticia(noticia)} className="block h-full group">
      <Card className="h-full flex flex-col p-0 overflow-hidden hover:shadow-lg transition-shadow">
        {/* Franja superior */}
        <div className="h-1.5 bg-primary w-full" />
        {/* Imagen */}
        <div className="h-48 w-full overflow-hidden shrink-0">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
              {noticia.categoria}
            </span>
            {noticia.fechaFormateada && (
              <span className="flex items-center gap-1 text-gray-500 text-xs ml-auto">
                <Calendar className="w-3 h-3" />
                {noticia.fechaFormateada}
              </span>
            )}
          </div>
          <h3 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
            {noticia.titulo}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {noticia.resumen}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 text-gold text-sm font-bold group-hover:gap-2 transition-[gap]">
            Leer más <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
