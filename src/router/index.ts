import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

router.beforeEach((to, from) => {
  if (!sessionStorage.getItem('token') && to.path !== '/login')
    return { path: '/login' }
})

export default router
