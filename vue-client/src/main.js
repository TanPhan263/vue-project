import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import axios from 'axios'
import babelPolyfill from 'babel-polyfill'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBWpwCzPne3JzfEIxHqDb1I2uZp_0dfkas",
    libraries: "places" // necessary for places input
  }
});

Vue.use(babelPolyfill)
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
Vue.prototype.$http = axios
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
  axios,
  template: '<App/>',
  components: {
    App
  }
})
