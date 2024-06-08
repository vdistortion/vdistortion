import { Component } from '@angular/core';
import { UiCardComponent } from '../ui-card/ui-card.component';

type Item = {
  name: string;
  link: string;
};

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss',
})
export class FooterContentComponent {
  public list: Item[] = [
    {
      name: 'GitHub',
      link: 'https://github.com/astrotrain55',
    },
    {
      name: 'npmjs',
      link: 'https://www.npmjs.com/~astrotrain',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/valentin_fatherland',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/valentin-zolotov/',
    },
  ];
}
