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
      heroTitle: 'Cheesecakes para sobremesas',
      heroAccent: 'que no quieren terminar',
      heroText:
        'En Cookordie hacemos cheesecakes con ingredientes de primera, exploramos nuevos sabores y celebramos contigo tus mejores momentos.',
      heroButton: 'Descubre nuestras Cheesecakes',

      manifestoTitle: 'Los mejores momentos suceden alrededor de una mesa.',
      manifestoText:
        'Cuando la cena termina y la conversación sigue fluyendo. Cuando alguien sonríe y pregunta: “Bueno, ¿y el postre?”',

      whoWeAreTitle: 'Quiénes somos' , 
      whoWeAreText: 'Somos un equipo pequeño que cree en las sobremesas que se alargan y en la importancia de compartir momentos dulces con quienes más queremos. No hacemos tartas. Creamos recuerdos que se comparten.Cada cheesecake es la herencia de nuestro queridísimo Javi: del cuidado por los detalles, de la pasión por la cocina y del amor por reunir a la gente. Eso se nota en cada tarta que llega a tu mesa.',

      cakesTitle: 'Nuestras cheesecakes',

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
      heroTitle: "Cheesecakes for after-dinners",
      heroAccent: 'that you never want to end',
      heroText:
        'At Cookordie we make cheesecakes with top-quality ingredients, explore new flavors, and celebrate your best moments with you.',
      heroButton: 'Discover our cheesecakes',

      manifestoTitle: 'The best moments happen around a table.',
      manifestoText:
        'When dinner ends but the conversation keeps flowing. When someone smiles and asks, “So… what about dessert?”',

      whoWeAreTitle: 'Who we are' , 
      whoWeAreText: 'We are a small team that believes in long, lingering after-dinners and in the importance of sharing sweet moments with the people we love most. We don’t just make cakes. We create memories meant to be shared. Each cheesecake carries the legacy of our beloved Javi: a care for details, a passion for cooking, and a love for bringing people together. You can taste it in every cake that reaches your table.',


      cakesTitle: 'Our cheesecakes',

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

      <section className="px-6 md:px-20 py-24 bg-[#FFF7EC] text-center pt-0">
        <h2 className="font-fraunces text-4xl md:text-5xl mb-6">
          {copy[lang].whoWeAreTitle}
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          {copy[lang].whoWeAreText}
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