import { Routes } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { ListTemplateComponent } from './template-list/list-template.component';
import { TemplateDetailComponent } from './template-detail/template-detail.component';
import { TemplateUpdateComponent } from './template-update/template-update.component';

export const TEMPLATE_ROUTES: Routes = [
  {
    path: 'create',
    component: CreateTemplateComponent,
    data: { breadcrumb: [
      { label: 'Quản lý template', url: ''},
      { label: 'Tạo template', url: 'template/create' }
    ]}
  },
  {
    path: 'list',
    component: ListTemplateComponent,
    data: { breadcrumb: [
      { label: 'Quản lý template', url: '' },
      { label: 'Danh sách template', url: 'template/list' }
    ] }
  },
  {
    path: 'detail',
    component: TemplateDetailComponent,
    data: { breadcrumb: [
      { label: 'Quản lý template', url: '' },
      { label: 'Danh sách template', url: 'template/list' },
      { label: 'Template', url: 'template/detail' }
    ] }
  },
  {
    path: 'update',
    component: TemplateUpdateComponent,
    data: { breadcrumb: [
      { label: 'Quản lý template', url: '' },
      { label: 'Danh sách template', url: 'template/list' },
      { label: 'Sửa template', url: 'template/update' }
    ] }
  }
];
