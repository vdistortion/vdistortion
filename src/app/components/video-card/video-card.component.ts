import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-card',
  imports: [YouTubePlayer],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input({ required: true }) public id!: string;
  @Input({ required: true }) public name: string | undefined;
}
