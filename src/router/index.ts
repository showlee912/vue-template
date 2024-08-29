import { createRouter, createWebHistory } from 'vue-router'
import MyTest from '@/views/MyTest.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: MyTest

    }
  ]
})

export default router
