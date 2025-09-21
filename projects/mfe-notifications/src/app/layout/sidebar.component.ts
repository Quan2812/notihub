import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'noti-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="box">
      <h4 class="title">Navigation</h4>
      <nav class="nav">
        <a routerLink="/feed" routerLinkActive="on">📥  All</a>
        <a routerLink="/feed?filter=unread" routerLinkActive="on">✉️  Unread</a>
        <a routerLink="/feed?tag=promo" routerLinkActive="on">🏷️  Promo</a>
        <a routerLink="/feed?tag=security" routerLinkActive="on">🔐  Security</a>
        <a routerLink="/feed?channel=push" routerLinkActive="on">📲  Push</a>
        <a routerLink="/feed?channel=inbox" routerLinkActive="on">🗂️  Inbox</a>
        <a routerLink="/feed?channel=sms" routerLinkActive="on">📩  SMS</a>
      </nav>
    </div>
  `,
  styles: [`
    .box { padding: var(--sp-6); }
    .title { margin-bottom: var(--sp-4); color: var(--subtext); font-weight: 600; }
    .nav { display: grid; gap: var(--sp-2); }
    .nav a { padding: var(--sp-2) var(--sp-3); border-radius: 8px; color: var(--text); }
    .nav a.on { background: var(--muted); }
  `]
})
export class SidebarComponent {}
