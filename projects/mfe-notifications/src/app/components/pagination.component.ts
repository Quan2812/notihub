import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'noti-pagination',
  standalone: true,
  template: `
    <div class="pg">
      <button (click)="prev()" [disabled]="page<=1">Prev</button>
      <span>Page {{page}}</span>
      <button (click)="next()">Next</button>
    </div>
  `,
  styles: [`
    .pg { display: flex; align-items:center; gap: var(--sp-3); color: var(--subtext); }
    button { height: 32px; padding: 0 var(--sp-3); border: 1px solid var(--border); background: var(--surface); border-radius: 8px; cursor: pointer; }
    button:disabled { opacity: .4; cursor: default; }
  `]
})
export class PaginationComponent {
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();
  prev() { if (this.page>1) this.pageChange.emit(this.page-1); }
  next() { this.pageChange.emit(this.page+1); }
}
