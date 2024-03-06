import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeInfix, ThemePrefix } from './services/theme.model';
import { ThemingService } from './services/theming.service';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule],
  selector: 'angular17-theming-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-angular-theming';
  ThemePrefix = ThemePrefix;
  ThemeInfix = ThemeInfix;
  themeService = inject(ThemingService);
  
  changeTheme(theme: string) {
    this.themeService.themePrefix.set(theme as ThemePrefix);
  }

  isThemeDark(isDark: string){
    this.themeService.themeInfix.set(isDark as ThemeInfix);
  }
}
