import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', redirect: '/novos' }, // Redireciona a raiz pra /novos
  { path: '/novos', component: Home },
  { path: '/usados', component: Home },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
