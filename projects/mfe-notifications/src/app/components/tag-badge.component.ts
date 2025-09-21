import { Component, Input } from '@angular/core';

@Component({
  selector: 'noti-tag',
  standalone: true,
  template: `<span class="tag">{{label}}</span>`,
  styles: [`
    .tag { display: inline-block; padding: 2px 8px; background: var(--muted); border-radius: 999px; font-size: 12px; color: var(--subtext); }
  `]
})
export class TagBadgeComponent { @Input() label = ''; }
