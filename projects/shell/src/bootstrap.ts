import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { APP_PROVIDERS } from './app/app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],   // thêm dòng này để Angular hiểu router-outlet
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [...APP_PROVIDERS, provideAnimations()],
}).catch(err => console.error(err));
