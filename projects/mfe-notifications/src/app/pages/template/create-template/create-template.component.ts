import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { forkJoin, Observable } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateStep1Component } from './step1/template-step1.component';
import { TemplateStep2Component } from './step2/template-step2.component';
import { TemplateStep3Component } from './step3/template-step3.component';
import { TemplateService } from '../../../services/template/template.service';

@Component({
  selector: 'app-create-template',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    TemplateStep1Component,
    TemplateStep2Component,
    TemplateStep3Component
    ],
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  // Filter data
  notificationTypes: string[] = [];
  templatesTypes: string[] = [];
  businessTypes: string[] = [];

   // FormBuilder
  templateForm!: FormGroup;
  submitted = false;
  responseMessage = '';

  // Step
  currentStep = 1;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private templateService: TemplateService
  ) {}

  ngOnInit(): void {
      forkJoin<{
        notificationTypes: Observable<string[]>;
        businessTypes: Observable<string[]>;
        templatesTypes: Observable<string[]>;
      }>({
        notificationTypes: this.templateService.getNotificationTypes(),
        businessTypes: this.templateService.getBusinessTypes(),
        templatesTypes: this.templateService.getTemplatesTypes(),
      }).subscribe(({ notificationTypes, businessTypes, templatesTypes }) => {
        this.notificationTypes = notificationTypes;
        this.businessTypes = businessTypes;
        this.templatesTypes = templatesTypes;

        this.templateForm = this.fb.group({
          TEMPLATE_NAME: ['', Validators.required],
          TEMPLATE_TYPE: ['', Validators.required],
          NOTIFICATION_TYPE: ['', Validators.required],
          BUSINESS_TYPE: ['', Validators.required],
        });
      });
    }

    goNext() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    }

    goBack() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    }

    onSubmit(): void {
        this.submitted = true;

        if (this.templateForm.invalid) {
          return;
        }

        this.templateService.createTemplate(this.templateForm.value).subscribe({
          next: (res) => {
            this.responseMessage = res.message;
            console.log('API response:', res);
          },
          error: (err) => {
            this.responseMessage = 'Có lỗi xảy ra khi gửi dữ liệu';
            console.error(err);
          }
        });
    }
}
