import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav aria-label="breadcrumb" class="breadcrumb-container">
      <ol class="breadcrumb">
        <li *ngFor="let crumb of (breadcrumbService.breadcrumbs$ | async); let last = last"
            class="breadcrumb-item"
            [class.active]="last">
          <a *ngIf="!last" [routerLink]="crumb.url">{{ crumb.label }}</a>
          <span *ngIf="last">{{ crumb.label }}</span>
        </li>
      </ol>
    </nav>
  `,
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  constructor(public breadcrumbService: BreadcrumbService) {}
}
