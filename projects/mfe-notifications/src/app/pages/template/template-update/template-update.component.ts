import { Component } from '@angular/core';
import { CreateTemplateComponent } from '../create-template/create-template.component';

@Component({
  selector: 'app-template-update',
  standalone: true,
  imports: [CreateTemplateComponent],
  templateUrl: './template-update.component.html',
  styleUrls: ['./template-update.component.css']
})
export class TemplateUpdateComponent {}
