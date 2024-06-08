import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Проекты | Портфолио фронтенд-разработчика',
    component: HomePageComponent,
  },
  {
    path: 'project/:id',
    title: 'Портфолио фронтенд-разработчика',
    component: ProjectPageComponent,
  },
  {
    path: '404',
    title: 'Страница не найдена | Портфолио фронтенд-разработчика',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
