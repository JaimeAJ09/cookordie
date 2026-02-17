import type { Metadata } from 'next';

export const homeMetadata: Metadata = {
  title: 'Cookordie — Tartas de queso sin miedo',
  description:
    'Tartas de queso de autor. Sin postureo. Sin filtros. Sin miedo.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cookordie — Tartas de queso sin miedo',
    description:
      'Tartas de queso de autor. Sin postureo. Sin filtros. Sin miedo.',
    url: 'https://cookordiebakery.com',
    siteName: 'Cookordie',
    images: [
      {
        url: '/og/og-cookordie.jpg',
        width: 1200,
        height: 630,
        alt: 'Cookordie cheesecakes',
      },
    ],
    type: 'website',
  },
};