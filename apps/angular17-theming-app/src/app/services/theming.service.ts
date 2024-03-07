import { Injectable, computed, effect, signal } from '@angular/core';
import { ThemeInfix, ThemePrefix, ThemeSuffix } from './theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {


  constructor() {
    //Applies user's theme preference
    this.windowTheme();

    //Applies user's theme preference on theme change
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
    return (
      this.themePrefix() + '-' + this.themeInfix() + '-' + this.themeSuffix
    );
  });

  themeSuffix = ThemeSuffix.theme;
  themeInfix = signal<ThemeInfix>(ThemeInfix.light);
  themePrefix = signal<ThemePrefix>(ThemePrefix.orange);


  windowTheme() {
    // Checks if browser has a theme preference
    if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? this.themeInfix.set(ThemeInfix.dark)
        : this.themeInfix.set(ThemeInfix.light);
    } else{
      this.themeInfix.set(ThemeInfix.dark)
    }
  }
}
