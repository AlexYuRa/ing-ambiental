import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Images, Newspaper } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/layout/PageHero';
import { SectionTitle } from '../components/ui/SectionTitle';
import NoticiaCard from '../components/noticias/NoticiaCard';
import GaleriaNoticia from '../components/noticias/GaleriaNoticia';
import { noticias } from '@profile/content/noticias';
import NotFound from './NotFound';

/** Detalle de una noticia: /noticias/:slug (texto completo + galería de fotos). */
export default function NoticiaDetalle() {
  const { slug } = useParams();
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) return <NotFound />;

  const otras = noticias.filter((n) => n.slug !== noticia.slug);

  return (
    <PageWrapper>
      <PageHero
        // Títulos de noticia más largos que los de sección: un tamaño menor.
        title={<span className="block text-3xl md:text-4xl lg:text-5xl">{noticia.titulo}</span>}
        icon={Newspaper}
        breadcrumbs={[{ label: 'Noticias', to: '/noticias' }, { label: noticia.titulo }]}
      />

      <article className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
              {noticia.categoria}
            </span>
            {noticia.fechaFormateada && (
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" />
                {noticia.fechaFormateada}
              </span>
            )}
          </div>

          <motion.img
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            src={noticia.imagen}
            alt={noticia.titulo}
            className="w-full max-h-[520px] object-cover rounded-2xl shadow-lg mb-8"
          />

          <div className="space-y-4 text-gray-700 font-body text-base md:text-lg leading-relaxed">
            {noticia.contenido.map((parrafo, i) => (
              <p key={i}>{parrafo}</p>
            ))}
          </div>

          {noticia.galeria.length > 0 && (
            <section className="mt-12" aria-labelledby="galeria-titulo">
              <h2 id="galeria-titulo" className="flex items-center gap-2 font-display font-bold text-primary text-xl mb-5">
                <Images className="w-5 h-5 text-gold" aria-hidden="true" />
                Galería de fotos
                <span className="text-sm font-body font-semibold text-gray-500">({noticia.galeria.length})</span>
              </h2>
              <GaleriaNoticia imagenes={noticia.galeria} titulo={noticia.titulo} />
            </section>
          )}

          <Link
            to="/noticias"
            className="mt-12 inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a noticias
          </Link>
        </div>
      </article>

      {otras.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle title="Otras **noticias**" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
              {otras.map((n) => (
                <NoticiaCard key={n.slug} noticia={n} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
