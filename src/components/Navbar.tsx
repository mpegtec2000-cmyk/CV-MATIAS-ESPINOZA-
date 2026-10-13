"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "perfil", "experiencia", "capacidades", "proyectos", "documentos", "contacto"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "INICIO", href: "#inicio", id: "inicio" },
    { label: "PERFIL", href: "#perfil", id: "perfil" },
    { label: "EXPERIENCIA", href: "#experiencia", id: "experiencia" },
    { label: "HABILIDADES", href: "#capacidades", id: "capacidades" },
    { label: "PROYECTOS", href: "#proyectos", id: "proyectos" },
    { label: "DOCUMENTOS", href: "#documentos", id: "documentos" },
    { label: "CONTACTO", href: "#contacto", id: "contacto" },
  ];

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 max-w-7xl mx-auto px-3 sm:px-6">
      <div className="bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.06)] rounded-full px-3.5 sm:px-5 py-2 flex items-center justify-between transition-all">
        {/* Left: Brand & Live Status */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 shrink-0"
          aria-label="Inicio - Matías Espinoza CV"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center font-black text-xs tracking-wider shadow-xs group-hover:scale-105 transition-transform">
            ME
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black tracking-tight text-zinc-950 whitespace-nowrap">
                MATÍAS ESPINOZA
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                DISPONIBLE
              </span>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono tracking-tight whitespace-nowrap hidden md:block">
              Logística • SAP ECC • Ing. Industrial
            </span>
          </div>
        </Link>

        {/* Center: Clean Capsule Navigation (Single-line guaranteed, no wrapping) */}
        <nav className="hidden xl:flex items-center bg-zinc-100/90 border border-zinc-200/80 rounded-full p-1 shadow-2xs mx-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-white bg-black shadow-xs"
                    : "text-zinc-600 hover:text-black hover:bg-zinc-200/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Single-line guaranteed with whitespace-nowrap) */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/docs/CV_Matias_Espinoza.pdf"
            download="CV_Matias_Espinoza.pdf"
            className="whitespace-nowrap inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-800 hover:text-black bg-white hover:bg-zinc-100 border border-zinc-300 px-4 py-2 rounded-full transition-all shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-zinc-700" />
            <span>Descargar CV</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-1.5 text-xs uppercase font-extrabold tracking-wider text-white bg-black hover:bg-zinc-800 px-4.5 py-2 rounded-full transition-all shadow-sm"
          >
            <span>Contactar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-full text-zinc-700 hover:text-black hover:bg-zinc-100 border border-zinc-200 focus:outline-none shrink-0"
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden mt-2 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-3xl p-5 space-y-4 shadow-xl"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>DISPONIBILIDAD INMEDIATA</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-black px-3.5 py-2 rounded-xl hover:bg-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2 font-mono">
              <a
                href="/docs/CV_Matias_Espinoza.pdf"
                download="CV_Matias_Espinoza.pdf"
                className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 py-2.5 rounded-full"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV Completo</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white bg-black hover:bg-zinc-800 py-2.5 rounded-full"
              >
                <span>WhatsApp Directo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
