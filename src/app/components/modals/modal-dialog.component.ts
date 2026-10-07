import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  input,
  output,
  viewChild
} from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  template: `
    <dialog
      #dialogRef
      (cancel)="handleCancel($event)"
      (click)="handleBackdropClick($event)"
      [attr.aria-labelledby]="titleId()"
      class="backdrop:bg-black/60 backdrop:backdrop-blur-sm p-0 rounded-xl border border-mono-borderLight dark:border-mono-borderDark bg-white dark:bg-mono-surfaceDark text-mono-black dark:text-white w-[calc(100%-2rem)] max-w-2xl sm:w-full shadow-2xl m-auto max-h-[88vh] overflow-y-auto"
      [class.max-w-xl]="isCompact()"
    >
      <div class="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-mono-borderLight dark:border-mono-borderDark pb-4 font-mono text-xs">
          <span [id]="titleId()" class="uppercase tracking-widest text-mono-muted">
            {{ headerLabel() }}
          </span>
          <button
            type="button"
            (click)="closeModal()"
            aria-label="Cerrar ventana"
            class="p-1 hover:text-mono-muted font-bold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            ✕ Cerrar
          </button>
        </div>

        <!-- Content projection -->
        <ng-content />
      </div>
    </dialog>
  `
})
export class ModalDialogComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialogRef');

  readonly isOpen = input<boolean>(false);
  readonly headerLabel = input.required<string>();
  readonly titleId = input.required<string>();
  readonly isCompact = input<boolean>(false);

  readonly closed = output<void>();

  constructor() {
    effect(() => {
      const open = this.isOpen();
      const dialogEl = this.dialogRef()?.nativeElement;

      if (!isPlatformBrowser(this.platformId) || !dialogEl) {
        return;
      }

      if (open && !dialogEl.open) {
        if (typeof dialogEl.showModal === 'function') {
          dialogEl.showModal();
        } else {
          dialogEl.setAttribute('open', '');
        }
      } else if (!open && dialogEl.open) {
        if (typeof dialogEl.close === 'function') {
          dialogEl.close();
        } else {
          dialogEl.removeAttribute('open');
        }
      }
    });
  }

  protected closeModal(): void {
    const dialogEl = this.dialogRef()?.nativeElement;
    if (dialogEl && dialogEl.open) {
      if (typeof dialogEl.close === 'function') {
        dialogEl.close();
      } else {
        dialogEl.removeAttribute('open');
      }
    }
    this.closed.emit();
  }

  protected handleCancel(event: Event): void {
    event.preventDefault();
    this.closeModal();
  }

  protected handleBackdropClick(event: MouseEvent): void {
    const dialogEl = this.dialogRef()?.nativeElement;
    if (event.target === dialogEl) {
      this.closeModal();
    }
  }
}
