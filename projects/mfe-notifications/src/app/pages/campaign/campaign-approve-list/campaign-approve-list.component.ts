import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-approve-list',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-approve-list.component.html',
  styleUrls: ['./campaign-approve-list.component.css']
})
export class CampaignApproveListComponent {
  constructor(
    private router: Router
  ) {}

  goToDetail(): void {
      this.router.navigate(['/campaign/approve/detail']);
  }
}
