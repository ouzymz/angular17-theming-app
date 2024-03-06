import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: 'card', loadChildren: async () => (await import('@angular17-theming-app/ui')).uiRoutes},
];
