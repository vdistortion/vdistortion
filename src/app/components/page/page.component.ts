import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { PageTitleComponent } from '../page-title/page-title.component';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import type { TypeLink, TypeTag } from '../../../projects';

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
  @Input({ required: true }) public name: string;
  @Input({ required: true }) public tags: (TypeTag | 'all')[];
  @Input() public activeTag: TypeTag | 'all' = 'all';
  @Input() public repos: TypeLink[] = [];
  @Input() public links: TypeLink[] = [];
  @Input() public isHomePage: boolean = false;
}
