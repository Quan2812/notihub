import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-detail',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent {
  constructor(
    private router: Router
  ) {}
  goToList(): void {
      this.router.navigate(['/campaign/list']);
  }

  updateCampaign(): void {
      this.router.navigate(['/campaign/update']);
  }
}
