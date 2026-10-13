"use client";

import { FileText, Download, ExternalLink, Award, GraduationCap, CheckCircle2, ShieldCheck } from "lucide-react";
import { DOCUMENTS } from "@/data/portfolio-data";

export default function DocumentsSection() {
  return (
    <section id="documentos" className="py-24 md:py-32 border-t border-zinc-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-black" />
              [ 06 // DOCUMENTACIÓN OFICIAL & RESPALDOS ]
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight">
              Descarga de CV & Certificaciones
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Todos mis documentos profesionales en formato PDF verificable: Currículum Vitae oficial,
              Título Ministerial con firma electrónica, certificado de alumno regular en Ingeniería Industrial y ruta formativa de IA.
            </p>
          </div>

          <a
            href="/docs/CV_Matias_Espinoza.pdf"
            download="CV_Matias_Espinoza.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-all self-start md:self-auto shrink-0 shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Descargar CV Completo</span>
          </a>
        </div>

        {/* Grid of Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {DOCUMENTS.map((doc) => {
            const getIcon = () => {
              switch (doc.category) {
                case "Certificación":
                  return <Award className="w-5 h-5 text-black" />;
                case "Título":
                case "Académico":
                  return <GraduationCap className="w-5 h-5 text-black" />;
                default:
                  return <FileText className="w-5 h-5 text-black" />;
              }
            };

            return (
              <article
                key={doc.id}
                className="group relative rounded-2xl bg-white border border-zinc-200 hover:border-black transition-all duration-300 p-7 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 group-hover:bg-black group-hover:text-white transition-colors">
                        {getIcon()}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-500 font-bold block">
                          {doc.institution}
                        </span>
                        <span className="text-xs font-bold text-zinc-900">
                          {doc.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono bg-zinc-100 border border-zinc-200 text-zinc-700 px-2.5 py-1 rounded-full font-bold">
                      {doc.size}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-zinc-950 tracking-tight mb-1 group-hover:text-black transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-zinc-500 mb-3">{doc.subtitle}</p>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-normal">
                    {doc.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 pt-3 border-t border-zinc-100">
                    {doc.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-700 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {doc.date}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-200 hover:border-black text-zinc-700 hover:text-black text-xs font-bold font-mono transition-colors"
                      title="Abrir en pestaña nueva"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Visualizar</span>
                    </a>

                    <a
                      href={doc.fileUrl}
                      download={doc.fileName}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
