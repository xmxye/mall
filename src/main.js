import Vue from 'vue'
import App from './App.vue'
// import Axios from './request/request.js'
import router from './router/index'
import store from './store/index'

import toast from 'components/common/toast/index'

// 处理移动端300毫秒延迟
import fastclick from 'fastclick';
fastclick.attach(document.body); 



require ('network/request/request.js')
require ('mock/index.js')

// 注册事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false


// 安装toast插件
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
