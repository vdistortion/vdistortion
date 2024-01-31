import { Component, Input } from '@angular/core';
import { mdiArrowLeft, mdiLinkVariant } from '@mdi/js';

@Component({
  selector: 'app-ui-icon',
  standalone: true,
  imports: [],
  templateUrl: './ui-icon.component.html',
  styleUrl: './ui-icon.component.scss',
})
export class UiIconComponent {
  @Input({ required: true }) public icon: string;
  @Input() public size: number = 24;

  public icons: any = {
    mdiArrowLeft,
    mdiLinkVariant,
  };
}
