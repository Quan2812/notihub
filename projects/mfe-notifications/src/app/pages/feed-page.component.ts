import { Component, computed, signal } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MockDataService } from '../core/mock-data.service';
import { NotificationCardComponent } from '../components/notification-card.component';
import { FilterBarComponent } from '../components/filter-bar.component';
import { EmptyStateComponent } from '../components/empty-state.component';
import { PaginationComponent } from '../components/pagination.component';

@Component({
  selector: 'noti-feed-page',
  standalone: true,
  imports: [NgIf, NgForOf, AsyncPipe, NotificationCardComponent, FilterBarComponent, EmptyStateComponent, PaginationComponent],
  template: `
    <div class="head">
      <h2>Notifications</h2>
      <button class="primary" routerLink="/compose">+ New</button>
    </div>

    <noti-filter-bar
      [channel]="channel()"
      [status]="status()"
      [q]="q()"
      (change)="onFilter($event)"/>

    <div class="grid" *ngIf="filtered().length; else empty">
      <noti-card *ngFor="let n of paged()" [item]="n"/>
    </div>

    <ng-template #empty>
      <noti-empty title="No notifications" subtitle="Try creating a new one or change your filters."/>
    </ng-template>

    <div class="foot">
      <noti-pagination [page]="page()" (pageChange)="page.set($event)"/>
    </div>
  `,
  styles: [`
    .head { display:flex; align-items:center; justify-content: space-between; margin-bottom: var(--sp-4); }
    .primary { height: 36px; padding: 0 var(--sp-4); background: var(--primary); color: var(--primary-ink); border: none; border-radius: 10px; cursor: pointer; }
    .grid { display: grid; grid-template-columns: 1fr; gap: var(--sp-3); margin-top: var(--sp-4); }
    .foot { margin-top: var(--sp-4); display:flex; justify-content:flex-end; }
  `]
})
export class FeedPageComponent {
  constructor(private data: MockDataService) {}
  raw = computed(() => this.data.list()());
  channel = signal('');
  status = signal('');
  q = signal('');
  page = signal(1);
  pageSize = 10;

  filtered = computed(() => {
    const q = this.q().toLowerCase();
    const ch = this.channel(); const st = this.status();
    return this.raw().filter(n =>
      (!ch || n.channel === ch) &&
      (!st || n.status === st) &&
      (!q  || n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q))
    );
  });

  paged = computed(() => {
    const start = (this.page()-1) * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });

  onFilter(e: {channel:string,status:string,q:string}) {
    this.channel.set(e.channel);
    this.status.set(e.status);
    this.q.set(e.q);
    this.page.set(1);
  }
}
