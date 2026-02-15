import { Component, input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  imports: [],
  templateUrl: './picture-card.component.html',
  styleUrl: './picture-card.component.scss',
})
export class PictureCardComponent {
  public image = input.required<string>();
  public description = input.required<string>();
}
