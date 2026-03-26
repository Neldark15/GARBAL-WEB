"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiHeart, HiEye, HiStar } from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/images/about/factory-exterior.jpg"
          alt="Planta Garbal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-accent text-5xl md:text-6xl mb-4">Nuestra Historia</h1>
          <p className="text-white/80 text-lg max-w-xl">
            Más de 60 años de compromiso con la calidad y la durabilidad.
          </p>
        </motion.div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Desde 1962
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
              Quiénes Somos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Garbal es una empresa salvadoreña con más de 60 años de trayectoria
              en la fabricación de botas y calzado de PVC. Fundada en 1962, nacimos
              con el compromiso de ofrecer calzado accesible, resistente y confiable
              para las necesidades del trabajo diario.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A lo largo de las décadas, hemos perfeccionado nuestros procesos de
              manufactura para entregar productos que cumplen con los más altos
              estándares de calidad internacional, sirviendo a distribuidores,
              empresas y consumidores finales en toda la región.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoy, nuestra presencia se extiende por Centroamérica, México,
              Estados Unidos y el Caribe, consolidándonos como una marca de
              confianza para quienes necesitan protección y durabilidad en su
              calzado de trabajo.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <Image
              src="/images/about/factory-production.jpg"
              alt="Producción en planta Garbal"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                icon: HiHeart,
                title: "Misión",
                desc: "Fabricar y distribuir calzado de PVC de la más alta calidad, proporcionando protección, comodidad y durabilidad a trabajadores de diversos sectores productivos en la región.",
                image: "/images/about/factory-mission.jpg",
              },
              {
                icon: HiEye,
                title: "Visión",
                desc: "Ser la marca líder en calzado de PVC en Latinoamérica, reconocida por nuestra innovación constante, calidad superior y compromiso con el bienestar de nuestros clientes.",
                image: "/images/about/factory-vision.jpg",
              },
              {
                icon: HiStar,
                title: "Valores",
                desc: "Calidad sin compromisos, innovación constante, responsabilidad social, atención al cliente y compromiso con nuestro equipo humano que hace posible cada par de botas.",
                image: "/images/about/factory-values.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <item.icon className="w-6 h-6" />
                    <h3 className="font-heading font-bold text-xl">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Galería de fábrica */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Nuestra Planta
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2">
              Donde la calidad cobra vida
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { src: "/images/about/factory-exterior.jpg", span: "col-span-2 md:col-span-1" },
              { src: "/images/about/factory-production.jpg", span: "" },
              { src: "/images/about/factory-mission.jpg", span: "" },
              { src: "/images/about/factory-vision.jpg", span: "" },
              { src: "/images/about/factory-values.jpg", span: "" },
              { src: "/images/about/product-showcase.jpg", span: "" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative h-56 rounded-xl overflow-hidden img-zoom ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={`Galería Garbal ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
