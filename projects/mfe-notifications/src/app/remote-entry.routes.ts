import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'mfe-notifications-entry',
  standalone: true,
  template: `
    <section class="p-4">
      <h2>Notifications MicroFE</h2>
      <p>Remote chạy OK. Sẽ map UI theo Figma sau.</p>
    </section>
  `
})
export class RemoteEntryComponent {}

const routes: Routes = [
  { path: '', component: RemoteEntryComponent },
];

export default routes;
