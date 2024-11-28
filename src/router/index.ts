import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Projects from '@/views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => About,
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => Skills,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => Projects,
    },
  ],
})

export default router
