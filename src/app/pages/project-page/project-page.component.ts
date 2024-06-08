import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageComponent } from '../../components/page/page.component';
import { ProjectDetailComponent } from '../../components/project-detail/project-detail.component';
import {
  projects,
  type TypeProjects,
  type TypeProject,
} from '../../../projects';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [PageComponent, ProjectDetailComponent],
  templateUrl: './project-page.component.html',
})
export class ProjectPageComponent implements OnInit {
  public projects: TypeProjects = projects;
  public project: TypeProject;
  public pageId: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.pageId = this.route.snapshot.paramMap.get('id');
    if (this.pageId && this.projects[this.pageId]) {
      this.project = this.projects[this.pageId];
    } else {
      this.router.navigateByUrl('404');
    }
  }

  ngOnInit() {
    document.title = this.project
      ? `${this.project.name} | ${this.route.snapshot.title}`
      : '';
  }
}
