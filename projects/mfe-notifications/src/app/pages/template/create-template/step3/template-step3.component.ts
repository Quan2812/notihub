import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-step3',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './template-step3.component.html',
  styleUrls: ['./template-step3.component.css']
})
export class TemplateStep3Component {
  @Output() back = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();

  onBack() {
    this.back.emit();
  }

  onSubmit() {
    this.submit.emit();
  }
}
