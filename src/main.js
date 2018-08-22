import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'styles/pages/index'

import {
  JslAvatar,
  JslButton,
  JslClose,
  JslLoading,
  JslNavBar,
  JslNomoreTip
} from 'jsl-vue-h5'
import 'jsl-vue-h5/dist/jsl-vue-h5.min.css'

Vue.use(JslAvatar)
Vue.use(JslButton)
Vue.use(JslClose)
Vue.use(JslLoading)
Vue.use(JslNavBar)
Vue.use(JslNomoreTip)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
