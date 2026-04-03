export type ProductCategory = "industrial" | "premium" | "agricola" | "otros";

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
    id: "premium",
    name: "Botas Premium",
    description: "Línea premium con materiales especializados de alto rendimiento",
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
    name: "Super Montana Industrial",
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
    name: "Super Montana Industrial",
    slug: "bota-sanitaria-blanca-roja",
    category: "premium",
    description:
      "Bota blanca de caña PVC con suela de Nitrilo roja, resistente a aceites, grasas y solventes. Diseñada para industrias alimentarias, laboratorios y áreas sanitarias. Fácil de limpiar y desinfectar, cumple con estándares de higiene industrial.",
    shortDescription: "Caña PVC + suela Nitrilo: resistencia superior para uso sanitario",
    specs: { cana: "PVC", suela: "Nitrilo", uso: "Sanitario / Alimentario" },
    image: "/images/products/industrial/bota-blanca-roja.png",
    featured: true,
  },
  {
    id: "prm-01",
    name: "Super Montana Industrial Verde Roja",
    slug: "super-montana-verde-roja",
    category: "premium",
    description:
      "Bota premium de la línea Super Montana Industrial con caña y suela de Nitrilo. Resistente a aceites, grasas, solventes y productos químicos. Diseñada para entornos industriales que requieren máxima protección y durabilidad superior.",
    shortDescription: "Caña y suela Nitrilo: máxima resistencia química",
    specs: { cana: "Nitrilo", suela: "Nitrilo", uso: "Industrial / Premium" },
    image: "/images/products/industrial/super-montana-verde-roja.png",
    featured: false,
  },
  {
    id: "prm-02",
    name: "Super Montana Industrial Blanca Azul",
    slug: "super-montana-blanca-azul",
    category: "premium",
    description:
      "Bota premium de la línea Super Montana Industrial con caña blanca y suela azul. Ideal para industrias alimentarias, laboratorios y áreas sanitarias que requieren identificación visual del personal. Fácil de limpiar y desinfectar.",
    shortDescription: "Caña y suela Nitrilo: resistencia química superior",
    specs: { cana: "Nitrilo", suela: "Nitrilo", uso: "Sanitario / Industrial" },
    image: "/images/products/industrial/super-montana-blanca-azul.png",
    featured: false,
  },
  {
    id: "ind-05",
    name: "Super Montana Industrial",
    slug: "super-montana-industrial-amarilla-blanca",
    category: "industrial",
    description:
      "Bota Super Montana Industrial blanca con suela amarilla antideslizante. Diseñada para entornos sanitarios, procesamiento de alimentos y laboratorios. Material resistente a químicos de limpieza, fácil de desinfectar.",
    shortDescription: "Bota blanca con suela amarilla antideslizante",
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
    name: "Super Montana Industrial",
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
  {
    id: "agr-04",
    name: "Burro",
    slug: "burro",
    category: "agricola",
    description:
      "Bota Burro de caña corta con cordones, fabricada en PVC con suela beige de alto agarre. Diseñada para trabajo pesado en campo, construcción y terrenos irregulares. Su diseño tipo botín brinda protección y comodidad en jornadas exigentes.",
    shortDescription: "Botín con cordones para trabajo pesado y campo",
    specs: { cana: "PVC", suela: "PVC", uso: "Agrícola / Trabajo Pesado" },
    image: "/images/products/agricola/burro.png",
    featured: false,
  },
  {
    id: "agr-05",
    name: "Mavinsa",
    slug: "mavinsa",
    category: "agricola",
    description:
      "Bota Mavinsa de caña alta totalmente negra, resistente y duradera. Ideal para ganadería, agricultura y trabajos en terrenos húmedos. Su suela con diseño antideslizante garantiza tracción en cualquier superficie.",
    shortDescription: "Bota alta negra resistente para ganadería y campo",
    specs: { cana: "PVC", suela: "PVC", uso: "Agrícola / Ganadería" },
    image: "/images/products/agricola/mavinsa.png",
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
