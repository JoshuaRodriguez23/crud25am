import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/ListarUsuario.vue"
import CrearUsuario from "../components/CrearUsuario.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () { return import(/* webpackChunkName: "about" */ '../views/AboutView.vue') }
  },
  {
    path: '/login',
    name: 'login',
    component: function () { return import(/* webpackChunkName: "login" */ '../views/LoginView.vue') }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function () { return import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue') }    
  },
  {
    path: '/register',
    name: 'register',
    component: function () { return import(/* webpackChunkName: "register" */ '../views/RegisterView.vue') }    
  },
  {
    path: '/listar',
    name: 'listar',
    component: ListarUsuario
  },
  {
    path: '/crear',
    name: 'crear',
    component: CrearUsuario
  },
  {
    path: '/general',
    name: 'general',
    component: function () { return import(/* webpackChunkName: "general" */ '../views/GeneralView.vue') }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
