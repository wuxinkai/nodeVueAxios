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
import Layout from '@/layouts/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: Layout,
    meta: {
      title: "首页",
      notCache: true,
    },
    children: [{
      path: "routePath",
      name: "routePath",

      meta: {
        title: "路由传参",
      },
      component: () => import('@/views/vueRoute/routePath.vue'),

    },

    ]
  },
  {
    path: "/columnHome",
    name: "columnHome",
    meta: {
      title: "列表",
    },
    component: () => import('@/views/ColumnList/columnHome.vue'),

  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: "about",
      notCache: true,
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/from',
    name: 'from',
    meta: {
      title: "From",
      notCache: true,
    },
    component: () => import('../views/From.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: "1登录",
      notCache: true,
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/LoginRegister',
    name: 'LoginRegister',
    meta: {
      title: "d登录",
      notCache: true,
    },
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: '404',
    meta: {
      title: "404",
      notCache: true,
    },
    component: () => import('../views/404.vue')
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

router.beforeEach((to, from, next) => {
  // start progress bar

  // let tokenData = sessionStorage.getItem('token')
  // console.log(tokenData)
  // if (tokenData) {
  //   let token = JSON.parse(tokenData)
  //   next()
  // } else {
  //   next('/login')
  // }
  next()
  NProgress.start();

});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router
