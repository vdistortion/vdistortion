import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiCardComponent } from '../ui/ui-card/ui-card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tags-cloud',
  standalone: true,
  imports: [UiCardComponent, NgClass],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {
  @Input() public tags: string[] = [];
  @Input() public activeTag: string = '';
  @Input() public isHomePage: boolean = false;
  @Output() public visible: EventEmitter<any> = new EventEmitter();

  onVisible(tag: string) {
    this.visible.emit(tag);
  }

  get sortedTags() {
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
