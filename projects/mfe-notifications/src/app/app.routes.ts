import { Routes } from '@angular/router';
import { TEMPLATE_ROUTES } from './pages/template/template.routes';
import { CAMPAIGN_ROUTES } from './pages/campaign/campaign.routes';
import { REPORT_ROUTES } from './pages/report/reports.routes';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'template',
        children: TEMPLATE_ROUTES
      },
      {
        path: 'campaign',
        children: CAMPAIGN_ROUTES
      },
      {
         path: 'reports',
         children: REPORT_ROUTES
      },
      { path: '', redirectTo: 'templates/list', pathMatch: 'full' }
    ]
  },
];
