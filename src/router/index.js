import { createRouter, createWebHashHistory } from 'vue-router'

// 本地静态路由配置
export const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '首页',
      hidden: true
    }
  }, {
    path: '/signaturePad',
    component: () => import('@/views/signaturePad.vue'),
    meta: {
      title: '签名板',
      hidden: false
    }
  }, {
    path: '/pinyin',
    component: () => import('@/views/pinyin.vue'),
    meta: {
      title: '拼音',
      hidden: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '404',
      hidden: true
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router