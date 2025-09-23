import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-campaign-report',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-report.component.html',
  styleUrls: ['./campaign-report.component.css']
})
export class CampaignReportComponent {
}
