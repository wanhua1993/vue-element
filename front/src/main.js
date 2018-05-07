// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import axios from './http'
import store from './store/'
import mUtils from "./utils/utils.js";
Vue.prototype.axios = axios

Vue.config.productionTip = false;
Vue.use(ElementUI);

const menuData = JSON.parse(localStorage.getItem('menuList'));
if (menuData) {
  store.commit('ADD_MENU', menuData)    // ?? commit or dispatch ,将缓存数据注入到store中
  const routes = mUtils.generateRoutesFromMenu(menuData) //根据菜单生成的路由信息
  const asyncRouterMap = [
    {
      path: '/index',
      name: '',
      hidden: true,
      component: require('@/views/home.vue').default,
      redirect: '/index',
      children: routes
    }
  ]
  router.addRoutes(asyncRouterMap);
}
var a = 0;
router.beforeEach((route, redirect, next) => {
  //定位到首页时，清空缓存数据;
  // console.log(route);
  // if(route.path=='/' || route.path == '/sign_up'){//如果是登录页面路径，就直接next()
  //   next();
  // }else{//不然就跳转到登录；
  //   next('/sign_up');
  // }
  next();



  // if (route.path === '/') {
  //   localStorage.removeItem('userinfo')
  //   localStorage.removeItem('menuData')
  //   store.commit('ADD_MENU', [])
  // }
  // //判断是否有用户登录的记录
  // let userinfo = JSON.parse(localStorage.getItem('userinfo'))

  // if (!userinfo && route.path !== '/') {   // 没有用户信息，route.path不是定位到登录页面的,直接跳登录页面。
  //   next({ path: '/' })
  // } else {
  //   if (route.name) {   // 有用户信息和路由名称的，直接跳要路由的页面。
  //     next()
  //   } else {    // 有用户信息，没有路由名称的，直接跳404页面。
  //     next({ path: '/404' })
  //   }
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
});
