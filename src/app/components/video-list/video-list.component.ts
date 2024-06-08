import { Component, Input } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';
import type { TypeVideo } from '../../../projects';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss',
})
export class VideoListComponent {
  @Input({ required: true }) public videos: TypeVideo[];
}
