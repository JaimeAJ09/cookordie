import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { baseMetadata } from './seo/base';
import { fraunces } from './fonts';
import type { Metadata } from 'next';
import Partners from './components/Partners';

export const metadata: Metadata = {
  ...baseMetadata,
  icons:{
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cookordie",
  url: "https://cookordiebakery.com",
  logo: "https://cookordiebakery.com/logo/cookordie-logo.png",
  description:
    "Tartas de queso de autor. Recetas propias, sin postureo y sin miedo.",
  sameAs: [
    "https://www.instagram.com/cookordie",
  ],
}
  return (
    <html lang="es" className={fraunces.variable}>
      <body className={fraunces.variable}>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cookordie",
              url: "https://cookordiebakery.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
              },
            }),
          }}
        />
      <LanguageProvider>
        <Header />
          <main className="pt-16">
          {children}
          </main>
        <Partners />
        <Footer />
      </LanguageProvider>
      </body>
    </html>
  );
};