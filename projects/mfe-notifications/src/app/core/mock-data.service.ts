import { Injectable, signal } from '@angular/core';
import { NotificationItem, AnalyticsSummary } from './models';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private _data = signal<NotificationItem[]>([
    { id: 'N-24001', title: 'Khuyến mãi cuối tuần',
      summary: 'Giảm 20% phí chuyển tiền trong app.',
      createdAt: '2025-09-15T08:20:00Z', channel: 'inbox', tags: ['promo','banking'], unread: true, status: 'sent' },
    { id: 'N-24002', title: 'Bảo trì hệ thống',
      summary: 'Gián đoạn 0h-2h sáng ngày 20/09.',
      createdAt: '2025-09-16T10:10:00Z', channel: 'push', tags: ['system'], status: 'scheduled' },
    { id: 'N-24003', title: 'Xác thực giao dịch',
      summary: 'OTP của bạn là 98xx – không chia sẻ.',
      createdAt: '2025-09-16T11:45:00Z', channel: 'sms', tags: ['security'], status: 'sent' },
  ]);

  list() { return this._data.asReadonly(); }

  get(id: string) { return this._data().find(x => x.id === id) || null; }

  analytics(): AnalyticsSummary {
    return { sent: 13450, delivered: 13010, opened: 8740, ctr: 0.18 };
  }
}
