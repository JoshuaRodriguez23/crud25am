import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/Usuario/ListarUsuario.vue"
import CrearUsuario from "../components/Usuario/CrearUsuario.vue"
import AgregarCliente from "../components/Cliente/AgregarCliente.vue"
import EditarCliente from "../components/Cliente/EditarCliente.vue"
import ListarCliente from "../components/Cliente/ListarCliente.vue"


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
    component: function () { return import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue') }  ,
    children: [
      {
        path: 'listarcliente',
        component: () => import(/* webpackChunkName: "Overview" */ '../components/Cliente/ListarCliente.vue')
      },
      {
        path: 'agregarcliente',
        component: () => import(/* webpackChunkName: "Messages" */ '../components/Cliente/AgregarCliente.vue')
      },
      // {
      //   path: 'profile',
      //   component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
      // },
      // {
      //   path: 'settings',
      //   component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
      // }
    ]

  },
  {
    path: '/register',
    name: 'register',
    component: function () { return import(/* webpackChunkName: "register" */ '../views/RegisterView.vue') }    
  },
  {
    path: '/editarcliente/:pkCliente',
    name: 'editarcliente',
    component: EditarCliente
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router