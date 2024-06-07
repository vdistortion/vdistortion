import { Component, Input } from '@angular/core';
import { VideoListComponent } from '../../video/video-list/video-list.component';
import { PictureListComponent } from '../../pictures/picture-list/picture-list.component';
import type { TypeImage, TypeVideo } from '../../../../projects';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [VideoListComponent, PictureListComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  @Input({ required: true }) public description: string;
  @Input({ required: true }) public videos: TypeVideo[];
  @Input({ required: true }) public images: TypeImage[];
}
