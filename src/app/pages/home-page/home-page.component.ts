import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import {
  tagsMap,
  projects,
  projectsArray,
  type TypeAllTag,
} from '../../../projects';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  public projects = projectsArray;
  public activeTag: TypeAllTag = 'all';
  public cloudTags = Object.keys(tagsMap) as TypeAllTag[];

  constructor(private route: ActivatedRoute) {
    // ToDo
    this.route.fragment.subscribe((hash: any) => {
      if (this.cloudTags.includes(hash)) {
        this.activeTag = hash;
        this.projects = tagsMap[this.activeTag].map((link: string) => [
          link,
          projects[link],
        ]);
      }
    });
  }
}
