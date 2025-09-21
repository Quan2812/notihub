import { Component } from '@angular/core';
import { NgIf, DecimalPipe, PercentPipe } from '@angular/common';
import { MockDataService } from '../core/mock-data.service';

@Component({
  selector: 'noti-analytics-page',
  standalone: true,
  imports: [NgIf, PercentPipe, DecimalPipe],
  template: `
    <div class="cards">
      <div class="kpi"><div class="v">{{m.sent | number}}</div><div class="k">Sent</div></div>
      <div class="kpi"><div class="v">{{m.delivered | number}}</div><div class="k">Delivered</div></div>
      <div class="kpi"><div class="v">{{m.opened | number}}</div><div class="k">Opened</div></div>
      <div class="kpi"><div class="v">{{m.ctr | percent:'1.0-2'}}</div><div class="k">CTR</div></div>
    </div>
    <div class="panel">
      <h3>Chart Placeholder</h3>
      <p>Vị trí biểu đồ (line/bar) theo Figma – sẽ tích hợp sau.</p>
    </div>
  `,
  styles: [`
    .cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--sp-4); margin-bottom: var(--sp-6); }
    .kpi { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--sp-6); }
    .v { font-size: 28px; font-weight: 700; }
    .k { color: var(--subtext); }
    .panel { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--sp-6); }
    @media (max-width: 960px) { .cards { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 640px) { .cards { grid-template-columns: 1fr; } }
  `]
})
export class AnalyticsPageComponent {
  constructor(private data: MockDataService) {}

  get m() {
    return this.data.analytics();
  }
}

