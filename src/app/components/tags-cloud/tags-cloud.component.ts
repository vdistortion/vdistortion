import { Component, inject, Input } from '@angular/core';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { Analytics } from '../../services/analytics.service';
import { ProjectTag, type TypeAllTag, TypeTech } from '../../../projects';

@Component({
  selector: 'app-tags-cloud',
  imports: [UiCardComponent],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {
  @Input() public tags: TypeAllTag[] = [];
  @Input() public tech: TypeTech[] = [];
  @Input({ required: true }) public activeTag!: TypeAllTag;
  @Input({ required: true }) public isHomePage!: boolean;
  analytics = inject(Analytics);

  getNameTag(tag: TypeAllTag): string {
    return ProjectTag[tag];
  }

  onClick(e: MouseEvent, tag: TypeAllTag) {
    e.preventDefault();
    location.hash = '#' + (this.activeTag === tag ? 'all' : tag);
    this.analytics.sendEvent(`tags_cloud_${tag}_click`, { category: 'UI' });
  }
}
