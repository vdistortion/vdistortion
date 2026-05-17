import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';

@Component({
  selector: 'app-background',
  imports: [NgxParticlesModule],
  template: '<ngx-particles [options]="options"></ngx-particles>',
})
export class BackgroundComponent {
  private color = '#99a1b3';

  public options = {
    background: { color: 'transparent' },
    particles: {
      color: { value: this.color },
      size: { value: 1 },
      number: { value: 50 },
      move: { speed: 2, enable: true },
      shape: { type: 'circle' },
      links: {
        distance: 200,
        opacity: 0.2,
        enable: true,
        color: this.color,
      },
    },
  };
}
