import { Component, Input, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import type { TypeProject, TypeProjects } from '../../../projects';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  @Input({ required: true }) public projects: TypeProjects;
  public visibleProjects: [string, TypeProject][];

  ngOnInit(): void {
    this.visibleProjects = Object.entries(this.projects);
    this.shuffle();
  }

  shuffle() {
    this.visibleProjects.sort(() => Math.random() - 0.5);
  }
}
