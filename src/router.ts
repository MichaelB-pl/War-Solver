import Vue from 'vue';
import Router from 'vue-router';

import MainMenu from './views/MainMenu.vue';
import MainMenuToolbar from './views/MainMenuToolbar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainMenu',
      components: {
        default: MainMenu,
        toolbar: MainMenuToolbar,
      },
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import('./views/About.vue'),
        toolbar: () => import('./views/AboutToolbar.vue'),
      },
    },
    {
      path: '/solver',
      name: 'solver',
      components: {
        default: () => import('./views/Solver.vue'),
        toolbar: () => import('./views/SolverToolbar.vue'),
      },
    },
  ],
});
