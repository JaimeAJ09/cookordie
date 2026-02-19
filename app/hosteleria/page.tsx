'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import { hosteleriaMetadata } from '../seo/hosteleria';
import Image from 'next/image';

export default function Hosteleria() {
  const metadata = hosteleriaMetadata;
  const { lang } = useLanguage();
  const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Cookordie",
  description:
    "Tartas de queso de autor para bares y restaurantes. Recetas propias, sin postureo y con carácter.",
  url: "https://cookordiebakery.com/hosteleria",
  logo: "https://cookordiebakery.com/logo/cookordie-logo.png",
  image: "https://cookordiebakery.com/og/og-cookordie.png",
  servesCuisine: "Cheesecake",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  sameAs: [
    "https://www.instagram.com/cookordie",
  ],
};

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Trabajáis con cualquier bar o restaurante?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. Cookordie trabaja solo con locales que cuidan el producto y saben lo que quieren servir. Si todo encaja, hablamos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Podemos elegir solo algunas tartas?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sí. Trabajamos con una selección cerrada, pero cada local elige qué tartas entran en su carta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se pueden personalizar recetas?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "En algunos casos, sí. Siempre que tenga sentido y mantenga el estándar Cookordie.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tamaños ofrecéis?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Trabajamos con formatos pensados para hostelería, adaptados al servicio de cada local.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacéis envíos?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Sí, organizamos la logística según el tipo de colaboración y el volumen.",
      },
    },
  ],
};

  const copy = {
    es: {
      heroTitle: 'Sabemos que se llega más lejos con buena compañía.',
      heroSubtitle:
        'Por eso, nuestros partners están siempre muy bien acompañados.',
      heroText: 'En Cookordie trabajamos de la mano con restaurantes, cafeterías y hoteles para llevar nuestras cheesecakes y postres a quienes buscan un producto exquisito. Cada tarta está hecha con ingredientes seleccionados, con atención al detalle y con la pasión que nos caracteriza.',
        
      yesTitle: 'Esto es para ti si…',
      yesList: [
        'Te importa más el criterio que el margen rápido.',
        'No buscas una carta infinita.',
        'Sabes que un buen postre habla de todo lo demás.',
        'Prefieres tener menos referencias, pero bien hechas.',
      ],

      noTitle: 'Esto no es para ti si…',
      noList: [
        'Cambias de proveedor cada tres meses.',
        'Buscas el postre más barato.',
        'Quieres sabores de moda sin saber por qué.',
        'Te da igual lo que sirves mientras se venda.',
      ],

      howTitle: 'Cómo trabajamos',
      howText1:
        'Colaborar con nosotros significa contar con productos que combinan tradición, creatividad y el auténtico sabor de Canarias. Seleccionamos cuidadosamente cada una de nuestras tartas para ofrecer solo lo mejor.',
      howText2:
        'Además, podemos personalizar recetas y adaptar sabores a la carta de tu local, porque nos encanta crear y sorprender.',

      expectTitle: 'Qué puedes esperar',
      expectText1: 'Consistencia en cada pedido. Calidad y sabor reconocibles.',
      expectText2:
        'Tranquilidad al servir un producto que sabes que funciona, porque ha sido pensado para sorprender.',

      closeTitle: 'Si todo esto te encaja, hablamos.',
      closeText:
        'Escríbenos y cuéntanos qué tipo de local tienes. Si tiene sentido, seguimos.',
      button: 'Escríbenos por WhatsApp',
    },

    en: {
      heroTitle: 'We know you go further with good company.',
      heroSubtitle:
        'That’s why our partners are always in great company.',
      heroText: 'At Cookordie we work hand in hand with restaurants, cafés, and hotels to bring our cheesecakes and desserts to those looking for an exquisite product. Every cake is made with carefully selected ingredients, attention to detail, and the passion that defines us.',


      yesTitle: 'This is for you if…',
      yesList: [
        'You value criteria more than quick margins.',
        'You don’t want an endless menu.',
        'You know a good dessert speaks for everything else.',
        'You prefer fewer references, done properly.',
      ],

      noTitle: 'This is not for you if…',
      noList: [
        'You change suppliers every few months.',
        'You’re looking for the cheapest dessert.',
        'You chase trends without knowing why.',
        'You don’t care what you serve as long as it sells.',
      ],

      howTitle: 'How we work',
      howText1:
        'Collaborating with us means offering products that combine tradition, creativity, and the authentic taste of the Canary Islands. We carefully select each of our cakes to provide only the very best.',
      howText2:
        'We can also customize recipes and adapt flavors to your menu, because we love to create and surprise.',

      expectTitle: 'What you can expect',
      expectText1: 'Consistency in every order. Recognizable quality and flavor.',
      expectText2:
        'Peace of mind when serving a product you know works, because it was designed to impress.',

      closeTitle: 'If this feels right, let’s talk.',
      closeText:
        'Write to us and tell us what kind of place you run. If it makes sense, we’ll continue.',
      button: 'Talk to us on WhatsApp',
    },
  };

  return (
  <>
    {/*BussinessSchema*/}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessSchema),
      }}
    />
    {/*FAQSchema*/}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />

    <main className="bg-[#FFF7EC] text-[#1A1A1A] font-inter">
      {/* HERO */}
      <section className="px-6 md:px-20 py-32 text-center">
        <h1 className="text-5xl md:text-7xl leading-tight max-w-4xl mb-10 mx-auto">
          {copy[lang].heroTitle}
        </h1>
        <h2 className="text-2xl md:text-3xl leading-tight max-w-4xl mb-10 mx-auto">
          {copy[lang].heroSubtitle}
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {copy[lang].heroText}
        </p>
      </section>

      {/* PARA QUIÉN SÍ */}
      <section className="px-6 md:px-20 py-24 pt-0">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
      {/* TEXTO */}
          <div>
            <h2 className="font-fraunces text-3xl md:text-4xl mb-10">
              {copy[lang].yesTitle}
            </h2>
            <ul className="space-y-6 text-lg leading-relaxed">
              {copy[lang].yesList.map((item, i) => (
              <li key={i}>— {item}</li>
              ))}
            </ul>
          </div>
      {/*IMAGEN*/}
          <div className='relative mx-auto w-full md:w-[450px] h-[270px] md:h-[360px] rounded-3xl overflow-hidden bg-gray-200 shadow-2xl'>
            {/*AQUI VA LA IMAGEN*/}
              <Image src="/hosteleria/para-ti2.png" fill className='object-fill' alt="" />
          </div>
        </div>
      </section>

      {/* PARA QUIÉN NO */}
      <section className="px-6 md:px-20 py-24 pt-0">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/*IMAGEN (En Desktop va a la izquierda) */}
          <div className='relative mx-auto w-full md:w-[450px] h-[270px] md:h-[360px] rounded-3xl overflow-hidden bg-gray-200 order-2 lgorder-1 shadow-2xl'>
            {/*AQUI VA LA IMAGEN*/}
            <Image src="/hosteleria/no-para-ti.png" fill className="object-fill" alt="" />
          </div>
          {/*TEXTO*/}
          <div className='order-1 lg:order-2'>
            <h2 className="font-fraunces text-3xl md:text-4xl mb-10">
            {copy[lang].noTitle}
            </h2>
          <ul className="space-y-6 text-lg leading-relaxed">
            {copy[lang].noList.map((item, i) => (
            <li key={i}>— {item}</li>
            ))}
          </ul>
          </div>

        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="px-6 md:px-20 py-24 flex flex-col items-center text-center pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
          <div>
            <h3 className="font-fraunces text-3xl mb-6">
              {copy[lang].howTitle}
            </h3>
            <p className="text-lg leading-relaxed">
              {copy[lang].howText1}
            </p>
            <p className="text-lg leading-relaxed mt-6">
              {copy[lang].howText2}
            </p>
          </div>

          <div>
            <h3 className="font-fraunces text-3xl mb-6">
              {copy[lang].expectTitle}
            </h3>
            <p className="text-lg leading-relaxed">
              {copy[lang].expectText1}
            </p>
            <p className="text-lg leading-relaxed mt-6">
              {copy[lang].expectText2}
            </p>
          </div>
        </div>
      </section>

      {/* CIERRE + CONTACTO */}
      <section className="px-6 md:px-20 py-32 bg-[#FFF7EC] text-[#8C1D18]/95">
        <h2 className="font-fraunces text-4xl md:text-5xl mb-8 max-w-3xl mx-auto text-center">
          {copy[lang].closeTitle}
        </h2>

        <p className="text-lg max-w-2xl mb-12 mx-auto text-center text-[#1A1A1A]">
          {copy[lang].closeText}
        </p>

        <div className="flex justify-center">
          <Link
            href="https://wa.me/34651508982?text=Hola%2C%20tengo%20un%20local%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20Cookordie."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#1A1A1A] bg-[#1A1A1A] px-8 py-4 rounded-full hover:bg-[#8C1D18]/95 text-[#FFF7EC] transition-colors"
          >
            {copy[lang].button}
          </Link>
        </div>
      </section>
    </main>
  </>
  );
}
