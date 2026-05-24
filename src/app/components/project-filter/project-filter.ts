import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { UiIcon } from '../ui-icon/ui-icon';
import { TrackClickDirective } from '../../track-click.directive';
import type { TypeAllTag } from '../../../projects';

@Component({
  selector: 'app-project-filter',
  imports: [TrackClickDirective, UiIcon],
  templateUrl: './project-filter.html',
  styleUrl: './project-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFilter {
  public tags = input.required<TypeAllTag[]>();
  public activeTag = input.required<TypeAllTag>();
  public filterChange = output<TypeAllTag>();

  onFilter(tag: TypeAllTag): void {
    this.filterChange.emit(tag);
  }
}
