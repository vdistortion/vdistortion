import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { TrackClickDirective } from '../../track-click.directive';
import type { TypeProject } from '../../../projects';

@Component({
  selector: 'app-project-card',
  imports: [UiCardComponent, RouterLink, TrackClickDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  public project = input.required<TypeProject>();
  public link = input.required<string>();

  public tags = computed(() =>
    this.project()
      .tech.map((tag) => `#${tag}`)
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      }),
  );
}
