import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './campaign-step1.component.html',
  styleUrls: ['../campaign-create.component.css', './campaign-step1.component.css']
})
export class CampaignStep1Component implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() next = new EventEmitter<void>();
  chanelValue = 0;

  ngOnInit() {
    this.formGroup.get('chanel')?.valueChanges.subscribe(val => {
      this.chanelValue = val;
      console.log('chanel changed:', val);
    });
  }

  onContinue() {
    this.next.emit();
  }
}
