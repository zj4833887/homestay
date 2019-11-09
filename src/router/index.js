import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recommend from  '../views/Recommend/Recommend'
import Myorder from  '../views/Myorder/Myorder'
import information from  '../views/information/information'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: Recommend,
  },
  {
    path: '/Myorder',
    name: 'Myorder',
    component: Myorder,
  },
  {
    path: '/information',
    name: 'information',
    component: information,
  }

]

const router = new VueRouter({
  routes
})

export default router
