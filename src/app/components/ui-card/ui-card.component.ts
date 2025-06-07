import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  imports: [],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss',
})
export class UiCardComponent {
  @Input() public isProject: boolean = false;
}
