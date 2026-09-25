// Forma: ver profiles/escuela/content/noticias.ts
export interface Noticia {
  id: number;
  slug: string;
  categoria: string;
  categoriaColor: string;
  titulo: string;
  resumen: string;
  contenido: string[];
  fecha?: string;
  fechaFormateada?: string;
  imagen: string;
  galeria: string[];
}

export const noticias: Noticia[] = [];

export const rutaNoticia = (noticia: Pick<Noticia, 'slug'>) => `/noticias/${noticia.slug}`;
