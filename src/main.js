import Vue from 'vue'
import App from './App.vue'
// import Axios from './request/request.js'

require ('./request/request.js')
require ('./mock/index.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
