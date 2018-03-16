import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../pages/home/home')), 'home');

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      meta: '首页',
      component: Home
    }
  ]
})
