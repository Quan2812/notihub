import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-campaign-step3',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './campaign-step3.component.html',
  styleUrls: ['../campaign-create.component.css']
})
export class CampaignStep3Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  onContinue() {
    this.next.emit();
  }

  onBack() {
    this.back.emit();
  }
}
