import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Loran's Hair Cutting Saloon",
    default: "Loran's Hair Cutting Saloon | Premium Grooming & Hair Care",
  },
  description: "Experience premium grooming for men at Loran's Hair Cutting Saloon. Tailored hair cuts, styling, and modern shaving services designed for the modern gentleman.",
  metadataBase: new URL("https://www.loransmakeupstudio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Loran's Hair Cutting Saloon | Premium Grooming & Hair Care",
    description: "Experience premium grooming for men at Loran's Hair Cutting Saloon. Tailored hair cuts, styling, and modern shaving services designed for the modern gentleman.",
    url: "https://www.loransmakeupstudio.com",
    siteName: "Loran's Hair Cutting Saloon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Loran's Hair Cutting Saloon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loran's Hair Cutting Saloon | Premium Grooming & Hair Care",
    description: "Experience premium grooming for men at Loran's Hair Cutting Saloon. Tailored hair cuts, styling, and modern shaving services designed for the modern gentleman.",
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
    icon: "/assets/lorans_logo_gold.png",
    apple: "/assets/lorans_logo_gold.png",
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
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
