import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgForOf } from '@angular/common';
import { MockDataService } from '../core/mock-data.service';
import { TagBadgeComponent } from '../components/tag-badge.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'noti-detail-page',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink, TagBadgeComponent, DatePipe],
  template: `
    <a routerLink="/feed">← Back</a>
    <div *ngIf="vm as v; else notFound" class="card">
      <div class="head">
        <h2>{{v.title}}</h2>
        <span class="chip">{{v.channel}}</span>
      </div>
      <div class="sub">{{v.createdAt | date:'medium'}}</div>
      <div class="tags"><noti-tag *ngFor="let t of v.tags" [label]="t"/></div>
      <p class="content">{{v.summary}}</p>
    </div>
    <ng-template #notFound><p>Notification not found.</p></ng-template>
  `,
  styles: [`
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--sp-6); }
    .head { display:flex; align-items:center; justify-content: space-between; margin-bottom: var(--sp-2); }
    .sub { color: var(--subtext); margin-bottom: var(--sp-3); }
    .tags { display:flex; gap: var(--sp-2); margin-bottom: var(--sp-4); }
    .chip { text-transform: uppercase; font-size: 11px; padding: 2px 8px; border-radius: 999px; background: var(--muted); color: var(--subtext); }
    .content { line-height: 1.6; }
  `]
})
export class DetailPageComponent {
  vm: any;
  constructor(route: ActivatedRoute, data: MockDataService) {
    const id = route.snapshot.paramMap.get('id')!;
    this.vm = data.get(id);
  }
}
