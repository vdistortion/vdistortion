import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { Analytics } from '../../services/analytics.service';
import type { TypeProject } from '../../../projects';

@Component({
  selector: 'app-project-card',
  imports: [UiCardComponent, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) public project!: TypeProject;
  @Input({ required: true }) public link!: string;
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }

  get tags() {
    return this.project.tags
      .map((tag) => `#${tag}`)
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
  }
}
