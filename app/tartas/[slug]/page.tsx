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
        'Queso semicurado ahumado de cabra de Valsequillo. Clásica y absolutamente inolvidable.',
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
        'Smoked semi-cured goat cheese from Valsequillo. Classic and absolutely unforgettable.',
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
        'Base de galleta Lotus, crema de queso y pistacho en su interior, decorada con crema de pistacho y pistachos semitriturados.',
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
        'Lotus biscuit base, cream cheese and pistachio inside, decorated with pistachio cream and semi-crushed pistachios.',
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
        'Base de galleta Lotus, queso crema y crema Lotus con galleta escarchada.',
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
        'Lotus biscuit base, cream cheese and Lotus cream with frosted biscuit pieces.',
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
        'Crema de queso y chocolate cremoso sobre base de galleta Lotus con mantequilla. Decorada con nutella y chocolate blanco rallado.',
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
        'Cream cheese and creamy chocolate on a Lotus biscuit base with butter. Decorated with Nutella and grated white chocolate.',
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
        'Cremoso queso azul, sin base. Para quienes disfrutan del sabor con intensidad.',
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
        'Creamy blue cheese, no base. For those who enjoy bold, intense flavor.',
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
        'Corazón de dulce de leche, cubierta por una capa de dulce de leche y ralladura de coco.',
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
        'Dulce de leche center, covered with a layer of dulce de leche and shredded coconut.',
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
        'Queso Idiazábal de Beruete, premiado por su excelencia.',
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
        'Idiazábal cheese from Beruete, awarded for its excellence.',
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
        'Queso cremoso, chocolate de Dubái y base crujiente de galleta.',
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
        'Creamy cheese, Dubai chocolate, and a crunchy biscuit base.',
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
        'Shiro miso dulce, crumble de té matcha y ralladura de chocolate blanco.',
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
        'Sweet Shiro miso, matcha tea crumble and white chocolate shavings.',
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
