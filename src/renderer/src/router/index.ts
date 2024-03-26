import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { path: '/issues' }
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/issues',
    component: () => import('../views/IssuesView.vue')
  },
  {
    path: '/issue/:id',
    component: () => import('../views/DetailView.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
