"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { getFeaturedProducts } from "@/data/products";
import { HiShieldCheck, HiGlobe, HiClock, HiChevronRight } from "react-icons/hi";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Garbal - Líderes en Durabilidad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-accent text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Líderes en Durabilidad
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Fabricamos y distribuimos botas y calzado de PVC con estándares de
            calidad internacional para distribuidores, empresas y consumidores finales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center gap-2"
            >
              Ver Catálogo
              <HiChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 border-2 border-white/30 hover:border-white text-white rounded-full font-semibold text-lg transition-all hover:bg-white/10"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { target: 60, suffix: "+", label: "Años de experiencia" },
            { target: 13, suffix: "", label: "Productos" },
            { target: 5, suffix: "+", label: "Países" },
            { target: 1962, suffix: "", label: "Fundada en" },
          ].map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Nuestra Historia</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
              Más de 60 años fabricando calzado de confianza
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Desde 1962, Garbal ha sido sinónimo de calidad en la fabricación de botas y calzado de PVC. Nacimos con
              el compromiso de ofrecer calzado accesible, resistente y confiable para las necesidades del trabajo diario.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hoy distribuimos en Centroamérica, México, Estados Unidos y el Caribe, llevando la durabilidad
              salvadoreña a cada rincón.
            </p>
            <Link href="/nosotros" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Conoce más sobre nosotros <HiChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/about/factory-production.jpg" alt="Producción Garbal" width={600} height={400} className="w-full h-[400px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold">+60</p>
              <p className="text-sm">años de trayectoria</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Nuestros Productos</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2">Botas Hechas Para Darles Duro</h2>
          </motion.div>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {featured.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                <Link href={`/productos/${product.slug}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md card-tilt card-glow product-shimmer">
                    <div className="relative h-72 img-zoom product-bg">
                      <Image src={product.image} alt={product.name} fill className="object-contain p-6 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500" />
                      <div className="shimmer-overlay absolute inset-0 z-10" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.specs.uso}</span>
                      <h3 className="font-heading font-bold text-lg text-secondary mt-1 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-gray-500 text-sm mt-2">{product.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/productos" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all hover:shadow-lg">
              Ver Todos los Productos <HiChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* POR QUÉ GARBAL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">Nuestra Promesa</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2">¿Por qué elegir Garbal?</h2>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { icon: HiShieldCheck, title: "Durabilidad Garantizada", desc: "Nuestro calzado de PVC está diseñado para resistir las condiciones más exigentes del trabajo diario." },
              { icon: HiGlobe, title: "Calidad Internacional", desc: "Exportamos a más de 5 países con estándares de calidad que cumplen normativas internacionales." },
              { icon: HiClock, title: "+60 Años de Experiencia", desc: "Desde 1962 perfeccionando cada bota. Conocemos las necesidades del trabajador como nadie." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO AGRÍCOLA */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <Image src="/images/hero/hero-agricola.png" alt="Botas agrícolas Garbal" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <motion.div className="relative z-10 max-w-7xl mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-accent text-4xl md:text-5xl text-white mb-4">Hechas para darles duro</h2>
          <p className="text-white/80 max-w-lg mb-6 text-lg">Del campo a la industria, nuestras botas están diseñadas para acompañarte en cada jornada de trabajo.</p>
          <Link href="/productos" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary rounded-full font-semibold hover:bg-gray-100 transition-all">
            Explorar Productos <HiChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* CTA CONTACTO */}
      <section className="py-20 bg-garbal-gradient">
        <motion.div className="max-w-4xl mx-auto px-4 text-center text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">¿Listo para equipar a tu equipo?</h2>
          <p className="text-white/80 mb-8 text-lg">Contáctanos hoy y obtén una cotización personalizada para tu empresa o negocio.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all">
              Solicitar Cotización
            </Link>
            <Link href="/distribuidores" className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:border-white hover:bg-white/10 transition-all">
              Ser Distribuidor
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
