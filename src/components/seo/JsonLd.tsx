import { Product } from "@/data/products";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Garbal",
    url: "https://garbal.com",
    logo: "https://garbal.com/images/logo/garbal-logo.png",
    description:
      "Fabricamos y distribuimos botas y calzado de PVC con estándares de calidad internacional. Más de 60 años de experiencia.",
    foundingDate: "1962",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kilómetro 24 1/2 carretera al Puerto de La Libertad",
      addressLocality: "Zaragoza",
      addressCountry: "SV",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+503-6310-8147",
      contactType: "customer service",
      email: "servicioalcliente@garbal.com",
      availableLanguage: "Spanish",
    },
    sameAs: [
      "https://www.facebook.com/calzadogarbal",
      "https://www.instagram.com/calzadogarbal/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Garbal",
    image: "https://garbal.com/images/logo/garbal-logo.png",
    url: "https://garbal.com",
    telephone: "+503-6310-8147",
    email: "servicioalcliente@garbal.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kilómetro 24 1/2 carretera al Puerto de La Libertad",
      addressLocality: "Zaragoza",
      addressCountry: "SV",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "23:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://garbal.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Garbal",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Garbal",
    },
    category: product.category === "industrial"
      ? "Botas Industriales"
      : product.category === "agricola"
      ? "Botas Agrícolas"
      : "Calzado",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Garbal",
    url: "https://garbal.com",
    description:
      "Fabricamos y distribuimos botas y calzado de PVC con estándares de calidad internacional.",
    publisher: {
      "@type": "Organization",
      name: "Garbal",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
