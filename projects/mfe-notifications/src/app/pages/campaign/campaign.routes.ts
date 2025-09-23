import { Routes } from '@angular/router';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignApproveListComponent } from './campaign-approve-list/campaign-approve-list.component';
import { CampaignApproveDetailComponent } from './campaign-approve-detail/campaign-approve-detail.component';
import { CampaignCreateComponent } from './campaign-create/campaign-create.component';
import { CampaignUpdateComponent } from './campaign-update/campaign-update.component';

export const CAMPAIGN_ROUTES: Routes = [
  {
    path: 'list',
    component: CampaignListComponent,
    data: { breadcrumb: [
      { label: 'Quản lý Campaign', url: ''},
      { label: 'Danh sách Campaign', url: 'campaign/list' }
    ]}
  },
  {
    path: 'detail',
    component: CampaignDetailComponent,
    data: { breadcrumb: [
      { label: 'Quản lý Campaign', url: ''},
      { label: 'Danh sách Campaign', url: 'campaign/list' },
      { label: 'Campaign', url: 'campaign/detail' }
    ]}
  },
  {
    path: 'approve/list',
    component: CampaignApproveListComponent,
    data: { breadcrumb: [
      { label: 'Quản lý Campaign', url: ''},
      { label: 'Danh sách chờ duyệt', url: 'campaign/approve/list' }
    ]}
  },
  {
    path: 'approve/detail',
    component: CampaignApproveDetailComponent,
    data: { breadcrumb: [
      { label: 'Quản lý Campaign', url: ''},
      { label: 'Danh sách chờ duyệt', url: 'campaign/approve/list' },
      { label: 'Campaign', url: 'campaign/approve/detail' }
    ]}
  },
  {
    path: 'create',
    component: CampaignCreateComponent,
    data: { breadcrumb: [
      { label: 'Quản lý Campaign', url: ''},
      { label: 'Tạo Campaign', url: 'campaign/create' }
    ]}
  },
  {
    path: 'update',
    component: CampaignUpdateComponent,
    data: { breadcrumb: [
      { label: 'Quản lý Campaign', url: ''},
      { label: 'Danh sách Campaign', url: 'campaign/list' },
      { label: 'Campaign', url: 'campaign/detail'},
      { label: 'Update', url: 'campaign/update'}
    ]}
  },
];
