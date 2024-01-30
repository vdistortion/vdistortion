import { Component } from '@angular/core';
import { UiCardComponent } from '../../ui/ui-card/ui-card.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {}
