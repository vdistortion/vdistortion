import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgParticlesService } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import { routes } from './app.routes';
import { ANALYTICS_CONFIG } from './services/analytics.service';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppInitializer(() => {
      const particlesService = inject(NgParticlesService);
      return particlesService.init(loadSlim);
    }),
    { provide: ANALYTICS_CONFIG, useValue: { ymId: environment.YandexMetrikaId } },
  ],
};
