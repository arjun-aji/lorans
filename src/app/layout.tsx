import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import StructuredData from "@/components/StructuredData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loransmakeupstudio.com"),
  title: {
    template: "%s | Loran's Studio Ramalloor",
    default: "Loran's Gents Beauty & Make Up Studio | Ramalloor",
  },
  description: "Gents beauty parlour in Ramalloor, Ernakulam offering haircuts, beard styling, hair spa, keratin treatments, Hydra Facials & groom makeup at Loran's Studio.",
  keywords: [
    "Loran's Gents Beauty & Make Up Studio",
    "Men's Beauty Parlour Ramalloor",
    "Best Beauty Parlour Ramalloor",
    "Best Men's Salon Ramalloor",
    "Hair Cutting Ramalloor",
    "Beauty Parlour Kothamangalam",
    "Hair Treatment Ramalloor",
    "Hair Spa Ramalloor",
    "Facial Treatment Ramalloor",
    "Wedding Grooming Ramalloor",
    "Groom Makeup Ramalloor",
    "Beauty Parlour Kolenchery",
    "Hair Salon Ernakulam",
    "Hair Salon Kochi",
    "Groom Makeup Ernakulam",
    "Premium Grooming Kerala",
    "Hydra Facial Ramalloor",
    "Keratin Treatment Kolenchery"
  ],
  authors: [{ name: "Loran's Team", url: "https://www.loransmakeupstudio.com" }],
  creator: "Loran's Gents Beauty & Make Up Studio",
  publisher: "Loran's Gents Beauty & Make Up Studio",
  category: "Beauty & Grooming Salon",
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Ramalloor, Ernakulam, Kerala, India",
    "geo.position": "9.9796;76.4717",
    "ICBM": "9.9796, 76.4717",
  },
  openGraph: {
    title: "Loran's Gents Beauty & Make Up Studio | Ramalloor",
    description: "Gents beauty parlour in Ramalloor, Ernakulam offering haircuts, beard styling, hair spa, keratin treatments, Hydra Facials & groom makeup at Loran's Studio.",
    url: "https://www.loransmakeupstudio.com",
    siteName: "Loran's Gents Beauty & Make Up Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Loran's Gents Beauty & Make Up Studio in Ramalloor, Ernakulam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loran's Gents Beauty & Make Up Studio | Ramalloor",
    description: "Gents beauty parlour in Ramalloor, Ernakulam offering haircuts, beard styling, hair spa, keratin treatments, Hydra Facials & groom makeup at Loran's Studio.",
    images: ["/assets/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
    shortcut: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${pinyon.variable} h-full antialiasedScroll`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
