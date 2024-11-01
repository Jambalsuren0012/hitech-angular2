// spinner.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-overlay" *ngIf="isLoading">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  isLoading = false;
}
