import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { projects } from '../../../projects';
import { ProjectDetail } from '../../components/project-detail/project-detail';

@Component({
  selector: 'app-project-page',
  imports: [ProjectDetail, RouterLink],
  templateUrl: './project-page.html',
  styleUrl: './project-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')));

  public readonly project = computed(() => {
    const p = projects[this.id() ?? ''];
    if (!p) {
      this.router.navigateByUrl('/404');
      return null;
    }
    return p;
  });

  ngOnInit(): void {
    if (this.project()) {
      this.titleService.setTitle(`${this.project()!.title} | Портфолио`);
    }
  }
}
