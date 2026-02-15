import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { Analytics } from '../../services/analytics.service';
import type { TypeLink } from '../../../projects';

@Component({
  selector: 'app-page-title',
  imports: [UiIconComponent, RouterLink],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent {
  public title = input.required<string>();
  public repos = input.required<TypeLink[]>();
  public links = input.required<TypeLink[]>();
  public isHomePage = input.required<boolean>();
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
