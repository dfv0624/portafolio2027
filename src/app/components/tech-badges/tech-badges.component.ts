import { Component } from '@angular/core';

interface TechItem {
  readonly id: string;
  readonly name: string;
  readonly ariaLabel: string;
}

@Component({
  selector: 'app-tech-badges',
  host: {
    class: 'block w-full'
  },
  template: `
    <div
      class="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]"
      role="list"
      aria-label="Competencias técnicas y herramientas destacadas"
    >
      @for (tech of techItems; track tech.id) {
        <div
          role="listitem"
          tabindex="0"
          [attr.aria-label]="tech.ariaLabel"
          class="group inline-flex items-center h-8 px-2.5 rounded-full border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight dark:bg-mono-surfaceDark hover:border-neutral-900/60 dark:hover:border-neutral-200/60 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 shadow-2xs hover:shadow-xs"
        >
          <!-- Contenedor del Icono con micro-animación -->
          <span class="w-4 h-4 flex items-center justify-center shrink-0">
            @switch (tech.id) {
              @case ('angular') {
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 group-hover:text-[#e91e63] dark:group-hover:text-[#f43f5e] transition-colors duration-500 anim-angular"
                  aria-hidden="true"
                >
                  <path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/>
                </svg>
              }
              @case ('wordpress') {
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 group-hover:text-[#21759b] dark:group-hover:text-[#3895d3] transition-colors duration-500 anim-wp"
                  aria-hidden="true"
                >
                  <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
                </svg>
              }
              @case ('api') {
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-500 anim-api"
                  aria-hidden="true"
                >
                  <circle cx="5" cy="12" r="2.5" fill="currentColor" fill-opacity="0.2" />
                  <circle cx="19" cy="12" r="2.5" fill="currentColor" fill-opacity="0.2" />
                  <path d="M8 12h8" stroke-dasharray="2 2" class="anim-api-line" />
                </svg>
              }
              @case ('ai') {
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-500 anim-ai"
                  aria-hidden="true"
                >
                  <path d="m12 2 2.2 6.3a2 2 0 0 0 1.5 1.5L22 12l-6.3 2.2a2 2 0 0 0-1.5 1.5L12 22l-2.2-6.3a2 2 0 0 0-1.5-1.5L2 12l6.3-2.2a2 2 0 0 0 1.5-1.5L12 2z"/>
                </svg>
              }
              @case ('ga4') {
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-500"
                  aria-hidden="true"
                >
                  <path d="M4 20h16" stroke-width="1.8" />
                  <line x1="7" y1="20" x2="7" y2="14" class="anim-ga-bar anim-ga-1" />
                  <line x1="12" y1="20" x2="12" y2="9" class="anim-ga-bar anim-ga-2" />
                  <line x1="17" y1="20" x2="17" y2="4" class="anim-ga-bar anim-ga-3" />
                </svg>
              }
              @case ('n8n') {
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300 group-hover:text-[#ea4b71] dark:group-hover:text-[#ff6d5a] transition-colors duration-500 anim-n8n"
                  aria-hidden="true"
                >
                  <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/>
                </svg>
              }
            }
          </span>

          <!-- Texto que se despliega al pasar el mouse (se alarga con transición fluida y suave) -->
          <span
            class="max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:max-w-40 group-hover:opacity-100 group-hover:ml-2 group-focus-visible:max-w-40 group-focus-visible:opacity-100 group-focus-visible:ml-2 text-neutral-800 dark:text-neutral-200 font-medium"
          >
            {{ tech.name }}
          </span>
        </div>
      }
    </div>
  `,
  styles: `
    /* Animación flotante para Angular */
    @keyframes angularFloat {
      0%, 100% {
        transform: translateY(0) scale(1);
      }
      50% {
        transform: translateY(-1.5px) scale(1.05);
      }
    }
    .anim-angular {
      animation: angularFloat 2.8s ease-in-out infinite;
      transform-origin: center;
    }
    .group:hover .anim-angular,
    .group:focus-visible .anim-angular {
      transform: scale(1.15) rotate(6deg);
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
      animation: none;
    }

    /* Animación rotación suave para WordPress */
    @keyframes wpFloat {
      0%, 100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(10deg);
      }
    }
    .anim-wp {
      animation: wpFloat 3.2s ease-in-out infinite;
      transform-origin: center;
    }
    .group:hover .anim-wp,
    .group:focus-visible .anim-wp {
      transform: rotate(360deg);
      transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      animation: none;
    }

    /* Animación flujo de señal para API */
    @keyframes apiPulse {
      0%, 100% {
        stroke-dashoffset: 0;
        opacity: 0.7;
      }
      50% {
        stroke-dashoffset: 4;
        opacity: 1;
      }
    }
    .anim-api-line {
      animation: apiPulse 2s linear infinite;
    }
    .group:hover .anim-api,
    .group:focus-visible .anim-api {
      transform: scale(1.18);
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    }

    /* Animación destello para AI */
    @keyframes aiTwinkle {
      0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 0.85;
      }
      50% {
        transform: scale(1.15) rotate(15deg);
        opacity: 1;
      }
    }
    .anim-ai {
      animation: aiTwinkle 2.4s ease-in-out infinite;
      transform-origin: center;
    }
    .group:hover .anim-ai,
    .group:focus-visible .anim-ai {
      transform: rotate(90deg) scale(1.25);
      transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      animation: none;
    }

    /* Animación barras en vivo para GA4 */
    @keyframes gaBar1 {
      0%, 100% {
        transform: scaleY(0.45);
      }
      50% {
        transform: scaleY(0.95);
      }
    }
    @keyframes gaBar2 {
      0%, 100% {
        transform: scaleY(0.85);
      }
      50% {
        transform: scaleY(0.35);
      }
    }
    @keyframes gaBar3 {
      0%, 100% {
        transform: scaleY(0.5);
      }
      50% {
        transform: scaleY(1);
      }
    }
    .anim-ga-bar {
      transform-box: fill-box;
      transform-origin: bottom;
    }
    .anim-ga-1 {
      animation: gaBar1 1.7s ease-in-out infinite;
    }
    .anim-ga-2 {
      animation: gaBar2 2s ease-in-out infinite 0.2s;
    }
    .anim-ga-3 {
      animation: gaBar3 1.8s ease-in-out infinite 0.4s;
    }
    .group:hover .anim-ga-1,
    .group:hover .anim-ga-2,
    .group:hover .anim-ga-3,
    .group:focus-visible .anim-ga-1,
    .group:focus-visible .anim-ga-2,
    .group:focus-visible .anim-ga-3 {
      animation-duration: 0.8s;
    }

    /* Animación nodos para n8n */
    @keyframes n8nPulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    .anim-n8n {
      animation: n8nPulse 2.6s ease-in-out infinite;
      transform-origin: center;
    }
    .group:hover .anim-n8n,
    .group:focus-visible .anim-n8n {
      transform: rotate(180deg) scale(1.15);
      transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
      animation: none;
    }

    /* Respeto a usuarios con sensibilidad a movimiento */
    @media (prefers-reduced-motion: reduce) {
      .anim-angular,
      .anim-wp,
      .anim-api-line,
      .anim-ai,
      .anim-ga-bar,
      .anim-n8n {
        animation: none !important;
      }
    }
  `
})
export class TechBadgesComponent {
  protected readonly techItems: readonly TechItem[] = [
    { id: 'angular', name: 'Angular', ariaLabel: 'Competencia técnica: Angular' },
    { id: 'wordpress', name: 'WordPress', ariaLabel: 'Competencia técnica: WordPress' },
    { id: 'api', name: 'API Development', ariaLabel: 'Competencia técnica: API Development' },
    { id: 'ai', name: 'AI Automation', ariaLabel: 'Competencia técnica: AI Automation' },
    { id: 'ga4', name: 'Google Analytics 4', ariaLabel: 'Competencia técnica: Google Analytics 4' },
    { id: 'n8n', name: 'n8n', ariaLabel: 'Competencia técnica: n8n' }
  ];
}
