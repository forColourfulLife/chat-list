import Vue from 'vue'
import App from './App.vue'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)

if (process.env.NODE_ENV === 'development') {
  require('./mock/index.js')
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
