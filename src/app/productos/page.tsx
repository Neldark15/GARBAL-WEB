"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, ProductCategory } from "@/data/products";
import { HiDownload, HiSearch } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function ProductosContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && ["industrial", "agricola", "otros"].includes(cat)) {
      setActiveCategory(cat as ProductCategory);
    }
  }, [searchParams]);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-accent text-4xl md:text-5xl mb-4">
              Nuestros Productos
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre nuestra línea completa de botas y calzado PVC diseñados
              para proteger y acompañar en cada jornada de trabajo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search + Filters + Download */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === "all"
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Download Catalog */}
            <a
              href="/catalogo/garbal-catalogo-2026.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full font-medium text-sm hover:bg-primary/20 transition-all"
            >
              <HiDownload className="w-4 h-4" />
              Catálogo PDF
            </a>
          </div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={fadeUp} layout>
                  <Link href={`/productos/${product.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 card-tilt card-glow product-shimmer">
                      <div className="relative h-64 img-zoom product-bg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-6 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                        />
                        <div className="shimmer-overlay absolute inset-0 z-10" />
                        <div className="absolute top-3 left-3 z-20">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-primary px-2.5 py-1 rounded-full shadow-sm">
                            {categories.find((c) => c.id === product.category)?.name}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-secondary group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                          {product.shortDescription}
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                            Caña: {product.specs.cana}
                          </span>
                          <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
                            Suela: {product.specs.suela}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No se encontraron productos</p>
              <p className="text-sm mt-2">Intenta con otro término de búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 text-center"><p>Cargando productos...</p></div>}>
      <ProductosContent />
    </Suspense>
  );
}
