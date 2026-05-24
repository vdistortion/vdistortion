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

  private readonly idSignal = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')));

  public readonly project = computed(() => {
    const id = this.idSignal();
    return id ? (projects[id] ?? null) : null;
  });

  ngOnInit(): void {
    const subscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id') ?? '';
      if (!id || !projects[id]) {
        this.router.navigateByUrl('/404');
      } else {
        this.titleService.setTitle(`${projects[id].title} | Портфолио фронтенд-разработчика`);
      }
      subscription.unsubscribe();
    });
  }
}
