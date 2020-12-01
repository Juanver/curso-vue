import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import About from '../views/About.vue'
import Ejemplo from '../views/Ejemplo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Inicio
  },
  {
    path: '/sobre',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path:'/ejemplo',
    name: 'Ejemplo',
    component: Ejemplo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
