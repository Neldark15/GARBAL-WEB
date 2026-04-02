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
            <svg viewBox="110 95 210 145" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* USA - Continental only */}
              <path
                d="M270.500,98.755L270.113,100.440L270.617,100.959L272.224,101.148L274.476,101.637L276.391,102.588L278.553,102.189L281.186,102.987L281.999,102.957L284.577,102.088L286.365,103.201L288.229,104.388L289.763,105.410L291.241,106.392L291.129,107.199L291.578,107.501L291.296,107.805L291.916,107.900L292.533,107.583L292.344,108.309L292.632,108.796L293.311,108.796L293.513,109.171L292.974,109.716L294.945,111.156L294.374,113.935L293.867,116.593L292.445,118.401L290.619,120.083L289.652,121.153L289.474,121.472L289.591,121.909L290.268,122.391L290.904,122.391L294.463,120.759L297.246,120.278L301.105,118.757L301.267,118.447L301.380,117.514L301.193,116.913L302.503,116.428L304.972,116.416L307.274,116.416L308.498,115.225L308.895,114.987L312.304,112.784L313.623,112.221L317.413,112.200L322.001,112.198L322.527,111.440L323.379,111.286L324.607,110.811L325.991,109.415L327.602,107.028L330.302,104.712L330.832,105.518L332.660,104.997L333.442,105.882L331.986,110.066L333.010,111.801L333.115,112.805L329.989,114.287L327.085,115.342L324.148,116.247L322.228,118.063L321.577,118.751L321.022,120.373L321.328,121.994L322.355,122.071L322.451,120.954L322.991,121.634L322.506,122.507L320.632,123.003L319.432,122.944L317.377,123.477L316.220,123.630L314.692,123.781L312.271,124.667L316.204,124.091L316.765,124.670L312.889,125.588L311.262,125.594L311.466,125.218L310.399,126.066L311.102,126.207L309.851,128.441L307.309,130.892L307.344,130.074L306.825,129.908L306.204,129.112L306.263,130.827L306.744,131.394L306.451,132.598L305.280,133.835L303.116,136.379L302.915,136.253L304.320,134.085L303.342,132.868L303.783,130.222L302.900,131.599L302.882,133.620L301.317,133.120L302.806,134.146L302.066,137.177L302.749,137.397L302.711,138.499L302.188,141.686L299.894,144.042L296.963,144.975L294.798,146.819L293.437,147.021L291.826,148.176L291.195,149.231L287.800,151.272L285.940,152.769L284.229,154.633L283.264,156.868L283.191,159.051L283.574,161.742L284.350,163.968L284.113,165.326L284.712,168.974L284.237,171.094L283.895,172.317L282.868,174.238L281.987,174.634L280.728,174.253L280.559,172.873L279.669,172.150L278.751,169.446L277.957,167.040L277.788,165.810L278.734,163.723L278.314,161.993L276.736,159.363L275.806,158.880L272.819,160.307L272.372,160.150L271.398,158.683L269.932,157.905L266.816,158.300L264.546,157.953L262.456,158.169L261.221,158.660L261.495,159.496L261.190,160.771L261.629,161.392L261.035,161.806L260.139,161.342L259.013,161.938L257.094,161.841L255.448,160.179L253.037,160.571L251.251,159.843L249.543,160.064L247.138,160.798L244.195,163.129L241.235,164.485L239.438,165.987L238.504,167.402L237.992,169.572L237.789,171.081L238.063,172.150L236.990,172.244L235.231,171.553L233.351,170.578L232.934,169.100L232.845,166.899L231.673,165.106L231.172,163.263L230.328,161.110L228.738,159.857L226.542,159.918L224.273,162.402L222.279,161.459L221.125,160.509L220.907,158.780L220.551,157.138L219.416,155.755L218.380,154.761L217.776,153.646L213.186,153.645L212.751,154.942L210.646,154.943L205.361,154.966L200.074,152.751L196.613,151.222L197.076,150.607L193.602,150.948L190.513,151.190L190.645,149.584L189.588,147.776L188.496,147.399L188.535,146.497L187.118,146.339L186.488,145.489L184.164,145.179L183.682,144.671L184.040,142.941L182.934,139.741L182.762,135.312L183.186,134.575L182.521,133.523L181.738,130.854L182.567,128.257L182.091,126.557L184.103,124.022L185.518,121.399L186.057,119.055L188.692,116.173L190.586,113.398L192.580,110.617L194.748,106.501L195.644,103.876L195.841,102.451L196.519,101.852L199.384,102.895L198.865,105.791L199.981,104.981L201.168,102.465L201.922,99.949L208.813,99.949L216.017,99.949L218.403,99.949L225.799,99.949L232.958,99.949L240.237,99.949L247.521,99.949L255.767,99.949L264.070,99.947L269.091,99.949L269.673,98.770L270.500,98.755"
                fill={activeRegion === "norteamerica" ? "#2563EB" : "#1E3A5F"}
                stroke="#0F172A"
                strokeWidth="0.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("norteamerica")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Mexico */}
              <path
                d="M238.063,172.150L236.399,174.911L235.567,177.174L234.700,181.387L234.194,182.923L234.393,184.638L234.993,186.172L235.151,188.611L236.600,190.952L236.999,192.746L237.863,194.294L240.657,195.128L241.616,196.444L244.129,195.565L246.255,195.247L248.375,194.682L250.164,194.143L252.062,192.860L252.942,191.026L253.545,188.384L254.151,187.465L256.116,186.641L259.099,185.912L261.492,186.021L263.180,185.755L263.739,186.422L263.433,187.936L261.703,189.806L260.806,191.720L261.243,192.268L260.670,193.627L259.689,196.081L259.093,195.273L258.514,195.326L257.989,195.367L256.777,197.265L256.326,196.893L255.977,197.038L255.941,197.501L253.414,197.466L250.857,197.471L250.633,199.242L249.394,199.249L250.283,200.299L251.206,201.025L251.425,201.707L251.846,201.897L251.642,202.968L248.117,202.978L246.470,205.541L246.786,206.128L246.394,206.866L246.246,207.782L243.510,204.396L242.226,203.375L240.091,202.555L238.528,202.783L236.166,203.967L234.740,204.276L232.912,203.448L230.934,202.850L228.565,201.407L226.569,200.966L223.667,199.504L221.585,198.001L221.012,197.162L219.507,196.974L216.849,195.979L215.915,194.544L213.236,192.759L212.155,190.776L211.764,189.244L212.726,188.937L212.600,188.040L213.365,187.224L213.565,186.137L212.889,184.725L212.859,183.473L212.221,181.886L210.373,178.761L208.080,176.304L207.149,174.344L205.152,173.060L204.849,172.292L205.748,170.348L204.560,169.615L203.359,168.087L203.247,165.893L201.870,165.637L200.738,163.981L199.877,162.451L200.014,161.468L199.197,159.097L199.086,156.689L199.544,155.481L198.057,154.234L197.124,154.371L195.915,153.504L195.041,154.781L194.951,156.290L194.382,158.651L194.911,159.948L196.327,162.114L196.574,162.854L196.923,163.079L196.995,164.159L197.482,164.115L197.495,166.143L198.103,166.943L198.387,168.057L199.666,169.657L199.811,172.582L200.261,173.959L200.677,175.433L200.527,177.091L201.814,177.195L202.644,178.624L203.377,180.028L203.211,180.591L201.863,181.746L201.385,181.731L201.012,179.820L199.562,178.027L197.885,176.507L196.647,175.708L197.267,173.408L197.297,171.704L196.265,170.729L194.779,169.326L194.318,169.730L193.854,168.911L192.395,168.150L191.294,166.324L191.552,166.087L192.610,166.265L193.914,165.091L194.386,163.672L192.917,161.429L191.580,160.558L191.168,158.595L190.912,156.533L190.578,154.019L190.513,151.190L193.602,150.948L197.076,150.607L196.613,151.222L200.074,152.751L205.361,154.966L210.646,154.943L212.751,154.942L213.186,153.645L217.776,153.646L218.380,154.761L219.416,155.755L220.551,157.138L220.907,158.780L221.125,160.509L222.279,161.459L224.273,162.402L226.542,159.918L228.738,159.857L230.328,161.110L231.172,163.263L231.673,165.106L232.845,166.899L232.934,169.100L233.351,170.578L235.231,171.553L236.990,172.244L238.063,172.150"
                fill={activeRegion === "norteamerica" ? "#16A34A" : "#166534"}
                stroke="#0F172A"
                strokeWidth="0.5"
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveRegion("norteamerica")}
                onMouseLeave={() => setActiveRegion(null)}
              />
              {/* Belize */}
              <path d="M255.941,197.501L255.977,197.038L256.326,196.893L256.777,197.265L257.989,195.367L258.514,195.326L258.468,195.787L258.985,195.801L258.835,196.657L258.227,198.017L258.407,198.503L257.983,199.628L258.120,199.929L257.609,201.518L256.968,202.352L256.460,202.452L255.783,203.541L254.963,203.542L255.614,199.993L255.941,197.501" fill={activeRegion === "centroamerica" ? "#60A5FA" : "#3B82F6"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("centroamerica")} onMouseLeave={() => setActiveRegion(null)} />
              {/* Guatemala */}
              <path d="M251.895,210.308L250.530,209.760L248.817,209.703L247.613,209.079L246.246,207.782L246.394,206.866L246.786,206.128L246.470,205.541L248.117,202.978L251.642,202.968L251.846,201.897L251.425,201.707L251.206,201.025L250.283,200.299L249.394,199.249L250.633,199.242L250.857,197.471L253.414,197.466L255.941,197.501L255.614,199.993L254.963,203.542L255.783,203.541L256.609,204.110L256.903,203.642L257.659,204.043L256.261,205.243L254.850,206.123L254.597,206.727L254.764,207.344L254.124,208.142L253.463,208.336L253.578,208.706L253.032,209.054L252.020,209.847L251.895,210.308" fill={activeRegion === "centroamerica" ? "#34D399" : "#166534"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("centroamerica")} onMouseLeave={() => setActiveRegion(null)} />
              {/* El Salvador - always highlighted */}
              <path d="M258.143,211.412L257.776,212.152L256.184,212.105L255.217,211.804L254.131,211.179L252.617,210.984L251.895,210.308L252.020,209.847L253.032,209.054L253.578,208.706L253.463,208.336L254.124,208.142L254.913,208.407L255.452,209.034L256.241,209.538L256.307,209.962L257.547,209.587L258.095,209.812L258.441,210.152L258.143,211.412" fill="#CC1939" stroke="#FFF" strokeWidth="0.5" className="cursor-pointer" />
              {/* Honduras */}
              <path d="M259.351,212.669L258.957,211.685L258.143,211.412L258.441,210.152L258.095,209.812L257.547,209.587L256.307,209.962L256.241,209.538L255.452,209.034L254.913,208.407L254.124,208.142L254.764,207.344L254.597,206.727L254.850,206.123L256.261,205.243L257.659,204.043L257.930,204.166L258.599,203.613L259.391,203.568L259.614,203.824L260.059,203.668L261.301,203.952L262.581,203.870L263.506,203.522L263.869,203.170L264.725,203.333L265.357,203.546L266.084,203.473L266.662,203.200L267.865,203.636L268.293,203.705L269.063,204.293L269.776,204.998L270.719,205.480L271.344,206.345L270.408,206.280L269.991,206.709L269.004,207.119L268.309,207.122L267.668,207.521L267.129,207.379L266.699,206.899L266.404,206.990L265.990,207.742L265.729,207.715L265.630,208.362L264.599,209.228L264.061,209.602L263.747,209.992L262.987,209.356L262.323,210.195L261.751,210.173L261.099,210.247L261.030,211.793L260.623,211.821L260.219,212.540L259.351,212.669" fill={activeRegion === "centroamerica" ? "#38BDF8" : "#0EA5E9"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("centroamerica")} onMouseLeave={() => setActiveRegion(null)} />
              {/* Nicaragua */}
              <path d="M263.285,218.632L262.411,217.641L261.225,216.373L260.705,215.313L259.625,214.324L258.362,212.904L258.709,212.418L259.124,212.891L259.351,212.669L260.219,212.540L260.623,211.821L261.030,211.793L261.099,210.247L261.751,210.173L262.323,210.195L262.987,209.356L263.747,209.992L264.061,209.602L264.599,209.228L265.630,208.362L265.729,207.715L265.990,207.742L266.404,206.990L266.699,206.899L267.129,207.379L267.668,207.521L268.309,207.122L269.004,207.119L269.991,206.709L270.408,206.280L271.344,206.345L271.084,206.646L270.888,207.348L271.077,208.499L270.358,209.570L269.962,210.835L269.762,212.221L269.845,213.032L269.802,214.447L269.356,214.756L268.991,216.101L269.114,216.932L268.485,217.736L268.546,218.586L268.928,219.102L268.213,219.769L267.415,219.559L267.009,218.912L266.154,218.650L265.486,219.060L263.734,218.227L263.285,218.632" fill={activeRegion === "centroamerica" ? "#A78BFA" : "#7C3AED"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("centroamerica")} onMouseLeave={() => setActiveRegion(null)} />
              {/* Costa Rica */}
              <path d="M270.338,227.636L268.869,226.938L268.338,226.278L268.682,225.732L268.615,225.037L267.883,224.284L266.824,223.666L265.891,223.263L265.754,222.343L265.064,221.782L265.189,222.696L264.601,223.447L264.011,222.575L263.138,222.264L262.805,221.630L262.899,220.673L263.346,219.682L262.602,219.239L263.285,218.632L263.734,218.227L265.486,219.060L266.154,218.650L267.009,218.912L267.415,219.559L268.213,219.769L268.928,219.102L269.492,220.811L270.461,222.076L271.696,223.419L270.613,223.700L270.570,224.965L271.123,225.433L270.692,225.805L270.773,226.374L270.513,227.012L270.338,227.636" fill={activeRegion === "centroamerica" ? "#FBBF24" : "#D97706"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("centroamerica")} onMouseLeave={() => setActiveRegion(null)} />
              {/* Panamá */}
              <path d="M284.273,230.784L283.390,229.877L282.872,228.180L283.593,227.340L282.901,227.124L282.431,226.085L281.091,225.211L279.871,225.412L279.261,226.505L278.108,227.295L277.499,227.405L277.198,228.059L278.441,229.766L277.667,230.168L277.245,230.634L275.949,230.795L275.556,228.916L275.171,229.451L274.266,229.266L273.766,228.001L272.640,227.792L271.939,227.424L270.751,227.429L270.633,228.111L270.338,227.636L270.513,227.012L270.773,226.374L270.692,225.805L271.123,225.433L270.570,224.965L270.613,223.700L271.696,223.419L272.637,224.547L272.549,225.213L273.647,225.354L273.920,225.098L274.645,225.871L276.016,225.644L277.230,224.850L278.938,224.215L279.925,223.276L281.444,223.460L281.327,223.769L282.864,223.877L284.071,224.420L284.932,225.366L285.935,226.235L285.579,226.695L286.141,228.547L285.578,229.482L284.695,229.256L284.273,230.784" fill={activeRegion === "centroamerica" ? "#F87171" : "#DC2626"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("centroamerica")} onMouseLeave={() => setActiveRegion(null)} />
              {/* Cuba - reference only */}
              <path d="M276.886,180.582L279.199,180.806L281.325,180.842L283.734,181.913L284.666,183.064L287.248,182.709L288.116,183.448L290.173,185.395L291.690,186.814L292.591,186.771L294.136,187.412L293.828,188.297L295.821,188.427L297.726,189.714L297.313,190.450L295.455,190.849L293.602,191.006L291.748,190.757L287.808,191.063L289.849,189.309L288.841,188.492L287.111,188.282L286.285,187.374L285.869,185.583L284.316,185.706L281.889,184.863L281.160,184.203L277.682,183.716L276.815,183.102L277.938,182.317L275.297,182.156L273.125,183.790L271.993,183.834L271.498,184.601L270.106,184.945L268.984,184.647L270.552,183.675L271.296,182.541L272.619,181.841L274.088,181.228L276.182,180.927L276.886,180.582" fill="#4B5563" stroke="#0F172A" strokeWidth="0.3" opacity={0.5} />
              {/* Jamaica */}
              <path d="M287.857,195.355L289.668,195.637L291.041,196.392L291.404,197.254L289.474,197.312L288.586,197.838L287.108,197.333L285.666,196.187L286.072,195.469L287.245,195.249L287.857,195.355" fill={activeRegion === "caribe" ? "#FBBF24" : "#D97706"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("caribe")} onMouseLeave={() => setActiveRegion(null)} />
              {/* Dominican Republic */}
              <path d="M304.256,191.507L304.650,190.971L306.779,190.985L308.317,191.795L309.044,191.716L309.433,192.831L310.933,192.768L310.756,193.705L311.961,193.819L313.195,194.973L312.058,196.253L310.822,195.569L309.554,195.701L308.669,195.551L308.120,196.125L307.051,196.318L306.709,195.555L305.760,196.007L304.453,198.160L303.798,197.660L303.748,196.756L303.889,195.902L303.279,194.958L303.998,194.428L304.326,193.219L304.256,191.507" fill={activeRegion === "caribe" ? "#FBBF24" : "#D97706"} stroke="#0F172A" strokeWidth="0.3" className="cursor-pointer transition-all duration-300" onMouseEnter={() => setActiveRegion("caribe")} onMouseLeave={() => setActiveRegion(null)} />

              {/* Location pins */}
              <g className="pointer-events-none">
                <circle cx="240" cy="110" r="4" fill="#CC1939" stroke="white" strokeWidth="1" />
                <text x="240" y="112" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">1</text>
              </g>
              <g className="pointer-events-none">
                <circle cx="258" cy="210" r="3" fill="#CC1939" stroke="white" strokeWidth="0.8" />
                <text x="258" y="212" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">2</text>
              </g>
              <g className="pointer-events-none">
                <circle cx="308" cy="193" r="3" fill="#CC1939" stroke="white" strokeWidth="0.8" />
                <text x="308" y="195" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">3</text>
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
