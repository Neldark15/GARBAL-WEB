import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-md">
                <Image
                  src="/images/logo/garbal-logo.png"
                  alt="Garbal"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="font-heading font-bold text-2xl tracking-wide">GARBAL</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Más de 60 años fabricando botas y calzado de PVC con estándares de
              calidad internacional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/productos", label: "Productos" },
                { href: "/distribuidores", label: "Distribuidores" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Productos</h3>
            <ul className="space-y-2">
              {[
                { href: "/productos?cat=industrial", label: "Botas Industriales" },
                { href: "/productos?cat=agricola", label: "Botas Agrícolas" },
                { href: "/productos?cat=otros", label: "Otros Productos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/catalogo/garbal-catalogo-2026.pdf"
                  download
                  className="text-primary hover:text-primary-light transition-colors text-sm font-medium"
                >
                  📥 Descargar Catálogo PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <HiPhone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="tel:+50363108147" className="hover:text-white transition-colors">
                  +503 6310 8147
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <HiMail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href="mailto:servicioalcliente@garbal.com"
                  className="hover:text-white transition-colors"
                >
                  servicioalcliente@garbal.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <HiLocationMarker className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  Km 24½ carretera al Puerto de La Libertad, Zaragoza, El Salvador
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/calzadogarbal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/calzadogarbal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/50363108147"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Garbal. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Diseñado por{" "}
            <a
              href="https://noctura.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              NOCTURA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
