import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// Анимированная SVG: https://maxwellito.github.io/vivus-instant/
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.svg',
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  color = input<string>('var(--accent)');
}
