"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2, ArrowUpRight, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Oportunidad Laboral / Contratación Inmediata",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage("¡Mensaje recibido con éxito! Te responderé a la brevedad.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Oportunidad Laboral / Contratación Inmediata",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Ocurrió un error al enviar el formulario.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Error de conexión. Puedes escribirme directamente a WhatsApp o correo.");
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 border-t border-zinc-200 bg-zinc-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-black" />
                [ 07 // CONTACTO DIRECTO & DISPONIBILIDAD ]
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
                Abierto a Nuevas Oportunidades Laborales
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                Disponible de forma inmediata para incorporarme a centros de distribución, bodegas, supervisión de turnos y operaciones logísticas, con el compromiso de aportar valor continuo y seguir expandiendo mi campo laboral.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3 font-mono">
              <motion.a
                whileHover={{ x: 4 }}
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all shadow-xs group"
              >
                <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block">
                    WhatsApp Directo (Respuesta Rápida)
                  </span>
                  <span className="text-sm font-bold text-zinc-950 group-hover:underline">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all shadow-xs group"
              >
                <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block">
                    Correo Electrónico
                  </span>
                  <span className="text-sm font-bold text-zinc-950 group-hover:underline">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all shadow-xs group"
              >
                <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block">
                    LinkedIn Oficial
                  </span>
                  <span className="text-sm font-bold text-zinc-950 group-hover:underline">
                    linkedin.com/in/matias-espinoza-logistica
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href="https://www.vision-code.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all shadow-xs group"
              >
                <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block">
                    Sitio Web Oficial & Soluciones
                  </span>
                  <span className="text-sm font-bold text-zinc-950 group-hover:underline">
                    www.vision-code.cl
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors" />
              </motion.a>
            </div>

            {/* Availability Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-300 hover:border-black transition-all space-y-3 font-mono text-xs shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-zinc-950">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="tracking-wide">ABIERTO A OPORTUNIDADES LABORALES</span>
                </div>
                <span className="text-[10px] uppercase font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Disponibilidad Inmediata
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                Con disposición total para integrarme a nuevos desafíos y seguir expandiendo mi campo laboral en operaciones, logística integral, supervisión de turnos y sistemas ERP (SAP ECC). Preparado para iniciar de inmediato en jornada completa o turnos rotativos en la Región de Valparaíso.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-bold text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                  Turnos Rotativos / Full-Time
                </span>
                <span className="text-[10px] font-bold text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                  Presencial & Terreno
                </span>
                <span className="text-[10px] font-bold text-zinc-700 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                  Región de Valparaíso
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-zinc-200 p-8 sm:p-10 shadow-xs relative">
            <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2">
              Enviar Mensaje Directo
            </h3>
            <p className="text-xs text-zinc-500 mb-6 font-mono">
              Los campos con (*) son obligatorios. Recibirás respuesta durante el mismo día hábil.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-zinc-700 font-bold uppercase tracking-wider block">
                    Nombre o Empresa *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Rodrigo Tapia / Ariztía"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 focus:bg-white focus:outline-none focus:border-black transition-all text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-zinc-700 font-bold uppercase tracking-wider block">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@empresa.cl"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 focus:bg-white focus:outline-none focus:border-black transition-all text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-zinc-700 font-bold uppercase tracking-wider block">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+56 9 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 focus:bg-white focus:outline-none focus:border-black transition-all text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-zinc-700 font-bold uppercase tracking-wider block">
                    Motivo de Contacto
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 focus:bg-white focus:outline-none focus:border-black transition-all text-xs"
                  >
                    <option value="Oportunidad Laboral / Contratación Inmediata">Oportunidad Laboral / Contratación Inmediata</option>
                    <option value="Jefatura de Turno / Operaciones">Jefatura de Turno / Operaciones Logísticas</option>
                    <option value="Gestión de Bodega / Inventarios ERP">Gestión de Bodega / Inventarios ERP</option>
                    <option value="Analista de Procesos / Mejora Continua">Analista de Procesos / Mejora Continua</option>
                    <option value="Proyectos Digitales / Software">Proyectos Digitales / Software</option>
                    <option value="Otro Motivo">Otro Motivo</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-zinc-700 font-bold uppercase tracking-wider block">
                  Mensaje o Propuesta *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalla el cargo, turno, proyecto o requerimiento..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-950 focus:bg-white focus:outline-none focus:border-black transition-all text-xs resize-none"
                />
              </div>

              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-full bg-black hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-xs shadow-md"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a Matías</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
