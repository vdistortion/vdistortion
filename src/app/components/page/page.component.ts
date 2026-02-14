import { Component, Input } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import { TypeLink, TypeAllTag, TypeTech } from '../../../projects';

@Component({
  selector: 'app-page',
  imports: [PageTitleComponent, TagsCloudComponent, FooterContentComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() public name = '';
  @Input() public tags: TypeAllTag[] = [];
  @Input() public tech: TypeTech[] = [];
  @Input() public activeTag: TypeAllTag = 'all';
  @Input() public repos: TypeLink[] = [];
  @Input() public links: TypeLink[] = [];
  @Input() public isHomePage: boolean = false;
  protected cacheBust = Date.now();
}
