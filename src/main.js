import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  // router,
  render: h => h(App),
  store,
  router
})
