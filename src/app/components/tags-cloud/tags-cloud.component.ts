import { Component, Input } from '@angular/core';
import { UiCardComponent } from '../ui-card/ui-card.component';
import type { TypeTag } from '../../../projects';

@Component({
  selector: 'app-tags-cloud',
  imports: [UiCardComponent],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {
  @Input({ required: true }) public tags!: (TypeTag | 'all')[];
  @Input({ required: true }) public activeTag!: TypeTag | 'all';
  @Input({ required: true }) public isHomePage!: boolean;

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

  onClick(e: MouseEvent, tag: TypeTag | 'all') {
    e.preventDefault();
    location.hash = '#' + (this.activeTag === tag ? 'all' : tag);
  }
}
