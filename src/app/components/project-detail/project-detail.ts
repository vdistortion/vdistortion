import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { TrackClickDirective } from '../../track-click.directive';
import type { Project } from '../../../projects';

@Component({
  selector: 'app-project-detail',
  imports: [TrackClickDirective, PhotoGalleryModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  public project = input.required<Project>();
}
