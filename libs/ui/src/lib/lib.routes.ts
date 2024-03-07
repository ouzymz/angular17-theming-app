import { Route } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

export const uiRoutes: Route[] = [
  { path: 'material', component: CardComponent },
  { path: 'custom', component: CustomCardComponent },
];
