import { Injectable, computed, effect, signal } from '@angular/core';
import { ThemeInfix, ThemePrefix, ThemeSuffix } from './theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor() {
    this.windowTheme();
    effect(() => {
      document.body.classList.length === 0
        ? document.body.classList.add(this.theme())
        : document.body.classList.replace(
            document.body.classList[0],
            this.theme()
          );
    });
  }

  theme = computed(() => {
    console.log('theme', this.themePrefix(), this.themeInfix(), this.themeSuffix);
    return this.themePrefix() + this.themeInfix() + this.themeSuffix;
  });

  themeSuffix = ThemeSuffix.theme;
  themeInfix = signal<ThemeInfix>(ThemeInfix.light);
  themePrefix = signal<ThemePrefix>(ThemePrefix.orange);

  windowTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? this.themeInfix.set(ThemeInfix.dark)
      : this.themeInfix.set(ThemeInfix.light);
  }
}
