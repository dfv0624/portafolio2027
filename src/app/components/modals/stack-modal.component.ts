import { Component, computed, input, output, signal } from '@angular/core';
import { StackCategory } from '../../core/models/portfolio.model';
import { ModalDialogComponent } from './modal-dialog.component';
import { TechPillComponent } from '../tech-pill/tech-pill.component';

interface EnrichedStackCategory extends StackCategory {
  readonly layerNumber: string;
  readonly layerSubtitle: string;
  readonly shortName: string;
}

const LAYER_CONFIG: Record<string, { layerNumber: string; layerSubtitle: string; shortName: string }> = {
  'Front-End & CMS': {
    layerNumber: '01',
    layerSubtitle: 'CAPA 01 // INTERFAZ & CLIENTE',
    shortName: 'Front-End & CMS'
  },
  'APIs & Backend': {
    layerNumber: '02',
    layerSubtitle: 'CAPA 02 // LÓGICA & PERSISTENCIA',
    shortName: 'APIs & Backend'
  },
  'AI Automation & n8n': {
    layerNumber: '03',
    layerSubtitle: 'CAPA 03 // AGENTES IA & WORKFLOWS',
    shortName: 'IA & Automatización'
  },
  'Analítica, DevOps & Calidad': {
    layerNumber: '04',
    layerSubtitle: 'CAPA 04 // OBSERVABILIDAD & CI/CD',
    shortName: 'DevOps & Calidad'
  }
};

@Component({
  selector: 'app-stack-modal',
  imports: [ModalDialogComponent, TechPillComponent],
  template: `
    <app-modal-dialog
      [isOpen]="isOpen()"
      headerLabel="// 02 Arquitectura & Stack Técnico"
      titleId="stack-modal-title"
      (closed)="closed.emit()"
    >
      <div class="space-y-5 font-sans max-h-[65vh] overflow-y-auto pr-2">
        <!-- Barra superior de filtro / navegación por capas -->
        <nav
          class="flex flex-wrap items-center gap-1.5 pb-3 border-b border-mono-borderLight dark:border-mono-borderDark"
          aria-label="Filtrar capas arquitectónicas"
        >
          <button
            type="button"
            (click)="activeFilter.set(null)"
            [class]="activeFilter() === null
              ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-transparent shadow-2xs font-semibold'
              : 'text-mono-muted hover:text-neutral-900 dark:hover:text-neutral-100 border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight dark:bg-mono-surfaceDark'"
            class="px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
          >
            Todas las Capas (4)
          </button>

          @for (cat of enrichedCategories(); track cat.title) {
            <button
              type="button"
              (click)="toggleFilter(cat.title)"
              [class]="activeFilter() === cat.title
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border-transparent shadow-2xs font-semibold'
                : 'text-mono-muted hover:text-neutral-900 dark:hover:text-neutral-100 border-mono-borderLight dark:border-mono-borderDark bg-mono-surfaceLight dark:bg-mono-surfaceDark'"
              class="px-2.5 py-1 rounded-full border text-[11px] font-mono transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              {{ cat.layerNumber }} • {{ cat.shortName }}
            </button>
          }
        </nav>

        <!-- Pipeline Arquitectónico Continuo (Sin cajas cuadradas rígidas) -->
        <div class="relative pl-5 sm:pl-7 border-l-2 border-neutral-300/80 dark:border-neutral-700/80 ml-2.5 sm:ml-3 space-y-7 sm:space-y-8 pt-1 pb-2">
          @for (category of displayedCategories(); track category.title) {
            <section class="group relative transition-all duration-300">
              <!-- Nodo conector en la guía técnica -->
              <span
                class="absolute -left-[27px] sm:-left-[35px] top-1 w-3.5 h-3.5 rounded-full bg-mono-surfaceLight dark:bg-mono-surfaceDark border-2 border-neutral-900 dark:border-neutral-100 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100"
                aria-hidden="true"
              >
                <span class="w-1 h-1 rounded-full bg-neutral-900 dark:bg-neutral-100 group-hover:bg-white dark:group-hover:bg-neutral-900 transition-colors"></span>
              </span>

              <div class="space-y-2">
                <!-- Encabezado de la capa -->
                <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 class="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                    <span class="font-mono text-xs text-mono-muted font-normal">
                      [{{ category.layerNumber }}]
                    </span>
                    {{ category.title }}
                  </h3>
                  <span class="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-mono-muted">
                    {{ category.layerSubtitle }}
                  </span>
                </div>

                <!-- Descripción técnica de la arquitectura -->
                <p class="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans max-w-3xl">
                  {{ category.description }}
                </p>

                <!-- Constelación fluida de tecnologías oficiales -->
                <div class="pt-2">
                  <span class="block font-mono text-[10px] text-mono-muted uppercase tracking-wider mb-2">
                    // Tecnologías & Herramientas
                  </span>
                  <div class="flex flex-wrap items-center gap-1.5">
                    @for (tech of category.technologies; track tech) {
                      <app-tech-pill [label]="tech" />
                    }
                  </div>
                </div>
              </div>
            </section>
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

  readonly activeFilter = signal<string | null>(null);

  protected readonly enrichedCategories = computed<readonly EnrichedStackCategory[]>(() => {
    return this.categories().map((cat, index) => {
      const config = LAYER_CONFIG[cat.title] ?? {
        layerNumber: String(index + 1).padStart(2, '0'),
        layerSubtitle: `CAPA ${String(index + 1).padStart(2, '0')} // ARQUITECTURA`,
        shortName: cat.title
      };
      return {
        ...cat,
        ...config
      };
    });
  });

  protected readonly displayedCategories = computed<readonly EnrichedStackCategory[]>(() => {
    const filter = this.activeFilter();
    const all = this.enrichedCategories();
    if (!filter) return all;
    return all.filter((cat) => cat.title === filter);
  });

  protected toggleFilter(title: string): void {
    this.activeFilter.update((current) => (current === title ? null : title));
  }
}
