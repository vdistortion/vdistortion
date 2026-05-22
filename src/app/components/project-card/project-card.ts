import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TrackClickDirective } from '../../track-click.directive';
import type { Project } from '../../../projects';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, TrackClickDirective],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  public project = input.required<Project>();
}
