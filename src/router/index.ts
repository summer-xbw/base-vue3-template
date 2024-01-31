import {
  RouteRecordRaw,
  Router,
  RouterOptions,
  createRouter,
  createWebHistory
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/home-view.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('@/views/other/other-view.vue')
  }
]

const routerOptions: RouterOptions = {
  history: createWebHistory(),
  routes
}

const router: Router = createRouter(routerOptions)

export default router
