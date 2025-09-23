import { Routes } from '@angular/router';
import { CampaignReportComponent } from './campaign/campaign-report.component';

export const REPORT_ROUTES: Routes = [
  {
    path: 'campaign',
    component: CampaignReportComponent,
    data: { breadcrumb: [
      { label: 'Báo cáo', url: ''},
      { label: 'Báo cáo theo Campaign', url: 'reports/campaign' }
    ]}
  }
];
