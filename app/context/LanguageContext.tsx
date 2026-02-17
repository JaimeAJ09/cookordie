'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'es' | 'en';

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: 'es',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
