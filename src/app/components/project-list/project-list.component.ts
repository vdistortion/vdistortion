import { Component, Input } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import type { TypeProject } from '../../../projects';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  @Input({ required: true }) public projects!: [string, TypeProject][];
}
