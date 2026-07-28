import { MetadataRoute } from 'next';
import { SERVICE_CATEGORIES } from '@/data/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.loransmakeupstudio.com';
  const currentDate = new Date();

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic Service Category routes
  const serviceCategoryRoutes: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/services/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...routes, ...serviceCategoryRoutes];
}
