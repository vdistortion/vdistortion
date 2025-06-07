import { Component, inject, OnInit } from '@angular/core';
import { NgxParticlesModule, NgParticlesService, type IParticlesProps } from '@tsparticles/angular';
import { loadLinksPreset } from '@tsparticles/preset-links';

@Component({
  selector: 'app-background',
  imports: [NgxParticlesModule],
  templateUrl: './background.component.html',
})
export class BackgroundComponent implements OnInit {
  private readonly ngParticlesService = inject(NgParticlesService);
  private color = '#99a1b3';

  public options: IParticlesProps = {
    preset: 'links',
    background: {
      color: 'transparent',
    },
    particles: {
      size: {
        value: 1,
      },
      number: {
        value: 50,
      },
      move: {
        speed: 2,
      },
      shape: {
        type: 'circle',
      },
      links: {
        distance: 200,
        opacity: 0.2,
        color: this.color,
      },
    },
  };

  ngOnInit(): void {
    this.ngParticlesService.init(loadLinksPreset).catch(console.error);
  }
}
