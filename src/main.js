import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Routes from './router'
Vue.config.productionTip = false

// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import '@/assets/css/tailwind.css'
// Vue.use(Buefy)
import VueRouter from 'vue-router'

Vue.use(vueResource)
Vue.use(vueRouter)


/****************************************/
/********** Router START here **********/
/**************************************/
const router = new vueRouter({
  routes: Routes,
  mode: 'history' 
}); 

import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
