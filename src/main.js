import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 aframe 和 ar.js
import "aframe";
import 'ar.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
