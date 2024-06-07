import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import { TypeLink, TypeTag } from '../../../projects';

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
  @Input() public tags: (TypeTag | 'all')[] = [];
  @Input({ required: true }) public activeTag: TypeTag | 'all';
  @Input() public isHomePage: boolean = false;
  @Output() public visible: EventEmitter<TypeTag | 'all'> = new EventEmitter<
    TypeTag | 'all'
  >();

  onVisible(value: TypeTag | 'all') {
    this.visible.emit(value);
  }
}
