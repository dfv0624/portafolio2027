# Daniel Vásquez — Portfolio 2027

<div align="center">

![Angular 22](https://img.shields.io/badge/Angular-22.0.4-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Angular SSR](https://img.shields.io/badge/SSR-Express_5-000000?style=for-the-badge&logo=express&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-Tested-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Accessibility](https://img.shields.io/badge/A11y-WCAG_AA-2ea44f?style=for-the-badge)

<p align="center">
  <b>Portafolio interactivo de Daniel Vásquez</b><br>
  Especializado en aplicaciones web estructuradas, frontend reactivo de alto rendimiento y automatizaciones de alta precisión.
</p>

[🌐 Sitio Web](https://dfv0624.com) • [💼 LinkedIn](https://linkedin.com/in/dfv0624) • [💻 GitHub](https://github.com/dfv0624) • [📧 Contacto](mailto:dfv.0624@hotmail.com)

</div>

---

## 📋 Tabla de Contenidos

- [Visión General](#-visión-general)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Proyectos Destacados](#-proyectos-destacados)
- [Instalación y Uso Local](#-instalación-y-uso-local)
- [Scripts Disponibles](#-scripts-disponibles)
- [Accesibilidad y Rendimiento](#-accesibilidad-y-rendimiento)
- [Autor y Contacto](#-autor-y-contacto)

---

## 🌟 Visión General

Este repositorio contiene el código fuente del portafolio interactivo personal de **Daniel Vásquez**. Desarrollado con las últimas especificaciones de **Angular 22**, implementa una arquitectura basada puramente en componentes *Standalone*, reactividad nativa mediante *Signals*, renderizado del lado del servidor (*Angular SSR + Express 5*) y un sistema de diseño monocromático minimalista impulsado por **Tailwind CSS v4** y la familia tipográfica **Geist**.

El diseño combina una estética técnica y editorial con microinteracciones fluidas, un canvas reactivo de partículas con física de nodos neuronales y proyecciones isométricas tridimensionales dinámicas que responden a la posición del cursor.

---

## ✨ Características Principales

- **Arquitectura Angular 22 de Vanguardia**:
  - Componentes 100% *Standalone* y estrategia `OnPush` por defecto.
  - Gestión de estado local y derivado mediante primitivas reactivas `signal()` y `computed()`.
  - Control flow nativo de plantillas (`@if`, `@for`, `@switch`).
- **Renderizado del Lado del Servidor (SSR)**:
  - Generación de páginas optimizada con `@angular/ssr` y backend en Express 5 para máxima indexación SEO y velocidad de carga inicial (FCP).
- **Fondo de Nodos Neuronales en Canvas**:
  - Animación continua de red neuronal con detección de cursor en tiempo real, física de atracción/repulsión y adaptación automática al tamaño de pantalla.
- **Previsualizador Isométrico Dinámico**:
  - Figuras geométricas vectoriales e isométricas (*Riffle, Cabinet, Terrain, Phone*) que rotan y reaccionan al mouse según la sección seleccionada en el menú principal.
- **Modo Oscuro / Claro Nativo**:
  - Sistema de alternancia de tema con persistencia local en `localStorage`, sincronización con las preferencias del sistema (`prefers-color-scheme`) y transiciones suaves de color.
- **Diálogos Modales Accesibles**:
  - Implementación de modales basados en el elemento nativo HTML `<dialog>`, con efecto de desenfoque de fondo (*backdrop blur*), control de foco y soporte para tecla `Escape`.
- **Telemetría y Analítica**:
  - Integración nativa con Google Analytics 4 (GA4) y Microsoft Clarity para mapas de calor y métricas de interacción.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Frontend Framework** | [Angular 22](https://angular.dev/) (Standalone Components, Signals, Control Flow) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Estilos & Diseño** | [Tailwind CSS v4](https://tailwindcss.com/), PostCSS, Tipografía [Geist / Geist Mono](https://vercel.com/font) |
| **Microinteracciones** | `@lucasmarkes/hairline`, Canvas 2D API |
| **Servidor & SSR** | [@angular/ssr](https://angular.dev/guide/ssr), [Express 5](https://expressjs.com/), Node.js |
| **Testing** | [Vitest](https://vitest.dev/), JSDOM |
| **Analítica & UX** | Google Analytics 4, Microsoft Clarity |
| **CI / CD & Tooling** | GitHub Actions, Prettier |

---

## 📁 Estructura del Proyecto

```plaintext
portafolio2027/
├── public/                     # Recursos estáticos (logos en claro/oscuro, favicon)
├── src/
│   ├── app/
│   │   ├── components/         # Componentes modulares y reutilizables
│   │   │   ├── footer/         # Pie de página con enlaces sociales y derechos
│   │   │   ├── header/         # Cabecera con selector de tema interactivo y logotipo
│   │   │   ├── modals/         # Modales de detalle (Proyectos, Stack, Perfil, Contacto)
│   │   │   ├── navigation-menu/# Menú de selección interactivo con numeración técnica
│   │   │   ├── neural-nodes-background/ # Canvas de partículas interactivas de fondo
│   │   │   ├── preview-card/   # Visualizador de figuras geométricas isométricas
│   │   │   ├── tech-badges/    # Insignias de stack tecnológico
│   │   │   └── tech-pill/      # Píldoras de tecnologías reutilizables
│   │   ├── core/
│   │   │   ├── data/           # Datos estáticos del portafolio (proyectos, stack, menú)
│   │   │   ├── models/         # Modelos e interfaces TypeScript
│   │   │   └── services/       # Servicios de la aplicación (ThemeService, etc.)
│   │   ├── app.config.ts       # Configuración de proveedores del cliente
│   │   ├── app.config.server.ts# Configuración de proveedores SSR
│   │   ├── app.ts              # Componente raíz del portafolio
│   │   └── app.html            # Layout principal
│   ├── index.html              # Plantilla HTML con metaetiquetas SEO y fuentes
│   ├── main.server.ts          # Punto de entrada de servidor SSR
│   ├── main.ts                 # Bootstrap de la aplicación en cliente
│   └── styles.css              # Tokens del sistema de diseño Tailwind CSS v4
├── angular.json                # Configuración de Angular CLI y compiladores
├── package.json                # Dependencias y scripts del proyecto
└── tsconfig.json               # Configuración estricta de TypeScript
```

---

## 🚀 Proyectos Destacados en el Portafolio

Dentro de la plataforma se exhiben proyectos clave en producción y desarrollo:

1. **Simbi** (*SaaS Multiempresa & IA*): Plataforma comercial y administrativa con asistente Simbi AI, Function Calling contextual por empresa y arquitectura Angular 22 + PHP REST API.
2. **Enjambre Group** (*Creatividad & Marketing Digital*): Plataforma web corporativa de alto impacto visual y optimización técnica integral.
3. **SOM Studio** (*Arquitectura & Portafolio Editorial*): Portafolio interactivo para estudio de arquitectura y obra civil con layouts dinámicos y microinteracciones fluidas.
4. **Design.md Builder** (*IA Generativa & Frontend*): Extractor de tokens visuales y sistemas de diseño a Markdown mediante navegador headless y modelos Google Gemini.
5. **Anicca Platform** (*Web3 & Creadores*): Plataforma de microcontribuciones en blockchain Celo / MiniPay mediante Smart Contracts en Solidity y Supabase.
6. **Automatización n8n** (*Automatización & Finanzas*): Workflows autónomos para conciliación de facturas electrónicas y webhooks transaccionales en tiempo real.

---

## 💻 Instalación y Uso Local

### Prerrequisitos

- **Node.js**: `v20.x` o superior recomendado
- **npm**: `v10.x` o superior

### 1. Clonar el repositorio

```bash
git clone https://github.com/dfv0624/portafolio2027.git
cd portafolio2027
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm start
# o
ng serve
```

Navega a [http://localhost:4200](http://localhost:4200). La aplicación se recargará automáticamente ante cualquier modificación en el código.

---

## ⚙️ Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm start` | Inicia el servidor de desarrollo local de Angular en `http://localhost:4200`. |
| `npm run build` | Compila la aplicación para producción tanto para cliente como servidor en `dist/`. |
| `npm run watch` | Compila en modo desarrollo con observador de cambios (*watch mode*). |
| `npm test` | Ejecuta la suite de pruebas unitarias con **Vitest**. |
| `npm run serve:ssr:portafolio2027` | Ejecuta el servidor Node/Express para servir la versión SSR construida. |

---

## ♿ Accesibilidad y Rendimiento

- **WCAG AA Compliance**: Relaciones de contraste calculadas tanto en modo claro como en modo oscuro.
- **Navegación por Teclado**: Estados `focus-visible` explícitos y accesibles para todos los botones y enlaces interactivos.
- **Semántica HTML5**: Jerarquía clara de encabezados, landmark regions (`<header>`, `<main>`, `<footer>`, `<nav>`) y atributos `aria-*` en componentes dinámicos.
- **Rendimiento Gráfico**: El fondo interactivo en Canvas utiliza `requestAnimationFrame` con limitador de refresco y liberación de memoria en los ciclos de destrucción de Angular (`DestroyRef`).

---

## 👤 Autor

**Daniel Vásquez** — *Software & Web Architecture*

- 🌐 **Web**: [dfv0624.com](https://dfv0624.com)
- 💼 **LinkedIn**: [daniel-vasquez](https://linkedin.com/in/dfv0624)
- 🐙 **GitHub**: [@dfv0624](https://github.com/dfv0624)
- ✉️ **Email**: [dfv.0624@hotmail.com](mailto:dfv.0624@hotmail.com)

---

<div align="center">
  <sub>Desarrollado con precisión técnica • © 2026-2027 Daniel Vásquez</sub>
</div>
