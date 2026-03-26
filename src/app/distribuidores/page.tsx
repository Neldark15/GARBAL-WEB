"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiGlobe, HiTruck, HiCurrencyDollar, HiSupport } from "react-icons/hi";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function DistribuidoresPage() {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    country: "",
    volume: "",
    products: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-accent text-4xl md:text-5xl mb-4">
              Programa de Distribuidores
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Únete a nuestra red de distribuidores y lleva la calidad Garbal a
              tu mercado. Más de 60 años de confianza respaldan nuestra marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Ventajas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2">
              Beneficios de ser distribuidor Garbal
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                icon: HiGlobe,
                title: "Marca Reconocida",
                desc: "Más de 60 años de trayectoria con presencia en 5+ países.",
              },
              {
                icon: HiTruck,
                title: "Logística Eficiente",
                desc: "Cadena de distribución optimizada para entregas puntuales.",
              },
              {
                icon: HiCurrencyDollar,
                title: "Precios Competitivos",
                desc: "Márgenes atractivos y precios mayoristas para tu negocio.",
              },
              {
                icon: HiSupport,
                title: "Soporte Comercial",
                desc: "Acompañamiento en marketing, material POP y capacitación.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Cobertura
            </span>
            <h2 className="font-heading text-3xl font-bold text-secondary mt-2 mb-6">
              Zonas de Distribución
            </h2>
            <p className="text-gray-600 mb-6">
              Actualmente distribuimos en las siguientes regiones y estamos en
              constante expansión:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "El Salvador",
                "Guatemala",
                "Honduras",
                "Nicaragua",
                "Costa Rica",
                "México",
                "Estados Unidos",
                "Caribe",
              ].map((country) => (
                <div
                  key={country}
                  className="flex items-center gap-2 text-secondary"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">{country}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Image
              src="/images/about/product-showcase.jpg"
              alt="Productos Garbal"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="text-center mb-10">
              <span className="text-primary font-semibold text-sm tracking-wider uppercase">
                Aplica Ahora
              </span>
              <h2 className="font-heading text-3xl font-bold text-secondary mt-2">
                Solicitud de Distribución
              </h2>
              <p className="text-gray-500 mt-2">
                Completa el formulario y nuestro equipo comercial te contactará.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-secondary mb-2">
                    ¡Solicitud recibida!
                  </h3>
                  <p className="text-gray-500">
                    Nuestro equipo comercial te contactará pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                      <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Nombre de la empresa" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contacto *</label>
                      <input type="text" required value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Nombre del contacto" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="empresa@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="+503 0000 0000" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">País *</label>
                      <select required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                        <option value="">Selecciona tu país</option>
                        {["El Salvador", "Guatemala", "Honduras", "Nicaragua", "Costa Rica", "Panamá", "México", "Estados Unidos", "Otro"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Volumen estimado</label>
                      <select value={formData.volume} onChange={(e) => setFormData({ ...formData, volume: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                        <option value="">Selecciona volumen</option>
                        <option value="small">Menos de 100 pares/mes</option>
                        <option value="medium">100 - 500 pares/mes</option>
                        <option value="large">500 - 1000 pares/mes</option>
                        <option value="xlarge">Más de 1000 pares/mes</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Productos de interés</label>
                    <select value={formData.products} onChange={(e) => setFormData({ ...formData, products: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                      <option value="">Selecciona línea de productos</option>
                      <option value="industrial">Botas Industriales</option>
                      <option value="agricola">Botas Agrícolas</option>
                      <option value="otros">Calzado Casual</option>
                      <option value="todos">Todas las líneas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje adicional</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Cuéntanos más sobre tu negocio..." />
                  </div>
                  <button type="submit" className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all hover:shadow-lg">
                    Enviar Solicitud
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
