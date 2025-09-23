import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-template-detail',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent {
  constructor(
    private router: Router
  ) {}

  goToListTemplate(): void {
      this.router.navigate(['/template/list']);
  }

  goToUpdate(): void {
      this.router.navigate(['/template/update']);
  }
}
