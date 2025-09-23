import { Routes } from '@angular/router';
import { ListTemplateComponent } from './pages/template/template-list/list-template.component';
import { CreateTemplateComponent } from './pages/template/create-template/create-template.component';
import { TEMPLATE_ROUTES } from './pages/template/template.routes';
import { CAMPAIGN_ROUTES } from './pages/campaign/campaign.routes';
import { REPORT_ROUTES } from './pages/report/reports.routes';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'template/list', pathMatch: 'full' },

      // mount các cụm route đã định nghĩa sẵn
      { path: 'template', children: TEMPLATE_ROUTES },
      { path: 'campaign', children: CAMPAIGN_ROUTES },
      { path: 'reports',  children: REPORT_ROUTES },

      // optional: fallback trong remote
      { path: '**', redirectTo: 'template/list' },
    ],
  },
];

export default routes;

