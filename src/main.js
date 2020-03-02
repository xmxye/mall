import Vue from 'vue'
import App from './App.vue'
// import Axios from './request/request.js'
import router from './router/index'

require ('network/request/request.js')
require ('mock/index.js')

// 注册事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
