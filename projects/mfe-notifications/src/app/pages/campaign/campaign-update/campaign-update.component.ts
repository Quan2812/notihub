import { Component } from '@angular/core';
import { CampaignCreateComponent } from '../campaign-create/campaign-create.component';

@Component({
  selector: 'app-campaign-update',
  standalone: true,
  imports: [CampaignCreateComponent],
  templateUrl: './campaign-update.component.html',
  styleUrls: ['./campaign-update.component.css']
})
export class CampaignUpdateComponent {}
