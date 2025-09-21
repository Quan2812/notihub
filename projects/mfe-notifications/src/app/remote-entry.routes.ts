import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';
import { FeedPageComponent } from './pages/feed-page.component';
import { DetailPageComponent } from './pages/detail-page.component';
import { ComposePageComponent } from './pages/compose-page.component';
import { AnalyticsPageComponent } from './pages/analytics-page.component';
import { SettingsPageComponent } from './pages/settings-page.component';
import { NotFoundPageComponent } from './pages/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'feed', pathMatch: 'full' },
      { path: 'feed', component: FeedPageComponent },
      { path: 'detail/:id', component: DetailPageComponent },
      { path: 'compose', component: ComposePageComponent },
      { path: 'analytics', component: AnalyticsPageComponent },
      { path: 'settings', component: SettingsPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ]
  }
];

export default routes;
