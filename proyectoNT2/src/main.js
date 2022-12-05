import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Articulo from './components/Articulo.vue'
import AppLogin from './components/AppLogin.vue'
import AppLogout from './components/AppLogout.vue'
import AppRegister from './components/AppRegister.vue'
import AgregarCompra from './components/AgregarCompra.vue'
import EditarCompra from './components/EditarCompra.vue'
import EstadisticaMensual from './components/EstadisticaMensual.vue'





import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import {PiniaVuePlugin, createPinia} from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

const routes = [
  {path: "/", component: Home,
  /*children:
  [
    {path: "/:id", 
     name: "details",
     component: EstadisticaMensual}
  ],
  children:
  [
    {path: "/", component: EstadisticaMensual}
  ]*/},
  //children maneja los ruteos dentro del Producto (compra)
  //cnd tenemos hijos, podemos tener 1 ruta que no tiene el path declarado y esa va a ser la primera que se va a inyectar.
  {path: "/product/", component: Product, 
  children:
  [
    {path: ":id", component: Articulo,
    children:
    [{path: ":id", component: EditarCompra}]
  }]},
  {path:"/articulo", component: Articulo},
  {path: "/appLogin", component: AppLogin },
  {path: "/appLogout", component: AppLogout },
  {path: "/appRegister", component: AppRegister},
  {path: "/agregarCompra", component: AgregarCompra},
  {path: "/EstadisticaMensual", component: EstadisticaMensual},





];

//cambiar component x redirect(login y registro)
//redirect hace referencia a un ruta

const router = new VueRouter({routes})

Vue.use(VueRouter)

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('#app')
