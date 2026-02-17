import type { Metadata } from 'next';

/**
 * SEO específico por tarta
 * Cada slug tiene su title + description optimizados
 */
const tartasSeo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  'nivel-dios': {
    title: 'Nivel Dios — Tarta de queso de cabra ahumado | Cookordie',
    description:
      'Tarta de queso artesanal con queso de cabra ahumado. Intensa, profunda y sin concesiones. Para bares y restaurantes que no sirven cualquier cosa.',
  },
  'top-secret': {
    title: 'Top Secret — Tarta de queso de pistacho | Cookordie',
    description:
      'Tarta de queso de pistacho sin censura. Cremosa, elegante y adictiva. Pistacho real, textura perfecta y cero distracciones.',
  },
  'la-romantica': {
    title: 'La Romántica — Tarta de queso con Lotus | Cookordie',
    description:
      'Tarta de queso con crema de Lotus bien equilibrada. Golosa, sedosa y con carácter. Dulce sin ser empalagosa.',
  },
  'la-chocolatada': {
    title: 'La Chocolatada — Tarta de queso con Nutella | Cookordie',
    description:
      'Tarta de queso rellena y cubierta de Nutella. Densa, directa y sin remordimientos. Para los que no se controlan.',
  },
  'la-azulita': {
    title: 'La Azulita — Tarta de queso azul estilo vasco | Cookordie',
    description:
      'Tarta de queso azul sin base de galleta. Salvaje, intensa y no negociable. Solo para amantes del queso azul.',
  },
  'la-cocoloco': {
    title: 'La Cocoloco — Tarta de queso con dulce de leche y coco | Cookordie',
    description:
      'Tarta de queso con dulce de leche y coco rallado. Tropical, melosa y descaradamente adictiva.',
  },
  'la-de-fuera': {
    title: 'La de Fuera — Tarta de queso Idiazábal de oveja | Cookordie',
    description:
      'Tarta de queso con Idiazábal de oveja de Beruete. Profunda, elegante y adulta. Otra liga.',
  },

  'la-dubai': {
    title: 'La Dubái — Tarta de queso de chocolate | Cookordie',
    description:
      'Tarta de queso con delicado queso cremoso y el exquisito chocolate de Dubái. Una combinación irresistible que hará vibrar todos tus sentidos.',
  },

  'la-umami': {
  title: 'Umami — Tarta de queso con shiro miso y matcha | Cookordie',
  description:
    'Tarta de queso con shiro miso, crumble de té matcha y chocolate blanco rallado. Umami, equilibrio y elegancia sin concesiones.',
},
};

/**
 * Metadata dinámica para /tartas/[slug]
 */
export function getTartaMetadata(slug: string): Metadata {
  const seo = tartasSeo[slug];

  if (!seo) return {};

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/tartas/${slug}`,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [`/tartas/${slug}.jpg`],
    },
  };
}