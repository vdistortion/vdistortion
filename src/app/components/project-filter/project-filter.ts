import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { UiIcon } from '../ui-icon/ui-icon';
import { TrackClickDirective } from '../../track-click.directive';

@Component({
  selector: 'app-project-filter',
  imports: [TrackClickDirective, UiIcon],
  templateUrl: './project-filter.html',
  styleUrl: './project-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFilter {
  public angularOnly = input.required<boolean>();
  public filterChange = output<boolean>();
}
