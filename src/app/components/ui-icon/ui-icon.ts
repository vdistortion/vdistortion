import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { mdiGithub, mdiLinkedin, mdiNpm, mdiMenu, mdiAngular } from '@mdi/js';

@Component({
  selector: 'app-ui-icon',
  imports: [],
  templateUrl: './ui-icon.html',
  styleUrl: './ui-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIcon {
  public icon = input.required<string>();
  public size = input(20);
  public color = input<string | undefined>(undefined);

  public icons: Record<string, string> = {
    mdiGithub,
    mdiLinkedin,
    mdiNpm,
    mdiMenu,
    mdiAngular,
  };
}
