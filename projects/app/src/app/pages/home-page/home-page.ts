import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Logo } from '../../components/logo/logo';
import { ProjectFilter } from '../../components/project-filter/project-filter';
import { ProjectList } from '../../components/project-list/project-list';
import { projects } from '../../../projects';

@Component({
  selector: 'app-home-page',
  imports: [ProjectFilter, ProjectList, Logo],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // Шаффл проектов
  private readonly allProjects = Object.values(projects).sort(() => Math.random() - 0.5);

  private readonly fragment = toSignal(this.route.fragment);
  public readonly angularOnly = computed(() => this.fragment() !== 'all');

  public readonly filtered = computed(() =>
    this.angularOnly()
      ? this.allProjects.filter((p) => p.tech.includes('Angular'))
      : this.allProjects,
  );

  async onFilterChange(angularOnly: boolean): Promise<void> {
    await this.router.navigate([], {
      fragment: angularOnly ? undefined : 'all',
      replaceUrl: true,
    });
  }
}
