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
      'No hacemos versiones. No seguimos tendencias. No copiamos recetas ajenas.',
      'Cookordie existe por Javier Jiménez.',
      `Cocinero, perfeccionista hasta el extremo.
De los que no daban un plato por terminado hasta que todo tenía sentido.
Tenía talento, criterio y un futuro enorme por delante.`,
      'Falleció con 27 años.',
      `Esta marca es un homenaje, no una historia triste.
Es una forma de mantener vivo ese nivel de exigencia.
De no sacar nada que no esté a la altura.
De no conformarse nunca con “vale”.`,
      `Cookordie no va de nostalgia.
Va de respeto por la cocina hecha con cabeza, obsesión y honestidad.`,
      `Y cuando algo entra en la carta, se queda porque aguanta el tiempo,
no porque funcione en Instagram.`,
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
      'We don’t do versions. We don’t follow trends. We don’t copy other people’s recipes.',
      'Cookordie exists because of Javier Jiménez.',
      `A chef. A perfectionist to the extreme.
Someone who never considered a dish finished until everything made sense.
He had talent, judgement, and a huge future ahead of him.`,
      'He passed away at 27.',
      `This brand is a tribute, not a sad story.
A way to keep that level of demand alive.
Of never releasing anything that doesn’t live up to it.
Of never settling for “good enough”.`,
      `Cookordie is not about nostalgia.
It’s about respect for cooking done with clarity, obsession and honesty.`,
      `And when something makes it onto the menu, it stays because it stands the test of time,
not because it works on Instagram.`,
      'This one’s for you, Javi.',
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
