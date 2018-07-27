// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
// import store from './store'
import store from './vuex/store'
Vue.use(VueResource)
Vue.use(MintUI)

Vue.config.productionTip = false

// 过滤器
Vue.filter('uppercase', function (value) {
  if (!value) {
    return ''
  }
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('date', function (value, format) {
  var o = {
    'M+': value.getMonth() + 1, // 月份
    'd+': value.getDate(), // 日
    'h+': value.getHours(), // 小时
    'm+': value.getMinutes(), // 分
    's+': value.getSeconds() // 秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (value.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
})

var Message = Vue.extend({
  props: ['content'],
  template: '<h1>{{content}}</h1>'
})
Vue.component('message', Message)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
