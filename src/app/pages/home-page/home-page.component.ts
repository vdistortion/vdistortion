import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import {
  projects,
  type TypeProjects,
  type TypeAllTag,
} from '../../../projects';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  public projects: TypeProjects = projects;
  public activeTag: TypeAllTag = 'all';

  constructor(private route: ActivatedRoute) {
    // ToDo
    this.route.fragment.subscribe((hash: any) => {
      if (this.cloud.includes(hash)) this.activeTag = hash;
    });
  }

  get tags(): Record<TypeAllTag, string[]> {
    return Object.entries(projects).reduce(
      (acc, [id, project]) => {
        project.tags.forEach((tag) => {
          if (!acc[tag]) acc[tag] = [];
          acc[tag].push(id);
        });
        return acc;
      },
      {
        all: Object.keys(projects),
      } as Record<TypeAllTag, string[]>,
    );
  }

  get cloud(): TypeAllTag[] {
    return Object.keys(this.tags) as TypeAllTag[];
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
