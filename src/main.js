import Vue from 'vue'
import App from '../src/App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Icon, NavBar, Grid, GridItem } from 'vant'
import './global.scss'
Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar).use(Grid).use(GridItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
