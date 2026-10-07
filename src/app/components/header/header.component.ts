import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  host: {
    class: 'w-full block z-20'
  },
  template: `
    <header class="w-full max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
      <!-- Logo de Daniel Vásquez (Local con versión clara y oscura nativa) -->
      <a
        href="/"
        class="inline-flex items-center group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 rounded"
        aria-label="Daniel Vásquez — Inicio"
      >
        <!-- Logo en modo claro -->
        <img
          src="/Logo-Black.png"
          alt="Daniel Vásquez"
          class="h-8 sm:h-9 w-auto object-contain block dark:hidden transition-opacity duration-200 group-hover:opacity-80"
          loading="eager"
        />
        <!-- Logo en modo oscuro (Líneas blancas nítidas con acento naranja) -->
        <img
          src="/Logo-White.png"
          alt="Daniel Vásquez"
          class="h-8 sm:h-9 w-auto object-contain hidden dark:block transition-opacity duration-200 group-hover:opacity-80"
          loading="eager"
        />
      </a>

      <!-- Botón Interactivo de Tema (Sol / Luna) -->
      <div class="flex items-center">
        <button
          type="button"
          (click)="themeService.toggleTheme()"
          [attr.aria-label]="'Cambiar a modo ' + (themeService.isDark() ? 'claro' : 'oscuro')"
          class="relative p-2 rounded-lg border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight dark:bg-mono-surfaceDark hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-200 cursor-pointer text-neutral-800 dark:text-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 group shadow-2xs"
        >
          @if (themeService.isDark()) {
            <!-- Icono Sol interactivo con rotación al hover -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          } @else {
            <!-- Icono Luna interactivo con inclinación al hover -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4 text-neutral-700 transition-transform duration-300 group-hover:-rotate-12"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          }
        </button>
      </div>
    </header>
  `
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);
}
