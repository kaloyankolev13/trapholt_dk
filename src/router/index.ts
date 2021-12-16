import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Exhibition from '../views/Exhibition.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exhibitions',
    name: 'Exhibitions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ExhibitionsPage.vue'),
  },
  {
    path: '/exhibitions/:id',
    name: 'exhibition',
    component: Exhibition,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Subscriptions.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
