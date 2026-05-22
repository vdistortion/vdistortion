import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'system' | 'dark' | 'purple';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly mediaQuery = this.isBrowser
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

  public readonly theme = signal<Theme>(this.loadTheme());

  constructor() {
    if (this.isBrowser) {
      this.mediaQuery?.addEventListener('change', () => {
        if (this.theme() === 'system') {
          this.applyTheme('system');
        }
      });
    }
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
    this.applyTheme(theme);
  }

  private loadTheme(): Theme {
    let savedTheme: Theme | null = null;
    if (this.isBrowser) {
      savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    }
    const theme = savedTheme ?? 'system';
    this.applyTheme(theme);
    return theme;
  }

  private applyTheme(theme: Theme): void {
    const html = this.document.documentElement;
    if (theme === 'system') {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', theme);
    }
  }
}
