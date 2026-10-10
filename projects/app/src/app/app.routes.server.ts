import { RenderMode, ServerRoute } from '@angular/ssr';
import { urls } from '../projects';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'project/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams() {
      const projects = urls.map((id) => ({ id }));
      return Promise.resolve(projects);
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
