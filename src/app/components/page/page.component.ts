import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { TagsCloudComponent } from '../tags-cloud/tags-cloud.component';
import { FooterContentComponent } from '../footer-content/footer-content.component';

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
export class PageComponent {}
