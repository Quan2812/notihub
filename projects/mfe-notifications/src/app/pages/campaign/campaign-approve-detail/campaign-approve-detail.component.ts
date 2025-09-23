import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-approve-detail',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-approve-detail.component.html',
  styleUrls: ['./campaign-approve-detail.component.css']
})
export class CampaignApproveDetailComponent {
  constructor(
    private router: Router
  ) {}
}
