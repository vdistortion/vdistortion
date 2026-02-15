import { Component, input } from '@angular/core';
import { PictureListComponent } from '../picture-list/picture-list.component';
import type { TypeImage } from '../../../projects';

@Component({
  selector: 'app-project-detail',
  imports: [PictureListComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  public description = input.required<string>();
  public images = input.required<TypeImage[]>();
}
