import { Component } from '@angular/core';
import { UiIconComponent } from '../../ui/ui-icon/ui-icon.component';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent {}
