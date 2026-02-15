import { Component, input } from '@angular/core';
import { mdiArrowLeft, mdiLinkVariant, mdiNpm, mdiGithub } from '@mdi/js';

@Component({
  selector: 'app-ui-icon',
  imports: [],
  templateUrl: './ui-icon.component.svg',
  styleUrl: './ui-icon.component.scss',
})
export class UiIconComponent {
  public icon = input.required<string>();
  public size = input(24);
  public color = input('');

  public icons: Record<string, string> = {
    mdiArrowLeft,
    mdiLinkVariant,
    mdiNpm,
    mdiGithub,
  };
}
