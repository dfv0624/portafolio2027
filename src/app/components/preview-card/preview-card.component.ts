import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import {
  cabinet,
  exploded,
  patch,
  phone,
  riffle,
  terminal,
  terrain,
  type Figure
} from '@lucasmarkes/hairline';
import { PreviewData } from '../../core/models/portfolio.model';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-preview-card',
  host: {
    class: 'w-full flex items-center justify-center'
  },
  template: `
    <div class="w-full max-w-xl mx-auto flex items-center justify-center">
      @if (displayedData(); as data) {
        <!-- Contenedor Interactivo Hairline Figure (Transparente y Centrado) -->
        <div
          class="relative w-full aspect-[5/4] flex items-center justify-center cursor-crosshair select-none bg-transparent mx-auto"
        >
          <!-- Contenedor donde Hairline monta la figura isométrica -->
          <div
            #stageRef
            class="hairline-stage w-full h-full flex items-center justify-center transition-opacity duration-300 mx-auto"
            [style.opacity]="isTransitioning() ? '0.2' : '1'"
            [style.transform]="isTransitioning() ? 'scale(0.97)' : 'scale(1)'"
          ></div>
        </div>
      }
    </div>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin: auto;
    }
    :host ::ng-deep .hairline-stage {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin: auto;
    }
    :host ::ng-deep .hairline-stage svg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
      display: block;
    }
    :host ::ng-deep [data-hairline-live],
    :host ::ng-deep span[data-hairline-live],
    :host ::ng-deep span[aria-live] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      position: absolute !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
    }
  `
})
export class PreviewCardComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly themeService = inject(ThemeService);

  readonly preview = input.required<PreviewData>();

  private readonly stageRef = viewChild<ElementRef<HTMLElement>>('stageRef');

  protected readonly displayedData = signal<PreviewData | null>(null);
  protected readonly isTransitioning = signal<boolean>(false);

  private activeFigure: Figure | null = null;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.cleanupActiveFigure();
    });

    // Handle preview changes
    effect(() => {
      const current = this.preview();
      if (!this.displayedData()) {
        this.displayedData.set(current);
        this.scheduleFigureMount(current);
        return;
      }

      this.isTransitioning.set(true);
      setTimeout(() => {
        this.displayedData.set(current);
        this.scheduleFigureMount(current);
        this.isTransitioning.set(false);
      }, 150);
    });

    // React to theme changes
    effect(() => {
      const isDark = this.themeService.isDark();
      if (this.activeFigure) {
        this.activeFigure.update({ theme: isDark ? 'dark' : 'light' });
      }
    });
  }

  private scheduleFigureMount(data: PreviewData): void {
    if (
      !isPlatformBrowser(this.platformId) ||
      typeof window === 'undefined' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return;
    }

    setTimeout(() => {
      const hostEl = this.stageRef()?.nativeElement;
      if (!hostEl) {
        return;
      }

      this.cleanupActiveFigure();
      hostEl.innerHTML = '';

      const isDark = this.themeService.isDark();
      const options = {
        intensity: 0.7,
        theme: isDark ? ('dark' as const) : ('light' as const),
        label: data.alt
      };

      try {
        switch (data.figureName) {
          case 'riffle':
            this.activeFigure = riffle(hostEl, options);
            break;
          case 'cabinet':
            this.activeFigure = cabinet(hostEl, options);
            break;
          case 'phone':
            this.activeFigure = phone(hostEl, options);
            break;
          case 'terrain':
            this.activeFigure = terrain(hostEl, options);
            break;
          case 'exploded':
            this.activeFigure = exploded(hostEl, options);
            break;
          case 'terminal':
            this.activeFigure = terminal(hostEl, options);
            break;
          case 'patch':
            this.activeFigure = patch(hostEl, options);
            break;
          default:
            this.activeFigure = riffle(hostEl, options);
            break;
        }
      } catch {
        // Fallback gracefully if canvas/svg initialization is interrupted
      }
    }, 50);
  }

  private cleanupActiveFigure(): void {
    if (this.activeFigure) {
      try {
        this.activeFigure.destroy();
      } catch {
        // Safe destroy
      }
      this.activeFigure = null;
    }
  }
}
