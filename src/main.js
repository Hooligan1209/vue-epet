// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入mint-ui插件
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueScroller from 'vue-scroller'

import router from './router'

Vue.use(MintUi);

Vue.use(VueScroller)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
