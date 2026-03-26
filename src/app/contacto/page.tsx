"use client";

import { motion } from "framer-motion";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            <h1 className="font-accent text-4xl md:text-5xl mb-4">Contáctanos</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Escríbenos y nuestro equipo te
              responderá a la brevedad.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: HiPhone,
                    label: "Teléfono",
                    value: "+503 6310 8147",
                    href: "tel:+50363108147",
                  },
                  {
                    icon: HiMail,
                    label: "Email",
                    value: "servicioalcliente@garbal.com",
                    href: "mailto:servicioalcliente@garbal.com",
                  },
                  {
                    icon: HiLocationMarker,
                    label: "Dirección",
                    value: "Km 24½ carretera al Puerto de La Libertad, Zaragoza, El Salvador",
                    href: "#mapa",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-secondary font-medium text-sm">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HiClock className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-bold text-secondary">Horarios</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lunes - Viernes</span>
                  <span className="font-medium text-secondary">9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sábado</span>
                  <span className="font-medium text-secondary">9:30 AM - 11:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Domingo</span>
                  <span className="font-medium text-secondary">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-heading font-bold text-secondary mb-4">
                Redes Sociales
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/calzadogarbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center hover:bg-blue-500 hover:text-white text-blue-500 transition-all"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/calzadogarbal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center hover:bg-pink-500 hover:text-white text-pink-500 transition-all"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/50363108147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center hover:bg-green-500 hover:text-white text-green-500 transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-heading text-2xl font-bold text-secondary mb-6">
                Envíanos un mensaje
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-secondary mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-500">
                    Te responderemos a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+503 0000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="cotizacion">Cotización de productos</option>
                        <option value="distribuidor">Quiero ser distribuidor</option>
                        <option value="soporte">Soporte al cliente</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all hover:shadow-lg"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section id="mapa" className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5!2d-89.28!3d13.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKm+24+1%2F2+carretera+al+Puerto+de+La+Libertad%2C+Zaragoza!5e0!3m2!1ses!2ssv!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Garbal"
        />
      </section>
    </>
  );
}
