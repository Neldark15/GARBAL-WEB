import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, categories } from "@/data/products";
import { ProductJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { title: "Producto no encontrado | Garbal" };
  }

  const categoryName = categories.find((c) => c.id === product.category)?.name || "";

  return {
    title: `${product.name} - ${categoryName} | Garbal`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Garbal`,
      description: product.shortDescription || product.description,
      url: `https://garbal.com/productos/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: `${product.name} - ${categoryName} Garbal`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Garbal`,
      description: product.shortDescription || product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://garbal.com/productos/${product.slug}`,
    },
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const categoryName = categories.find((c) => c.id === product.category)?.name || "";

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://garbal.com" },
          { name: "Productos", url: "https://garbal.com/productos" },
          { name: categoryName, url: `https://garbal.com/productos?cat=${product.category}` },
          { name: product.name, url: `https://garbal.com/productos/${product.slug}` },
        ]}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
