import Layout from '@/layout'

export const apps = [
  {
    name: 'vue-child',
    entry: '//localhost:8080',
    container: '#content',
    activeRule: '/app-vue'
  }
];

const microChildRouters = [];
apps.forEach((item) => {
  const obj = {
    path: `${item.activeRule}:catchAll(.*)`,
    name: item.name,
    component: () => import('@/views/Micro.vue')
  };
  microChildRouters.push(obj);
});

export const microRouter = [
  {
    path: `/micro`,
    name: 'micro',
    component: Layout,
    // redirect: apps[0].activeRule,
    children: microChildRouters
  }
]

export default microRouter;