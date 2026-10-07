import { Component, input, output, signal } from '@angular/core';
import { ModalDialogComponent } from './modal-dialog.component';

@Component({
  selector: 'app-contact-modal',
  imports: [ModalDialogComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 04 Contacto & Conexión"
      titleId="contact-modal-title"
      [isCompact]="true"
      (closed)="closed.emit()"
    >
      <div class="space-y-5 font-sans">
        <!-- Título y mensaje de disponibilidad -->
        <div>
          <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Hablemos de tu proyecto
          </h3>
          <p class="text-xs sm:text-sm text-mono-muted leading-relaxed mt-1">
            Disponible para desarrollo de plataformas completas, arquitectura frontend, integraciones de IA y automatización.
          </p>
        </div>

        <!-- Correo Electrónico con icono de copiado sin texto -->
        <div class="space-y-1.5 pt-1">
          <span class="block font-mono text-[10px] text-mono-muted uppercase tracking-wider">
            // Correo Electrónico
          </span>
          <div
            class="flex items-center justify-between gap-3 p-3 rounded-lg border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight/60 dark:bg-mono-surfaceDark/60 hover:border-neutral-900/40 dark:hover:border-neutral-100/40 transition-colors"
          >
            <a
              href="mailto:dfv.0624@hotmail.com"
              class="font-mono text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              <svg
                class="w-4 h-4 text-mono-muted shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>dfv.0624&#64;hotmail.com</span>
            </a>

            <!-- Botón de copiar sólo con icono -->
            <button
              type="button"
              (click)="copyEmail()"
              [attr.aria-label]="copied() ? 'Correo copiado al portapapeles' : 'Copiar correo'"
              [attr.title]="copied() ? '¡Copiado!' : 'Copiar al portapapeles'"
              class="group/btn relative p-2 rounded-md border border-mono-borderLight dark:border-mono-borderDark bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 shrink-0"
            >
              @if (copied()) {
                <!-- Icono de confirmación (Checkmark) -->
                <svg
                  class="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              } @else {
                <!-- Icono de Copiar (Portapapeles / Documento doble) -->
                <svg
                  class="w-4 h-4 group-hover/btn:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              }

              <!-- Indicador flotante breve de éxito -->
              @if (copied()) {
                <span
                  class="absolute -top-7 right-0 px-2 py-0.5 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[10px] font-mono shadow-xs whitespace-nowrap"
                  role="status"
                >
                  ¡Copiado!
                </span>
              }
            </button>
          </div>
        </div>

        <!-- Redes Sociales: GitHub & LinkedIn -->
        <div class="space-y-2 pt-1">
          <span class="block font-mono text-[10px] text-mono-muted uppercase tracking-wider">
            // Redes Profesionales
          </span>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <!-- GitHub Card -->
            <a
              href="https://github.com/dfv0624"
              target="_blank"
              rel="noreferrer"
              class="group flex items-center justify-between p-3 rounded-lg border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight/60 dark:bg-mono-surfaceDark/60 hover:border-neutral-900 dark:hover:border-neutral-100 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              <div class="flex items-center gap-2.5">
                <svg
                  class="w-5 h-5 text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
                <div>
                  <span class="block text-xs font-bold text-neutral-900 dark:text-neutral-100">
                    GitHub
                  </span>
                  <span class="block font-mono text-[10px] text-mono-muted">
                    dfv0624
                  </span>
                </div>
              </div>
              <span class="text-xs font-mono text-mono-muted group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                ↗
              </span>
            </a>

            <!-- LinkedIn Card -->
            <a
              href="https://linkedin.com/in/dfv0624"
              target="_blank"
              rel="noreferrer"
              class="group flex items-center justify-between p-3 rounded-lg border border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight/60 dark:bg-mono-surfaceDark/60 hover:border-[#0a66c2] dark:hover:border-[#0a66c2] hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              <div class="flex items-center gap-2.5">
                <svg
                  class="w-5 h-5 text-neutral-800 dark:text-neutral-200 group-hover:text-[#0a66c2] transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  />
                </svg>
                <div>
                  <span class="block text-xs font-bold text-neutral-900 dark:text-neutral-100">
                    LinkedIn
                  </span>
                  <span class="block font-mono text-[10px] text-mono-muted">
                    in/dfv0624
                  </span>
                </div>
              </div>
              <span class="text-xs font-mono text-mono-muted group-hover:text-[#0a66c2] transition-colors">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </app-modal-dialog>
  `
})
export class ContactModalComponent {
  readonly isOpen = input<boolean>(false);
  readonly closed = output<void>();

  protected readonly copied = signal<boolean>(false);

  protected copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('dfv.0624@hotmail.com').then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2200);
      });
    }
  }
}
