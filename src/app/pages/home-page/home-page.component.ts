import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { tagsMap, projects, projectsArray, type TypeAllTag, TypeProject } from '../../../projects';

@Component({
  selector: 'app-home-page',
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private route = inject(ActivatedRoute);
  private fragment = toSignal(this.route.fragment);

  public cloudTags = Object.keys(tagsMap) as TypeAllTag[];

  public activeTag = computed<TypeAllTag>(() => {
    const f = this.fragment();
    return f && this.cloudTags.includes(f as TypeAllTag) ? (f as TypeAllTag) : 'all';
  });

  public filteredProjects = computed<[string, TypeProject][]>(() => {
    const tag = this.activeTag();
    if (tag === 'all') return projectsArray;
    return tagsMap[tag].map((link: string) => [link, projects[link]]);
  });
}
