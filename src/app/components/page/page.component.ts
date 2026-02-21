import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PageTitleComponent } from '../page-title/page-title.component';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';
import { TypeLink, TypeAllTag, TypeTech } from '../../../projects';

@Component({
  selector: 'app-page',
  imports: [NgOptimizedImage, PageTitleComponent, TagsCloudComponent, FooterContentComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  public name = input('');
  public tags = input<TypeAllTag[]>([]);
  public tech = input<TypeTech[]>([]);
  public activeTag = input<TypeAllTag>('all');
  public repos = input<TypeLink[]>([]);
  public links = input<TypeLink[]>([]);
  public isHomePage = input(false);
  protected cacheBust = Date.now();
}
