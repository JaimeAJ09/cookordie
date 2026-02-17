import { notFound } from 'next/navigation';
import { getTartaMetadata } from '../../seo/tartasSlug';
import TartaClient from './TartaClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return getTartaMetadata(slug);
}

const tartas = {
  'nivel-dios': {
    es: {
      nombre: 'Nivel Dios',
      subtitulo: 'La original. La intocable. La que lo empezó todo.',
      descripcion:
        'Nuestra tarta más icónica. Queso de cabra ahumado, carácter desde el primer bocado y una profundidad de sabor que no pide permiso. Es la referencia interna. La que usamos para medirlo todo. Y sí, también es la mejor de la carta.',
      perfil: ['Intensa', 'Ahumada', 'Adictiva', 'Sin concesiones'],
      precios: {
        mediana: 20,
        grande: 30,
      },
    },
    en: {
      nombre: 'Nivel Dios',
      subtitulo: 'The original. Untouchable. Where it all started.',
      descripcion:
        'Our most iconic cake. Smoked goat cheese, character from the first bite and a depth of flavor that doesn’t ask for permission. It’s our internal benchmark. And yes, it’s the best one on the menu.',
      perfil: ['Intense', 'Smoky', 'Addictive', 'No compromises'],
      precios: {
        mediana: 20,
        grande: 30,
      },
    },
  },

  'top-secret': {
    es: {
      nombre: 'Top Secret',
      subtitulo: 'Pistacho sin censura.',
      descripcion:
        'Crema de pistacho dentro, crema de pistacho fuera y pistachos triturados rematando. No hay truco, no hay distracción: solo pistacho del bueno y una textura que engancha más de lo que debería.',
      perfil: ['Untuosa', 'Profunda', 'Elegante', 'Obsesiva'],
      precios: {
        mediana: 30,
        grande: 40,
      },
    },
    en: {
      nombre: 'Top Secret',
      subtitulo: 'Uncensored pistachio.',
      descripcion:
        'Pistachio cream inside, pistachio cream outside, finished with crushed pistachios. No tricks, no distractions.',
      perfil: ['Creamy', 'Deep', 'Elegant', 'Obsessive'],
      precios: {
        mediana: 30,
        grande: 40,
      },
    },
  },

  'la-romantica': {
    es: {
      nombre: 'La Romántica',
      subtitulo: 'Lotus, pero bien hecho.',
      descripcion:
        'Rellena de crema de Lotus, media superficie cubierta con más crema y galleta Lotus triturada, y un rayado de crema por toda la tarta. Dulce, sí. Empalagosa, jamás.',
      perfil: ['Dulce', 'Sedosa', 'Reconfortante', 'Peligrosa'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
    en: {
      nombre: 'La Romántica',
      subtitulo: 'Lotus, done properly.',
      descripcion:
        'Filled with Lotus cream, half covered with more cream and crushed biscuits, finished with a drizzle across the cake.',
      perfil: ['Sweet', 'Silky', 'Comforting', 'Dangerous'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
  },

  'la-chocolatada': {
    es: {
      nombre: 'La Chocolatada',
      subtitulo: 'Para los que no se controlan.',
      descripcion:
        'Rellena de Nutella, cubierta de Nutella y rematada con chocolate blanco rallado. No es sutil. No pretende serlo.',
      perfil: ['Golosa', 'Densa', 'Explosiva', 'Sin remordimientos'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
    en: {
      nombre: 'La Chocolatada',
      subtitulo: 'For those with no self-control.',
      descripcion:
        'Filled with Nutella, topped with Nutella and finished with grated white chocolate.',
      perfil: ['Indulgent', 'Dense', 'Explosive', 'No regrets'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
  },

  'la-azulita': {
    es: {
      nombre: 'La Azulita',
      subtitulo: 'Queso azul. Sin anestesia.',
      descripcion:
        'Tarta de queso azul sin base de galleta. Estilo vasca, pero con carácter.',
      perfil: ['Salvaje', 'Intensa', 'Seria', 'No negociable'],
      precios: {
        mediana: 20,
        grande: 30,
      },
    },
    en: {
      nombre: 'La Azulita',
      subtitulo: 'Blue cheese. No anesthesia.',
      descripcion:
        'Blue cheese cheesecake with no biscuit base. Basque style, full character.',
      perfil: ['Wild', 'Intense', 'Serious', 'Non-negotiable'],
      precios: {
        mediana: 20,
        grande: 30,
      },
    },
  },

  'la-cocoloco': {
    es: {
      nombre: 'La Cocoloco',
      subtitulo: 'Dulce de leche y cero control.',
      descripcion:
        'Rellena de dulce de leche y cubierta con más dulce de leche y coco rallado.',
      perfil: ['Tropical', 'Melosa', 'Adictiva', 'Descarada'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
    en: {
      nombre: 'La Cocoloco',
      subtitulo: 'Dulce de leche, zero control.',
      descripcion:
        'Filled with dulce de leche and topped with more dulce de leche and shredded coconut.',
      perfil: ['Tropical', 'Sticky', 'Addictive', 'Bold'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
  },

  'la-de-fuera': {
    es: {
      nombre: 'La de Fuera',
      subtitulo: 'Idiazábal. Oveja. Beruete. Respeto.',
      descripcion:
        'Queso Idiazábal de oveja de Beruete. Es la prima seria de la Nivel Dios.',
      perfil: ['Profunda', 'Elegante', 'Larga', 'De culto'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
    en: {
      nombre: 'La de Fuera',
      subtitulo: 'Idiazábal. Sheep. Beruete. Respect.',
      descripcion:
        'Sheep’s milk Idiazábal cheese from Beruete. The serious cousin of Nivel Dios.',
      perfil: ['Deep', 'Elegant', 'Long finish', 'Cult'],
      precios: {
        mediana: 25,
        grande: 35,
      },
    },
  },
  'la-dubai': {
    es: {
      nombre: 'La Dubái',
      subtitulo: 'Chocolate, lujo y cero modestia.',
      descripcion:
        'Base crujiente de galleta, delicado queso cremoso y el exquisito chocolate de Dubái. Una combinación irresistible que hará vibrar todos tus sentidos.',
      perfil: ['Chocolate', 'Golosa', 'Intensa', 'Excesiva'],
      precios: {
        mediana: 35,
        grande: 45,
      },
    },
    en: {
      nombre: 'La Dubai',
      subtitulo: 'Chocolate, luxury and zero modesty.',
      descripcion:
        'A crunchy biscuit base, silky cream cheese and the finest Dubai chocolate. An irresistible combination designed to hit every single sense.',
      perfil: ['Chocolate', 'Indulgent', 'Intense', 'Excessive'],
      precios: {
        mediana: 35,
        grande: 45,
      },
    },
  },

  'la-umami': {
    es: {
      nombre: 'La Uh Mami',
      subtitulo: 'Dulce, salada y peligrosamente equilibrada.',
      descripcion:
        'Relleno de shiro miso integrado en una base cremosa y delicada. El contraste se remata con un topping de crumble de té matcha y chocolate blanco rallado No es una tarta evidente. Es profunda. elegante y sorprendente. Cuando lo entiendes, ya es tarde.',
      perfil: ['Umami', 'Equilibrada', 'Elegante', 'Adictiva'],
      precios: {
        mediana: 28,
        grande: 40,
      },
    },
    en: {
      nombre: 'La Uh Mami',
      subtitulo: 'Sweet, salty and dangerously balanced.',
      descripcion:
        'Shiro miso blended into a smooth, delicate cheesecake base. Finished with a topping of matcha tea crumble and grated white chocolate. This is not an obvious cake. It´s deep, elegant and surprising. Once you get it, it´s already too late.',
      perfil: ['Umami', 'Balanced', 'Elegant', 'Addictive'],
      precios: {
        mediana: 28,
        grande: 40,
      },
    },
  },

};

export default async function TartaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = slug.trim().toLowerCase();
  const tarta = tartas[key as keyof typeof tartas];

  if (!tarta) {
    notFound();
  }

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://cookordiebakery.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Las Tartas",
      item: "https://cookordiebakery.com/tartas",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: tarta.es.nombre,
      item: `https://cookordiebakery.com/tartas/${key}`,
    },
  ],
};
  
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: tarta.es.nombre,
  description: tarta.es.descripcion,
  image: [`https://cookordiebakery.com/tartas/${key}.jpg`],
  brand: {
    "@type": "Brand",
    name: "Cookordie",
  },
  category: "Cheesecake",
  offers: [
    {
      "@type": "Offer",
      name: "Mediana (18 cm)",
      price: tarta.es.precios.mediana,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://cookordiebakery.com/tartas/${key}`,
    },
    {
      "@type": "Offer",
      name: "Grande (26 cm)",
      price: tarta.es.precios.grande,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://cookordiebakery.com/tartas/${key}`,
    },
  ],
};

return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema),
      }}
    />
    <TartaClient tarta={tarta} slug={key} />
  </>
);

}
