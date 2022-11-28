<template>
  <div>
    <div class="row">
      <table class="table bordered striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="articulo in articulos" :key="articulo.nombre">
            <td>{{ articulo.nombre }}</td>
            <td>{{ articulo.precio }}</td>
            <td>{{ articulo.cantidad }}</td>
            <td>{{ articulo.subTotal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col">
           <router-link to="/product">Cerrar</router-link>
      </div>
      <div class="col" id="button_edit">
        <button i class="bi bi-pencil" style="margin-right: 2px"></button>
      </div>
    </div>

    <br>


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
      articulos: [],
    };
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id;
    },
  },
  created() {
    //if (this.store.loginStatus) {
    this.buscarCompra();
    //}
  },
  methods: {
    async buscarCompra() {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.id}`
      );
      const data = await resultado.json();
      this.articulos = data.articulos;
      //this.articulos = this.articulos[1].articulos

      console.log(this.articulos);
    },
    buscarComprasDelUsuario(id) {
      return this.compras.filter((elemento) => (elemento.userId = id));
    },
    mostrarCompras() {
      return this.store.compras.length > 0;
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
  computed: {
    /*,
  computed: {
    cambioId(){
      for (let index = 0; index < this.store.idCompras.length; index++) {
        const element = this.store.idCompras[index];
        return element.find((elemento) => elemento.id == element.id)
        
      }
    }
  },*/
  },
};
</script>