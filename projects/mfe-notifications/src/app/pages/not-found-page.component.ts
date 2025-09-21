import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmptyStateComponent } from '../components/empty-state.component'; 

@Component({
  selector: 'noti-not-found',
  standalone: true,
  imports: [RouterLink, EmptyStateComponent],
  template: `
    <noti-empty title="404" subtitle="Page not found"></noti-empty>
    <p><a routerLink="/feed">Back to Feed</a></p>
  `
})
export class NotFoundPageComponent {}
