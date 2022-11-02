import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import AgregarCompra from './components/AgregarCompra.vue'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";


const routes = [
  {path: "/", component: Home},
  {path: "/product", component: Product},
  {path:"/agregarCompra", component: AgregarCompra}
];

const router = new VueRouter({routes})

Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
