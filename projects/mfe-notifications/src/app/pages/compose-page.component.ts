import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'noti-compose-page',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="wrap">
      <h2>Create Notification</h2>
      <form class="form" (submit)="$event.preventDefault()">
        <label>Title<input [(ngModel)]="title" name="title" /></label>
        <label>Summary<textarea [(ngModel)]="summary" name="summary" rows="5"></textarea></label>
        <label>Channel
          <select [(ngModel)]="channel" name="channel">
            <option value="push">Push</option>
            <option value="inbox">Inbox</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </label>
        <div class="actions">
          <button type="button">Save Draft</button>
          <button class="primary" type="submit">Schedule</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .wrap { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--sp-6); max-width: 880px; }
    .form { display:grid; gap: var(--sp-4); }
    input, textarea, select { width: 100%; height: 40px; padding: 0 var(--sp-3); border: 1px solid var(--border); border-radius: 10px; outline: none; }
    textarea { height: auto; padding: var(--sp-3); }
    label { display:grid; gap: var(--sp-2); color: var(--subtext); }
    .actions { display:flex; gap: var(--sp-3); justify-content:flex-end; }
    .primary { background: var(--primary); color: var(--primary-ink); border: none; padding: 0 var(--sp-4); height: 40px; border-radius: 10px; cursor: pointer; }
    button { border: 1px solid var(--border); background: var(--surface); height: 40px; padding: 0 var(--sp-4); border-radius: 10px; cursor: pointer; }
  `]
})
export class ComposePageComponent {
  title = ''; summary = ''; channel: any = 'inbox';
}
