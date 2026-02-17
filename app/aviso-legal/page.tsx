'use client';

import { useLanguage } from '../context/LanguageContext';

export default function AvisoLegalPage() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      title: 'Aviso legal',
      text: `
Titular del sitio web: #Cookordie

Este sitio web tiene carácter informativo y comercial.
El acceso y uso del sitio implica la aceptación de las presentes condiciones.

Propiedad intelectual:
Todos los contenidos de esta web (textos, imágenes, diseño y marca)
son propiedad de Cookordie o de sus respectivos titulares.

Responsabilidad:
Cookordie no se hace responsable del mal uso de los contenidos
ni de los posibles errores técnicos.
      `,
    },
    en: {
      title: 'Legal notice',
      text: `
Website owner: Cookordie

This website has an informational and commercial purpose.
Accessing and using the site implies acceptance of these terms.

Intellectual property:
All contents of this website (texts, images, design and brand)
belong to Cookordie or their respective owners.

Liability:
Cookordie is not responsible for misuse of the content
or possible technical errors.
      `,
    },
  };

  return (
    <main className="px-6 md:px-20 py-24 bg-[#FFF7EC] text-[#1A1A1A]">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="font-fraunces text-4xl md:text-5xl mb-10">
      {copy[lang].title}
    </h1>

    <p className="whitespace-pre-line text-lg leading-relaxed opacity-80">
      {copy[lang].text}
    </p>
  </div>
</main>
  );
}