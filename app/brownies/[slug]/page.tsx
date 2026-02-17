import { notFound } from 'next/navigation';
import BrownieClient from './BrownieClient';

const brownies = {
  'brownie-clasico': {
    es: {
      nombre: 'Brownie Clásico',
      subtitulo: 'Chocolate serio.',
      descripcion:
        'Chocolate intenso, interior húmedo y corte limpio. Sin toppings innecesarios ni distracciones. Solo un brownie bien hecho.',
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
        'Deep chocolate flavor, fudgy center and a clean cut. No unnecessary toppings. Just a properly made brownie.',
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
        'Masa de mantequilla dorada con trozos de Oreo en el interior. Dulce, suave y sorprendentemente equilibrado.',
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
        'Golden butter dough filled with Oreo chunks. Sweet, soft and surprisingly balanced.',
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
        'Blondie de mantequilla con crema de Lotus fundida en la masa. Goloso pero elegante.',
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
        'Butter blondie with melted Lotus cream inside. Indulgent yet elegant.',
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
        'Mitad brownie, mitad cookie. Crujiente por fuera, húmedo por dentro. El híbrido definitivo.',
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
        'Half brownie, half cookie. Crispy outside, fudgy inside. The ultimate hybrid.',
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