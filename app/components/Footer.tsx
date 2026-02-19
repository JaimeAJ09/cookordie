'use client';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

export default function Footer() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      claim: [
        'Tartas de queso de autor.',
        'Sin postureo. Sin filtros.',
        'Sin miedo.',
      ],
      nav: {
        cakes: 'Nuestras Cheesecakes',
        story: 'Nuestra Historia',
        hospitality: 'Hostelería',
        brownies: 'Nuestros Brownies',
      },
        legal: {
          legalNotice: 'Aviso legal',
          privacy: 'Política de privacidad',
          cookies: 'Política de cookies',
        },
    },
    en: {
      claim: [
        'Author cheesecake.',
        'No posing. No filters.',
        'No fear.',
      ],
      nav: {
        cakes: 'Our Cheesecakes',
        story: 'Our Story',
        hospitality: 'Hospitality',
        brownies: 'Our Brownies',
      },
        legal: {
          legalNotice: 'Legal notice',
          privacy: 'Privacy policy',
          cookies: 'Cookies policy',
        },
    },
  };

  const googleReviews = {
  rating: 4.9,
  url: 'https://maps.app.goo.gl/t3RDtBRGnS5QWMpD7', // ← pon tu enlace real
  };

  return (
    <footer className="px-6 md:px-20 py-16 bg-[#1A1A1A] text-[#FFF7EC]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
        
        {/* MARCA */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
  
        {/* LOGO */}
        <div className="relative w-[120px] h-[110px] md:w-[140px] md:h-[126px] flex-shrink-0">
          <Link href={"/"}>
          <Image
            src="/logo/logo-dedos.png" // 👈 pon aquí tu logo
            alt="Cookordie"
            fill
            className="object-contain"
          />
          </Link>
        </div>

  {/* TEXTO */}
  <p className="pt-8 text-sm opacity-70 max-w-xs leading-relaxed text-center md:text-left">
    {copy[lang].claim.map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ))}
  </p>
</div>


        {/* NAVEGACIÓN */}
        <div className="flex flex-col gap-3 text-sm opacity-80 items-center md:items-center">
          <Link href="/tartas" className="hover:opacity-100 hover:text-[#8C1D18]">
            {copy[lang].nav.cakes}
          </Link>
          <Link href="/brownies" className="hover:opacity-100 hover:text-[#8C1D18]">
            {copy[lang].nav.brownies}
          </Link>
          <Link href="/cookordie" className="hover:opacity-100 hover:text-[#8C1D18]">
            {copy[lang].nav.story}
          </Link>
          <Link href="/hosteleria" className="hover:opacity-100 hover:text-[#8C1D18]">
            {copy[lang].nav.hospitality}
          </Link>
          <Link href="/aviso-legal" className="hover:opacity-100 hover:text-[#8C1D18]">           
            {copy[lang].legal.legalNotice}
          </Link>
          <Link href="/privacidad" className="hover:opacity-100 hover:text-[#8C1D18]">
            {copy[lang].legal.privacy}
          </Link>
          <Link href="/cookies" className="hover:opacity-100 hover:text-[#8C1D18]">
            {copy[lang].legal.cookies}
          </Link>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col gap-6 text-sm items-center md:items-end text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/34651508982"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={35} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/cookordie"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Instagram"
            >
              <FaInstagram size={35} />
            </a>

            {/* Email */}
            <a
              href="mailto:info.cookordie@gmail.com"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <HiOutlineMail size={35}/>
            </a>
          </div>

          {/* GOOGLE REVIEWS */}
<div className="mt-3 flex flex-col items-center gap-1 text-sm text-[#FFF7EC]">
  <a
    href={googleReviews.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:opacity-80 transition"
  >
    {/* Icono Google */}
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.1 1.54 7.5 2.82l5.45-5.45C33.64 3.58 29.19 1.5 24 1.5 14.86 1.5 7.1 6.86 3.44 14.63l6.34 4.92C11.45 13.09 17.2 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24.5c0-1.57-.14-3.08-.4-4.5H24v8.52h12.7c-.55 2.97-2.2 5.49-4.7 7.18l7.18 5.57C43.64 37.36 46.5 31.44 46.5 24.5z"/>
      <path fill="#FBBC05" d="M9.78 28.55a14.5 14.5 0 010-9.1l-6.34-4.92a23.97 23.97 0 000 18.94l6.34-4.92z"/>
      <path fill="#34A853" d="M24 46.5c6.48 0 11.92-2.14 15.9-5.82l-7.18-5.57c-2 1.35-4.57 2.15-8.72 2.15-6.8 0-12.55-3.59-14.22-8.55l-6.34 4.92C7.1 41.14 14.86 46.5 24 46.5z"/>
    </svg>

    {/* Estrellas */}
    <span className="flex items-center gap-1 text-yellow-500">
      {'★★★★★'}
    </span>

    <span className="font-medium text-[#FFF7EC]">
      {googleReviews.rating} / 5
    </span>
  </a>
</div>

          <span className="opacity-50 text-xs">
            © {new Date().getFullYear()} Cookordie
          </span>
        </div>

      </div>
    </footer>
  );
}
