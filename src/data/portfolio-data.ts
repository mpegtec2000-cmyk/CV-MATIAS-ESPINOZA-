export interface DocumentItem {
  id: string;
  title: string;
  subtitle: string;
  category: "CV" | "Certificación" | "Título" | "Académico";
  fileName: string;
  fileUrl: string;
  size: string;
  date: string;
  institution: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: "Operaciones & Logística" | "Gestión de Bodega & ERP" | "Ingeniería & Software";
  description: string;
  achievements: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Web & E-Commerce" | "Mobile Apps" | "Formalización" | "Automatización" | "Sistemas ERP & Gestión";
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlightBadge?: string;
}

export interface ApplicationScopeItem {
  id: string;
  num: string;
  category: "Web & E-Commerce" | "Mobile Apps" | "Formalización" | "Automatización";
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
}

export interface SkillTabItem {
  id: string;
  label: string;
  title: string;
  description: string;
  badge: string;
  skills: {
    name: string;
    level: string;
    description: string;
    highlight?: boolean;
  }[];
  capabilities: string[];
}

export const PERSONAL_INFO = {
  name: "Matías Patricio Espinoza Guerrero",
  shortName: "Matías Espinoza",
  brand: "MATÍAS ESPINOZA",
  title: "Logística • Operaciones • Sistemas ERP • Estudiante de Ingeniería Industrial",
  secondaryTitle: "Jefe de Turno Logística • Operación SAP ECC • Estudiante 2° Año Ing. Industrial (Asincrónico AIEP)",
  availabilityStatus: "Disponibilidad Inmediata",
  availabilityType: "Disponibilidad Inmediata • Jornada Completa / Turnos Rotativos / Presencial & Híbrido",
  careerDetail: "Estudiante de 2° año de Ingeniería Industrial (Online Asincrónico, AIEP)",
  headline: "Liderazgo Operacional en Terreno, Control Riguroso de Existencias y Criterio de Ingeniería.",
  aboutDetailed:
    "Soy Matías Espinoza Guerrero, profesional de Operaciones y Logística con más de 5 años de experiencia en centros de distribución, bodegas, abastecimiento, adquisiciones, inventarios, despacho y supervisión de equipos en terreno. Destaco por mi desempeño como Jefe de Turno en Ariztía (Concón), operando diariamente en SAP ECC, coordinando rutas y asegurando la continuidad del flujo operacional. Actualmente curso el 2° año de Ingeniería Industrial en Instituto Profesional AIEP (modalidad online asincrónica) y cuento con el título de Técnico de Nivel Medio en Administración mención Logística (Mineduc). Además, desarrollo proyectos tecnológicos de forma autónoma para sistematizar y eficientar procesos. Cuento con disponibilidad inmediata para incorporarme a trabajar en nuevos desafíos laborales.",
  personalPitch:
    "Mi enfoque combina disciplina en terreno, liderazgo directo y criterio analítico. En cada centro y turno que he supervisado, garantizo el cumplimiento de los indicadores de servicio, la seguridad del personal y la exactitud documental y de inventario.",
  location: "Región de Valparaíso, Chile (Disponible Presencial, Turnos & Remoto)",
  email: "mpeg.logistica@gmail.com",
  phone: "+56 9 2964 5522",
  phoneRaw: "56929645522",
  whatsappUrl: "https://wa.me/56929645522?text=Hola%20Mat%C3%ADas,%20estoy%20revisando%20tu%20CV%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad%20laboral%20inmediata.",
  linkedinUrl: "https://www.linkedin.com/in/matias-espinoza-logistica",
  githubUrl: "https://github.com",
  agencyUrl: "https://www.vision-code.cl",
  metrics: [
    { label: "Disponibilidad", value: "Inmediata", sublabel: "Jornada completa o turnos rotativos" },
    { label: "Experiencia en Logística", value: "+5 Años", sublabel: "Jefatura de turnos, bodegas y despacho" },
    { label: "Sistemas ERP", value: "SAP ECC", sublabel: "Operación diaria avanzada (Ariztía)" },
    { label: "Ingeniería Industrial", value: "2° Año", sublabel: "AIEP (Online Asincrónico, Regular)" },
  ],
};

