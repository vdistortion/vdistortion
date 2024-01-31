import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import { TypeLink } from '../../../projects';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    LogoComponent,
    PageTitleComponent,
    TagsCloudComponent,
    FooterContentComponent,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() public title: string = '';
  @Input() public links: TypeLink[] = [];
  @Input() public tags: string[] = [];
  @Input() public activeTag: string = '';
  @Input() public isHomePage: boolean = false;
  @Output() public visible: EventEmitter<string> = new EventEmitter();

  onVisible(value: string) {
    this.visible.emit(value);
  }
}
