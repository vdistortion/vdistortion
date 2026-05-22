import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxParticlesModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  public particlesOptions = {
    background: { color: 'transparent' },
    particles: {
      color: { value: 'var(--muted)' },
      size: { value: 1 },
      number: { value: 50 },
      move: { speed: 2, enable: true },
      shape: { type: 'circle' },
      links: {
        distance: 200,
        opacity: 0.2,
        enable: true,
        color: 'var(--muted)',
      },
    },
  };
}
