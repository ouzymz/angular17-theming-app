import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeInfix, ThemePrefix } from './services/theme.model';
import { ThemingService } from './services/theming.service';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardComponent, CustomCardComponent } from '@angular17-theming-app/ui';

@Component({
  standalone: true,
  imports: [RouterModule,MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonToggleModule,
    CustomCardComponent,CardComponent],
  selector: 'angular17-theming-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-angular-theming';
  ThemePrefix = ThemePrefix;
  ThemeInfix = ThemeInfix;
  themeService = inject(ThemingService);
}
