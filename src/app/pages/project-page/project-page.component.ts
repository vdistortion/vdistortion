import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PageComponent } from '../../components/page/page.component';
import { ProjectDetailComponent } from '../../components/project-detail/project-detail.component';
import { projects, type TypeProjects, type TypeProject } from '../../../projects';

@Component({
  selector: 'app-project-page',
  imports: [PageComponent, ProjectDetailComponent],
  templateUrl: './project-page.component.html',
})
export class ProjectPageComponent implements OnInit {
  private titleService = inject(Title);
  public projects: TypeProjects = projects;
  public project!: TypeProject;
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
    if (this.project) this.titleService.setTitle(`${this.project.name} | ${this.route.snapshot.title}`);
  }
}
