import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Botas y Calzado PVC | Garbal",
  description: "Explora nuestra línea completa de botas industriales, agrícolas y calzado PVC. Más de 60 años de calidad. Fabricadas en El Salvador para Centroamérica y el mundo.",
  openGraph: {
    title: "Catálogo de Botas y Calzado PVC | Garbal",
    description: "Explora nuestra línea completa de botas industriales, agrícolas y calzado PVC.",
    url: "https://garbal.com/productos",
  },
  alternates: { canonical: "https://garbal.com/productos" },
};

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
