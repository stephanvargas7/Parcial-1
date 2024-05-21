import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import RolPage from '../views/RolPage.vue';
import Carro from '../views/Carro.vue';
import Categoria from '../views/Categoria.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login'
  },
 
  {
    path: '/Rol',
    name: 'Rol',
    component: RolPage
  },
 
  {
  path: '/Carro',
  name: 'Carro',
  component: Carro
},
{
  path: '/Categoria',
  name: 'Categoria',
  component: Categoria
},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router