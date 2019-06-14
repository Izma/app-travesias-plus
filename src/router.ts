import Vue from 'vue';
import Router from 'vue-router';

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
      path: '/auth',
      name: 'auth',
      component: () => import('./views/shared/Auth.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('./views/auth/Login.vue'),
        },
      ],
    },
  ],
});
