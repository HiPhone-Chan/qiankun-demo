import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import Home from '@/views/Home.vue'
import microRoutes from './micro-frontend'

Vue.use(VueRouter)

const routes = [
  {
    // path: '/:catchAll(.*)',
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }]
  }
]

export const allRoutes = [...routes, ...microRoutes]

const router = new VueRouter({
  mode: 'history',
  routes: allRoutes
})

export default router
