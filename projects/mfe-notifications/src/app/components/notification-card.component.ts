import { Component, Input } from '@angular/core';
import { NotificationItem } from '../core/models';
import { RouterLink } from '@angular/router';
import { TagBadgeComponent } from './tag-badge.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'noti-card',
  standalone: true,
  imports: [RouterLink, TagBadgeComponent, DatePipe],
  template: `
    <a class="card" [routerLink]="['/detail', item.id]">
      <div class="left">
        <div class="title">{{item.title}}</div>
        <div class="summary">{{item.summary}}</div>
        <div class="meta">
          <noti-tag *ngFor="let t of item.tags" [label]="t"/>
        </div>
      </div>
      <div class="right">
        <span class="chip" [class.unread]="item.unread">{{item.channel}}</span>
        <span class="time">{{item.createdAt | date:'short'}}</span>
      </div>
    </a>
  `,
  styles: [`
    .card { display:flex; gap: var(--sp-4); padding: var(--sp-4); background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); align-items: center; justify-content: space-between; color: inherit; }
    .title { font-weight: 600; margin-bottom: 4px; }
    .summary { color: var(--subtext); font-size: 14px; }
    .meta { margin-top: var(--sp-2); display:flex; gap: var(--sp-2); flex-wrap: wrap; }
    .right { display:flex; flex-direction: column; align-items: flex-end; gap: var(--sp-2); }
    .chip { text-transform: uppercase; font-size: 11px; padding: 2px 8px; border-radius: 999px; background: var(--muted); color: var(--subtext); }
    .chip.unread { background: var(--primary); color: var(--primary-ink); }
    .time { color: var(--subtext); font-size: 12px; }
  `]
})
export class NotificationCardComponent {
  @Input({ required: true }) item!: NotificationItem;
}
