import { MenuItem, PreviewData, ProjectItem, StackCategory, ModalType } from '../models/portfolio.model';

export const MENU_ITEMS: readonly MenuItem[] = [
  {
    id: 'projects',
    number: '01',
    title: 'Proyectos',
    actionLabel: 'Explorar ↗'
  },
  {
    id: 'stack',
    number: '02',
    title: 'Arquitectura & Stack',
    actionLabel: 'Detalles ↗'
  },
  {
    id: 'about',
    number: '03',
    title: 'Perfil & Filosofía',
    actionLabel: 'Leer ↗'
  },
  {
    id: 'contact',
    number: '04',
    title: 'Contacto',
    actionLabel: 'Escribir ↗'
  }
];

export const PREVIEW_MAP: Record<ModalType, PreviewData> = {
  projects: {
    id: 'projects',
    figureName: 'riffle',
    badge: 'Proyectos & Arquitectura',
    caption: '01 • Proyectos',
    tech: 'Simbi • Design.md • Anicca',
    alt: 'Figura interactiva isométrica riffle de proyectos que responde al cursor'
  },
  stack: {
    id: 'stack',
    figureName: 'cabinet',
    badge: 'Ingeniería & Automatización',
    caption: '02 • Stack Técnico',
    tech: 'Angular • PHP • n8n • Solidity',
    alt: 'Figura interactiva isométrica cabinet de servidores que responde al cursor'
  },
  about: {
    id: 'about',
    figureName: 'terrain',
    badge: 'Filosofía & Estructura',
    caption: '03 • Enfoque & Principios',
    tech: 'Arquitectura Limpia',
    alt: 'Figura interactiva isométrica terrain que levanta pilares al pasar el cursor'
  },
  contact: {
    id: 'contact',
    figureName: 'phone',
    badge: 'Disponibilidad Inmediata',
    caption: '04 • Disponibilidad 2026',
    tech: 'dfv.0624@hotmail.com',
    alt: 'Figura interactiva isométrica phone de dispositivo en capas'
  }
};

export const PROJECTS_DATA: readonly ProjectItem[] = [
  {
    year: '2026',
    category: 'SaaS Multiempresa & IA',
    title: 'Simbi — Clientes Enjambre',
    description:
      'Plataforma multiempresa para gestión comercial y administrativa de clientes, propuestas, contratos y otrosíes. Integra el asistente inteligente Simbi AI con Function Calling en tiempo real para análisis contextualizado por empresa.',
    tags: [
      'Angular 22',
      'Angular Material',
      'PHP REST API',
      'JWT Multiempresa',
      'Simbi AI (Function Calling)',
      'MySQL',
      'CI/CD GitHub Actions'
    ]
  },
  {
    year: '2026',
    category: 'IA Generativa & Frontend',
    title: 'Design.md Builder',
    description:
      'Herramienta que analiza cualquier URL mediante un navegador headless (Playwright) y modelos Google Gemini para extraer tokens visuales (paletas, tipografía, componentes) y generar automáticamente sistemas de diseño en Markdown.',
    tags: ['Angular 21', 'Google Gemini AI', 'Playwright', 'TypeScript', 'SSR'],
    githubUrl: 'https://github.com/dfv0624/DesingMdCreate'
  },
  {
    year: '2026',
    category: 'Web3 & Creadores',
    title: 'Anicca Platform',
    description:
      'Plataforma de microcontribuciones sobre la blockchain Celo impulsada por MiniPay. Implementa contratos inteligentes en Solidity para reparto automatizado y transparente (97% creador / 3% plataforma) en USDT y COPm con persistencia en Supabase.',
    tags: ['Solidity', 'Celo', 'MiniPay', 'Next.js', 'React', 'Supabase', 'Ethers'],
    githubUrl: 'https://github.com/dfv0624/anicca'
  },
  {
    year: '2026',
    category: 'Automatización & Finanzas',
    title: 'Automatización & Conciliación de Facturas en n8n',
    description:
      'Workflows autónomos en n8n para la extracción, validación y conciliación de facturas electrónicas, procesamiento de webhooks bancarios en tiempo real y sincronización con bases de datos transaccionales sin intervención manual.',
    tags: ['n8n Workflows', 'Webhooks', 'PostgreSQL', 'APIs REST', 'Node.js', 'ETL']
  }
];

export const STACK_CATEGORIES: readonly StackCategory[] = [
  {
    title: 'Front-End & CMS',
    description:
      'Angular 17-22 (Signals, Standalone Components, SSR), TypeScript, Tailwind CSS, Angular Material, PrimeNG y desarrollo de soluciones administrables en WordPress.',
    technologies: ['Angular', 'WordPress', 'TypeScript', 'Tailwind CSS', 'Angular Material', 'Signals']
  },
  {
    title: 'APIs & Backend',
    description:
      'Diseño e integración de APIs RESTful en PHP y Node.js, autenticación multiempresa con JWT, modelado relacional en MySQL y PostgreSQL, webhooks seguros.',
    technologies: ['API Development', 'PHP REST API', 'Node.js', 'JWT', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'AI Automation & n8n',
    description:
      'Automatización de procesos de facturación y datos con n8n, integración de modelos de lenguaje (Google Gemini, OpenRouter) y Function Calling en tiempo real.',
    technologies: ['n8n', 'AI Automation', 'Google Gemini', 'Function Calling', 'Solidity', 'Celo']
  },
  {
    title: 'Analítica, DevOps & Calidad',
    description:
      'Configuración e instrumentación de Google Analytics 4 (GA4) con tracking de eventos, pipelines CI/CD en GitHub Actions (SSH/SCP), testing y accesibilidad WCAG AA.',
    technologies: ['Google Analytics 4', 'GitHub Actions', 'CI/CD', 'Playwright', 'Vitest', 'WCAG AA']
  }
];