export const SKILL_TABS: SkillTabItem[] = [
  {
    id: "logistica-erp",
    label: "/logística & erp",
    title: "Gestión de Cadena Logística & Sistemas ERP",
    description:
      "Núcleo operacional especializado: dominio práctico en plantas de distribución y bodegas masivas, operación diaria de SAP ECC, Softland e Iconstruye, control estricto de inventarios y cumplimiento normativo tributario.",
    badge: "SAP ECC • Softland • Iconstruye • WMS",
    skills: [
      {
        name: "SAP ECC (Gestión de Mercancías, Stocks y Despachos)",
        level: "Avanzado (Operativo)",
        description: "Recepción, traspasos entre centros, verificación de partidas, despacho continuo y cuadratura de existencias en Ariztía.",
        highlight: true,
      },
      {
        name: "Control de Inventarios & Auditorías Cíclicas",
        level: "Avanzado",
        description: "Exactitud de existencias 99%+, clasificación ABC, método FIFO y planes de conteo sistemático sin paralizar la operación.",
        highlight: true,
      },
      {
        name: "Despacho, Cubicación & Coordinación de Flotas",
        level: "Avanzado",
        description: "Programación de rutas de transporte terrestre, optimización de volumen de carga y cumplimiento estricto de ventanas de entrega (OTIF).",
        highlight: true,
      },
      {
        name: "Softland ERP & Iconstruye",
        level: "Intermedio-Avanzado",
        description: "Manejo de órdenes de compra, validación de recepciones, control de proveedores y costeo de insumos.",
      },
      {
        name: "Legislación Tributaria & Guías de Despacho SII",
        level: "Avanzado",
        description: "Emisión y cuadratura de guías electrónicas, facturación de traslado, control de manifiestos y cumplimiento legal de carga.",
        highlight: true,
      },
      {
        name: "Metodología 5S & Estandarización de Bodega",
        level: "Avanzado",
        description: "Demarcación de zonas de acopio, ergonomía, rotulación y mantenimiento del orden físico para reducción de mermas y accidentes.",
        highlight: true,
      },
    ],
    capabilities: [
      "Liderazgo de turnos rotativos en centros de distribución",
      "Cuadratura física vs. sistémica con cero discrepancias críticas",
      "Coordinación de despacho de camiones de alto tonelaje",
      "Control de trazabilidad de productos perecibles e industriales",
    ],
  },
  {
    id: "ingenieria-gestion",
    label: "/ingeniería & gestión",
    title: "Ingeniería Industrial, Métricas & Mejora Continua",
    description:
      "Aplicación del criterio de ingeniería a los flujos operativos: estudio de métodos y tiempos, diseño de dashboards ejecutivos, reducción de mermas y optimización de costos en toda la cadena de valor.",
    badge: "Ing. Industrial AIEP • Excel Avanzado • Power BI",
    skills: [
      {
        name: "Excel Avanzado & Modelado de Datos",
        level: "Experto",
        description: "Tablas dinámicas avanzadas, funciones lógicas anidadas, macros VBA y automatización de reportes diarios de productividad.",
        highlight: true,
      },
      {
        name: "Power BI & Análisis de KPIs",
        level: "Avanzado",
        description: "Construcción de tableros de control para monitoreo de rotación, tiempos de ciclo, cumplimiento de entregas y costos.",
        highlight: true,
      },
      {
        name: "Estandarización de Procesos (SOP)",
        level: "Avanzado",
        description: "Levantamiento de diagramas de flujo y redacción de procedimientos operativos estandarizados para capacitación de personal.",
      },
      {
        name: "Control de Mermas & Pérdidas Operacionales",
        level: "Avanzado",
        description: "Identificación de causas raíz (Ishikawa, 5 Porqués), planes de acción inmediatos y minimización de daño de materiales.",
        highlight: true,
      },
      {
        name: "Abastecimiento Estratégico & Compras",
        level: "Avanzado",
        description: "Cálculo de stock de seguridad, punto de reorden, negociación con proveedores y reducción de costos unitarios de insumos.",
      },
    ],
    capabilities: [
      "Diseño de tableros de productividad para gerencia de operaciones",
      "Implementación de rutinas de mejora continua y control visual",
      "Auditorías operacionales de calidad y cumplimiento",
      "Modelado de capacidades de almacenamiento y cuellos de botella",
    ],
  },
  {
    id: "liderazgo-humano",
    label: "/liderazgo & persona",
    title: "Competencias Humanas & Liderazgo en Terreno",
    description:
      "El valor humano que marca la diferencia: capacidad demostrada para motivar y guiar equipos de operarios bajo turnos continuos, empatía, resolución de contingencias y ética profesional intachable.",
    badge: "Liderazgo Directo • Resolución de Conflictos • Resiliencia",
    skills: [
      {
        name: "Supervisión Directa de Turnos de Alta Exigencia",
        level: "Demostrado (+5 Años)",
        description: "Dirección empática y firme de cuadrillas de operarios en jornadas rotativas, manteniendo el clima laboral y la seguridad.",
        highlight: true,
      },
      {
        name: "Resolución Rápida de Contingencias",
        level: "Avanzado",
        description: "Toma de decisiones en tiempo real ante quiebres de stock, retrasos de transportistas o fallas imprevistas de despacho.",
        highlight: true,
      },
      {
        name: "Comunicación Asertiva & Negociación",
        level: "Avanzado",
        description: "Coordinación fluida entre choferes, supervisores de planta, clientes corporativos y gerencias de área.",
      },
      {
        name: "Cultura de Seguridad Operacional",
        level: "Avanzado",
        description: "Promoción activa del autocuidado, uso riguroso de EPP y cumplimiento estricto de normativas de prevención de riesgos.",
        highlight: true,
      },
      {
        name: "Compromiso & Adaptabilidad Inmediata",
        level: "Sobresaliente",
        description: "Disponibilidad completa para incorporarse, aprender rápidamente particularidades de la empresa y aportar valor desde el día uno.",
        highlight: true,
      },
    ],
    capabilities: [
      "Conducción y motivación de equipos multidisciplinarios",
      "Gestión de relaciones laborales transparentes y de respeto",
      "Capacidad de trabajo bajo presión sin perder la precisión",
      "Disponibilidad horaria y adaptabilidad a turnos rotativos",
    ],
  },
  {
    id: "ia-automatizacion",
    label: "/ia & automatización",
    title: "Inteligencia Artificial Aplicada a Negocios & Logística",
    description:
      "Certificación formal por CENIA y SOFOFA Capital Humano con 97% de aprobación y promedio sobresaliente 6.8 / 7.0. Aplicación práctica de modelos de lenguaje para eficientar operaciones.",
    badge: "CENIA / SOFOFA Certificado (Nota 6.8/7.0)",
    skills: [
      {
        name: "Procesos Logísticos Asistidos por IA",
        level: "Certificado (Nota 7.0 - 100%)",
        description: "Optimización de despachos, clasificación automática de incidencias y previsión de demanda asistida por modelos.",
        highlight: true,
      },
      {
        name: "Prompt Engineering Estructurado",
        level: "Certificado (Nota 7.0 - 100%)",
        description: "Diseño de directivas avanzadas, extracción de datos estructurados (JSON) y minimización de alucinaciones.",
        highlight: true,
      },
      {
        name: "Automatización de Tareas Comerciales & Soporte",
        level: "Avanzado",
        description: "Creación de asistentes para filtrado de prospectos, respuestas de cotizaciones y canalización a WhatsApp.",
        highlight: true,
      },
      {
        name: "Uso Ético & Responsable de la IA",
        level: "Certificado (Nota 7.0 - 100%)",
        description: "Gobernanza de datos empresariales, privacidad y adopción tecnológica segura en equipos de trabajo.",
      },
    ],
    capabilities: [
      "Transformación digital práctica para áreas logísticas y comerciales",
      "Generación de resúmenes ejecutivos automatizados",
      "Reducción de tiempos muertos en atención a clientes",
      "Diseño de flujos inteligentes de comunicación pyme",
    ],
  },
  {
    id: "dev-software",
    label: "/tecnología & software",
    title: "Desarrollo de Soluciones Digitales & Visión Code",
    description:
      "La faceta constructora: desarrollo end-to-end de aplicaciones web de alto rendimiento, sistemas ERP ligeros y dashboards interactivos utilizando el stack moderno de Next.js, Supabase y Vercel.",
    badge: "Next.js 16 • React 19 • Supabase • TypeScript",
    skills: [
      {
        name: "Sistemas Web de Control de Existencias (ERP)",
        level: "Avanzado",
        description: "Creación de herramientas web para reemplazar planillas desactualizadas con bases de datos PostgreSQL en Supabase.",
        highlight: true,
      },
      {
        name: "Next.js 16 & React 19",
        level: "Avanzado",
        description: "Arquitectura moderna con App Router, Server Components y renderizado ultrarrápido.",
        highlight: true,
      },
      {
        name: "Tailwind CSS v4 & Interfaces B&W",
        level: "Avanzado",
        description: "Diseño utilitario minimalista, contraste impecable, grillas tipográficas y experiencia fluida.",
        highlight: true,
      },
      {
        name: "Supabase & PostgreSQL",
        level: "Avanzado",
        description: "Modelado relacional, autenticación segura de usuarios y políticas RLS para resguardo de datos.",
      },
      {
        name: "Vercel & Despliegue CI/CD",
        level: "Avanzado",
        description: "Automatización de despliegues en la nube, dominios personalizados y alta disponibilidad.",
      },
    ],
    capabilities: [
      "Construcción autónoma de plataformas digitales de punta a punta",
      "Integración de sistemas web con procesos operacionales reales",
      "Digitalización de inventarios con acceso desde computadores y móviles",
      "Optimización de rendimiento 100/100 en Core Web Vitals",
    ],
  },
];

