import { Component } from '@angular/core';
import { UiCardComponent } from '../ui/ui-card/ui-card.component';

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss',
})
export class FooterContentComponent {}
