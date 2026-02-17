'use client';

import { useLanguage } from '../context/LanguageContext';

export default function CookiesPage() {
  const { lang } = useLanguage();

  const copy = {
    es: {
      title: 'Política de cookies',
      text: `
En esta web no utilizamos cookies propias ni de terceros
para recopilar información personal de los usuarios.

No se instalan cookies de análisis, publicidad ni seguimiento.

Únicamente se utilizan cookies técnicas necesarias
para el correcto funcionamiento del sitio web,
como la gestión del idioma o la navegación básica.

Estas cookies no requieren consentimiento previo,
ya que no recopilan datos personales ni permiten
identificar al usuario.

Si en el futuro se incorporasen cookies adicionales,
esta política se actualizará convenientemente.

Para cualquier duda, puedes escribirnos a:
info.cookordie@gmail.com.
      `,
    },
    en: {
      title: 'Cookies policy',
      text: `
This website does not use its own or third-party cookies
to collect personal information from users.

No analytics, advertising or tracking cookies are used.

Only technical cookies strictly necessary
for the proper functioning of the website are used,
such as language management or basic navigation.

These cookies do not require prior consent,
as they do not collect personal data
or identify the user.

If additional cookies are added in the future,
this policy will be updated accordingly.

For any questions, please contact:
info.cookordie@gmail.com.
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