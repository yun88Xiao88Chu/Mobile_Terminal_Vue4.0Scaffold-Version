import Vue from 'vue'
import App from './App.vue'

//加载路由器 加载数据仓库 加载字体图标
import router from "@/router"
import store from "@/store"
import "@/assets/stylus/iconmoon.styl"
import "@/assets/stylus/transition.styl"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
