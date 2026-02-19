'use client';

import { useLanguage } from '../context/LanguageContext';
import { historiaMetadata } from '../seo/historia';
import Link from 'next/link';



export default function Historia() {
const metadata = historiaMetadata;
const { lang } = useLanguage();

const copy = {
  es: {
    heroTitle: 'No nacimos para gustar a todo el mundo.',
    heroText: `Cookordie no es una marca amable.
Es una forma de entender la tarta de queso.`,

    manifesto: [
      'Cookordie existe gracias a Javier Jiménez. Cocinero y perfeccionista. No daba por terminada una receta hasta no sentir que todo tenía sentido.',
      'Tenía talento, mucho criterio y un futuro brillante por delante.',
      'Falleció con 27 años.',
      'Esta marca es nuestro homenaje. Hoy Javi no está, pero su recuerdo sigue vivo en cada tarta que elaboramos.',
      'Su pasión, su entrega y su alegría por juntar a la gente nos impulsaron a crear este proyecto. Hoy, continuamos su sueño: poner el corazón en lo que hacemos, celebrar la vida, saborear cada instante y compartirlo con quienes más queremos.',
      '¡Va por ti Javi!',
    ],

    work: {
      title1: 'Menos ruido. Más fondo.',
      text1: `Probamos, ajustamos, fallamos y repetimos.
Cambiamos gramos, tiempos y temperaturas hasta que la receta
deja de darnos dudas.`,

      title2: 'Si no emociona, no sale.',
      text2: `No todas las pruebas llegan a venderse.
De hecho, la mayoría no lo hacen.
Solo se queda lo que volveríamos a comer sin pensar.`,
    },

    closing: `Cookordie no es para todos.
Y eso está bien.`,
    ctaVer: `Ver las tartas`,
},

  en: {
    heroTitle: "We weren’t born to please everyone.",
    heroText: `Cookordie is not a friendly brand.
It’s a way of understanding cheesecake.`,

    manifesto: [
      'Cookordie exists thanks to Javier Jiménez. A cook and a perfectionist. He never considered a recipe finished until he felt everything made sense.',
      'He had talent, strong judgment, and a bright future ahead of him.',
      'He passed away at 27.',
      'This brand is our tribute. Today Javi is not here, but his memory lives on in every cake we make.',
      'His passion, dedication, and joy in bringing people together inspired us to create this project. Today, we continue his dream: to put our heart into what we do, celebrate life, savor every moment, and share it with those we love most.',
      'This one’s for you, Javi!',
    ],

    work: {
      title1: 'Less noise. More depth.',
      text1: `We test, adjust, fail and repeat.
We tweak grams, timings and temperatures
until the recipe stops raising doubts.`,

      title2: "If it doesn’t move us, it doesn’t go out.",
      text2: `Not every test ends up being sold.
In fact, most of them don’t.
Only what we’d eat again without thinking makes the cut.`,
    },

    closing: `Cookordie is not for everyone.
And that’s perfectly fine.`,
    
    ctaVer: `See the cakes`,
},
};


  return (
    <main className="bg-[#FFF7EC] text-[#1A1A1A] font-inter text-center">
      {/* HERO */}
      <section className="px-6 md:px-20 py-32 flex flex-col items-center text-center">
        <h1 className="font-fraunces text-5xl md:text-7xl leading-tight max-w-4xl mb-10">
  {copy[lang].heroTitle}
        </h1>

      <p className="text-lg md:text-xl max-w-2xl whitespace-pre-line">
  {copy[lang].heroText}
      </p>

{/* MANIFIESTO */}

  <div className="max-w-3xl space-y-8 text-lg leading-relaxed">
  {copy[lang].manifesto.map((text, i) => (
    <p key={i} className="whitespace-pre-line">
      {text}
    </p>
  ))}
  </div>

</section>
      {/* CÓMO TRABAJAMOS */}
      <section className="pt-0 px-6 md:px-20 py-32 text-2xl flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
            <h2>{copy[lang].work.title1}</h2>
            <p className="whitespace-pre-line">{copy[lang].work.text1}</p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="px-6 md:px-20 py-32 bg-[#FFF7EC] text-[#1A1A1A] flex flex-col items-center">
        <p className="font-fraunces text-4xl md:text-5xl max-w-3xl leading-tight whitespace-pre-line">
          {copy[lang].closing}
        </p>

         <div className="mt-12 pt-8 flex flex-wrap gap-4">
            <Link
              href="/tartas"
              className="inline-flex items-center px-7 py-3 border border-black/20 rounded-full text-sm font-medium bg-[#1A1A1A] hover:bg-[#8C1D18]/95 text-[#FFF7EC] transition"
            >
              {copy[lang].ctaVer}
            </Link>
          </div>

      </section>
    </main>
  );
}
