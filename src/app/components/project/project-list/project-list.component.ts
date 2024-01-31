import { Component, Input } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { TypeProjects } from '../../../../projects';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  @Input({ required: true }) public projects: TypeProjects;

  get visibleProject() {
    return Object.entries(this.projects).map(([link, project]) => ({
      link,
      ...project,
    }));
  }
}
