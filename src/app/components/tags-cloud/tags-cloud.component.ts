import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { TrackClickDirective } from '../../track-click.directive';
import { environment } from '../../../environments/environment';
import type { TypeAllTag, TypeTech } from '../../../projects';

@Component({
  selector: 'app-tags-cloud',
  imports: [UiCardComponent, TrackClickDirective],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {
  tags = input<TypeAllTag[]>([]);
  tech = input<TypeTech[]>([]);
  activeTag = input.required<TypeAllTag>();
  isHomePage = input.required<boolean>();

  private router = inject(Router);

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
  }
}
