import Vue from 'vue'
import Home from './views/Home.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Icon, NavBar } from 'vant'
import './global.scss'
Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar)
new Vue({
  router,
  store,
  render: h => h(Home)
}).$mount('#app')
