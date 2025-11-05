import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '@/views/BerandaView.vue'
import LoginView from '@/views/LoginView.vue'
import DaftarView from '@/views/DaftarView.vue'
import LaporView from '@/views/LaporView.vue'
import ProfilView from '@/views/ProfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: BerandaView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/daftar',
    name: 'DaftarView',
    component: DaftarView
  },
  {
    path: '/lapor',
    name: 'LaporView',
    component: LaporView
  },
  {
    path: '/profil',
    name: 'ProfilView',
    component: ProfilView
  },
  // contoh rute tambahan:
  // {
  //   path: '/tentang',
  //   name: 'tentang',
  //   component: () => import('../views/TentangView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
