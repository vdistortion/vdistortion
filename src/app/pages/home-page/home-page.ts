import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Logo } from '../../components/logo/logo';
import { ProjectFilter } from '../../components/project-filter/project-filter';
import { ProjectList } from '../../components/project-list/project-list';
import { projects, type Project } from '../../../projects';

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

  private readonly fragment = toSignal(this.route.fragment);
  public readonly angularOnly = computed(() => this.fragment() === 'angular');

  public readonly filtered = computed(() =>
    this.angularOnly()
      ? this.allProjects.filter((p) => p.tech.includes('angular'))
      : this.allProjects,
  );

  onFilterChange(angularOnly: boolean): void {
    this.router.navigate([], {
      fragment: angularOnly ? 'angular' : undefined,
      replaceUrl: true,
    });
  }
}
