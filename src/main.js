import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import grid from './plugins/grid'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  grid,
  render: h => h(App)
}).$mount('#app')
