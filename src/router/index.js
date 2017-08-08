/**
 * 路由组件
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 引入组件
import home from '../components/home/home.vue'
import catFood from '../components/catFood/catFood.vue'
import special from '../components/special/special.vue'
import supermarket from '../components/supermarket/supermarket.vue'
import vid from '../components/vid/vid.vue'
import lesson from '../components/lesson/lesson.vue'

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '/home',component: home},
    {path: '/catFood',component: catFood},
    {path: '/special',component: special},
    {path: '/supermarket',component: supermarket},
    {path: '/vid',component: vid},
    {path: '/lesson',component: lesson},
    {path: '/',redirect: '/home'},
  ]
})
