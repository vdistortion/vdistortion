import { Component, Input } from '@angular/core';
import { mdiArrowLeft, mdiLinkVariant, mdiNpm, mdiGithub } from '@mdi/js';

@Component({
  selector: 'app-ui-icon',
  standalone: true,
  imports: [],
  templateUrl: './ui-icon.component.svg',
  styleUrl: './ui-icon.component.scss',
})
export class UiIconComponent {
  @Input({ required: true }) public icon: string;
  @Input() public size: number = 24;
  @Input() public color: string = '';

  public icons: any = {
    mdiArrowLeft,
    mdiLinkVariant,
    mdiNpm,
    mdiGithub,
  };
}
