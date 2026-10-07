import { Component, input, output } from '@angular/core';
import { StackCategory } from '../../core/models/portfolio.model';
import { ModalDialogComponent } from './modal-dialog.component';

@Component({
  selector: 'app-stack-modal',
  imports: [ModalDialogComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 02 Arquitectura & Stack"
      titleId="stack-modal-title"
      (closed)="closed.emit()"
    >
      <div class="space-y-4 font-sans max-h-[60vh] overflow-y-auto pr-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          @for (category of categories(); track category.title) {
            <article
              class="border border-mono-borderLight dark:border-mono-borderDark p-4 rounded hover:border-black dark:hover:border-white transition-colors flex flex-col justify-between"
            >
              <div>
                <span class="font-mono text-xs text-mono-muted uppercase tracking-wider block">
                  // {{ category.title }}
                </span>
                <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
                  {{ category.description }}
                </p>
              </div>

              <div
                class="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-mono-borderLight/60 dark:border-mono-borderDark/60"
              >
                @for (tech of category.technologies; track tech) {
                  <span
                    class="font-mono text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-mono-borderLight dark:border-mono-borderDark"
                  >
                    {{ tech }}
                  </span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </app-modal-dialog>
  `
})
export class StackModalComponent {
  readonly isOpen = input<boolean>(false);
  readonly categories = input.required<readonly StackCategory[]>();
  readonly closed = output<void>();
}
