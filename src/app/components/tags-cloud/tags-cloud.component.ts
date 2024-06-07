import { Component, Input } from '@angular/core';
import { UiCardComponent } from '../ui/ui-card/ui-card.component';
import type { TypeTag } from '../../../projects';

@Component({
  selector: 'app-tags-cloud',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {
  @Input() public tags: (TypeTag | 'all')[] = [];
  @Input({ required: true }) public activeTag: TypeTag | 'all';
  @Input() public isHomePage: boolean = false;

  get sortedTags(): (TypeTag | 'all')[] {
    const sortedTags = this.tags
      .filter((tag) => tag !== 'all')
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

    return this.isHomePage ? ['all', ...sortedTags] : sortedTags;
  }
}
