"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Globe,
  Smartphone,
  FileText,
  Bot,
  Layers,
  Sparkles,
} from "lucide-react";
import { PROJECTS, APPLICATION_SCOPES, ProjectItem } from "@/data/portfolio-data";

export default function ProjectsShowcase() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");

  const filterTabs = [
    { label: "Todos", count: PROJECTS.length, filterKey: "Todos" },
    {
      label: "01 Web & E-Commerce",
      count: PROJECTS.filter((p) => p.category === "Web & E-Commerce").length,
      filterKey: "Web & E-Commerce",
    },
    {
      label: "02 Mobile Apps",
      count: PROJECTS.filter((p) => p.category === "Mobile Apps").length,
      filterKey: "Mobile Apps",
    },
    {
      label: "03 Formalización",
      count: PROJECTS.filter((p) => p.category === "Formalización").length,
      filterKey: "Formalización",
    },
    {
      label: "04 Automatización",
      count: PROJECTS.filter((p) => p.category === "Automatización").length,
      filterKey: "Automatización",
    },
    {
      label: "Sistemas ERP & Gestión",
      count: PROJECTS.filter((p) => p.category === "Sistemas ERP & Gestión").length,
      filterKey: "Sistemas ERP & Gestión",
    },
  ];

  const filteredProjects: ProjectItem[] =
    selectedFilter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  const scopeIcons = [
    <Globe key="globe" className="w-5 h-5 text-black" />,
    <Smartphone key="phone" className="w-5 h-5 text-black" />,
    <FileText key="doc" className="w-5 h-5 text-black" />,
    <Bot key="bot" className="w-5 h-5 text-black" />,
  ];

  return (
    <section id="proyectos" className="py-24 md:py-32 border-t border-zinc-200 bg-zinc-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-black" />
              [ 05 // LO QUE HAGO & PROYECTOS REALIZADOS ]
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
              Lo que Hago y Proyectos que He Desarrollado
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Combino mi formación en <strong className="text-zinc-900 font-semibold">Ingeniería Industrial</strong> y experiencia
              logística con el desarrollo de soluciones digitales completas: desde plataformas e-commerce y aplicaciones móviles,
              hasta la formalización legal ante el SII, automatizaciones con IA y sistemas ERP de inventarios.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-zinc-200 text-xs font-mono font-bold text-zinc-800 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-black" />
              <span>6 CLIENTES EN PRODUCCIÓN</span>
            </div>
            <a
              href="https://www.vision-code.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-mono font-bold transition-all shadow-xs"
            >
              <span>vision-code.cl</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Application Areas Grid (Lo que Hago) */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">
              [ ÁREAS DE APLICACIÓN & CAPACIDAD TÉCNICA ]
            </span>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
              01 A 04 // ALCANCE EXPANDIDO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPLICATION_SCOPES.map((scope, index) => {
              const isSelected = selectedFilter === scope.category;
              return (
                <div
                  key={scope.id}
                  onClick={() => setSelectedFilter(scope.category)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative group ${
                    isSelected
                      ? "bg-black text-white border-black shadow-md ring-2 ring-black"
                      : "bg-white text-zinc-950 border border-zinc-200 hover:border-black shadow-2xs"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header: Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                          isSelected
                            ? "bg-zinc-800 text-white border-zinc-700"
                            : "bg-zinc-100 text-zinc-600 border-zinc-200"
                        }`}
                      >
                        {scope.num} — {scope.category}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
                          isSelected
                            ? "bg-zinc-900 border-zinc-700 text-white"
                            : "bg-zinc-100 border-zinc-200 text-black group-hover:bg-black group-hover:text-white"
                        }`}
                      >
                        {scopeIcons[index]}
                      </div>
                    </div>

                    {/* Main Title & Tagline */}
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-black tracking-tight leading-snug mb-1 ${
                          isSelected ? "text-white" : "text-zinc-950"
                        }`}
                      >
                        {scope.title}
                      </h3>
                      <p
                        className={`text-xs font-medium leading-relaxed ${
                          isSelected ? "text-zinc-300" : "text-zinc-600"
                        }`}
                      >
                        {scope.subtitle}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <ul
                      className={`space-y-1.5 pt-3 border-t text-xs ${
                        isSelected ? "border-zinc-800 text-zinc-300" : "border-zinc-100 text-zinc-600"
                      }`}
                    >
                      {scope.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isSelected ? "text-white" : "text-black"
                            }`}
                          />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Filter action prompt at bottom */}
                  <div
                    className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono font-bold ${
                      isSelected
                        ? "border-zinc-800 text-white"
                        : "border-zinc-100 text-zinc-500 group-hover:text-black"
                    }`}
                  >
                    <span>{isSelected ? "Filtro activo" : "Ver proyectos"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Subtitle & Filter Tabs for Projects */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                Casos Reales, Sitios Web & Software en Producción
              </h3>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Selecciona una categoría para explorar los desarrollos realizados por mí
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedFilter("Todos")}
              className="text-xs font-mono font-bold text-zinc-500 hover:text-black underline underline-offset-4 self-start sm:self-auto"
            >
              Mostrar todos ({PROJECTS.length})
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-full bg-zinc-100 border border-zinc-200">
              {filterTabs.map((tab) => {
                const isActive = selectedFilter === tab.filterKey;
                return (
                  <button
                    key={tab.filterKey}
                    type="button"
                    onClick={() => setSelectedFilter(tab.filterKey)}
                    className={`relative px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-white bg-black shadow-xs"
                        : "text-zinc-600 hover:text-black hover:bg-zinc-200/60"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className="ml-1.5 opacity-60 font-mono text-[10px]">({tab.count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all p-7 flex flex-col justify-between shadow-xs hover:shadow-md relative overflow-hidden"
              >
                <div>
                  {/* Top badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
                      {project.category}
                    </span>
                    {project.highlightBadge && (
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-black bg-zinc-100 border border-zinc-300 px-2.5 py-0.5 rounded-full">
                        {project.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="text-xl font-extrabold text-zinc-950 tracking-tight mb-2 group-hover:text-black transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono font-medium text-zinc-500 mb-3">{project.tagline}</p>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-zinc-100">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 font-normal">
                        <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom tech tags & Action link */}
                <div className="space-y-4 pt-3 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-bold text-zinc-600 bg-zinc-50 border border-zinc-200 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && project.liveUrl !== "#contacto" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs group"
                    >
                      <span>Visitar Sitio Oficial</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {project.liveUrl === "#contacto" && (
                    <a
                      href="#contacto"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <span>Consultar por esta Solución</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
