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

// footer组件
import soft from '../components/soft/soft.vue'
import shopCar from '../components/shopCar/shopCar.vue'
import eCenter from '../components/eCenter/eCenter.vue'

// catFood 组件
import foodList from '../components/foodList/foodList.vue'

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {path: '/home',component: home},
    {
      path: '/catFood',
      component: catFood,
      children: [
        {path: 'foodList/:type' , component: foodList}
      ]
    },
    {path: '/special',component: special},
    {path: '/supermarket',component: supermarket},
    {path: '/vid',component: vid},
    {path: '/lesson',component: lesson},
    {path: '/',redirect: '/home'},
    {path: '/soft',component: soft},
    {path: '/shopCar',component: shopCar},
    {path: '/eCenter',component: eCenter}
  ]
})
