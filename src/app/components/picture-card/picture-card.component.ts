import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TypeImage } from '../../../projects';

@Component({
  selector: 'app-picture-card',
  imports: [NgOptimizedImage],
  templateUrl: './picture-card.component.html',
  styleUrl: './picture-card.component.scss',
})
export class PictureCardComponent {
  public image = input.required<TypeImage>();
}
