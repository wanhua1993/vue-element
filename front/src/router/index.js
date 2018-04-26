import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Index from '@/components/include/index'
import First from '@/views/first'
import SignUp from '@/views/sign_up'
import sys_user from '@/views/sys_user'
import create_emit from '@/views/create_emit'
import logistics from '@/views/logistics'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'first',
          name: 'First',
          component: First
        },
        {
          path: 'signUp',
          name: 'SignUp',
          component: SignUp
        },
        {
          path: 'sys_user',
          name: 'sys_user',
          component: sys_user
        },
        {
          path: 'create_emit',
          name: 'create_emit',
          component: create_emit
        },
        {
          path: 'logistics',
          name: 'logistics',
          component: logistics
        }
      ]
    }
  ]
})
