import { Component, Input } from '@angular/core';

@Component({
  selector: 'noti-empty',
  standalone: true,
  template: `
    <div class="empty">
      <div class="icon">🗒️</div>
      <h3>{{title}}</h3>
      <p>{{subtitle}}</p>
    </div>
  `,
  styles: [`
    .empty { border: 1px dashed var(--border); border-radius: var(--radius);
      padding: var(--sp-8); background: #fff; text-align: center; color: var(--subtext); }
    .icon { font-size: 42px; margin-bottom: var(--sp-4); }
    h3 { color: var(--text); margin-bottom: var(--sp-2); }
  `]
})
export class EmptyStateComponent {
  @Input() title = 'No data';
  @Input() subtitle = 'Try adjusting your filters';
}
