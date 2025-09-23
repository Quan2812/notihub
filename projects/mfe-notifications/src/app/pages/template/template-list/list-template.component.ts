import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { TemplateService } from '../../../services/template/template.service';
import { Template } from '../../../core/interface/template.interface';
import { TEMPLATE_TEXTS } from '../../../core/constants/template-texts';

@Component({
   selector: 'app-list-template',
    templateUrl: './list-template.component.html',
    styleUrls: ['./list-template.component.css'],
    standalone: true,
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
})
export class ListTemplateComponent implements OnInit {
  TEXTS = TEMPLATE_TEXTS;
  // Filter data
  notificationTypes: string[] = [];
  businessTypes: string[] = [];
  templatesTypes: string[] = [];
  channels: string[] = [];

  // Table data
  templates: Template[] = [];

  // Pagination
  totalRows = 0;
  totalPages = 0;
  pageSize = 10;
  currentPage = 1;
  visiblePages: number[] = [];
  maxVisible = 5;

  // FormBuilder
  templateForm!: FormGroup;
  submitted = false;
  responseMessage = '';

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
      channels: Observable<string[]>;
      templates: Observable<Template[]>;
    }>({
      notificationTypes: this.templateService.getNotificationTypes(),
      businessTypes: this.templateService.getBusinessTypes(),
      templatesTypes: this.templateService.getTemplatesTypes(),
      channels: this.templateService.getChannels(),
      templates: this.templateService.fetchTemplates(this.currentPage, this.pageSize),
    }).subscribe(({ notificationTypes, businessTypes, templatesTypes, channels, templates }) => {
      this.notificationTypes = notificationTypes;
      this.businessTypes = businessTypes;
      this.templatesTypes = templatesTypes;
      this.channels = channels;
      this.templates = templates;

      this.totalPages = 100;
      this.totalRows = 200;
      this.updateVisiblePages();

      this.templateForm = this.fb.group({
        TEMPLATE_NAME: ['', Validators.required],
        TEMPLATE_TYPE: ['', Validators.required],
        NOTIFICATION_TYPE: ['', Validators.required],
        BUSINESS_TYPE: ['', Validators.required],
        CHANNEL: ['', Validators.required],
      });
    });
  }

  loadTemplates(currentPage: number, pageSize: number): void {
    this.templateService.fetchTemplates(this.currentPage, this.pageSize).subscribe((templates)=>{
     this.templates = templates;
    });
  }

  onChangePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updateVisiblePages();
    this.loadTemplates(page, this.pageSize);
  }

  onChangePageSize(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.pageSize = +value;
    this.currentPage = 1;
     this.loadTemplates(this.currentPage, this.pageSize);
  }

  updateVisiblePages(): void {
    const half = Math.floor(this.maxVisible / 2);

    let start = Math.max(this.currentPage - half, 1);
    let end = start + this.maxVisible - 1;

    if (end > this.totalPages) {
      end = this.totalPages;
      start = Math.max(end - this.maxVisible + 1, 1);
    }

    this.visiblePages = [];
    for (let i = start; i <= end; i++) {
      this.visiblePages.push(i);
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

  goToCreate(): void {
      this.router.navigate(['/template/create']);
  }

  goToDetail(): void {
      this.router.navigate(['/template/detail']);
  }
}
