export interface NavItem {
  label: string;
  icon?: string;
  route?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: 'Quản lý Template',
    icon: 'home',
    children: [
      { label: 'Tạo template', route: '/template/create' },
      { label: 'Danh sách template', route: '/template/list' },
    ],
  },
  {
    label: 'Quản lý Campaign',
    icon: 'home',
    children: [
      { label: 'Tạo campaign', route: 'campaign/create' },
      { label: 'Danh sách campaign', route: '/campaign/list' },
      { label: 'Danh sách chờ duyệt', route: '/campaign/approve/list' },
    ],
  },
  {
    label: 'Báo cáo quản trị',
    icon: 'home',
    children: [
      { label: 'Báo cáo theo Campaign', route: '/reports/campaign' },
    ],
  },
  {
    label: 'Cài đặt',
    icon: 'home',
    route: '/settings',
  },
  {
    label: 'Side menu',
    icon: 'home',
    route: '/sidemenu',
  },
];
