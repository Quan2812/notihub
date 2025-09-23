import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-step2',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './template-step2.component.html',
  styleUrls: ['./template-step2.component.css']
})
export class TemplateStep2Component {
  @Output() next = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();

  onContinue() {
    this.next.emit();
  }

  onBack() {
    this.back.emit();
  }
}
