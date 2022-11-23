<template>
  <div>
    <div id="agregarCompra" @agregarArticulos.prevent style="margin: auto">
      <h2>Registra una compra</h2>
      <div class="row">
        <span class="input-group-text">Fecha de la compra</span>
        <div style="margin: 10px" id="marco" class="form-floating">
          <input
            type="date"
            class="form-control"
            id="floatingInputGroup1"
            placeholder=""
            v-model="compra.mes"
          />
          <label for="floatingInputGroup1"></label>
        </div>

        <span class="input-group-text">Nombre del articulo</span>
    <div style="margin: 10px" class="form-floating">
      <input
        type="text"
        class="form-control"
        id="floatingInputGroup1"
        placeholder=""
        v-model="nombreArticulo"
      />

      <label for="floatingInputGroup1"></label>
    </div>

    <span class="input-group-text">Precio del articulo</span>
    <div style="margin: 10px" class="form-floating">
      <input
        type="number"
        class="form-control"
        id="floatingInputGroup1"
        placeholder="00.0"
        v-model="precioArticulo"
      />
      <label for="floatingInputGroup1"></label>
    </div>

    <span class="input-group-text">Cantidad</span>
    <div style="margin: 10px" class="form-floating">
      <input
        type="number"
        class="form-control"
        id="floatingInputGroup1"
        placeholder=""
        v-model="cantidadArticulo"
      />
      <label for="floatingInputGroup1"></label>
    </div>
        
        <button 
          type="button" 
        class="btn btn-primary"
        @click="crearCompra"
        >Crear compra</button>
        <br>
        <br>

        <button
         
        type="button" 
        class="btn btn-primary"
        @click="agregarArticulos" >
         Agregar articulo </button>

      {{compra.articulos}}

      <!--<router-view :key="$route.path"> </router-view>-->

       
       <!-- <button class="btn btn-primary" v-on:click.prevent="guardarCompra">
          Guardar
        </button> -->
      </div>
    </div>
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
      compra: {
        mes: new Date(),
        articulos: [],
      },
      idDeLaCompra: 0,
      nombreArticulo: "",
      precioArticulo: 0,
      cantidadArticulo: 0,
      pathCompra: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`,
      // pathArticulo: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/1/articulos`
    };
  },
  async created() {},
  methods: {
    validar() {
      return true;
    },
    async verSiHayArticulos() {
      const compra = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.idDeLaCompra}`
      );
      const data = await resultado.json();
    },
    /*
    async guardarCompra() {
      this.compra.articulos.push({
        //id: 1,
        nombre: this.nombreArticulo,
        precio: this.precioArticulo,
        cantidad: this.cantidadArticulo,
      }),
        await axios.post(this.pathCompra, this.compra).then((data) => {
          console.log(data);
        });

      //   await axios.post(this.pathArticulo,  this.compra.articulos).then(data => {console.log(data);})
    }*/
    async crearCompra(){
      await axios.post(this.pathCompra, this.compra).then((data) => {
          this.idDeLaCompra = data.data.id;
          
          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)
          console.log('Se creo la compra'); 
          console.log(data.data);
          console.log('este es mi idDeLaCompra');
          console.log(this.idDeLaCompra);
      });
    },
    async goTo(id){
      
      if (this.idDeLaCompra == 0) {
        alert('Primero debe crear la compra')
        

      }
      else {
        //console.log(this.compra.id);
          this.$router.push(`/agregarCompra/${id}`)

          console.log(`este es el id que pasa  ${id}`);

      }
     

      

      console.log(`${id}`);
    },
    agregarArticulos(){
      let articulos = {
        nombre: this.nombreArticulo,
        precio: this.precioArticulo,
        cantidad: this.cantidadArticulo,
      };
       
       this.compra.articulos.push(articulos);

        this.nombreArticulo =    "",
        this.precioArticulo =    0,
        this.cantidadArticulo =  0
    }
     
    
    
  },
  computed: {
    estado() {
      return this.store.loginStatus;
    },
  },
};
</script>

<style>
#title {
  padding-bottom: 20px;
}

#bloqueLogin {
  margin: auto;
  width: 400px;
  height: 700px;
}
</style>