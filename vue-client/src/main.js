import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'


Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
