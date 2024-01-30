import { Component } from '@angular/core';
import { UiCardComponent } from '../ui/ui-card/ui-card.component';

@Component({
  selector: 'app-tags-cloud',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './tags-cloud.component.html',
  styleUrl: './tags-cloud.component.scss',
})
export class TagsCloudComponent {}
