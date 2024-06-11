import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.routes').then(r => r.authRoutes)
  },
  {
    path: 'users', loadChildren: () => import('./users/users.routes').then(r => r.usersRoutes)
  }
];
