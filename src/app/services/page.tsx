import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Services Catalog & Beauty Menu | Loran's Gents Beauty Parlour Ramalloor",
  description: "Explore complete haircuts, hair treatments, keratin, hair spa, hydra facials, waxing & groom makeup services at Loran's Gents Beauty & Make Up Studio in Ramalloor, Kolenchery, Ernakulam.",
  keywords: [
    "Men's Beauty Parlour Ramalloor",
    "Best Beauty Parlour Ramalloor",
    "Hair Cutting Ramalloor",
    "Hair Treatment Ramalloor",
    "Hair Spa Ramalloor",
    "Facial Treatment Ramalloor",
    "Wedding Grooming Ramalloor",
    "Groom Makeup Ramalloor",
    "Beauty Parlour Kolenchery",
    "Hair Salon Ernakulam",
    "Hydra Facial Ramalloor",
    "Keratin Treatment Kolenchery"
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Services Catalog & Beauty Menu | Loran's Gents Beauty Parlour Ramalloor",
    description: "Explore complete haircuts, hair treatments, keratin, hair spa, hydra facials, waxing & groom makeup services at Loran's Gents Beauty & Make Up Studio in Ramalloor, Kolenchery, Ernakulam.",
    url: 'https://www.loransmakeupstudio.com/services',
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services Catalog', url: '/services' }
  ];

  return (
    <>
      <StructuredData breadcrumbs={breadcrumbs} />
      <ServicesClient />
    </>
  );
}
