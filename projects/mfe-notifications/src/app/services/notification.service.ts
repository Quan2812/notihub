import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title?: string): void {
    this.toastr.success(message, title, {
      timeOut: 6000,
      positionClass: 'toast-top-right',
    });
  }

  showWarning(message: string, title?: string): void {
    this.toastr.warning(message, title, {
      timeOut: 5000,
      positionClass: 'toast-top-right',
    });
  }

  showError(message: string, title?: string): void {
    this.toastr.error(message, title, {
      timeOut: 5000,
      closeButton: true,
      tapToDismiss: false,
      onActivateTick: true,
      positionClass: 'toast-top-right',
      enableHtml: true,
    });
  }
}
