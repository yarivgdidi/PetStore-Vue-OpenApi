import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: () => 'reports' },
      { name: 'reports', path: 'reports', component: () => import('pages/Reports.vue') },
      { name: 'licences', path: 'licences', component: () => import('pages/Licences.vue') },
      { name: 'customers', path: 'customers', component: () => import('pages/Customers.vue') },
      { name: 'pets', path: 'pets', component: () => import('pages/Pets.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
