import Vue from 'vue'
import App from './App.vue'
import './permission'
import router from './router'
import ElementUI from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from './utils/request'

Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(Component)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
