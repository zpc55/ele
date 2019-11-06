// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueScroller from 'vue-scroller'

import moment from 'moment'
import App from './App'
import router from './router'  //引入路由模块
import '../static/mock/mockServer' // 引入加载模块
import './common/stylus/fonts.styl'

Vue.use(VueResource)
Vue.use(VueScroller)

// 注册全局的过滤器
Vue.filter('date-string', function (value) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
