import Vue from 'vue'
import Router from 'vue-router'

import home from '@/page/home/home'
import login from '@/page/login/login'
import register from '@/page/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})
