import type { Metadata } from "next";
import { Montserrat, Yeseva_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/floating/WhatsAppButton";
import Chatbot from "@/components/chat/Chatbot";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const yeseva = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garbal | Líderes en Durabilidad - Botas y Calzado PVC",
  description:
    "Fabricamos y distribuimos botas y calzado de PVC con estándares de calidad internacional. Más de 60 años de experiencia en El Salvador.",
  keywords: "botas PVC, calzado industrial, botas agrícolas, Garbal, El Salvador, botas de trabajo",
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL("https://garbal.com"),
  openGraph: {
    title: "Garbal | Líderes en Durabilidad",
    description: "Fabricamos y distribuimos botas y calzado de PVC con estándares de calidad internacional.",
    url: "https://garbal.com",
    siteName: "Garbal",
    type: "website",
    images: [
      {
        url: "/images/logo/garbal-logo.png",
        width: 1200,
        height: 630,
        alt: "Garbal - Líderes en Durabilidad - Botas y Calzado PVC",
      },
    ],
    locale: "es_SV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garbal | Líderes en Durabilidad",
    description: "Fabricamos y distribuimos botas y calzado de PVC con estándares de calidad internacional.",
    images: ["/images/logo/garbal-logo.png"],
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
  alternates: {
    canonical: "https://garbal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${yeseva.variable}`}>
      <body className="font-body antialiased">
        <OrganizationJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
