// Avisos institucionales de la barra superior (banner). Edita o vacía la lista.
// Si dejas el arreglo vacío ([]), el banner no se muestra. El banner recorre los
// avisos una sola vez y luego se oculta solo.
//   - texto:  el aviso
//   - link:   destino al pulsar "Ver más" (ruta interna como '/noticias' o URL externa)
//   - externo: true si el link es una URL externa (abre en pestaña nueva)
import { noticias, rutaNoticia } from './noticias';

export interface Aviso {
  id: number;
  texto: string;
  link: string;
  externo: boolean;
}

// Un aviso por noticia (docs/actuyalizar pag. web.doc), enlazado a su detalle.
export const avisos: Aviso[] = noticias.map((noticia) => ({
  id: noticia.id,
  texto: noticia.titulo,
  link: rutaNoticia(noticia),
  externo: false,
}));
