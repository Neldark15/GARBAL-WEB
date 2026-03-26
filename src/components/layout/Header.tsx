"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown, HiDownload } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  {
    href: "/productos",
    label: "Productos",
    submenu: [
      { href: "/productos?cat=industrial", label: "Botas Industriales" },
      { href: "/productos?cat=agricola", label: "Botas Agrícolas" },
      { href: "/productos?cat=otros", label: "Otros Productos" },
      { href: "/productos", label: "Ver Todo" },
    ],
  },
  { href: "/distribuidores", label: "Distribuidores" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-white p-0.5 shadow-md">
              <Image
                src="/images/logo/garbal-logo.png"
                alt="Garbal"
                width={44}
                height={44}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span
              className={`font-heading font-bold text-xl tracking-wide transition-all duration-300 ${
                scrolled
                  ? "text-secondary"
                  : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              }`}
            >
              GARBAL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.submenu ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      scrolled
                        ? "text-secondary-light hover:text-primary hover:bg-primary/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-3 text-secondary-light hover:bg-primary/5 hover:text-primary transition-colors text-sm font-medium"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    scrolled
                      ? "text-secondary-light hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Catalog PDF */}
            <a
              href="/catalogo/garbal-catalogo-2026.pdf"
              download
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                scrolled
                  ? "text-secondary-light hover:text-primary hover:bg-primary/5"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <HiDownload className="w-4 h-4" />
              Catálogo
            </a>

            {/* CTA */}
            <Link
              href="/contacto"
              className="ml-2 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? "text-secondary" : "text-white"
            }`}
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-secondary-light hover:bg-primary/5 hover:text-primary font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="ml-4 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 rounded-lg text-gray-500 hover:text-primary text-sm"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/catalogo/garbal-catalogo-2026.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-secondary-light hover:bg-primary/5 hover:text-primary font-medium"
              >
                <HiDownload className="w-4 h-4" />
                Descargar Catálogo
              </a>
              <Link
                href="/contacto"
                className="block mx-4 mt-2 px-6 py-3 bg-primary text-white text-center rounded-full font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Contáctanos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
