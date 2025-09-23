import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TEMPLATE_TEXTS } from '../../../../core/constants/template-texts';

@Component({
  selector: 'app-template-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './template-step1.component.html',
  styleUrls: ['./template-step1.component.css']
})
export class TemplateStep1Component {
  @Input() formGroup!: FormGroup;
  @Input() notificationTypes!: string[];
  @Input() templatesTypes!: string[];
  @Input() businessTypes!: string[];
  @Output() next = new EventEmitter<void>();

  TEXTS = TEMPLATE_TEXTS;

  onContinue() {
    this.next.emit();
  }
}
