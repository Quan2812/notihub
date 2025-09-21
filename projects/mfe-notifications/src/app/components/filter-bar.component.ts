import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'noti-filter-bar',
  standalone: true,
  template: `
    <div class="bar">
      <select [value]="channel" (change)="onCh($event)">
        <option value="">All channels</option>
        <option value="push">Push</option>
        <option value="inbox">Inbox</option>
        <option value="email">Email</option>
        <option value="sms">SMS</option>
      </select>
      <select [value]="status" (change)="onSt($event)">
        <option value="">All status</option>
        <option value="draft">Draft</option>
        <option value="scheduled">Scheduled</option>
        <option value="sent">Sent</option>
        <option value="failed">Failed</option>
      </select>
      <input class="q" [value]="q" (input)="onQ($event)" placeholder="Search title/summary..."/>
    </div>
  `,
  styles: [`
    .bar { display: flex; gap: var(--sp-3); background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius); padding: var(--sp-3); }
    select, .q { height: 36px; border: 1px solid var(--border); border-radius: 8px; padding: 0 var(--sp-3); outline: none; }
    .q { min-width: 240px; flex: 1; }
  `]
})
export class FilterBarComponent {
  @Input() channel = '';
  @Input() status = '';
  @Input() q = '';
  @Output() change = new EventEmitter<{channel:string,status:string,q:string}>();
  onCh(e: any) { this.channel = e.target.value; this.emit(); }
  onSt(e: any) { this.status = e.target.value; this.emit(); }
  onQ (e: any) { this.q = e.target.value; this.emit(); }
  private emit() { this.change.emit({ channel: this.channel, status: this.status, q: this.q }); }
}
