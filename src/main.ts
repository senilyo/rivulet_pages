import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$axios = axios


Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

