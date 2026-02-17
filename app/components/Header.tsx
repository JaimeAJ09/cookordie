'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const copy = {
    es: {
      nav: {
        cakes: 'Las Tartas',
        story: 'La Historia',
        hospitality: 'Para Bares Valientes',
        brownies: 'Brownies',
      },
    },
    en: {
      nav: {
        cakes: 'The Cakes',
        story: 'The Story',
        hospitality: 'For Brave Bars',
        brownies: 'Brownies',
      },
    },
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] w-full px-6 md:px-20 flex items-center 
          justify-between border-b border-black/10 bg-[#8C1D18]/95 backdrop-blur 
          transition-all duration-300
          ${scrolled ? 'py-3' : 'py-6'}`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className={`relative block transition-all duration-300 ${
            scrolled
              ? 'w-[140px] h-[36px] md:w-[180px] md:h-[44px]'
              : 'w-[200px] h-[52px] md:w-[280px] md:h-[68px]'
          }`}
        >
          <Image
            src="/logo/cookordie-logo.png"
            alt="Cookordie"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-16 text-sm md:text-lg lg:text-xl text-white mr-32 font-bold">
          <Link href="/tartas" className="hover:opacity-70 transition-opacity">
            {copy[lang].nav.cakes}
          </Link>
          <Link href="/brownies" className="hover:opacity-70 transition-opacity">
            {copy[lang].nav.brownies}
          </Link>
          <Link href="/cookordie" className="hover:opacity-70 transition-opacity">
            {copy[lang].nav.story}
          </Link>
          <Link href="/hosteleria" className="hover:opacity-70 transition-opacity">
            {copy[lang].nav.hospitality}
          </Link>
        </nav>

        {/* IDIOMA + HAMBURGUESA */}
        <div className="flex items-center gap-4 text-sm text-white">
          {/* Idioma desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLang('es')}
              className={`cursor-pointer ${
                lang === 'es' ? 'opacity-100' : 'opacity-60'
              }`}
            >
              ES
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setLang('en')}
              className={`cursor-pointer ${
                lang === 'en' ? 'opacity-100' : 'opacity-60'
              }`}
            >
              EN
            </button>
          </div>

          {/* Hamburguesa */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative w-6 h-6 cursor-pointer"
            aria-label="Abrir menú"
          >
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all ${
                menuOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-white transition-all ${
                menuOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MENÚ MÓVIL */}
      {menuOpen && (
        <div
          className={`
            fixed left-0 right-0
            z-[95]
          bg-[#8C1D18]/95 backdrop-blur
          text-white md:hidden
            animate-slideDown
            ${scrolled ? 'top-[56px]' : 'top-[88px]'}`}>

          <div className="px-6 py-8 space-y-6 text-center">
            <Link href="/tartas" onClick={() => setMenuOpen(false)} className="block font-fraunces text-base font-bold">
              {copy[lang].nav.cakes}
            </Link>
            <Link href="/brownies" onClick={() => setMenuOpen(false)} className="block font-fraunces text-base font-bold">
              {copy[lang].nav.brownies}
            </Link>
            <Link href="/cookordie" onClick={() => setMenuOpen(false)} className="block font-fraunces text-base font-bold">
              {copy[lang].nav.story}
            </Link>
            <Link href="/hosteleria" onClick={() => setMenuOpen(false)} className="block font-fraunces text-base font-bold">
              {copy[lang].nav.hospitality}
            </Link>

            <div className="flex justify-center gap-6 pt-6 text-xs">
              <button
                onClick={() => setLang('es')}
                className={`cursor-pointer ${
                lang === 'es' ? 'opacity-100' : 'opacity-60'
              }`}
              >
                ES
              </button>
              <span className="opacity-30">/</span>
              <button
                onClick={() => setLang('en')}
                className={`cursor-pointer ${
                lang === 'en' ? 'opacity-100' : 'opacity-60'
              }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
