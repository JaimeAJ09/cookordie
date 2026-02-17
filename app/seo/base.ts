import type { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://cookordiebakery.com'),
  title: {
    default: 'Cookordie — Tartas de queso de autor',
    template: '%s · Cookordie',
  },
  description:
    'Tartas de queso de autor. Recetas propias, sin postureo y sin miedo.',
  openGraph: {
    siteName: 'Cookordie',
    type: 'website',
    locale: 'es_ES',
    url: 'https://cookordiebakery.com',
    images: [
      {
        url: '/og/og-cookordie.png',
        width: 1200,
        height: 630,
        alt: 'Cookordie cheesecake',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookordie — Tartas de queso de autor',
    description:
      'Tartas de queso de autor. Recetas propias, sin postureo y sin miedo.',
    images: ['/og/og-cookordie.png'],
  },
};
