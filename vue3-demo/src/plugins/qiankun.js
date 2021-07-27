import { registerMicroApps, setDefaultMountApp } from 'qiankun';
import { apps } from '@/router/micro-frontend.js'

const _apps = [];
apps.forEach(item => {
  _apps.push({
    name: item.name,
    entry: item.entry,
    container: item.container,
    activeRule: getActiveRule(item.activeRule)
  });
})

export default () => {
  // registerMicroApps(mapApps());
  registerMicroApps(_apps);
  setDefaultMountApp(apps[0].activeRule);
  // 启动 qiankun
  // start();
}

function getActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}