export const DOCUMENTS: DocumentItem[] = [
  {
    id: "cv-matias",
    title: "Currículum Vitae Completo 2026",
    subtitle: "Perfil Profesional, Trayectoria Operacional, ERP & Logística",
    category: "CV",
    fileName: "CV_Matias_Espinoza.pdf",
    fileUrl: "/docs/CV_Matias_Espinoza.pdf",
    size: "151 KB",
    date: "Actualizado 2026",
    institution: "Matías Espinoza Guerrero",
    description:
      "Documento curricular oficial con detalle de jefaturas en Ariztía y Ricardo Rodríguez, gestión en Parque del Mar, dominio avanzado de SAP ECC, Softland y formación universitaria.",
    highlights: ["Disponibilidad Inmediata", "Experiencia comprobable de 5+ años en logística", "Operación diaria SAP ECC"],
  },
  {
    id: "cert-ia",
    title: "Certificación Ruta IA Generativa para Mipymes",
    subtitle: "7 Cursos Especializados (14 Horas Cronológicas)",
    category: "Certificación",
    fileName: "Certificados_IA_Matias_Espinoza.pdf",
    fileUrl: "/docs/Certificados_IA_Matias_Espinoza.pdf",
    size: "439 KB",
    date: "Noviembre 2025",
    institution: "CENIA & SOFOFA Capital Humano",
    description:
      "Ruta integral aprobada con 97% y calificación sobresaliente 6.8 de 7.0. Incluye prompts avanzados, ética, procesos logísticos con IA y expansión de negocios.",
    highlights: [
      "97% aprobación general (Nota 6.8 / 7.0)",
      "Procesos Logísticos con IA (Nota 7.0 - 100%)",
      "Prompt Engineering (Nota 7.0 - 100%)",
      "Uso Ético y Responsable (Nota 7.0 - 100%)",
    ],
  },
  {
    id: "titulo-tecnico",
    title: "Título Técnico de Nivel Medio en Administración",
    subtitle: "Mención Logística (Registro Mineduc N° 26178)",
    category: "Título",
    fileName: "Titulo_Tecnico_Profesional_Mineduc.pdf",
    fileUrl: "/docs/Titulo_Tecnico_Profesional_Mineduc.pdf",
    size: "41 KB",
    date: "Registro SEREMI Valparaíso",
    institution: "Liceo Bicentenario José F. Vergara Etchevers",
    description:
      "Acreditación ministerial oficial con firma electrónica avanzada conforme a la Ley N° 19.799. Validable en Ayuda Mineduc con código de verificación.",
    highlights: ["Firma electrónica Ley 19.799", "Registro SEREMI N° 26178", "Competencias formales en logística y administración"],
  },
  {
    id: "cert-aiep",
    title: "Certificado de Alumno Regular en Ingeniería Industrial",
    subtitle: "Matrícula Vigente Periodos 2026-1 y 2026-2",
    category: "Académico",
    fileName: "Certificado_Alumno_Regular_AIEP.pdf",
    fileUrl: "/docs/Certificado_Alumno_Regular_AIEP.pdf",
    size: "99 KB",
    date: "AIEP Santiago / Sede Valparaíso",
    institution: "Instituto Profesional AIEP",
    description:
      "Constancia de estudiante regular activo en la carrera de Ingeniería Industrial. Certificado oficial con código QR y validación electrónica directa N° 371184.",
    highlights: ["Ingeniería Industrial en curso activo", "Código QR verificable", "Continuidad de formación superior"],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ariztia",
    role: "Jefe de Turno - Despacho y Logística",
    company: "Ariztía",
    location: "Concón, Región de Valparaíso",
    period: "2025 - Mayo 2026",
    type: "Operaciones & Logística",
    description:
      "Supervisión y liderazgo directo de equipos de operaciones logísticas en turnos rotativos para uno de los mayores distribuidores de consumo masivo y agroindustrial del país, asegurando el flujo continuo de despacho sin quiebres de servicio.",
    achievements: [
      "Operación avanzada y diaria en SAP ECC: registro de movimientos de mercancías, transferencias entre centros logísticos, recepción de productos y conciliación física-sistémica de existencias.",
      "Coordinación, cubicación y despacho de flotas de transporte terrestre, programando rutas críticas y garantizando el cumplimiento de horarios pactados con clientes (OTIF).",
      "Control, emisión y validación de guías de despacho electrónicas conforme a la normativa tributaria del SII y fiscalización de documentación legal de carga.",
      "Diseño y seguimiento riguroso de tableros de control en Excel Avanzado para evaluar productividad por turno, tiempos de ciclo de carga y eliminación de mermas.",
      "Liderazgo en terreno enfocado en la seguridad laboral (5S, uso de EPP) y mantenimiento de un clima de equipo motivado y disciplinado.",
    ],
    skills: ["SAP ECC", "Liderazgo de Equipos", "Despacho & Rutas", "Control de Mermas", "Excel Avanzado", "Metodología 5S", "Guías SII"],
  },
  {
    id: "parque-del-mar",
    role: "Asistente de Logística y Adquisiciones",
    company: "Parque del Mar",
    location: "Concón, Región de Valparaíso",
    period: "2023 - 2024",
    type: "Operaciones & Logística",
    description:
      "Gestión de la cadena de compras, abastecimiento estratégico institucional y control de inventarios críticos para garantizar la continuidad operativa ininterrumpida de las instalaciones.",
    achievements: [
      "Gestión integral del ciclo de adquisiciones: levantamiento de requerimientos de áreas internas, cotización comparativa y emisión formal de órdenes de compra.",
      "Negociación directa con proveedores estratégicos para obtener condiciones comerciales favorables, descuentos por volumen y aseguramiento de stock mínimo de seguridad.",
      "Recepción física de insumos, catalogación de inventario y trazabilidad continua mediante sistemas ERP corporativos.",
      "Realización de conteos cíclicos de bodega para mantener la exactitud de inventario sobre el 98% respecto a los registros contables.",
    ],
    skills: ["Compras Estratégicas", "Negociación con Proveedores", "Control de Inventarios", "Sistemas ERP", "Trazabilidad"],
  },
  {
    id: "ricardo-rodriguez",
    role: "Jefe de Bodega",
    company: "Ingeniería y Construcción Ricardo Rodríguez y Cía. Ltda.",
    location: "Región Metropolitana",
    period: "2022 - 2023",
    type: "Gestión de Bodega & ERP",
    description:
      "Administración integral de centros de acopio, almacenamiento de maquinaria pesada, herramientas de alto valor y suministros técnicos para proyectos de infraestructura mayor.",
    achievements: [
      "Implementación de auditorías cíclicas e inventarios físicos rigurosos logrando una exactitud superior al 99% entre existencias reales y registros del sistema.",
      "Reorganización física completa de la bodega mediante Metodología 5S y clasificación ABC por rotación de materiales, reduciendo los tiempos de entrega en un 35%.",
      "Control exhaustivo en plataforma Iconstruye: recepción de materiales, guías de despacho, órdenes de compra y control de hojas de vida de equipos.",
      "Supervisión y asignación de tareas a personal de bodega, velando por la seguridad industrial y el cuidado de los activos de la constructora.",
    ],
    skills: ["Metodología 5S", "Auditorías de Inventario", "Iconstruye", "Clasificación ABC", "Liderazgo de Personal", "Logística de Obras"],
  },
  {
    id: "belval",
    role: "Encargado de Operaciones",
    company: "BELVAL",
    location: "Viña del Mar, Región de Valparaíso",
    period: "2021 - 2022",
    type: "Operaciones & Logística",
    description:
      "Coordinación y supervisión operativa del taller de producción y ejecución de proyectos comerciales, asegurando el cumplimiento de plazos y estándares de calidad.",
    achievements: [
      "Planificación de cronogramas de entrega y asignación de recursos operativos para cumplir los compromisos adquiridos con clientes comerciales.",
      "Control estricto del consumo de materias primas e insumos, reduciendo el desperdicio operativo y mejorando los márgenes del proyecto.",
      "Generación de reportes semanales de rendimiento operacional y colaboración directa con el área comercial en la captación y fidelización de clientes.",
    ],
    skills: ["Planificación Operativa", "Control de Calidad", "Gestión de Materiales", "Excel", "Atención a Clientes"],
  },
  {
    id: "junji",
    role: "Bodeguero (Práctica Profesional)",
    company: "JUNJI",
    location: "Concón, Región de Valparaíso",
    period: "2019 - 2020",
    type: "Gestión de Bodega & ERP",
    description:
      "Recepción, almacenamiento, clasificación y despacho de insumos institucionales y materiales educativos con rigurosidad documental y procedimental.",
    achievements: [
      "Aprobación de la práctica profesional con calificación sobresaliente y mención de honor por orden, compromiso y disciplina en el manejo documental.",
      "Ejecución de conteos de inventario, archivo de guías de despacho y apoyo en la distribución de materiales hacia establecimientos dependientes.",
    ],
    skills: ["Almacenamiento", "Despacho", "Administración de Bodega", "Responsabilidad Institucional"],
  },
  {
    id: "proyectos-independientes",
    role: "Desarrollo de Software & Proyectos Autónomos",
    company: "Proyectos Independientes & Soluciones Web",
    location: "Región de Valparaíso / Modalidad Remota",
    period: "2026 - Actualidad",
    current: true,
    type: "Ingeniería & Software",
    description:
      "De forma independiente y autodidacta aplico mi criterio de ingeniería y logística a la programación de herramientas digitales: diseño de sistemas web de inventarios para reemplazo de planillas manuales, tiendas e-commerce con logística integrada y automatizaciones con IA.",
    achievements: [
      "Diseño y puesta en marcha de más de 6 sitios web reales para comercios, integrando catálogos y pasarelas de pago.",
      "Desarrollo de un sistema ERP ligero en Next.js y Supabase para solucionar el desorden de planillas manuales en inventarios de bodegas.",
      "Acreditación de la Ruta de IA Generativa con nota 6.8/7.0 (CENIA/SOFOFA) e implementación de asistentes para optimización de procesos.",
      "Manejo autónomo de todo el ciclo de entrega: diseño, código, base de datos relacional PostgreSQL y despliegue continuo en la nube.",
    ],
    skills: ["Sistemas ERP Web", "Next.js 16", "Supabase", "TypeScript", "IA Generativa", "Tailwind CSS"],
  },
];

