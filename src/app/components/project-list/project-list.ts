import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { Project } from '../../../projects';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectList {
  public projects = input.required<Project[]>();
}
