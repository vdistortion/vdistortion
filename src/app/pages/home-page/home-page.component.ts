import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project/project-list/project-list.component';
import {
  projects,
  TypeProjects,
  TypeProject,
  TypeTag,
} from '../../../projects';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  public projects: TypeProjects = projects;
  public activeTag: TypeTag | 'all' = 'all';

  onVisible(tag: TypeTag | 'all') {
    this.activeTag = this.activeTag === tag ? 'all' : tag;
  }

  get tags(): Record<TypeTag | 'all', string[]> {
    const sortedProjects = Object.entries(projects).reduce(
      (acc, [id, project]: [string, TypeProject]) => {
        project.tags.forEach((tag: TypeTag) => {
          if (!acc[tag]) acc[tag] = [];
          acc[tag].push(id);
        });
        return acc;
      },
      {} as Record<TypeTag, string[]>,
    );

    return {
      ...sortedProjects,
      all: Object.keys(projects),
    };
  }

  get cloud(): (TypeTag | 'all')[] {
    return Object.keys(this.tags) as (TypeTag | 'all')[];
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
