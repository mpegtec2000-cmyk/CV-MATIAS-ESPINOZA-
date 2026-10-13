"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, ArrowRight, ShieldCheck, MapPin, Sparkles, Clock, CheckCircle2, Globe } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useEffect, useState } from "react";

export default function Hero() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("es-CL", {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setLocalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const marqueeItems = [
    "OPERACIÓN AVANZADA SAP ECC",
    "GESTIÓN DE CADENA DE SUMINISTRO",
    "CONTROL DE INVENTARIOS CÍCLICOS & FIFO",
    "METODOLOGÍA 5S & ESTANDARIZACIÓN OPERATIVA",
    "PLANIFICACIÓN DE RUTAS & DESPACHO DE FLOTAS",
    "EXCEL AVANZADO, MACROS & TABLAS DINÁMICAS",
    "ANÁLISIS DE DATOS & KPIS EN POWER BI",
    "MANEJO DE SOFTLAND ERP & ICONSTRUYE",
    "NORMATIVA TRIBUTARIA & GUÍAS DE DESPACHO SII",
    "LIDERAZGO & SUPERVISIÓN DE EQUIPOS EN TERRENO",
    "RESOLUCIÓN DE CONTINGENCIAS BAJO PRESIÓN",
    "PROMPT ENGINEERING & IA APLICADA A PROCESOS",
    "DESARROLLO WEB & SISTEMAS DE GESTIÓN",
    "DISPONIBILIDAD INMEDIATA PARA TRABAJAR",
  ];

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-minimal bg-white">
      {/* Subtle radial spotlight */}
      <div className="absolute inset-0 bg-radial-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Personal Brand & Professional Profile */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Real-time Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>DISPONIBILIDAD INMEDIATA</span>
              </div>

              {localTime && (
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-600">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>CHILE: {localTime}</span>
                </div>
              )}

              <div className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-600">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>REGIÓN DE VALPARAÍSO</span>
              </div>

              <a
                href="https://www.vision-code.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 hover:text-black transition-colors shadow-2xs group"
              >
                <Globe className="w-3.5 h-3.5 text-black" />
                <span>VISION-CODE.CL</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-black transition-colors" />
              </a>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500">
                [ CURRÍCULUM VITAE // PERFIL PROFESIONAL ]
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.08]">
                MATÍAS PATRICIO
                <span className="block text-zinc-900">ESPINOZA GUERRERO</span>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-600 mt-2 tracking-tight">
                  Logística • Operaciones • Sistemas ERP • Estudiante de Ingeniería Industrial
                </span>
              </h1>
            </div>

            {/* Executive Bio */}
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl font-normal">
              Soy Matías Espinoza Guerrero, profesional de Operaciones y Logística con más de 5 años de trayectoria en centros de distribución, bodegas,
              abastecimiento, inventarios y despacho en empresas de alta exigencia, destacando mi desempeño como{" "}
              <strong className="text-zinc-950 font-bold">Jefe de Turno en Ariztía</strong> con operación diaria avanzada en{" "}
              <strong className="text-zinc-950 font-bold">SAP ECC</strong>. Cursando actualmente el{" "}
              <strong className="text-zinc-950 font-bold">2° año de Ingeniería Industrial en AIEP</strong> (modalidad online asincrónica)
              y titulado como <strong className="text-zinc-950 font-bold">Técnico de Nivel Medio en Administración mención Logística (Mineduc)</strong>.
              Además, desarrollo de forma autónoma proyectos web y sistemas de control de existencias para optimizar procesos. Cuento con{" "}
              <strong className="text-emerald-800 font-bold underline decoration-emerald-500 decoration-2 underline-offset-2">disponibilidad inmediata</strong>{" "}
              para incorporarme a trabajar en tu empresa o equipo.
            </p>

            {/* Action Buttons in modern capsule style */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#documentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-md group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Descargar CV Completo (PDF)</span>
              </a>

              <a
                href="#experiencia"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs uppercase tracking-wider border border-zinc-300 hover:border-black transition-all group shadow-2xs"
              >
                <span>Ver Trayectoria Laboral</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
              >
                <span>WhatsApp Directo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Key Metrics Strip in High-Contrast Monochrome */}
            <div className="pt-6 border-t border-zinc-200 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs uppercase font-mono font-bold text-emerald-700 block">Estado</span>
                <span className="text-xl font-black text-zinc-950 block mt-0.5">Inmediata</span>
                <span className="text-[11px] text-zinc-500 font-medium">Full-Time / Turnos</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs uppercase font-mono font-bold text-zinc-600 block">Logística</span>
                <span className="text-xl font-black text-zinc-950 block mt-0.5">+5 Años</span>
                <span className="text-[11px] text-zinc-500 font-medium">Jefatura de Turno</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs uppercase font-mono font-bold text-zinc-600 block">Sistemas ERP</span>
                <span className="text-xl font-black text-zinc-950 block mt-0.5">SAP ECC</span>
                <span className="text-[11px] text-zinc-500 font-medium">Softland • Iconstruye</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                <span className="text-xs uppercase font-mono font-bold text-zinc-600 block">Académico</span>
                <span className="text-xl font-black text-zinc-950 block mt-0.5">2° Año Ing.</span>
                <span className="text-[11px] text-zinc-500 font-medium">AIEP Asincrónico</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photo Frame with requested data */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Clean Minimal Frame */}
              <div className="rounded-2xl bg-white border border-zinc-200 p-4 sm:p-5 shadow-xl relative">
                {/* Photo with portrait presentation */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 group">
                  <Image
                    src="/images/yo.png"
                    alt="Matías Patricio Espinoza Guerrero — Logística & Sistemas ERP"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-200 shadow-sm">
                      <span className="text-[11px] font-black text-zinc-950 tracking-wider uppercase font-mono">
                        MATÍAS ESPINOZA G.
                      </span>
                    </div>
                    <div className="bg-emerald-600 text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                      DISPONIBLE
                    </div>
                  </div>
                </div>

                {/* Sub-card metadata list — refined per user feedback */}
                <div className="mt-4 pt-3 border-t border-zinc-200 space-y-2.5 text-xs font-mono">
                  <div className="flex flex-col gap-0.5 pb-1 border-b border-zinc-100">
                    <span className="text-zinc-500 text-[11px] uppercase font-bold">Formación Superior</span>
                    <span className="text-zinc-950 font-bold text-xs">
                      Estudiante de 2° año de Ingeniería Industrial (Online Asincrónico, AIEP)
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 pb-1 border-b border-zinc-100">
                    <span className="text-zinc-500 text-[11px] uppercase font-bold">Título Técnico Profesional</span>
                    <span className="text-zinc-950 font-bold text-xs">
                      Técnico de Nivel Medio en Administración mención Logística (Mineduc)
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-zinc-500 text-[11px] uppercase font-bold">Especialidad</span>
                    <span className="text-zinc-950 font-semibold text-right">
                      Operaciones, Bodega & SAP ECC
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-zinc-500 text-[11px] uppercase font-bold">Disponibilidad</span>
                    <span className="text-emerald-700 font-bold text-right">
                      Inmediata (Full-Time / Turnos)
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-0.5">
                    <span className="text-zinc-500 text-[11px] uppercase font-bold">Ubicación</span>
                    <span className="text-zinc-900 font-medium text-right">
                      Región de Valparaíso, Chile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="mt-16 md:mt-20 border-y border-zinc-200 bg-zinc-50 py-3.5 overflow-hidden">
        <div className="animate-marquee gap-8">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-xs font-mono font-bold tracking-[0.18em] text-zinc-700 hover:text-black transition-colors">
                {item}
              </span>
              <span className="text-zinc-300 text-xs font-mono">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
