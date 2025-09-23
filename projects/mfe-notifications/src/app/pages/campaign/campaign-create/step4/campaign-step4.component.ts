import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-campaign-step4',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-step4.component.html',
  styleUrls: ['../campaign-create.component.css']
})
export class CampaignStep4Component {
  @Output() back = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }
}
