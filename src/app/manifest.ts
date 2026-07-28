import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Loran's Gents Beauty & Make Up Studio",
    short_name: "Loran's Studio",
    description: "Premium Beauty Parlour, Hair Cutting, Keratin & Makeup Studio in Ramalloor, Ernakulam, Kerala.",
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#C59842',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
