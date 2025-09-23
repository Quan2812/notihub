import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignStep1Component } from './step1/campaign-step1.component';
import { CampaignStep2Component } from './step2/campaign-step2.component';
import { CampaignStep3Component } from './step3/campaign-step3.component';
import { CampaignStep4Component } from './step4/campaign-step4.component';

@Component({
  selector: 'app-campaign-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule,
    CampaignStep1Component,
    CampaignStep2Component,
    CampaignStep3Component,
    CampaignStep4Component
  ],
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent {
  // FormBuilder
  templateForm!: FormGroup;
  submitted = false;
  responseMessage = '';

  // Form Group
  campaignForm: FormGroup;

  // Step
  currentStep = 1;

  constructor(
    private fb: FormBuilder,
  ) {
    this.campaignForm = this.fb.group({
      step1: this.fb.group({
        chanel: [''],
      }),
      step2: this.fb.group({}),
      step3: this.fb.group({}),
      step4: this.fb.group({})
    });
  }

  get step1Form(): FormGroup {
    return this.campaignForm.get('step1') as FormGroup;
  }

  goNext() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  goBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
