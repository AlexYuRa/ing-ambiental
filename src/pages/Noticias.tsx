import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/layout/PageHero';
import NoticiaCard from '../components/noticias/NoticiaCard';
import { noticias } from '@profile/content/noticias';
import { site } from '@/profile';
import { Newspaper } from 'lucide-react';

export default function Noticias() {
  return (
    <PageWrapper>
      <PageHero
        title="Noticias y Actualidad"
        subtitle={`Eventos, convocatorias y logros del ${site.programa.nombre}.`}
        icon={Newspaper}
        breadcrumbs={[{ label: 'Noticias' }]}
      />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {noticias.map((noticia, idx) => (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <NoticiaCard noticia={noticia} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
