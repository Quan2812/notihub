import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Template } from '../../core/interface/template.interface';

@Injectable({ providedIn: 'root' })
export class TemplateService {
  getNotificationTypes(): Observable<string[]> {
    return of(['Thông báo A', 'Thông báo B', 'Thông báo C']);
  }

  getTemplatesTypes(): Observable<string[]> {
    return of(['Loai X', 'Loai Y', 'Loai Z']);
  }

  getBusinessTypes(): Observable<string[]> {
    return of(['Nghiệp vụ X', 'Nghiệp vụ Y', 'Nghiệp vụ Z']);
  }

  getChannels(): Observable<string[]> {
    return of(['SMS', 'Email', 'App', 'Zalo']);
  }

  fetchTemplates(currentPage: number, pageSize: number): Observable<Template[]> {
    return of(Array.from({ length: pageSize }, (_, i) => {
       const id = (currentPage - 1) * pageSize + i + 1;
       return {
         id,
         name: `Template ${id}`,
         type: `Loại ${id % 3 + 1}`,
         notificationType: 'Thông báo A',
         businessType: 'Nghiệp vụ Y',
         channel: 'SMS',
         createdAt: '2024-01-01 10:00',
         updatedAt: '2024-01-02 12:00',
         createdBy: `Người ${id}`
       };
     }));
  }

   createTemplate(payload: any): Observable<any> {
      console.log('Mock gửi API với payload:', payload);
      return of({
        success: true,
        data: payload,
        message: 'Template created successfully (mock)'
      });
    }
}
