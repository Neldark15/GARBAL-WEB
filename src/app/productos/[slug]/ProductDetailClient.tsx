"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product, getRelatedProducts, categories } from "@/data/products";
import { FaWhatsapp } from "react-icons/fa";
import { HiChevronRight, HiArrowLeft } from "react-icons/hi";
import { useState } from "react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);

  const related = getRelatedProducts(product);
  const gallery = product.gallery || [product.image];
  const categoryName = categories.find((c) => c.id === product.category)?.name;

  const whatsappUrl = `https://wa.me/50363108147?text=${encodeURIComponent(
    `Hola, me interesa el producto: ${product.name}. ¿Podrían darme más información?`
  )}`;

  return (
    <>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link href="/" className="hover:text-primary">Inicio</Link>
            <HiChevronRight className="w-3 h-3" />
            <Link href="/productos" className="hover:text-primary">Productos</Link>
            <HiChevronRight className="w-3 h-3" />
            <Link href={`/productos?cat=${product.category}`} className="hover:text-primary">
              {categoryName}
            </Link>
            <HiChevronRight className="w-3 h-3" />
            <span className="text-secondary font-medium">{product.name}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[500px] bg-gray-50 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={gallery[activeImage]}
                  alt={`${product.name} - Bota ${product.specs.cana ? `caña ${product.specs.cana}` : ""} ${product.specs.suela ? `suela ${product.specs.suela}` : ""} - Garbal`.trim()}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6"
                />
              </div>
              {gallery.length > 1 && (
                <div className="flex gap-3">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        i === activeImage ? "border-primary" : "border-gray-200"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - vista ${i + 1}`}
                        fill
                        quality={85}
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {categoryName}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              {/* Specs Table */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="font-heading font-bold text-secondary mb-4">
                  Especificaciones
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Material Caña", value: product.specs.cana },
                    { label: "Material Suela", value: product.specs.suela },
                    { label: "Uso Recomendado", value: product.specs.uso },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                    >
                      <span className="text-gray-500 text-sm">{spec.label}</span>
                      <span className="font-medium text-secondary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Cotizar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Solicitar Muestra
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-heading text-2xl font-bold text-secondary mb-8">
              Productos Relacionados
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/productos/${p.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all card-tilt">
                    <div className="relative h-52 bg-gray-50">
                      <Image
                        src={p.image}
                        alt={`${p.name} - ${p.specs.cana ? `Caña ${p.specs.cana}` : "Calzado"} - Garbal`}
                        fill
                        quality={90}
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-secondary text-sm">
                        {p.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1">{p.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
        >
          <HiArrowLeft className="w-4 h-4" />
          Volver a todos los productos
        </Link>
      </div>
    </>
  );
}
