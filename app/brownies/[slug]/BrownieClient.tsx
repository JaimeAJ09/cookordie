'use client';

import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  slug: string;
  brownie: {
    es: {
      nombre: string;
      subtitulo: string;
      descripcion: string;
      perfil: string[];
      precios: {
        bandeja12: number;
        bandeja24: number;
      };
    };
    en: {
      nombre: string;
      subtitulo: string;
      descripcion: string;
      perfil: string[];
      precios: {
        bandeja12: number;
        bandeja24: number;
      };
    };
  };
};

export default function BrownieClient({ brownie, slug }: Props) {

  const { lang } = useLanguage();

  // ⭐ SOLUCIÓN DEFINITIVA SSR
  const data = brownie?.[lang as 'es' | 'en'] ?? brownie.es;

  return (
    <section className="px-6 md:px-20 py-24 bg-[#FFF7EC]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGEN */}
        <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={`/brownies/${slug}.jpg`}
            alt={data.nombre}
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

          <p className="text-lg leading-relaxed mb-8 max-w-xl text-black">
            {data.descripcion}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mb-10">
            {data.perfil.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-black/10 text-sm text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* FORMATOS */}
          <div className="mt-10 mb-12 text-black">
            <p className="text-lg opacity-70 mb-4">
              {lang === 'es' ? 'Formatos disponibles' : 'Available formats'}
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="border border-black/20 rounded-xl px-5 py-3">
                <p className="text-md">
                  {lang === 'es' ? 'Bandeja 12 porciones' : 'Tray 12 portions'}
                </p>
                <p className="font-semibold text-lg">
                  {data.precios.bandeja12} €
                </p>
              </div>

              <div className="border border-black/20 rounded-xl px-5 py-3">
                <p className="text-md">
                  {lang === 'es' ? 'Bandeja 24 porciones' : 'Tray 24 portions'}
                </p>
                <p className="font-semibold text-lg">
                  {data.precios.bandeja24} €
                </p>
              </div>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="flex flex-col items-center justify-center lg:items-center gap-3 mt-6">
            <Link
              href={`https://wa.me/34651508982?text=${
                lang === 'es'
                  ? `Hola, quiero pedir información sobre el ${data.nombre} de Cookordie.`
                  : `Hi! I want information about the ${data.nombre} from Cookordie.`
              }`}
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#8C1D18] text-white font-medium hover:scale-105 transition-transform"
            >
              {lang === 'es'
                ? 'Haz tu pedido por WhatsApp'
                : 'Order via WhatsApp'}
            </Link>

            <p className="text-sm opacity-70 text-center lg:text-left text-black">
              {lang === 'es'
                ? 'Producción bajo pedido. Escríbenos para disponibilidad.'
                : 'Made to order. Contact us for availability.'}
            </p>
          </div>

          {/* BOTONES */}
          <div className="mt-14 flex flex-wrap gap-4 justify-center lg:justify-center">
            <Link
              href="/cookordie"
              className="inline-flex items-center justify-center px-6 py-3 border border-black/20 rounded-full text-sm font-medium bg-gray-800 hover:bg-[#8C1D18]/95 hover:text-white transition"
            >
              {lang === 'es' ? 'Conoce la historia' : 'Our story'}
            </Link>

            <Link
              href="/hosteleria"
              className="inline-flex items-center justify-center px-6 py-3 border border-black/20 rounded-full text-sm font-medium bg-gray-800 hover:bg-[#8C1D18]/95 hover:text-white transition"
            >
              {lang === 'es' ? 'Para bares valientes' : 'For restaurants'}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}