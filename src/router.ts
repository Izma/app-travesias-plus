import Vue from 'vue';
import Router from 'vue-router';

import Login from './auth/Login.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/shared/Layout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/auth/Login.vue'),
    },
  ],
});
