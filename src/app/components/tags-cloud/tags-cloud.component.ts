import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { Analytics } from '../../services/analytics.service';
import { environment } from '../../../environments/environment';
import type { TypeAllTag, TypeTech } from '../../../projects';

@Component({
  selector: 'app-tags-cloud',
  imports: [UiCardComponent],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {
  tags = input<TypeAllTag[]>([]);
  tech = input<TypeTech[]>([]);
  activeTag = input.required<TypeAllTag>();
  isHomePage = input.required<boolean>();

  private router = inject(Router);
  private analytics = inject(Analytics);

  getNameTag(tag: TypeAllTag): string {
    return environment.ProjectTags[tag];
  }

  onClick(e: MouseEvent, tag: TypeAllTag) {
    e.preventDefault();

    const newTag = this.activeTag() === tag ? 'all' : tag;

    this.router.navigate([], {
      fragment: newTag,
      replaceUrl: true,
    });

    this.analytics.sendEvent(`tags_cloud_${tag}_click`, { category: 'UI' });
  }
}
