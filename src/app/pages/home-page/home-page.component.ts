import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project/project-list/project-list.component';
import { projects, TypeProjects, TypeProject } from '../../../projects';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public projects: TypeProjects = projects;
  public activeTag: string = 'all';

  ngOnInit() {
    document.title = 'Портфолио';
  }

  onVisible(tag: string) {
    this.activeTag = this.activeTag === tag ? 'all' : tag;
  }

  get tags() {
    return Object.entries(projects).reduce(
      (acc, [id, project]: [string, TypeProject]) => {
        project.tags.forEach((tag: string) => {
          if (!acc[tag]) acc[tag] = [];
          acc[tag].push(id);
        });
        return acc;
      },
      {
        all: Object.keys(projects),
      } as {
        [index: string]: string[];
      },
    );
  }

  get cloud() {
    return Object.keys(this.tags);
  }

  get visibleProjects() {
    return this.tags[this.activeTag].reduce(
      (list, id: string) => ({
        ...list,
        [id]: projects[id],
      }),
      {},
    );
  }
}
