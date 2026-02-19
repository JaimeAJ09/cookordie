'use client';

import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  tarta: {
    es: {
      nombre: string;
      subtitulo: string;
      descripcion: string;
      perfil: string[];
      precios: {
        mediana: number;
        grande: number;
      },
    };
    en: {
      nombre: string;
      subtitulo: string;
      descripcion: string;
      perfil: string[];
      precios: {
        mediana: number;
        grande: number;
      },
    };
  };
};

export default function TartaClient({ tarta, slug }: Props) {
  const { lang } = useLanguage();
  const data = tarta[lang];
  const copy = {
  es: {
    sizesTitle: 'Tamaños disponibles',
    medium: 'Mediana (18 cm)',
    large: 'Grande (26 cm)',
    small: 'Pequeña (12 cm)',
    onlyHospitality: 'Sólo bares y restaurantes.',
    minOrder: '(Pedido mínimo de 10)',
    historyCta: 'Nuestra historia',
    hospitalityCta: 'Partners',
    currency: '€',
    /*COPY CTA PEDIDO*/
    orderButton: 'Haz tu pedido por WhatsApp',
    orderNote: 'Producción bajo pedido · Escríbenos para disponibilidad',
    orderMessage: `Hola, quiero pedir la tarta ${data.nombre}. ¿Me informáis?`,
  },
  en: {
    sizesTitle: 'Available sizes',
    medium: 'Medium (18 cm)',
    large: 'Large (26 cm)',
    small: 'Small (12 cm)',
    onlyHospitality: 'Only for bars and restaurants.',
    minOrder: '(Minimum order of 10)',
    historyCta: 'Our story',
    hospitalityCta: 'Partners',
    currency: '€',
    /*COPY CTA PEDIDO*/
    orderButton: 'Order via WhatsApp',
    orderNote: 'Made to order · Message us for availability',
    orderMessage: `Hi, I’d like to order the ${data.nombre} cake. Can you help me?`,
  },
};

  return (
    <section className="px-6 md:px-20 py-24 bg-[#FFF7EC]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGEN DE LA TARTA */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={`/tartas/${slug}.jpg`}   // ✅ RUTA CORRECTA
            alt={data.nombre}             // ✅ TEXTO CORRECTO
            fill
            className="object-fill"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* CONTENIDO */}
        <div>
          <h1 className="font-fraunces text-5xl md:text-6xl mb-4 text-[#8C1D18]">
            {data.nombre}
          </h1>

          <p className="text-xl mb-6 text-black">
            {data.subtitulo}
          </p>

          <p className="text-lg leading-relaxed mb-10 max-w-xl text-black">
            {data.descripcion}
          </p>

          <div className="flex flex-wrap gap-3">
            {data.perfil.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-black/10 text-sm text-black"
              >
                {tag}
              </span>
            ))}
          </div>

            
          {data.precios && (
          <div className="mt-10 mb-12 text-black">
              <p className="text-lg opacity-70 mb-4">
                {copy[lang].sizesTitle}
              </p>

            <div className="flex gap-4 flex-wrap">
              <div className="border border-black/20 rounded-xl px-5 py-3">
                <p className="text-md">{copy[lang].medium}</p>
                <p className="font-semibold text-lg">
                  {data.precios.mediana} {copy[lang].currency}
                </p>
              </div>

            <div className="border border-black/20 rounded-xl px-5 py-3">
                <p className="text-md">{copy[lang].large}</p>
                <p className="font-semibold text-lg">
                  {data.precios.grande} {copy[lang].currency}
                </p>
            </div>

            <div className="border border-black/20 rounded-xl px-5 py-3">
                <p className="text-md">{copy[lang].small}</p>
                <p className="font-semibold text-lg">
                  {copy[lang].onlyHospitality}
                </p>
                <p className="text-sm text-center">
                  {copy[lang].minOrder}
                </p>
            </div>
            </div>
          </div>
          )}

          {/* CTA PEDIDO */}
<div className="mt-12 flex flex-col items-center text-center gap-3">
  <Link
    href={`https://wa.me/34651508982?text=${encodeURIComponent(
      copy[lang].orderMessage
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#8C1D18] text-[#FFF7EC] text-base font-semibold hover:opacity-90 transition"
  >
    {copy[lang].orderButton}
  </Link>

  <p className="text-sm opacity-70 text-black">
    {copy[lang].orderNote}
  </p>
</div>

          <div className="mt-14 flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/cookordie"
              className="inline-flex items-center justify-center px-6 py-3 border border-black/20 rounded-full text-sm font-medium bg-gray-800 hover:bg-[#8C1D18]/95 hover:text-white transition"
            >
              {copy[lang].historyCta}
            </Link>

            <Link
              href="/hosteleria"
              className="inline-flex items-center justify-center px-6 py-3 border border-black/20 rounded-full text-sm font-medium bg-gray-800 hover:bg-[#8C1D18]/95 hover:text-white transition"
            >
              {copy[lang].hospitalityCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
