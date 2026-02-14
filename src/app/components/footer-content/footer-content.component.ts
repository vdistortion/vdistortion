import { Component, inject } from '@angular/core';
import { UiCardComponent } from '../ui-card/ui-card.component';
import { Analytics } from '../../services/analytics.service';

type Item = {
  name: string;
  link: string;
};

@Component({
  selector: 'app-footer-content',
  imports: [UiCardComponent],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss',
})
export class FooterContentComponent {
  private DOCUMENT_ID = '1NY0j4b9eIiQj1jkc6DWsZHeM6wvtKfgtguyZQU-Iob8';
  public list: Item[] = [
    {
      name: 'GitHub',
      link: 'https://github.com/vdistortion',
    },
    {
      name: 'npmjs',
      link: 'https://www.npmjs.com/~vdistortion',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/ng_valentin',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/valentin-zolotov/',
    },
    {
      name: 'CV.pdf',
      link: `https://docs.google.com/document/d/${this.DOCUMENT_ID}/export?format=pdf`,
    },
    {
      name: 'CV',
      link: `https://docs.google.com/document/d/${this.DOCUMENT_ID}/`,
    },
  ];
  analytics = inject(Analytics);

  onClick(event: string) {
    this.analytics.sendEvent(event, { category: 'UI' });
  }
}
