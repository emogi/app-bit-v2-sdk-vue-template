import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home';
import PageNotFound from '../views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: PageNotFound,
  },
];

const baseRoute =
  process.env.NODE_ENV === 'development'
    ? './'
    : `/${process.env.VUE_APP_HOLLER_APP_BIT_ID}/${process.env.VUE_APP_HOLLER_APP_BIT_VERSION}`;

const router = createRouter({
  history: createWebHistory(baseRoute),
  routes: routes,
});

export default router;
