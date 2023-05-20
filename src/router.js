import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      },
    },
    {
      path: '/portfolio/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio/:id',
      name: 'project-view',
      component: () => import('./views/ProjectView.vue'),
    },
    {
      path: '/portfolio/:queryParams(.*)',
      name: 'redirect',
      component: HomeView,
      props: true,
    },
  ],
});
