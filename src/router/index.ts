import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/menu',
    name: 'menupage',
    component: () =>  import('@/views/MenuPage.vue')
  },
  {
  path: '/main',
  name: 'main',
  component: () =>  import('@/views/MainCatalogue.vue'),
  children: [
    {
      path: 'toys',
      name: 'toyscategory',
      component: () =>  import('@/views/ToysCategory.vue')
    },
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
