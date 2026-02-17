'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';


export default function Home() {
  const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cookordie",
  url: "https://cookordiebakery.com",
  description:
    "Tartas de queso de autor. Sin postureo. Sin filtros. Sin miedo.",
  publisher: {
    "@type": "Brand",
    name: "Cookordie",
    logo: {
      "@type": "ImageObject",
      url: "https://cookordiebakery.com/logo/cookordie-logo.png",
    },
  },
};

  const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Cookordie",
  url: "https://cookordiebakery.com",
  logo: "https://cookordiebakery.com/logo/cookordie-logo.png",
  image: "https://cookordiebakery.com/og/og-cookordie.png",
  description:
    "Tartas de queso de autor. Sin postureo. Sin filtros. Sin miedo.",
  sameAs: [
    "https://www.instagram.com/cookordie"
  ],
  servesCuisine: "Cheesecake",
  brand: {
    "@type": "Brand",
    name: "Cookordie",
  }
};

  const { lang } = useLanguage();

  const copy = {
    es: {
      heroTitle: 'No hacemos tartas de queso.',
      heroAccent: 'Creamos adicción.',
      heroText:
        'Bienvenido a Cookordie. Recetas propias, actitud sin filtros y tartas que no se olvidan.',
      heroButton: 'Descubre nuestras tartas',

      manifestoTitle: 'Esto no va de postres.',
      manifestoText:
        'Va de obsesión por el detalle. De recetas que no copiamos. De probar, fallar, ajustar y repetir hasta que es perfecto. Va de personalidad. Y de no hacer nada que no nos comeríamos nosotros.',

      cakesTitle: 'Nuestras tartas',

      cakes: [
        {
          name: 'Nivel Dios',
          slug: 'nivel-dios',
          tagline: 'No es marketing. Es literal.',
        },
        {
          name: 'Top Secret',
          slug: 'top-secret',
          tagline: 'Si sabes, sabes.',
        },
        {
          name: 'La Romántica',
          slug: 'la-romantica',
          tagline: 'Dulce, pero con carácter.',
        },
      ],
    },

    en: {
      heroTitle: "We don’t make cheesecake.",
      heroAccent: 'We create addiction.',
      heroText:
        'Welcome to Cookordie. Original recipes, zero filters, and cakes you won’t forget.',
      heroButton: 'Discover our cakes',

      manifestoTitle: 'This is not about desserts.',
      manifestoText:
        'It’s about obsession with detail. Recipes we don’t copy. Testing, failing, adjusting and repeating until it feels right. It’s about personality. And never serving something we wouldn’t eat ourselves.',

      cakesTitle: 'Our cakes',

      cakes: [
        {
          name: 'Nivel Dios',
          slug: 'nivel-dios',
          tagline: 'Not marketing. Literally.',
        },
        {
          name: 'Top Secret',
          slug: 'top-secret',
          tagline: 'If you know, you know.',
        },
        {
          name: 'La Romántica',
          slug: 'la-romantica',
          tagline: 'Sweet, with attitude.',
        },
      ],
    },
  };

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
    />

    <main className="min-h-screen bg-[#FFF7EC] text-[#1A1A1A] font-inter">
      {/* HERO */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-32 gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl leading-tight mb-6">
            {copy[lang].heroTitle}
            <br />
            <span className="text-[#8C1D18]">
              {copy[lang].heroAccent}
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl mb-8">
            {copy[lang].heroText}
          </p>

          <Link
            href="/tartas"
            className="inline-block bg-[#8C1D18] text-[#FFF7EC] px-8 py-4 rounded-full transition-transform hover:scale-115"
          >
            {copy[lang].heroButton}
          </Link>
        </div>

        {/* HERO IMAGE */}
        <div className="flex-1 w-full shadow-2xl rounded-3xl">
          <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden">
            <Image
              src="/tartas/foto-hero.jpg"
              alt="Cookordie cheesecake"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-6 md:px-20 py-24 bg-[#FFF7EC] text-center pt-0">
        <h2 className="font-fraunces text-4xl md:text-5xl mb-6">
          {copy[lang].manifestoTitle}
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          {copy[lang].manifestoText}
        </p>
      </section>

      {/* FEATURED CAKES */}
      <section className="px-6 md:px-20 py-24 pt-0">
        <h2 className="font-fraunces text-4xl md:text-5xl mb-12">
          <Link
              href="/tartas"
            >{copy[lang].cakesTitle}
            </Link>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {copy[lang].cakes.map((cake) => (
            <Link
              key={cake.slug}
              href={`/tartas/${cake.slug}`}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all block"
            >
              <div className="w-full h-74 relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src={`/tartas/${cake.slug}.jpg`}
                  alt={cake.name}
                  fill
                  className="object-fill transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-fraunces text-2xl mb-2 text-[#B32134]">
                {cake.name}
              </h3>
              <p className="text-sm opacity-80">
                {cake.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  </>
  );}