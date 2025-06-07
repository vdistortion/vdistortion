import { Component, Input } from '@angular/core';
import { mdiArrowLeft, mdiLinkVariant, mdiNpm, mdiGithub } from '@mdi/js';

@Component({
  selector: 'app-ui-icon',
  imports: [],
  templateUrl: './ui-icon.component.svg',
  styleUrl: './ui-icon.component.scss',
})
export class UiIconComponent {
  @Input({ required: true }) public icon!: string;
  @Input() public size: number = 24;
  @Input() public color: string = '';

  public icons: Record<string, string> = {
    mdiArrowLeft,
    mdiLinkVariant,
    mdiNpm,
    mdiGithub,
  };
}
