import Vue from 'vue'
import App from './App.vue'
import { Cell, CellGroup, Field, Button, Row, Col } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Field)
Vue.use(Cell).use(CellGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
