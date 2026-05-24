import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
    title: 'Проекты | Портфолио фронтенд-разработчика',
  },
  {
    path: 'project/:id',
    loadComponent: () => import('./pages/project-page/project-page').then((m) => m.ProjectPage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error-page/error-page').then((m) => m.ErrorPage),
    title: 'Страница не найдена | Портфолио фронтенд-разработчика',
  },
];
