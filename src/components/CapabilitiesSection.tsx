"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILL_TABS } from "@/data/portfolio-data";
import { CheckCircle2, ArrowRight, Sparkles, Terminal, Code2, Database, ShieldCheck } from "lucide-react";

export default function CapabilitiesSection() {
  const [activeTabId, setActiveTabId] = useState<string>("logistica-erp");

  const currentTab = SKILL_TABS.find((t) => t.id === activeTabId) || SKILL_TABS[0];

  return (
    <section id="capacidades" className="py-24 md:py-32 border-t border-zinc-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-black" />
              [ 04 // COMPETENCIAS, CONOCIMIENTOS & ERP ]
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
              Especialización en Logística, ERP & Ingeniería
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Matriz de conocimientos estructurada en 5 pilares operativos: control de cadena logística y SAP ECC,
              métodos de ingeniería industrial, liderazgo en terreno, automatización con IA y desarrollo de soluciones.
            </p>
          </div>

          <div className="font-mono text-xs font-bold text-zinc-600 border border-zinc-200 px-4 py-2 rounded-full bg-zinc-50 self-start md:self-auto">
            <span>SELECCIONA UN PILAR :</span>
          </div>
        </div>

        {/* Tab Navigation in Rounded Pill Style matching reference */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-200">
          <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-full bg-zinc-100 border border-zinc-200">
            {SKILL_TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-white bg-black shadow-xs"
                      : "text-zinc-600 hover:text-black hover:bg-zinc-200/60"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-xs space-y-8"
          >
            {/* Header of the Tab */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-200">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-black text-white font-bold">
                    {currentTab.label}
                  </span>
                  <span className="font-mono text-xs text-zinc-600 border border-zinc-200 px-3 py-1 rounded-full bg-zinc-50 font-bold">
                    {currentTab.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight pt-2">
                  {currentTab.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {currentTab.description}
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex flex-col gap-1 shrink-0 self-start md:self-auto font-mono text-xs">
                <span className="text-zinc-500 font-bold">Áreas Clave:</span>
                <span className="text-zinc-950 text-base font-extrabold">{currentTab.skills.length} Competencias Específicas</span>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentTab.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border transition-all ${
                    skill.highlight
                      ? "bg-zinc-50/70 border-zinc-300 hover:border-black shadow-2xs"
                      : "bg-white border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
                      {skill.level}
                    </span>
                    {skill.highlight && (
                      <span className="text-[10px] font-mono font-extrabold text-black bg-zinc-200 px-2 py-0.5 rounded-full uppercase">
                        Destacado
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-zinc-950 mb-1.5 leading-snug">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Practical Capabilities Bullets */}
            <div className="pt-6 border-t border-zinc-200">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold block mb-3">
                Aplicación Práctica en la Operación:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-zinc-700">
                {currentTab.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
