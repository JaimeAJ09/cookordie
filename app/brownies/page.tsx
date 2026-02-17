'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function BrowniesPage() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      title: 'Los Brownies',
      intro:
        'Chocolate, mantequilla y cero medias tintas. No son acompañamiento. Son protagonistas.',
      products: [
        {
          slug: 'brownie-clasico',
          nombre: 'Brownie Clásico',
          tagline: 'Chocolate serio.',
        },
        {
          slug: 'blondie-oreo',
          nombre: 'Blondie Oreo',
          tagline: 'Peligrosamente adictivo.',
        },
        {
          slug: 'blondie-lotus',
          nombre: 'Blondie Lotus',
          tagline: 'Dulce sin pedir perdón.',
        },
        {
          slug: 'brookie',
          nombre: 'Brookie',
          tagline: 'La decisión imposible.',
        },
      ],
    },

    en: {
      title: 'The Brownies',
      intro:
        'Chocolate, butter and zero compromises. Not a side dish. The main event.',
      products: [
        {
          slug: 'brownie-clasico',
          nombre: 'Classic Brownie',
          tagline: 'Serious chocolate.',
        },
        {
          slug: 'blondie-oreo',
          nombre: 'Blondie Oreo',
          tagline: 'Dangerously addictive.',
        },
        {
          slug: 'blondie-lotus',
          nombre: 'Blondie Lotus',
          tagline: 'Sweet without apologies.',
        },
        {
          slug: 'brookie',
          nombre: 'Brookie',
          tagline: 'The impossible choice.',
        },
      ],
    },
  };

  return (
    <section className="px-6 md:px-20 py-24 bg-[#FFF7EC]">
      <h1 className="font-fraunces text-5xl md:text-6xl mb-6 text-black">
        {copy[lang].title}
      </h1>

      <p className="max-w-2xl text-lg mb-16 opacity-80 text-black">
        {copy[lang].intro}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {copy[lang].products.map((product) => (
          <Link key={product.slug} href={`/brownies/${product.slug}`} className="group">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">

              {/* IMAGEN DEL PRODUCTO */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={`/brownies/${product.slug}.jpg`}
                  alt={product.nombre}
                  fill
                  className="object-fill transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h2 className="font-fraunces text-2xl mb-2 text-black group-hover:text-[#8C1D18]">
                  {product.nombre}
                </h2>
                <p className="text-sm opacity-80 text-black">
                  {product.tagline}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}