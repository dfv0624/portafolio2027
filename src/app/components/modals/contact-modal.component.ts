import { Component, input, output, signal } from '@angular/core';
import { ModalDialogComponent } from './modal-dialog.component';

@Component({
  selector: 'app-contact-modal',
  imports: [ModalDialogComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 04 Contacto"
      titleId="contact-modal-title"
      [isCompact]="true"
      (closed)="closed.emit()"
    >
      <div class="space-y-4">
        <h3 class="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Hablemos de tu proyecto
        </h3>
        <p class="text-sm text-mono-muted leading-relaxed">
          Disponible para desarrollo de aplicaciones completas, integraciones o consultoría técnica.
        </p>

        <div class="pt-3 flex flex-wrap items-center gap-4">
          <a
            href="mailto:dfv.0624@hotmail.com"
            class="inline-flex items-center gap-1 font-mono text-lg font-semibold border-b-2 border-black dark:border-white pb-0.5 text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            dfv.0624&#64;hotmail.com ↗
          </a>

          <button
            type="button"
            (click)="copyEmail()"
            class="text-xs font-mono px-3 py-1.5 rounded border border-mono-borderLight dark:border-mono-borderDark hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            {{ copied() ? '✓ Copiado al portapapeles' : 'Copiar email' }}
          </button>
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
        setTimeout(() => this.copied.set(false), 2500);
      });
    }
  }
}
