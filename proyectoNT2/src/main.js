import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import AgregarCompra from './components/AgregarCompra.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import {PiniaVuePlugin, createPinia} from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

const routes = [
  {path: "/", component: Home},
  {path: "/product", component: Product},
  {path:"/agregarCompra", component: AgregarCompra}
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
