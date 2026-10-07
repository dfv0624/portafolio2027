import { Component, input, output } from '@angular/core';
import { MenuItem, ModalType } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-navigation-menu',
  host: {
    class: 'w-full block'
  },
  template: `
    <nav aria-label="Navegación principal del portafolio" class="space-y-1 pt-2 font-mono">
      <ul class="space-y-1 list-none p-0 m-0">
        @for (item of items(); track item.id) {
          <li>
            <button
              type="button"
              (click)="selectModal.emit(item.id)"
              (mouseenter)="hoverPreview.emit(item.id)"
              (focus)="hoverPreview.emit(item.id)"
              aria-haspopup="dialog"
              class="menu-item w-full text-left group py-2.5 sm:py-3 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded border border-transparent hover:border-mono-borderLight dark:hover:border-mono-borderDark hover:bg-mono-surfaceLight dark:hover:bg-mono-surfaceDark transition-all flex items-center justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
              [class.bg-mono-surfaceLight]="activePreviewId() === item.id"
              [class.dark:bg-mono-surfaceDark]="activePreviewId() === item.id"
              [class.border-mono-borderLight]="activePreviewId() === item.id"
              [class.dark:border-mono-borderDark]="activePreviewId() === item.id"
            >
              <div class="flex items-center gap-3 sm:gap-4">
                <span
                  class="text-xs text-mono-muted group-hover:text-black dark:group-hover:text-white transition-colors"
                  [class.text-black]="activePreviewId() === item.id"
                  [class.dark:text-white]="activePreviewId() === item.id"
                >
                  {{ item.number }}
                </span>
                <span
                  class="text-lg sm:text-xl md:text-2xl font-sans font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:translate-x-1.5 transition-transform duration-200"
                >
                  {{ item.title }}
                </span>
              </div>
              <span
                class="text-xs text-mono-muted group-hover:text-black dark:group-hover:text-white transition-colors font-mono shrink-0 ml-2"
                [class.text-black]="activePreviewId() === item.id"
                [class.dark:text-white]="activePreviewId() === item.id"
              >
                {{ item.actionLabel }}
              </span>
            </button>
          </li>
        }
      </ul>
    </nav>
  `
})
export class NavigationMenuComponent {
  readonly items = input.required<readonly MenuItem[]>();
  readonly activePreviewId = input<ModalType>('projects');

  readonly selectModal = output<ModalType>();
  readonly hoverPreview = output<ModalType>();
}
