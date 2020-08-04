import Vue from 'vue'
import App from './App.vue'
import { Lazyload, Swipe, SwipeItem, Search, Button, Row, Col, List } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Search).use(Lazyload).use(List)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
