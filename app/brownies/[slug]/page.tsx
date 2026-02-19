import { notFound } from 'next/navigation';
import BrownieClient from './BrownieClient';

const brownies = {
  'brownie-clasico': {
    es: {
      nombre: 'Brownie Clásico',
      subtitulo: 'Chocolate serio.',
      descripcion:
        'Chocolate intenso con corazón cremoso que se derrite en cada mordisco.',
      perfil: ['Intenso', 'Húmedo', 'Puro chocolate', 'Directo'],
      precios: {
        bandeja12: 30,
        bandeja24: 60,
      },
    },
    en: {
      nombre: 'Classic Brownie',
      subtitulo: 'Serious chocolate.',
      descripcion:
        'Intense chocolate with a creamy center that melts in every bite.',
      perfil: ['Intense', 'Fudgy', 'Pure chocolate', 'Straightforward'],
      precios: {
        bandeja12: 30,
        bandeja24: 60,
      },
    },
  },

  'blondie-oreo': {
    es: {
      nombre: 'Blondie Oreo',
      subtitulo: 'Peligrosamente adictivo.',
      descripcion:
        'Cremoso de vainilla y chocolate blanco con trozos de galleta Oreo, suave y jugoso en cada bocado.',
      perfil: ['Dulce', 'Cremoso', 'Adictivo', 'Suave'],
      precios: {
        bandeja12: 35,
        bandeja24: 65,
      },
    },
    en: {
      nombre: 'Blondie Oreo',
      subtitulo: 'Dangerously addictive.',
      descripcion:
        'Creamy vanilla and white chocolate with chunks of Oreo cookie, soft and moist in every bite.',
      perfil: ['Sweet', 'Creamy', 'Addictive', 'Soft'],
      precios: {
        bandeja12: 35,
        bandeja24: 65,
      },
    },
  },

  'blondie-lotus': {
    es: {
      nombre: 'Blondie Lotus',
      subtitulo: 'Dulce sin pedir perdón.',
      descripcion:
        'Blondie suave relleno de crema Lotus y trozos crujientes de galleta, con un corazón que se derrite en la boca.',
      perfil: ['Goloso', 'Mantequilla', 'Suave', 'Reconfortante'],
      precios: {
        bandeja12: 35,
        bandeja24: 65,
      },
    },
    en: {
      nombre: 'Blondie Lotus',
      subtitulo: 'Sweet without apologies.',
      descripcion:
        'Soft blondie filled with Lotus cream and crunchy biscuit pieces, with a heart that melts in your mouth.',
      perfil: ['Indulgent', 'Buttery', 'Soft', 'Comforting'],
      precios: {
        bandeja12: 35,
        bandeja24: 65,
      },
    },
  },

  'brookie': {
    es: {
      nombre: 'Brookie',
      subtitulo: 'La decisión imposible.',
      descripcion:
        'Crujiente por fuera, suave por dentro y con un corazón de chocolate que te hará querer más.',
      perfil: ['Crujiente', 'Húmedo', 'Equilibrado', 'Potente'],
      precios: {
        bandeja12: 38,
        bandeja24: 72,
      },
    },
    en: {
      nombre: 'Brookie',
      subtitulo: 'The impossible choice.',
      descripcion:
        'Crispy on the outside, soft on the inside, with a chocolate center that will make you want more.',
      perfil: ['Crunchy', 'Fudgy', 'Balanced', 'Rich'],
      precios: {
        bandeja12: 38,
        bandeja24: 72,
      },
    },
  },
};

export default async function BrowniePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const key = slug.trim().toLowerCase();

  const brownie = brownies[key as keyof typeof brownies];

  // 🔴 EXACTAMENTE IGUAL QUE TARTAS
  if (!brownie) {
    notFound();
  }

  const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: brownie.es.nombre,
  description: brownie.es.descripcion,
  image: [`https://cookordiebakery.com/brownies/${key}.jpg`],
  brand: {
    "@type": "Brand",
    name: "Cookordie",
  },
  category: "Brownie",
  offers: [
    {
      "@type": "Offer",
      name: "Bandeja 12 porciones",
      price: brownie.es.precios.bandeja12,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://cookordiebakery.com/brownies/${key}`,
    },
    {
      "@type": "Offer",
      name: "Bandeja 24 porciones",
      price: brownie.es.precios.bandeja24,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://cookordiebakery.com/brownies/${key}`,
    },
  ],
};


  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema),
      }}
    />
    <BrownieClient brownie={brownie} slug={key} />
  </>
);
}