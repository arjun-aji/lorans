import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type?: 'home' | 'services' | 'service-detail' | 'gallery';
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  serviceName?: string;
  serviceDescription?: string;
}

export default function StructuredData({
  breadcrumbs,
  faqs,
  serviceName,
  serviceDescription,
}: StructuredDataProps) {
  const baseUrl = 'https://www.loransmakeupstudio.com';

  // 1. LocalBusiness / BeautySalon / Organization Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['BeautySalon', 'LocalBusiness', 'HairSalon', 'Organization'],
    '@id': `${baseUrl}/#organization`,
    name: "Loran's Gents Beauty & Make Up Studio",
    legalName: "Loran's Gents Beauty Parlour & Make Up Studio",
    alternateName: ["Loran's Hair Cutting Saloon", "Loran's Salon", "Loran's Beauty Parlour Ramalloor"],
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.png`,
    image: [
      `${baseUrl}/assets/hero.jpeg`,
      `${baseUrl}/assets/about.png`,
      `${baseUrl}/assets/about1.png`,
      `${baseUrl}/assets/grooming.png`
    ],
    description: "Gents beauty parlour, ladies haircuts, hair treatments, hydra facials, keratin, hair spa, and groom makeup studio in Ramalloor, Kothamangalam, Ernakulam, Kerala.",
    telephone: "+91 00000 00000",
    email: "info@loransmakeupstudio.com",
    priceRange: "$$",
    paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card"],
    currenciesAccepted: "INR",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ramalloor Junction, Near Kolenchery',
      addressLocality: 'Ramalloor',
      addressRegion: 'Kerala',
      postalCode: '682311',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9796,
      longitude: 76.4717,
    },
    hasMap: 'https://maps.google.com/?q=Ramalloor+Kerala',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Ramalloor' },
      { '@type': 'AdministrativeArea', name: 'Kolenchery' },
      { '@type': 'AdministrativeArea', name: 'Piravom' },
      { '@type': 'AdministrativeArea', name: 'Muvattupuzha' },
      { '@type': 'AdministrativeArea', name: 'Kakkanad' },
      { '@type': 'AdministrativeArea', name: 'Tripunithura' },
      { '@type': 'AdministrativeArea', name: 'Ernakulam' },
      { '@type': 'AdministrativeArea', name: 'Kochi' },
      { '@type': 'AdministrativeArea', name: 'Kerala' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:30',
      },
    ],
    sameAs: [
      'https://www.instagram.com/loransmakeupstudio',
      'https://www.facebook.com/loransmakeupstudio',
      'https://www.youtube.com/@loransmakeupstudio'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 00000 00000',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'ml']
    }
  };

  // 2. WebSite with SearchAction
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: "Loran's Gents Beauty & Make Up Studio",
    description: "Best Men's Beauty Parlour and Makeup Studio in Ramalloor, Ernakulam, Kerala",
    publisher: {
      '@id': `${baseUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/services?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  // 3. BreadcrumbList Schema (if provided)
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  } : null;

  // 4. FAQPage Schema (if provided)
  const faqSchema = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // 5. Specific Service Schema
  const serviceSchema = serviceName ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription || `Professional ${serviceName} services at Loran's Gents Beauty & Make Up Studio in Ramalloor, Ernakulam, Kerala.`,
    provider: {
      '@id': `${baseUrl}/#organization`
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Ramalloor, Ernakulam, Kerala'
    }
  } : null;

  return (
    <>
      {/* Primary Organization & LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* WebSite & SearchAction Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Optional Breadcrumbs Schema */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Optional FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Optional Service Schema */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
}
