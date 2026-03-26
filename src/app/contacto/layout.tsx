import { Metadata } from "next";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contacto | Garbal - Cotizaciones y Soporte",
  description: "Contáctanos para cotizaciones, distribución y soporte. Teléfono: +503 6310 8147. Kilómetro 24 1/2 carretera al Puerto de La Libertad, Zaragoza, El Salvador.",
  openGraph: {
    title: "Contacto | Garbal",
    description: "Contáctanos para cotizaciones, distribución y soporte técnico.",
    url: "https://garbal.com/contacto",
  },
  alternates: { canonical: "https://garbal.com/contacto" },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd />
      {children}
    </>
  );
}
