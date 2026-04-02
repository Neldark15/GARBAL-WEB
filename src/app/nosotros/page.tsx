"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiHeart, HiEye, HiStar, HiLocationMarker } from "react-icons/hi";
import { useState } from "react";

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

      {/* Cobertura Internacional */}
      <CoverageSection />

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

const regions = [
  {
    id: "norteamerica",
    name: "Norte América",
    countries: ["Estados Unidos", "México"],
    color: "#1E3A5F",
  },
  {
    id: "centroamerica",
    name: "Centroamérica",
    countries: ["El Salvador", "Guatemala", "Honduras", "Nicaragua", "Costa Rica", "Panamá"],
    color: "#CC1939",
  },
  {
    id: "caribe",
    name: "Región Caribe",
    countries: ["República Dominicana", "Jamaica"],
    color: "#D97706",
  },
];

function CoverageSection() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Presencia Internacional
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
            Nuestra Cobertura
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Distribuimos en más de 10 países de América, llevando la calidad Garbal a cada rincón.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map SVG */}
          <motion.div
            className="lg:col-span-3 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <svg viewBox="0 0 800 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* USA */}
              <motion.path
                d="M50,50 L420,50 L440,80 L450,120 L430,160 L400,180 L350,200 L280,210 L250,200 L200,210 L160,200 L120,180 L80,160 L50,120 Z"
                fill={activeRegion === "norteamerica" ? "#2563EB" : "#1E3A5F"}
                stroke="#0F172A"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("norteamerica")}
                onMouseLeave={() => setActiveRegion(null)}
                onClick={() => setActiveRegion(activeRegion === "norteamerica" ? null : "norteamerica")}
                whileHover={{ scale: 1.02, originX: 0.5, originY: 0.5 }}
              />
              {/* Mexico */}
              <motion.path
                d="M80,160 L120,180 L160,200 L200,210 L220,240 L230,280 L210,310 L190,330 L170,320 L150,340 L140,360 L160,380 L180,370 L200,360 L220,350 L240,330 L250,310 L260,290 L270,270 L280,260 L280,210 L250,200 L200,210 L160,200 L120,180 L80,170 Z"
                fill={activeRegion === "norteamerica" ? "#16A34A" : "#166534"}
                stroke="#0F172A"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("norteamerica")}
                onMouseLeave={() => setActiveRegion(null)}
                onClick={() => setActiveRegion(activeRegion === "norteamerica" ? null : "norteamerica")}
                whileHover={{ scale: 1.02, originX: 0.5, originY: 0.5 }}
              />
              {/* Guatemala */}
              <motion.path
                d="M200,360 L220,350 L240,360 L240,380 L220,390 L200,380 Z"
                fill={activeRegion === "centroamerica" ? "#EF4444" : "#166534"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("centroamerica")}
                onMouseLeave={() => setActiveRegion(null)}
                onClick={() => setActiveRegion(activeRegion === "centroamerica" ? null : "centroamerica")}
              />
              {/* El Salvador - highlighted */}
              <motion.path
                d="M220,390 L240,380 L260,388 L248,400 L228,398 Z"
                fill="#CC1939"
                stroke="#FFF"
                strokeWidth="2"
                className="cursor-pointer"
                onMouseEnter={() => setActiveRegion("centroamerica")}
                onMouseLeave={() => setActiveRegion(null)}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              {/* Honduras */}
              <motion.path
                d="M240,360 L280,355 L300,365 L290,380 L260,388 L240,380 Z"
                fill={activeRegion === "centroamerica" ? "#3B82F6" : "#0EA5E9"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("centroamerica")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Nicaragua */}
              <motion.path
                d="M260,388 L290,380 L310,400 L300,420 L270,415 Z"
                fill={activeRegion === "centroamerica" ? "#A855F7" : "#7C3AED"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("centroamerica")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Costa Rica */}
              <motion.path
                d="M270,415 L300,420 L310,440 L290,450 L275,435 Z"
                fill={activeRegion === "centroamerica" ? "#F59E0B" : "#D97706"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("centroamerica")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Panamá */}
              <motion.path
                d="M290,450 L310,440 L340,445 L350,460 L330,465 L300,460 Z"
                fill={activeRegion === "centroamerica" ? "#EF4444" : "#DC2626"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("centroamerica")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Caribbean Islands */}
              {/* Dominican Republic */}
              <motion.ellipse
                cx="480" cy="310" rx="25" ry="12"
                fill={activeRegion === "caribe" ? "#F59E0B" : "#D97706"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("caribe")}
                onMouseLeave={() => setActiveRegion(null)}
                onClick={() => setActiveRegion(activeRegion === "caribe" ? null : "caribe")}
              />
              {/* Jamaica */}
              <motion.ellipse
                cx="400" cy="340" rx="18" ry="8"
                fill={activeRegion === "caribe" ? "#F59E0B" : "#D97706"}
                stroke="#0F172A"
                strokeWidth="1.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("caribe")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Cuba shape for reference */}
              <motion.path
                d="M350,270 L420,260 L460,275 L440,290 L380,295 L350,285 Z"
                fill="#4B5563"
                stroke="#0F172A"
                strokeWidth="1"
                opacity={0.4}
              />
              {/* Other small Caribbean islands for context */}
              <ellipse cx="520" cy="300" rx="8" ry="4" fill="#4B5563" opacity={0.3} />
              <ellipse cx="540" cy="320" rx="6" ry="3" fill="#4B5563" opacity={0.3} />
              <ellipse cx="550" cy="340" rx="5" ry="3" fill="#4B5563" opacity={0.3} />

              {/* Location pins */}
              {/* USA pin */}
              <g className="pointer-events-none">
                <circle cx="280" cy="130" r="8" fill="#CC1939" stroke="white" strokeWidth="2" />
                <text x="280" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1</text>
              </g>
              {/* Central America pin */}
              <g className="pointer-events-none">
                <circle cx="250" cy="390" r="8" fill="#CC1939" stroke="white" strokeWidth="2" />
                <text x="250" y="394" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2</text>
              </g>
              {/* Caribbean pin */}
              <g className="pointer-events-none">
                <circle cx="450" cy="310" r="8" fill="#CC1939" stroke="white" strokeWidth="2" />
                <text x="450" y="314" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>
              </g>
            </svg>
          </motion.div>

          {/* Region List */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {regions.map((region, i) => (
              <motion.div
                key={region.id}
                variants={fadeUp}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeRegion === region.id
                    ? "bg-white/10 border-primary shadow-lg shadow-primary/20"
                    : "bg-white/5 border-transparent hover:bg-white/10"
                }`}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
                onClick={() => setActiveRegion(activeRegion === region.id ? null : region.id)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="font-heading font-bold text-white text-lg">{region.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                        country === "El Salvador"
                          ? "bg-primary text-white font-semibold"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      <HiLocationMarker className="inline w-3 h-3 mr-1" />
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="text-center pt-4">
              <p className="text-gray-500 text-sm">
                Sede principal: <span className="text-primary font-semibold">El Salvador</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
