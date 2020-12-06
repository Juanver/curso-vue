import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import About from '../views/Proyecto.vue'
import Ejemplo from '../views/Ejemplo'
import Error404 from '../views/Error404'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Inicio
  },
  {
    path: '/proyecto',
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
  },
  {
    path:'*',
    name:'404',
    component: Error404
  }
]


const router = new VueRouter({
  scrollBehavior(){
    return {x:0, y:0};
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
