"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolio-data";

export default function ExperienceTimeline() {
  return (
    <section id="experiencia" className="py-24 md:py-32 border-t border-zinc-200 bg-zinc-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-black" />
            [ 03 // TRAYECTORIA LABORAL & EXPERIENCIA COMPROBABLE ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
            Experiencia en Logística, Operaciones & ERP
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
            Más de 5 años de desempeño en empresas de primer nivel liderando turnos, gestionando centros de acopio con
            SAP ECC, optimizando flotas de despacho y aplicando metodologías 5S e ingeniería de procesos.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-200 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp) => {
            const isCurrent = exp.current;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-2 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    isCurrent
                      ? "bg-black border-black ring-4 ring-zinc-200"
                      : "bg-white border-zinc-500 group-hover:border-black group-hover:bg-black"
                  }`}
                />

                <div className="rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all p-6 sm:p-8 space-y-5 shadow-xs hover:shadow-md">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="text-xs font-mono uppercase tracking-wider text-white bg-black px-2.5 py-0.5 rounded-full font-bold">
                            ACTIVO
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 tracking-tight">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-zinc-800 font-bold text-sm mt-1">
                        <Building2 className="w-4 h-4 text-zinc-500" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-zinc-500 shrink-0">
                      <div className="flex items-center gap-1.5 font-semibold text-zinc-700">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 pt-3 border-t border-zinc-100">
                    <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-500 font-bold block mb-2">
                      Responsabilidades & Hitos Operacionales:
                    </span>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 leading-normal font-normal">
                          <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
