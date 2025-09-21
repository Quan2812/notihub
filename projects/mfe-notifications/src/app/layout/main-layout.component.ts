import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  selector: 'noti-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="layout">
      <aside class="side"><noti-sidebar/></aside>
      <main class="main">
        <noti-header/>
        <section class="content">
          <router-outlet/>
        </section>
      </main>
    </div>
  `,
  styles: [`
    .layout { display: grid; grid-template-columns: 260px 1fr; height: 100dvh; }
    .side { border-right: 1px solid var(--border); background: var(--surface); }
    .main { display: flex; flex-direction: column; }
    .content { padding: var(--sp-6); overflow: auto; height: calc(100dvh - 64px); }
    @media (max-width: 960px) {
      .layout { grid-template-columns: 1fr; }
      .side { display: none; }
    }
  `]
})
export class MainLayoutComponent {}
