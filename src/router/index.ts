/**
 * 路由入口
 * @author wu
 */
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
NProgress.configure({ showSpinner: false, easing: 'ease', speed: 1000 }); // NProgress Configuration



import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import homePage from '@/components/common/homePage.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: homePage,
    children: [{
      path: "routePath",
      name: "routePath",
      meta: {
        title: "路由传参",
      },
      component: () => import('@/views/vueRoute/routePath.vue'),
    
    }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  //设置滚轮位置
  scrollBehavior(/* to, from, savedPosition */) {
    return { top: 0 }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((/* to, from */) => {
  // start progress bar
  NProgress.start();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router
