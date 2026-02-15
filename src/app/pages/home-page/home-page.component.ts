import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../components/page/page.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { projects, type TypeAllTag, TypeProject } from '../../../projects';

@Component({
  selector: 'app-home-page',
  imports: [PageComponent, ProjectListComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private route = inject(ActivatedRoute);
  private fragment = toSignal(this.route.fragment);

  private projectsArray = computed(() => Object.entries(projects).sort(() => Math.random() - 0.5));

  private tagsMap = computed(() =>
    this.projectsArray().reduce(
      (acc, [id, project]) => {
        project.tags.forEach((tag) => {
          if (!acc[tag]) acc[tag] = [];
          acc[tag].push(id);
        });
        return acc;
      },
      {} as Record<TypeAllTag, string[]>,
    ),
  );

  public cloudTags = Object.keys(this.tagsMap()) as TypeAllTag[];

  public activeTag = computed<TypeAllTag>(() => {
    const f = this.fragment();
    return f && this.cloudTags.includes(f as TypeAllTag) ? (f as TypeAllTag) : 'all';
  });

  public filteredProjects = computed<[string, TypeProject][]>(() => {
    const tag = this.activeTag();
    if (tag === 'all') return this.projectsArray();
    return this.tagsMap()[tag].map((link: string) => [link, projects[link]]);
  });
}
