import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent {
  constructor(
    private router: Router
  ) {}

  goToDetail(): void {
      this.router.navigate(['/campaign/detail']);
  }
}
