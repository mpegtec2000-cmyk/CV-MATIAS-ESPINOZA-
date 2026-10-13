"use client";

import { Download, ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-600 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Pitch */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center font-black text-xs">
                ME
              </div>
              <span className="text-sm font-extrabold text-zinc-950 tracking-tight">
                MATÍAS PATRICIO ESPINOZA GUERRERO
              </span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              Logística, Operaciones, Sistemas ERP (SAP ECC) y Estudiante de 2° año de Ingeniería Industrial (AIEP).
              Región de Valparaíso, Chile.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>DISPONIBILIDAD INMEDIATA</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-zinc-900 font-bold block">
                Navegación
              </span>
              <ul className="space-y-1.5">
                <li>
                  <a href="#perfil" className="hover:text-black transition-colors">
                    Perfil Profesional
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className="hover:text-black transition-colors">
                    Experiencia
                  </a>
                </li>
                <li>
                  <a href="#capacidades" className="hover:text-black transition-colors">
                    Logística & ERP
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="hover:text-black transition-colors">
                    Proyectos Web
                  </a>
                </li>
                <li>
                  <a href="#documentos" className="hover:text-black transition-colors">
                    Descarga CV
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-zinc-900 font-bold block">
                Contacto Directo
              </span>
              <ul className="space-y-1.5">
                <li>
                  <a href="/docs/CV_Matias_Espinoza.pdf" download="CV_Matias_Espinoza.pdf" className="hover:text-black transition-colors flex items-center gap-1 font-bold text-zinc-950">
                    <span>Descargar CV</span>
                    <Download className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-black transition-colors">
                    <span>Email Directo</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Back to top & signature */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 text-xs font-mono font-bold transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Volver arriba</span>
            </a>

            <div className="text-left md:text-right text-[11px] font-mono text-zinc-500 space-y-1">
              <div>© 2026 Matías Patricio Espinoza Guerrero.</div>
              <div>Todos los derechos reservados.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
