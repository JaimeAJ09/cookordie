import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cookordiebakery.com';

  const tartas = [
    'nivel-dios',
    'top-secret',
    'la-romantica',
    'la-chocolatada',
    'la-azulita',
    'la-cocoloco',
    'la-de-fuera',
    'la-dubai',
    'la-umami',
  ];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tartas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cookordie`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hosteleria`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },

    // TARTAS INDIVIDUALES
    ...tartas.map((slug) => ({
      url: `${baseUrl}/tartas/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}