import { Injectable, signal, effect, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private readonly STORAGE_KEY = 'dark-mode';

  private _isDarkMode = signal(false);
  public readonly isDarkMode = this._isDarkMode.asReadonly();

  private platformId: Object = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      this._isDarkMode.set(isCurrentlyDark);

      effect(() => {
        const isDark = this._isDarkMode();
        const html = document.documentElement;

        if (isDark) {
          html.classList.add('dark');
          localStorage.setItem(this.STORAGE_KEY, 'true');
        } else {
          html.classList.remove('dark');
          localStorage.setItem(this.STORAGE_KEY, 'false');
        }
      });
    }
  }

  toggleDarkMode(enable: boolean): void {
    this._isDarkMode.set(enable);
  }
}