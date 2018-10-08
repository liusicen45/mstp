import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve),
      meta: {
        title: '欢迎登陆xxx管理系统'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login'], resolve),
      meta: {
        title: '欢迎登陆xxx管理系统'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home/home'], resolve),
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: resolve => require(['@/components/home/homepage'], resolve),
          meta: {
            title: '系统主页'
          }
        },
        {
          path: '/info',
          name: 'info',
          component: resolve => require(['@/components/home/info'], resolve),
          meta: {
            title: '表格'
          }
        },
        {
          path: '/icon',
          name: 'icon',
          component: resolve => require(['@/components/home/icon'], resolve),
          meta: {
            title: '自定义icon'
          }
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/components/register'], resolve),
      meta: {
        title: '注册'
      }
    }
  ]
})
