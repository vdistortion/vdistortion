import { Component, Input } from '@angular/core';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { PictureCardComponent } from '../picture-card/picture-card.component';
import type { TypeImage } from '../../../projects';

@Component({
  selector: 'app-picture-list',
  standalone: true,
  imports: [PictureCardComponent, PhotoGalleryModule],
  templateUrl: './picture-list.component.html',
  styleUrl: './picture-list.component.scss',
})
export class PictureListComponent {
  @Input({ required: true }) public images: TypeImage[];
}
