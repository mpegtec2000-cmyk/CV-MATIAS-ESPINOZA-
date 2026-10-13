"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Factory, HardHat, TrendingUp, Cpu, Users, Clock, Award } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function AboutVisionCode() {
  const pillars = [
    {
      num: "01",
      icon: <Users className="w-5 h-5 text-black" />,
      title: "Liderazgo en Terreno & Supervisión de Turnos",
      desc: "Experiencia liderando cuadrillas operativas en turnos rotativos para Ariztía. Asignación estratégica de tareas, resolución ágil de contingencias, resguardo de normativas de seguridad (5S, EPP) y cumplimiento de indicadores de productividad sin descuidar el clima humano.",
    },
    {
      num: "02",
      icon: <Factory className="w-5 h-5 text-black" />,
      title: "Dominio Operacional de ERP (SAP ECC & Softland)",
      desc: "Operación diaria comprobable en centros de distribución: recepción de mercancías, transferencias entre plantas, cubicación de carga, despacho continuo y cuadratura de inventarios físicos vs. sistémicos con más del 99% de exactitud.",
    },
    {
      num: "03",
      icon: <TrendingUp className="w-5 h-5 text-black" />,
      title: "Criterio de Ingeniería Industrial & Mejora Continua",
      desc: "Estudiante de 2° año de Ingeniería Industrial en AIEP (modalidad online asincrónica). Aplicación de pensamiento analítico a los procesos: estandarización de operaciones (SOP), optimización de tiempos de ciclo, análisis de causas raíz y reducción de mermas.",
    },
    {
      num: "04",
      icon: <Cpu className="w-5 h-5 text-black" />,
      title: "Capacidad Técnica & Proyectos de Software",
      desc: "De forma autónoma he programado y puesto en marcha más de 6 sitios web comerciales y sistemas web de inventarios para negocios reales. Esto demuestra mi proactividad, disciplina autodidacta y capacidad de incorporar herramientas digitales a la operación diaria de una empresa.",
    },
  ];

  return (
    <section id="perfil" className="py-24 md:py-32 border-t border-zinc-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-black" />
            [ 02 // PERFIL PROFESIONAL, VALORES & ENFOQUE ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Criterio de Ingeniería, Liderazgo en Terreno y Control de Procesos.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
            Mi formación continua como <strong className="text-zinc-900 font-semibold">estudiante de 2° año de Ingeniería Industrial</strong>,
            mi titulación como <strong className="text-zinc-900 font-semibold">Técnico en Logística</strong> y más de 5 años supervisando
            operaciones críticas me permiten aportar valor inmediato en cualquier cadena de abastecimiento o centro de distribución.
          </p>
        </div>

        {/* 2-Column Split: Statement Box + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Statement Box */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-50 border border-zinc-200 p-8 sm:p-10 flex flex-col justify-between relative shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 px-3 py-1 rounded-full bg-white border border-zinc-200 inline-block">
                  PERFIL HUMANO & LABORAL
                </span>
                <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  🟢 DISPONIBILIDAD INMEDIATA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                ¿Por qué mi perfil genera impacto inmediato en su equipo?
              </h3>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                En el ámbito logístico se requiere liderazgo real y conocimiento práctico del terreno. Mi experiencia
                como <strong>Jefe de Turno en Ariztía</strong> me enseñó a responder bajo presión, coordinar choferes y operarios,
                y resolver quiebres de inventario directamente en <strong>SAP ECC</strong> sin detener el despacho.
              </p>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Al mismo tiempo, mi formación en <strong>Ingeniería Industrial (modalidad asincrónica en AIEP)</strong> me
                brinda la flexibilidad horaria necesaria para cumplir turnos rotativos exigentes, mientras aplico herramientas
                de análisis de datos (Excel Avanzado, Power BI) y sistematización digital para elevar la eficiencia operativa.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-wrap gap-2.5 font-mono text-xs text-zinc-800">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>SAP ECC (Operación Diaria)</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Liderazgo de Equipos de Turno</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Control de Inventarios 5S & FIFO</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Documentación Tributaria & Guías SII</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card on Right */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-zinc-200 p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                SÍNTESIS CURRICULAR OFICIAL
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 font-bold block mb-1">EDUCACIÓN SUPERIOR:</span>
                  <p className="text-zinc-950 font-bold text-sm">
                    Estudiante de 2° año de Ingeniería Industrial
                  </p>
                  <p className="text-zinc-600 mt-0.5">
                    Instituto Profesional AIEP (Modalidad Online Asincrónica • Regular 2026)
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 font-bold block mb-1">TÍTULO MINISTERIAL:</span>
                  <p className="text-zinc-950 font-bold text-sm">
                    Técnico de Nivel Medio en Administración mención Logística
                  </p>
                  <p className="text-zinc-600 mt-0.5">
                    Liceo Bicentenario José F. Vergara E. (Registro Mineduc N° 26178)
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-zinc-500 font-bold block mb-1">ESTUDIOS PREVIOS:</span>
                  <p className="text-zinc-950 font-bold text-sm">
                    Ingeniería en Construcción
                  </p>
                  <p className="text-zinc-600 mt-0.5">
                    DUOC UC, Sede Valparaíso (3 años cursados)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200">
              <a
                href="#documentos"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-zinc-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Ver y Validar Certificados Oficiales</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-md group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-400">
                    {pillar.num}
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-950 tracking-tight leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
