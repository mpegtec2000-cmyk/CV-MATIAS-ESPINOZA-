# Landing Page & Portafolio Profesional — Matías Espinoza (Vision Code)

Landing page responsiva y moderna diseñada con una **estética minimalista en blanco y negro (Black & White)**, optimizada según las **normas SEO de Google**, desarrollada en **Next.js 16 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS**.

---

## 🚀 Características Principales

- **Diseño Ultra Minimalista B&W**: Paleta de alto contraste (negros profundos `#09090b`, blancos puros `#ffffff` y grises zinc neutros) con estética técnica de agencia digital.
- **Optimización SEO Google**:
  - Metadatos OpenGraph y Twitter Cards completos.
  - Generación dinámica de `sitemap.xml` y `robots.txt`.
  - Datos estructurados **JSON-LD Schema.org** (`Person` y `Organization / Vision Code`).
  - Etiquetas semánticas HTML5 (`header`, `main`, `section`, `article`, `footer`).
- **Descarga de Documentación Oficial**:
  - Currículum Vitae Completo 2026 (`CV_Matias_Espinoza.pdf`).
  - Certificación Ruta de 7 Cursos de IA Generativa para Mipymes — CENIA & SOFOFA Capital Humano (`Certificados_IA_Matias_Espinoza.pdf`).
  - Título Técnico de Nivel Medio en Administración mención Logística — Mineduc (`Titulo_Tecnico_Profesional_Mineduc.pdf`).
  - Certificado de Alumno Regular en Ingeniería Industrial — Instituto Profesional AIEP (`Certificado_Alumno_Regular_AIEP.pdf`).
- **Sección de Trayectoria & Experiencia**:
  - **Vision Code** (Fundador y Director).
  - **Ariztía** (Jefe de Turno - Despacho y Logística / SAP ECC).
  - **Parque del Mar** (Asistente de Logística y Adquisiciones).
  - **Ing. y Construcción Ricardo Rodríguez** (Jefe de Bodega / 5S).
  - **BELVAL** (Encargado de Operaciones).
  - **JUNJI** (Bodeguero / Práctica).
- **Catálogo de Trabajos & Casos Prácticos**: Filtros por categoría ("Web & E-Commerce", "Sistemas ERP & Gestión", "Automatización & IA") con soporte listo para Supabase.
- **Formulario de Contacto & Canales Directos**:
  - Conexión vía API Route `/api/contact`.
  - Acceso directo a WhatsApp (+56 9 2964 5522), Correo y LinkedIn.

---

## 🛠️ Cómo Ejecutar en Localhost

El proyecto está instalado en `D:\CV MATIAS`.

```bash
# 1. Abrir terminal en la carpeta
cd "D:\CV MATIAS"

# 2. Iniciar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

---

## 📦 Estructura del Proyecto

```text
D:\CV MATIAS/
├── public/
│   ├── docs/                   # PDFs para descarga directa
│   │   ├── CV_Matias_Espinoza.pdf
│   │   ├── Certificados_IA_Matias_Espinoza.pdf
│   │   ├── Titulo_Tecnico_Profesional_Mineduc.pdf
│   │   └── Certificado_Alumno_Regular_AIEP.pdf
│   └── images/
│       └── yo.png              # Foto de perfil de Matías
├── src/
│   ├── app/
│   │   ├── api/contact/        # Endpoint para formulario de contacto
│   │   ├── globals.css         # Estilos globales y paleta B&W
│   │   ├── layout.tsx          # SEO, OpenGraph, JSON-LD schema
│   │   ├── page.tsx            # Página principal y estructura
│   │   ├── robots.ts           # robots.txt para Google
│   │   └── sitemap.ts          # sitemap.xml para indexación
│   ├── components/
│   │   ├── Navbar.tsx          # Menú de navegación responsivo
│   │   ├── Hero.tsx            # Presentación principal con foto
│   │   ├── AboutVisionCode.tsx # Visión de agencia y perfil híbrido
│   │   ├── DocumentsSection.tsx# Descarga de CV y certificados
│   │   ├── ExperienceTimeline.tsx# Línea de tiempo de experiencia
│   │   ├── CapabilitiesSection.tsx# Stack técnico y operacional
│   │   ├── ProjectsShowcase.tsx# Filtro de proyectos
│   │   ├── ContactSection.tsx  # Formulario interactivo y WhatsApp
│   │   ├── Footer.tsx          # Pie de página y enlaces
│   │   └── Icons.tsx           # Iconografía SVG
│   └── data/
│       └── portfolio-data.ts   # Datos editables de Matías y proyectos
```

---

## 🔜 Próximo Paso: Integración con Supabase, GitHub y Vercel

Cuando estés listo para conectar Supabase:
1. Crear un proyecto en [Supabase](https://supabase.com).
2. Crear la tabla `leads` o `contacts` en PostgreSQL:
```sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null
);
```
3. Agregar las variables en `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```
4. Subir a tu repositorio en GitHub y enlazar con Vercel para despliegue automático con dominio propio (ej. `www.vision-code.cl`).
