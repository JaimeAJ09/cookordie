'use client';

import { useLanguage } from '../context/LanguageContext';

export default function PoliticaPrivacidadPage() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      title: 'Política de privacidad',
      text: `
Responsable del tratamiento:
#Cookordie

Finalidad del tratamiento:
Los datos personales recogidos a través de esta web se utilizan
únicamente para atender consultas, solicitudes de información
o comunicaciones comerciales iniciadas por el usuario.

Legitimación:
La base legal para el tratamiento es el consentimiento del usuario.

Destinatarios:
No se cederán datos a terceros, salvo obligación legal.

Derechos:
El usuario puede ejercer sus derechos de acceso, rectificación,
supresión, limitación u oposición al tratamiento de sus datos.

Conservación de datos:
Los datos se conservarán únicamente durante el tiempo necesario
para cumplir con la finalidad para la que fueron recabados.

Contacto:
Para cualquier cuestión relacionada con la privacidad,
puedes escribirnos a info.cookordie@gmail.com.
      `,
    },
    en: {
      title: 'Privacy policy',
      text: `
Data controller:
Cookordie

Purpose:
Personal data collected through this website is used exclusively
to respond to inquiries, information requests or communications
initiated by the user.

Legal basis:
The legal basis for processing is the user’s consent.

Recipients:
Data will not be shared with third parties unless legally required.

User rights:
Users may exercise their rights of access, rectification, erasure,
restriction or objection to the processing of their data.

Data retention:
Data will be kept only for as long as necessary to fulfill
the purpose for which it was collected.

Contact:
For any privacy-related questions,
please contact info.cookordie@gmail.com.
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