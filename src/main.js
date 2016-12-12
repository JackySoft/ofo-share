import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import UseCar from './components/UseCar.vue'
import AddCar from './components/AddCar.vue'
import CarList from './components/CarList.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'useCar',
      path: '/useCar',
      component: UseCar
    },
    {
      path: '/AddCar',
      component: AddCar
    },
    {
      path: '/carList',
      component: CarList
    },
    {
      path: '/home',
      redirect: '/'
    }
  ]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
