export type NotiChannel = 'push' | 'inbox' | 'email' | 'sms';
export type NotiStatus = 'draft' | 'scheduled' | 'sent' | 'failed';

export interface NotificationItem {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  updatedAt?: string;
  channel: NotiChannel;
  tags: string[];
  unread?: boolean;
  status: NotiStatus;
}

export interface AnalyticsSummary {
  sent: number;
  delivered: number;
  opened: number;
  ctr: number;
}
