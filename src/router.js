import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:id',
      name: 'project-view',
      component: () => import('./views/ProjectView.vue'),
    },
    {
      path: '/Yulianna',
      name: 'yulianna-home',
      component: () => import('./Yulianna/views/HomeView.vue'),
    },
    {
      path: '/Yulianna/:id',
      name: 'yulianna-view',
      component: () => import('./Yulianna/views/ProjectView.vue'),
    },
  ],
});
