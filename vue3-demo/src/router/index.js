import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'
import Home from '@/views/Home.vue'
import microRoutes from './micro-frontend'

const routes = [
  {
    path: '/:catchAll(.*)',
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allRoutes
})

const childrenPath = ['/vue-app'];
router.beforeEach((to, from, next) => { 
  if (childrenPath.some((item) => to.path.includes(item))) {
    next()
  } else if (to.name) {
    next()
  } else {
    next({ name: '404' });
  }
});

// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if (isChunkLoadFailed) {
//     router.replace(targetPath);
//   }
// });
export default router
