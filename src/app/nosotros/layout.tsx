import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Historia | Garbal - Más de 60 Años de Calidad",
  description: "Conoce la historia de Garbal, fabricante salvadoreño de botas y calzado PVC desde 1962. Más de 60 años de experiencia, calidad y durabilidad.",
  openGraph: {
    title: "Nuestra Historia | Garbal",
    description: "Conoce la historia de Garbal, fabricante salvadoreño de botas y calzado PVC desde 1962.",
    url: "https://garbal.com/nosotros",
  },
  alternates: { canonical: "https://garbal.com/nosotros" },
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
