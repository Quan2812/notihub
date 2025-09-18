import { Routes, provideRouter } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'shell-home',
  standalone: true,
  template: `
    <section class="p-4">
      <h1>Noti-Hub Shell</h1>
      <nav><a routerLink="/notifications">Go to Notifications MicroFE</a></nav>
    </section>
  `
})
export class HomeComponent {}

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'notifications',
    // MF standalone: './Routes' trả về default = Routes[]
    loadChildren: () => import('notifications/Routes').then(m => m.default),
  },
  { path: '**', redirectTo: '' },
];

export const APP_PROVIDERS = [provideRouter(APP_ROUTES)];
