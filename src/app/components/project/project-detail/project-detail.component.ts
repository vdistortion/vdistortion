import { Component } from '@angular/core';
import { VideoListComponent } from '../../video/video-list/video-list.component';
import { PictureListComponent } from '../../pictures/picture-list/picture-list.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [VideoListComponent, PictureListComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {}
