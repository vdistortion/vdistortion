import { Component, input } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import type { Project } from '../../../projects';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList {
  public projects = input.required<Project[]>();
}
