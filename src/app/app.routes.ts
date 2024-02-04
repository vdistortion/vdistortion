import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Портфолио фронтенд-разработчика',
    component: HomePageComponent,
  },
  {
    path: 'project/:id',
    title: 'Портфолио фронтенд-разработчика',
    component: ProjectPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
