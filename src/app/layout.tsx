import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vision-code.cl"),
  title: {
    default: "Matías Espinoza | CV Profesional • Logística, Sistemas ERP & Ingeniería Industrial",
    template: "%s | Matías Espinoza",
  },
  description:
    "Currículum Vitae profesional de Matías Patricio Espinoza Guerrero para postulación a empleos en Logística, Operaciones, Jefatura de Turno y Sistemas ERP (SAP ECC en Ariztía, Softland, Iconstruye). Estudiante de 2° año de Ingeniería Industrial (AIEP) y Técnico en Logística (Mineduc). Disponibilidad Inmediata en Región de Valparaíso.",
  keywords: [
    "Matías Espinoza",
    "Matías Espinoza Guerrero",
    "CV Matías Espinoza",
    "Logística Chile",
    "Jefe de Turno Logística",
    "SAP ECC",
    "Sistemas ERP",
    "Control de Inventarios",
    "Ingeniería Industrial",
    "Disponibilidad Inmediata",
    "Valparaíso",
    "Vision Code",
    "Next.js Developer",
    "IA Generativa CENIA SOFOFA",
  ],
  authors: [{ name: "Matías Patricio Espinoza Guerrero", url: "https://www.vision-code.cl" }],
  creator: "Matías Espinoza Guerrero",
  publisher: "Matías Patricio Espinoza Guerrero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.vision-code.cl",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.vision-code.cl",
    title: "Matías Espinoza | CV Profesional • Logística, ERP & Ingeniería Industrial",
    description:
      "Currículum Vitae de Matías Espinoza Guerrero. Jefatura de operaciones, dominio de SAP ECC, cadena logística y soluciones digitales. Disponibilidad inmediata.",
    siteName: "Matías Espinoza - CV Profesional",
    images: [
      {
        url: "/images/yo.png",
        width: 1254,
        height: 1254,
        alt: "Matías Patricio Espinoza Guerrero - Profesional Logística y ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matías Espinoza | CV Profesional • Logística & ERP",
    description:
      "CV de Matías Espinoza. Experiencia en logística masiva, SAP ECC, Ingeniería Industrial y tecnología. Disponibilidad inmediata.",
    images: ["/images/yo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.vision-code.cl/#person",
        name: "Matías Patricio Espinoza Guerrero",
        jobTitle: "Especialista en Logística, Sistemas ERP & Ingeniería Industrial",
        worksFor: {
          "@type": "Organization",
          name: "Vision Code / Operaciones Logísticas",
          url: "https://www.vision-code.cl",
        },
        image: "https://www.vision-code.cl/images/yo.png",
        url: "https://www.vision-code.cl",
        email: "mpeg.logistica@gmail.com",
        telephone: "+56929645522",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Valparaíso",
          addressCountry: "CL",
        },
        sameAs: [
          "https://www.linkedin.com/in/matias-espinoza-logistica",
          "https://www.vision-code.cl",
        ],
        knowsAbout: [
          "Logística y Cadena de Suministro",
          "Sistemas ERP",
          "SAP ECC (Gestión de Stocks y Despacho)",
          "Jefatura de Turno",
          "Control de Inventarios 5S",
          "Ingeniería Industrial",
          "Softland ERP",
          "Iconstruye",
          "Desarrollo Web Next.js",
          "Inteligencia Artificial Generativa",
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Instituto Profesional AIEP",
          },
          {
            "@type": "EducationalOrganization",
            name: "Liceo Bicentenario José Francisco Vergara Etchevers",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.vision-code.cl/#website",
        url: "https://www.vision-code.cl",
        name: "Matías Espinoza - CV Profesional",
        description: "CV profesional y portafolio interactivo de Matías Espinoza",
        publisher: {
          "@id": "https://www.vision-code.cl/#person",
        },
        inLanguage: "es-CL",
      },
    ],
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-950 font-sans antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