export const APPLICATION_SCOPES: ApplicationScopeItem[] = [
  {
    id: "scope-web",
    num: "01",
    category: "Web & E-Commerce",
    title: "Desarrollo Web & SEO",
    subtitle: "Landing Pages y Tiendas de alta conversión.",
    description:
      "Diseño y desarrollo integral de plataformas web y tiendas online con arquitectura moderna, carga ultrarrápida, posicionamiento orgánico en Google (SEO) y pasarelas de pago para maximizar resultados.",
    features: [
      "Landing pages comerciales y corporativas de alta conversión",
      "Tiendas online completas con catálogo dinámico y checkout",
      "Integración de pasarelas de pago y logística de despachos",
      "Optimización 100/100 en SEO y Core Web Vitals",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "SEO", "E-Commerce"],
  },
  {
    id: "scope-mobile",
    num: "02",
    category: "Mobile Apps",
    title: "Apps iOS & Android",
    subtitle: "Publicación oficial en App Store y Google Play.",
    description:
      "Desarrollo de aplicaciones móviles multiplataforma para control de procesos, ventas y clientes, gestionando todo el ciclo de entrega hasta su aprobación oficial en las tiendas de Apple y Google.",
    features: [
      "Desarrollo multiplataforma para dispositivos iOS y Android",
      "Publicación oficial y gestión de certificados en tiendas",
      "Notificaciones push y sincronización de datos en tiempo real",
      "Interfaces nativas fluidas adaptadas a terreno y oficina",
    ],
    tags: ["React Native", "Expo", "App Store", "Google Play", "APIs"],
  },
  {
    id: "scope-formalizacion",
    num: "03",
    category: "Formalización",
    title: "Tu Empresa en 1 Día",
    subtitle: "Constitución, SII y facturación para operar legalmente.",
    description:
      "Acompañamiento técnico y gestión integral para la formalización de nuevos negocios: redacción de estatutos societarios, inicio de actividades ante el SII y habilitación para emisión de documentos tributarios.",
    features: [
      "Constitución de sociedades (SpA, Ltda., EIRL) en Tu Empresa en 1 Día",
      "Obtención de RUT de empresa e inicio formal de actividades en SII",
      "Acreditación de actividades, domicilio y verificación tributaria",
      "Habilitación de factura electrónica y guías de despacho",
    ],
    tags: ["Tu Empresa en 1 Día", "SII Chile", "Factura Electrónica", "SpA / Ltda."],
  },
  {
    id: "scope-automatizacion",
    num: "04",
    category: "Automatización",
    title: "IA & Agentes WhatsApp",
    subtitle: "Atención y cotización inteligente 24/7 en WhatsApp.",
    description:
      "Implementación de asistentes conversacionales con Inteligencia Artificial conectados a WhatsApp Business, capaces de atender consultas, cotizar productos del catálogo y agendar requerimientos 24/7 sin interrupciones.",
    features: [
      "Atención automática ininterrumpida 24/7 con contexto real del negocio",
      "Cotizaciones inmediatas basadas en catálogo y políticas comerciales",
      "Acreditación oficial CENIA & SOFOFA en IA Generativa (Nota 6.8 / 7.0)",
      "Derivación fluida a canales humanos ante cierres de venta",
    ],
    tags: ["WhatsApp API", "IA Generativa", "CENIA Certificado", "Automatización"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "glowyskin",
    title: "GLOWYSKIN — Dermocosmética Coreana",
    tagline: "E-Commerce de cosmética importada desde Seúl con despacho a todo Chile",
    category: "Web & E-Commerce",
    description:
      "Plataforma de comercio electrónico diseñada y desarrollada para marca de dermocosmética coreana. Incluye catálogo interactivo por tipo de piel, pasarela de pago segura y logística integrada para despachos nacionales.",
    features: [
      "Catálogo dinámico con filtrado por rutinas de skincare y tipos de piel",
      "Pasarela de pago electrónico integrada y cálculo de envíos a todo Chile",
      "Experiencia visual minimalista de alta gama y diseño responsivo",
      "Optimización de velocidad y tiempos de carga instantáneos",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "E-Commerce", "Logística Nacional"],
    liveUrl: "https://glowyskin.cl/",
    highlightBadge: "Cliente en Producción",
  },
  {
    id: "spm-store",
    title: "SPM Store — Gorras Streetwear Chile",
    tagline: "Tienda online oficial con drops exclusivos y bordados 3D",
    category: "Web & E-Commerce",
    description:
      "Tienda oficial de streetwear en Chile especializada en snapbacks, truckers y jockeys exclusivos. Desarrollada para soportar lanzamientos limitados y alta afluencia de pedidos simultáneos.",
    features: [
      "Sistema de gestión de inventario para drops con unidades limitadas",
      "Proceso de checkout simplificado con integración de pago nacional",
      "Galería de producto de alta resolución con vista de detalles y bordados",
      "Trazabilidad de pedidos y confirmación automatizada",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Pasarela de Pago", "Stock Management"],
    liveUrl: "https://www.spm-store.cl/",
    highlightBadge: "Cliente en Producción",
  },
  {
    id: "amora-jewelry",
    title: "Amora Jewelry — Joyería Premium",
    tagline: "Colección exclusiva de joyería artesanal con diseño atemporal",
    category: "Web & E-Commerce",
    description:
      "E-Commerce de lujo para catálogo de anillos, cadenas, pulseras y aros en Chile. Enfoque editorial sobrio, fotografía de alta definición y experiencia de compra refinada.",
    features: [
      "Arquitectura visual limpia con tipografía editorial de alto impacto",
      "Navegación fluida por colecciones, metales y ocasiones de regalo",
      "Flujo de compra protegido con certificación SSL y pasarela bancaria",
      "Diseño 100% adaptable a teléfonos móviles y tablets",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "E-Commerce", "UI/UX Editorial"],
    liveUrl: "https://amorajewelry.cl/",
    highlightBadge: "Cliente en Producción",
  },
  {
    id: "nova-performance",
    title: "NOVA Performance® — Vanguardia Biotecnológica",
    tagline: "Plataforma digital para línea exclusiva de péptidos y rendimiento",
    category: "Web & E-Commerce",
    description:
      "Sitio web para productos de biotecnología y péptidos de alta pureza. Cuenta con catálogo técnico especializado, protocolos de envío discreto y trazabilidad completa.",
    features: [
      "Presentación técnica de especificaciones de pureza y calidad",
      "Mecanismo de pedidos discretos y seguros con cobertura nacional",
      "Estructura responsiva con carga ultrarrápida",
      "Canal directo de asesoría y resolución de dudas técnicas",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Trazabilidad", "Envíos Seguros"],
    liveUrl: "https://www.novaperformance.cl/",
    highlightBadge: "Cliente en Producción",
  },
  {
    id: "quincho-tabolango",
    title: "Quincho Tabolango / Limache — Eventos Privados",
    tagline: "Sitio web de arriendo para celebraciones, piscina y áreas verdes",
    category: "Web & E-Commerce",
    description:
      "Plataforma comercial y de reservas para arriendo de quincho exclusivo en Limache. Equipada con visor de instalaciones (piscina, tinaja, quincho techado) y cotización rápida.",
    features: [
      "Galería fotográfica inmersiva de instalaciones y comodidades",
      "Calendario informativo de fechas disponibles y tarifas de arriendo",
      "Botón directo de cotización y cierre de reservas vía WhatsApp",
      "Optimización local SEO para captación en la Región de Valparaíso",
    ],
    techStack: ["Next.js", "Tailwind CSS", "WhatsApp API", "SEO Local"],
    liveUrl: "https://www.quinchotabolango.cl/",
    highlightBadge: "Cliente en Producción",
  },
  {
    id: "peritum",
    title: "PERITUM — Estudio Jurídico & Consultoría Tributaria",
    tagline: "Defensa corporativa y tributaria en Las Condes, Santiago",
    category: "Web & E-Commerce",
    description:
      "Sitio web corporativo para firma de abogados y peritos tributarios en Santiago. Enfoque institucional sobrio para atención de citaciones del SII y representación judicial.",
    features: [
      "Presentación de áreas de práctica: defensa tributaria, peritajes y asesoría",
      "Formulario seguro para recepción de antecedentes y consultas de clientes",
      "Diseño corporativo en blanco y negro con credibilidad institucional",
      "Posicionamiento SEO para empresas y contribuyentes fiscalizados",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Corporativo"],
    liveUrl: "https://www.peritum.cl/",
    highlightBadge: "Cliente en Producción",
  },
  {
    id: "erp-inventory-suite",
    title: "Sistema ERP Ligero & Control de Inventarios Pyme",
    tagline: "Software operacional para existencias, bodegas y trazabilidad",
    category: "Sistemas ERP & Gestión",
    description:
      "Solución web desarrollada con criterio logístico e industrial para reemplazar planillas manuales en bodegas. Permite registrar entradas, salidas, transferencias y alertas de stock en tiempo real.",
    features: [
      "Dashboard interactivo de existencias, rotación y alertas de reposición",
      "Gestión de múltiples bodegas, familias de productos y números de lote",
      "Base de datos relacional PostgreSQL modelada en Supabase",
      "Reportes ejecutivos de inventarios y mermas para jefatura de operaciones",
    ],
    techStack: ["Next.js 16", "Supabase", "PostgreSQL", "Tailwind CSS", "Lucide"],
    liveUrl: "#contacto",
    repoUrl: "https://github.com",
    highlightBadge: "Criterio Logístico & ERP",
  },
  {
    id: "mobile-apps-showcase",
    title: "Aplicaciones Móviles iOS & Android",
    tagline: "Publicación oficial en App Store y Google Play con experiencia nativa",
    category: "Mobile Apps",
    description:
      "Diseño y desarrollo de apps móviles para control operacional, inventarios o venta directa, gestionando todo el flujo técnico hasta su publicación oficial en las tiendas de Apple y Google.",
    features: [
      "Publicación completa en Apple App Store y Google Play",
      "Sincronización de base de datos en tiempo real y modo offline",
      "Notificaciones automáticas y alertas operacionales",
      "Interfaces táctiles optimizadas para uso ágil en terreno",
    ],
    techStack: ["React Native", "Expo", "App Store", "Google Play", "Supabase"],
    liveUrl: "#contacto",
    highlightBadge: "02 // Mobile Apps",
  },
  {
    id: "formalizacion-sii-showcase",
    title: "Formalización Empresarial & Facturación SII",
    tagline: "Constitución en Tu Empresa en 1 Día, RUT y facturación para operar legalmente",
    category: "Formalización",
    description:
      "Estructuración societaria y tributaria para nuevos emprendimientos: redacción de estatutos (SpA o Ltda.), obtención de RUT, inicio de actividades en el SII y configuración de facturación electrónica.",
    features: [
      "Constitución formal en Tu Empresa en 1 Día",
      "Inicio de actividades y acreditación ante el SII",
      "Habilitación de certificado digital y emisión de facturas",
      "Asesoría para cuenta corriente de empresa y cumplimiento legal",
    ],
    techStack: ["Tu Empresa en 1 Día", "SII Chile", "Factura Electrónica", "Sociedades SpA"],
    liveUrl: "#contacto",
    highlightBadge: "03 // Formalización",
  },
  {
    id: "whatsapp-ia-agent-showcase",
    title: "Agentes de Inteligencia Artificial para WhatsApp",
    tagline: "Atención y cotización inteligente 24/7 en WhatsApp Business",
    category: "Automatización",
    description:
      "Desarrollo de asistentes conversacionales autónomos con IA para WhatsApp Business, capaces de responder preguntas frecuentes, cotizar según el catálogo y registrar pedidos 24/7 sin descanso.",
    features: [
      "Atención ininterrumpida 24/7 con respuestas contextualizadas al negocio",
      "Cotizaciones automáticas basadas en catálogo y políticas de venta",
      "Acreditación formal por CENIA y SOFOFA en IA Generativa (Nota 6.8 / 7.0)",
      "Canalización automática a ejecutivos ante cierres de venta",
    ],
    techStack: ["WhatsApp API", "IA Generativa", "CENIA SOFOFA", "Webhooks", "Node.js"],
    liveUrl: "#contacto",
    highlightBadge: "04 // Automatización IA",
  },
];
