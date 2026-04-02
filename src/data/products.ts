export type ProductCategory = "industrial" | "agricola" | "otros";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  description: string;
  shortDescription: string;
  specs: {
    cana: string;
    suela: string;
    uso: string;
  };
  image: string;
  gallery?: string[];
  featured: boolean;
}

export const categories: { id: ProductCategory; name: string; description: string }[] = [
  {
    id: "industrial",
    name: "Botas Industriales",
    description: "Protección y resistencia para entornos de trabajo exigentes",
  },
  {
    id: "agricola",
    name: "Botas Agrícolas",
    description: "Diseñadas para el campo y la agricultura",
  },
  {
    id: "otros",
    name: "Otros Estilos",
    description: "Calzado versátil para el día a día",
  },
];

export const products: Product[] = [
  // Industrial
  {
    id: "ind-01",
    name: "Super Montana Industrial",
    slug: "super-montana-industrial",
    category: "industrial",
    description:
      "Bota industrial de alta resistencia fabricada con PVC de primera calidad. Diseñada para ofrecer máxima protección en ambientes industriales exigentes. Su suela antideslizante y caña reforzada garantizan seguridad y durabilidad en cada jornada de trabajo.",
    shortDescription: "Bota industrial de alta resistencia con caña y suela PVC",
    specs: { cana: "PVC", suela: "PVC", uso: "Industrial / Construcción" },
    image: "/images/products/industrial/super-montana-roja.png",
    gallery: [
      "/images/products/industrial/super-montana-roja.png",
      "/images/products/industrial/super-montana-industrial-1.png",
      "/images/hero/hero-main.jpg",
    ],
    featured: true,
  },
  {
    id: "ind-02",
    name: "Super Montana Industrial Amarilla",
    slug: "super-montana-industrial-amarilla",
    category: "industrial",
    description:
      "Variante con suela amarilla de alta visibilidad. Ideal para zonas industriales donde se requiere identificación visual del personal. Misma calidad y resistencia de la línea Super Montana.",
    shortDescription: "Suela amarilla de alta visibilidad industrial",
    specs: { cana: "PVC", suela: "PVC", uso: "Industrial / Alta Visibilidad" },
    image: "/images/products/industrial/super-montana-amarilla.png",
    gallery: [
      "/images/products/industrial/super-montana-amarilla.png",
      "/images/products/industrial/super-montana-industrial-2.png",
    ],
    featured: false,
  },
  {
    id: "ind-03",
    name: "Bota Sanitaria Blanca Roja - Nitrilo",
    slug: "bota-sanitaria-blanca-roja",
    category: "industrial",
    description:
      "Bota blanca de caña PVC con suela de Nitrilo roja, resistente a aceites, grasas y solventes. Diseñada para industrias alimentarias, laboratorios y áreas sanitarias. Fácil de limpiar y desinfectar, cumple con estándares de higiene industrial.",
    shortDescription: "Caña PVC + suela Nitrilo: resistencia superior para uso sanitario",
    specs: { cana: "PVC", suela: "Nitrilo", uso: "Sanitario / Alimentario" },
    image: "/images/products/industrial/bota-blanca-roja.png",
    featured: true,
  },
  {
    id: "ind-05",
    name: "Bota Sanitaria Blanca Amarilla",
    slug: "bota-sanitaria-blanca-amarilla",
    category: "industrial",
    description:
      "Bota blanca con suela amarilla para entornos sanitarios y de procesamiento de alimentos. Material antibacteriano y resistente a químicos de limpieza. Ideal para laboratorios y áreas de higiene industrial.",
    shortDescription: "Sanitaria con suela amarilla antideslizante",
    specs: { cana: "PVC", suela: "PVC", uso: "Sanitario / Laboratorio" },
    image: "/images/products/industrial/super-montana-industrial-nitrelo.png",
    gallery: [
      "/images/products/industrial/super-montana-industrial-nitrelo.png",
      "/images/products/industrial/super-montana-industrial-3.png",
    ],
    featured: true,
  },
  {
    id: "ind-06",
    name: "Super Montana Industrial Beige",
    slug: "super-montana-industrial-beige",
    category: "industrial",
    description:
      "Bota industrial negra con suela beige de alta resistencia. Diseñada para entornos de trabajo exigentes donde se requiere tracción superior. La suela antideslizante garantiza seguridad en superficies húmedas o resbaladizas.",
    shortDescription: "Bota negra con suela beige de alta tracción",
    specs: { cana: "PVC", suela: "PVC", uso: "Industrial / Construcción" },
    image: "/images/products/agricola/super-montana-beige.png",
    gallery: [
      "/images/products/agricola/super-montana-beige.png",
      "/images/products/agricola/montana-beige.png",
    ],
    featured: false,
  },
  // Agricultural
  {
    id: "agr-01",
    name: "Huracán",
    slug: "huracan",
    category: "agricola",
    description:
      "La bota Huracán es la compañera ideal para el trabajo en el campo. Con caña alta de PVC que protege contra humedad, lodo y condiciones adversas del terreno agrícola. Diseño ergonómico para largas jornadas.",
    shortDescription: "Bota alta para campo y terrenos húmedos",
    specs: { cana: "PVC", suela: "PVC", uso: "Agrícola / Campo" },
    image: "/images/products/agricola/huracan-hq.png",
    gallery: [
      "/images/products/agricola/huracan-hq.png",
      "/images/products/agricola/huracan.png",
      "/images/hero/hero-agricola.png",
    ],
    featured: true,
  },
  {
    id: "agr-02",
    name: "Dakota",
    slug: "dakota",
    category: "agricola",
    description:
      "Bota agrícola Dakota de media caña, totalmente negra, resistente y confiable. Perfecta para ganadería, agricultura y trabajo en terrenos irregulares. Su suela con agarre especial evita resbalones en superficies mojadas.",
    shortDescription: "Media caña resistente para ganadería y agricultura",
    specs: { cana: "PVC", suela: "PVC", uso: "Agrícola / Ganadería" },
    image: "/images/products/agricola/dakota.png",
    featured: true,
  },
  {
    id: "agr-03",
    name: "Super Montana Agrícola",
    slug: "super-montana-agricola",
    category: "agricola",
    description:
      "La versatilidad de la línea Super Montana aplicada al sector agrícola. Protección total contra agua, lodo y materiales del campo con la calidad que caracteriza a Garbal.",
    shortDescription: "Línea Super Montana adaptada para el campo",
    specs: { cana: "PVC", suela: "PVC", uso: "Agrícola" },
    image: "/images/products/agricola/super-montana-agricola.png",
    gallery: [
      "/images/products/agricola/super-montana-agricola.png",
      "/images/products/agricola/montana-beige.png",
    ],
    featured: false,
  },
  // Other products
  {
    id: "otr-01",
    name: "Veranera",
    slug: "veranera",
    category: "otros",
    description:
      "Calzado ligero y cómodo diseñado para el uso diario. La Veranera combina practicidad con estilo, perfecta para actividades cotidianas y climas cálidos.",
    shortDescription: "Calzado ligero para uso diario",
    specs: { cana: "PVC", suela: "PVC", uso: "Casual / Diario" },
    image: "/images/products/otros/veranera.png",
    featured: false,
  },
  {
    id: "otr-02",
    name: "Valeria",
    slug: "valeria",
    category: "otros",
    description:
      "Sandalia Valeria, diseñada pensando en la comodidad femenina. Material duradero y diseño elegante para el día a día.",
    shortDescription: "Diseño elegante y cómodo para el día a día",
    specs: { cana: "PVC", suela: "PVC", uso: "Casual / Femenino" },
    image: "/images/products/otros/valeria.png",
    featured: false,
  },
  {
    id: "otr-03",
    name: "Cruzada",
    slug: "cruzada",
    category: "otros",
    description:
      "Calzado Cruzada con diseño versátil y duradero. Ideal para uso casual con la resistencia característica del PVC Garbal.",
    shortDescription: "Versátil y duradero para uso casual",
    specs: { cana: "PVC", suela: "PVC", uso: "Casual / Versátil" },
    image: "/images/products/otros/cruzada.png",
    featured: false,
  },
  {
    id: "otr-04",
    name: "Ester",
    slug: "ester",
    category: "otros",
    description:
      "Calzado Ester, combinando funcionalidad y diseño accesible. Perfecto para actividades cotidianas con la calidad Garbal.",
    shortDescription: "Funcionalidad y diseño accesible",
    specs: { cana: "PVC", suela: "PVC", uso: "Casual / Diario" },
    image: "/images/products/otros/ester.png",
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit);
}
