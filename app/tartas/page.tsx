'use client';

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { tartasMetadata } from '../seo/tartas';
import Image from 'next/image';


export default function TartasPage() {
  const metadata = tartasMetadata;
  
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
  ],
};
  const tartasSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tartas de Cookordie",
  description:
    "Catálogo de tartas de queso de autor de Cookordie.",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 7,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Nivel Dios",
      url: "https://cookordiebakery.com/tartas/nivel-dios",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Top Secret",
      url: "https://cookordiebakery.com/tartas/top-secret",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "La Romántica",
      url: "https://cookordiebakery.com/tartas/la-romantica",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "La Chocolatada",
      url: "https://cookordiebakery.com/tartas/la-chocolatada",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "La Azulita",
      url: "https://cookordiebakery.com/tartas/la-azulita",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "La Cocoloco",
      url: "https://cookordiebakery.com/tartas/la-cocoloco",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "La de Fuera",
      url: "https://cookordiebakery.com/tartas/la-de-fuera",
    },
  ],
  };
  
  const { lang } = useLanguage();

  const copy = {
    es: {
      title: 'Nuestras Cheesecakes',
      //intro: 'Cada una tiene su personalidad. Todas tienen mala intención.',
      cakes: [
        {
          slug: 'nivel-dios',
          nombre: 'Nivel Dios',
          tagline: 'No es marketing. Es literal.',
        },
        {
          slug: 'top-secret',
          nombre: 'Top Secret',
          tagline: 'Si sabes, sabes.',
        },
        {
          slug: 'la-romantica',
          nombre: 'La Romántica',
          tagline: 'Dulce, pero con carácter.',
        },
        {
          slug: 'la-chocolatada',
          nombre: 'La Chocolatada',
          tagline: 'Pecado bien ejecutado.',
        },
        {
          slug: 'la-azulita',
          nombre: 'La Azulita',
          tagline: 'No es para todos. Y mejor así.',
        },
        {
          slug: 'la-cocoloco',
          nombre: 'La Cocoloco',
          tagline: 'Dulce de leche y cero control.',
        },
        {
          slug: 'la-de-fuera',
          nombre: 'La de Fuera',
          tagline: 'Idiazábal. Oveja. Beruete. Respeto.',
        },
        {
          slug: 'la-dubai',
          nombre: 'La Dubái',
          tagline: 'Chocolate, lujo y cero modestia.',
        },
        {
          slug: 'la-umami',
          nombre: 'La Uh Mami',
          tagline: 'Dulce, salada y peligrosamente equilibrada.',
        },
      ],
    },

    en: {
      title: 'Our Cheesecakes',
      //intro: 'Each one has its own personality. All of them have bad intentions.',
      cakes: [
        {
          slug: 'nivel-dios',
          nombre: 'Nivel Dios',
          tagline: 'Not marketing. Literally.',
        },
        {
          slug: 'top-secret',
          nombre: 'Top Secret',
          tagline: 'If you know, you know.',
        },
        {
          slug: 'la-romantica',
          nombre: 'La Romántica',
          tagline: 'Sweet, but with attitude.',
        },
        {
          slug: 'la-chocolatada',
          nombre: 'La Chocolatada',
          tagline: 'A well-executed sin.',
        },
        {
          slug: 'la-azulita',
          nombre: 'La Azulita',
          tagline: 'Not for everyone. Even better.',
        },
        {
          slug: 'la-cocoloco',
          nombre: 'La Cocoloco',
          tagline: 'Dulce de leche with zero control.',
        },
        {
          slug: 'la-de-fuera',
          nombre: 'La de Fuera',
          tagline: 'Idiazábal. Sheep. Beruete. Respect.',
        },
        {
          slug: 'la-dubai',
          nombre: 'La Dubai',
          tagline: 'Chocolate,luxury and zero modesty.',
        },
        {
          slug: 'la-umami',
          nombre: 'La Uh Mami',
          tagline: 'Sweet, salty and dangerously balanced.',
        },
      ],
    },
  };

  return (
    <>
      {/* Breadcrumbs */}
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tartasSchema),
        }}
      />
    
    <section className="px-6 md:px-20 py-24 bg-[#FFF7EC]">
      <h1 className="font-fraunces text-5xl md:text-6xl mb-6 text-black ">
        {copy[lang].title}
      </h1>

      {/*<p className="max-w-2xl text-lg mb-16 opacity-80 text-black">
        {copy[lang].intro}
      </p>*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {copy[lang].cakes.map((tarta) => (
          <Link
            key={tarta.slug}
            href={`/tartas/${tarta.slug}`}
            className="group"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              
              {/* CONTENEDOR IMAGEN DE LA TARTA */}
              <div className="relative w-full h-64 overflow-hidden">
                {/* IMAGEN DE LA TARTA */}
                <Image
                  src={`/tartas/${tarta.slug}.jpg`} // ← aquí va la imagen
                  alt={tarta.nombre}
                  fill
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"/>
              </div>


              <div className="p-6">
                <h2 className="font-fraunces text-2xl mb-2 text-black transition-colors duration-300 group-hover:text-[#8C1D18]">
                  {tarta.nombre}
                </h2>
                <p className="text-sm opacity-80 text-black">
                  {tarta.tagline}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
  );
}