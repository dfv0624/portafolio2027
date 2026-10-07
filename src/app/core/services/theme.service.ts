import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private readonly isDarkMode = signal<boolean>(false);

  readonly isDark = this.isDarkMode.asReadonly();
  readonly currentThemeLabel = computed(() => (this.isDarkMode() ? 'Light' : 'Dark'));

  constructor() {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      const hasMatchMedia = typeof window.matchMedia === 'function';
      const hasLocalStorage = typeof localStorage !== 'undefined';
      const savedTheme = hasLocalStorage ? localStorage.getItem('theme') : null;
      const prefersDark = hasMatchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false;
      const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;

      this.isDarkMode.set(initialDark);
      this.applyThemeToDocument(initialDark);

      if (hasMatchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener?.('change', (e) => {
          if (hasLocalStorage && !localStorage.getItem('theme')) {
            this.isDarkMode.set(e.matches);
            this.applyThemeToDocument(e.matches);
          }
        });
      }
    }
  }

  toggleTheme(): void {
    const nextDark = !this.isDarkMode();
    this.isDarkMode.set(nextDark);

    if (isPlatformBrowser(this.platformId)) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', nextDark ? 'dark' : 'light');
      }
      this.applyThemeToDocument(nextDark);
    }
  }

  private applyThemeToDocument(dark: boolean): void {
    const root = this.document?.documentElement;
    if (!root) {
      return;
    }
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
