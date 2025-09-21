import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'noti-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="hdr">
      <div class="left">
        <h3>Noti Hub</h3>
        <nav class="tabs">
          <a routerLink="/feed" routerLinkActive="active">Feed</a>
          <a routerLink="/compose" routerLinkActive="active">Compose</a>
          <a routerLink="/analytics" routerLinkActive="active">Analytics</a>
          <a routerLink="/settings" routerLinkActive="active">Settings</a>
        </nav>
      </div>
      <div class="right">
        <input class="search" placeholder="Search notifications..."/>
      </div>
    </header>
  `,
  styles: [`
    .hdr { height: 64px; padding: 0 var(--sp-6); display: flex; align-items: center; justify-content: space-between; background: var(--surface); border-bottom: 1px solid var(--border); }
    .left { display: flex; align-items: center; gap: var(--sp-6); }
    .tabs a { padding: var(--sp-2) var(--sp-3); border-radius: 8px; color: var(--subtext); }
    .tabs a.active { background: var(--primary); color: var(--primary-ink); }
    .search { height: 36px; padding: 0 var(--sp-3); border: 1px solid var(--border); border-radius: 10px; outline: none; }
  `]
})
export class HeaderComponent {}
