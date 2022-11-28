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
        <button i class="bi bi-pencil" style="margin-right: 2px" @click="goTo(id)"
        ></button>
      </div>
       <div class="col" id="button_edit">
        <button i class="bi bi-trash3" style="margin-right: 2px" @click="borrar(id)"
        ></button>
      </div>
    </div>

    <br>

     <router-view :key="$route.path"> </router-view>


  </div>
</template>

<script>
import { useAppStore } from "../store";
import axios from "axios";

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
    goTo(id){

      //objeto router -> tiene 1 pila de ruteo
      this.$router.push(`/product/articulo/${id}`)

    },
   async borrar(id){
      ///users/:id/compras/:id
       
        await axios.delete(`https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.id}`).then((data) => {

          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)
          console.log('Borre la siguiente compra');
          console.log(this.id);
          this.$router.push('/');

        });
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