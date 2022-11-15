<template>
    <div>
     
      <ul>
        <li 
         v-for=" articulo in articulos" 
         :key="articulo.id"
          class="list-group-item list-group-item-acion"
        >
        <br>
        <h2>Nombre del articulo</h2>
        | {{articulo.nombre}}  |
        <h3>Precio</h3>
        | ${{articulo.precio}}  | 
        <h4>Cantidad</h4>
        | {{articulo.cantidad}} |
        <br>
        

        

        </li>
      </ul>
      <br>
      
      <router-link to="/product">Volver</router-link>
    </div>
</template>

<script>

import { useAppStore } from "../store";
export default {
  setup() {
    const store = useAppStore();
    return { store };
  },
  data() {
    return {
      //chequear watch para ver el cambio de ruta.
      id: this.$route.params.id,
      articulos: []
      
    };
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id    
    }
    
    
  },
    created() {
    if (this.store.loginStatus) {
      this.buscarCompra()
    }
     
  },
  methods: {
    async buscarCompra(){
       const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.id}/articulos`
      );
      const data = await resultado.json();
      this.articulos = data;
    },
    buscarComprasDelUsuario(id) {
      return this.compras.filter((elemento) => (elemento.userId = id));
    },
    mostrarCompras() {
      return this.compras.length > 0;
    },
    /*calcularTotal(){
      const total = 0
      for (let index = 0; index < this.articulos.length; index++) {
        let element = this.articulos[index];
        total = total + element.precio
        
      }
      return total
    }*/
  },
  computed: {},
};
</script>