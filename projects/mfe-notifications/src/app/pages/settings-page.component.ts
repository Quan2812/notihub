import { Component } from '@angular/core';

@Component({
  selector: 'noti-settings-page',
  standalone: true,
  template: `
    <div class="wrap">
      <h2>Settings</h2>
      <div class="card">
        <h3>Environments</h3>
        <p>Mapping remote URLs (dev/stg/prod) sẽ đặt ở shell manifest. Trang này để mô tả & test endpoints sau.</p>
      </div>
    </div>
  `,
  styles: [`
    .wrap { display: grid; gap: var(--sp-4); }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: var(--sp-6); }
  `]
})
export class SettingsPageComponent {}
