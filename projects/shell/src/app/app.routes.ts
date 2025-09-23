import { Routes, provideRouter, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('notifications/Routes').then(m => m.default),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

export const APP_PROVIDERS = [provideRouter(APP_ROUTES)];
