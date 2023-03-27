import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/Usuario/ListarUsuario.vue"
import CrearUsuario from "../components/Usuario/AgregarUsuario.vue"
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
      {
        path: 'listardepartamento',
        component: () => import(/* webpackChunkName: "Profile" */ '../components/Departamento/ListarDepartamento.vue')
      },
      {
        path: 'agregardepartamento',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Departamento/AgregarDepartamento.vue')
      },
      {
        path: '/editardepartamento/:pkDepartamento',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Departamento/EditarDepartamento.vue')
      },
      {
        path: 'agregarempleado',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Empleado/AgregarEmpleado.vue')
      },
      {
        path: 'listarempleado',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Empleado/ListarEmpleado.vue')
      },
      {
        path: '/editarempleado/:pkEmpleado',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Empleado/EditarEmpleado.vue')
      },    
      {
        path: 'listarfactura',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Factura/ListarFactura.vue')
      },   
      {
        path: 'agregarfactura',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Factura/AgregarFactura.vue')
      },   
      {
        path: '/editarfactura/:pkFactura',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Factura/EditarFactura.vue')
      },     
      {
        path: 'listarpuesto',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Puesto/ListarPuesto.vue')
      },   
      {
        path: 'agregarpuesto',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Puesto/AgregarPuesto.vue')
      },   
      {
        path: '/editarpuesto/:pkpuesto',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Puesto/EditarPuesto.vue')
      },  
      {
        path: 'agregarrol',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Rol/AgregarRol.vue')
      },
      {
        path: 'listarrol',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Rol/ListarRol.vue')
      },
      {
        path: '/editarrol/:pkRol',
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Rol/EditarRol.vue')
      },
      {
        path: 'listarusuario',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Usuario/ListarUsuario.vue')
      },
      {
        path: 'agregarusuario',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Usuario/AgregarUsuario.vue')
      },
      {
        path: '/editarusuario/:pkUsuario',    
        component: () => import(/* webpackChunkName: "Settings" */ '../components/Usuario/EditarUsuario.vue')
      },
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
  {
    path: '/editardepartamento/:pkDepartamento',    
    component: () => import(/* webpackChunkName: "Settings" */ '../components/Departamento/EditarDepartamento.vue')
  },
  {
    path: '/editarempleado/:pkEmpleado',    
    component: () => import(/* webpackChunkName: "Settings" */ '../components/Empleado/EditarEmpleado.vue')
  },    
  {
    path: '/editarfactura/:pkFactura',
    component: () => import(/* webpackChunkName: "Settings" */ '../components/Factura/EditarFactura.vue')
  },    
  {
    path: '/editarpuesto/:pkpuesto',
    component: () => import(/* webpackChunkName: "Settings" */ '../components/Puesto/EditarPuesto.vue')
  },  
  {
  path: '/editarrol/:pkRol',
  component: () => import(/* webpackChunkName: "Settings" */ '../components/Rol/EditarRol.vue')
  },  
  {
    path: '/editarusuario/:pkUsuario',    
    component: () => import(/* webpackChunkName: "Settings" */ '../components/Usuario/EditarUsuario.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router