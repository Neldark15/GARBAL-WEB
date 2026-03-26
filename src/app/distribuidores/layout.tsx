import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programa de Distribuidores | Garbal",
  description: "Únete a la red de distribución Garbal. Distribuimos botas y calzado PVC en Centroamérica, México, Estados Unidos y el Caribe. Solicita ser distribuidor.",
  openGraph: {
    title: "Programa de Distribuidores | Garbal",
    description: "Únete a la red de distribución Garbal en Centroamérica y más.",
    url: "https://garbal.com/distribuidores",
  },
  alternates: { canonical: "https://garbal.com/distribuidores" },
};

export default function DistribuidoresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
