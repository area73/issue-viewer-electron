import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/issues',
    component: () => import('../views/IssuesView.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
