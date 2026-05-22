import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ProjectFilter } from '../../components/project-filter/project-filter';
import { ProjectList } from '../../components/project-list/project-list';
import { projects, type Project, type TypeAllTag } from '../../../projects';
import { Logo } from '../../components/logo/logo';

const ALL: TypeAllTag = 'all';

@Component({
  selector: 'app-home-page',
  imports: [ProjectFilter, ProjectList, Logo],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // Шаффл проектов
  private readonly allProjects: Project[] = Object.values(projects).sort(() => Math.random() - 0.5);

  // Инициализация activeTag из URL-фрагмента
  private readonly fragment = toSignal(this.route.fragment.pipe(map((f) => f ?? ALL)));
  public readonly activeTag = computed<TypeAllTag>(() => {
    const f = this.fragment();
    return this.tags.includes(f as TypeAllTag) ? (f as TypeAllTag) : ALL;
  });

  public readonly tags: TypeAllTag[] = [
    ALL,
    ...new Set(this.allProjects.flatMap((p) => p.tags).filter((tag) => tag !== ALL)),
  ];

  public readonly filtered = computed<Project[]>(() => {
    const tag = this.activeTag();
    return tag === ALL ? this.allProjects : this.allProjects.filter((p) => p.tags.includes(tag));
  });

  onFilterChange(tag: TypeAllTag): void {
    // Обновляем URL-фрагмент при изменении фильтра
    this.router.navigate([], {
      fragment: tag === ALL ? undefined : tag,
      replaceUrl: true,
    });
  }
}
