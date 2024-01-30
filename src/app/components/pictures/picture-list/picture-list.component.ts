import { Component } from '@angular/core';
import { PictureCardComponent } from '../picture-card/picture-card.component';

@Component({
  selector: 'app-picture-list',
  standalone: true,
  imports: [PictureCardComponent],
  templateUrl: './picture-list.component.html',
})
export class PictureListComponent {}
