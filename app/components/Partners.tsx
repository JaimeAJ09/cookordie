
'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const partners = [
  "zicatela.png",
  "salxicha.png",
  "zebra.png",
  "nolymar.png",
  "lafula.png",
  "dream.png",
  "fucafe.png",
  "la-herreria.png",
];


export default function Partners() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      title: 'Ya confían en Cookordie',
      alt: 'Restaurante colaborador Cookordie',
    },
    en: {
      title: 'They already trust Cookordie',
      alt: 'Cookordie partner restaurant',
    },
  };

  return (
    <section className="relative bg-[#FFF7EC] py-16 overflow-hidden">

      {/* degradado izquierda */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#FFF7EC] to-transparent z-10" />

      {/* degradado derecha */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#FFF7EC] to-transparent z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center font-fraunces text-3xl md:text-4xl text-[#8C1D18] mb-12">
          {copy[lang].title}
        </h3>

        {/* CARRUSEL */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-20 whitespace-nowrap animate-scroll">

            {/* duplicamos logos para scroll infinito */}
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[70px] px-6 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={`/partners/${logo}`}
                  alt={copy[lang].alt}
                  width={300}
                  height={140}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )}