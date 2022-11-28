<template>
  <div>
    Editar compra
    {{this.id}}

     <div id="agregarCompra" @agregarArticulos.prevent style="margin: auto">
      <div style="padding:20px" class="row">
        <div class="row">
            <div>Editar compra</div>
        </div>
            <div class="row" v-if="this.compra.articulos.length > 0">
                <h3 bg-secondary id="cantArticulos">{{this.compra.articulos.length}}</h3>
            </div>
      </div>
      <div class="row" style="width:75%; margin:auto ">
        <span class="input-group-text">Fecha de la compra</span>
        <div style="margin: 2px" id="marco" class="form-floating">
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

        <div class="row">
          <div class="row">
              <button type="button" id="agregarArticulo"  class="btn btn-primary" @click="agregarArticulos">
                  <i class="bi bi-plus"></i>

              </button>
          </div>
        </div>

        <div class="row" style="padding:20px">
               <button type="button" id="registrarCompra" class="btn btn-primary" @click="crearCompra">
                  Registrar compra
               </button>
        </div>
          
     

       

        <div class="row" v-if="verArticulos">
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
                      <tr v-for="(articulo, index) in compra.articulos" v-bind:key="index"> 
                        <td>{{articulo.nombre}}</td>
                        <td>{{articulo.precio}}</td>
                        <td>{{articulo.cantidad}}</td>
                        <td>{{articulo.subTotal}}</td>
                        <td> <i class="bi bi-x-circle-fill" style="cursor:pointer" @click="compra.articulos.splice(index, 1)"> </i> </td>
                        
                      </tr>
                </tbody>
            </table>
        </div>

        

        <!--<router-view :key="$route.path"> </router-view>-->

        <!-- <button class="btn btn-primary" v-on:click.prevent="guardarCompra">
          Guardar
        </button> -->
      </div>
    </div>

    <div class="col">
           <router-link to="/product">Cerrar</router-link>
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
      id: this.$route.params.id,

      compra: {
        mes: new Date(),
        articulos: [],
        total: 0,
      },
      //idDeLaCompra: 0,
      nombreArticulo: "",
      precioArticulo: 0,
      cantidadArticulo: 0,
      pathCompraEdit: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.$route.params.id}`
      // pathArticulo: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/1/articulos`
      ///users/:id/compras/:id
    };
  },
  async created() {
    ///users/:id/compras/:id
    if (this.store.loginStatus) {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.id}`
      );
      const data = await resultado.json();
      
      //this.compras = this.buscarComprasDelUsuario(this.store.idUser)

      this.compra = data;
      //extraerFecha()
     // this.guardarIdCompras()
    }
  
  },
   watch: {
    $route(to, from) {
      this.id = this.$route.params.id;
    },
  },
  methods: {
    validar() {
      return true;
    },/*
    async verSiHayArticulos() {
      const compra = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/${this.idDeLaCompra}`
      );
      const data = await resultado.json();
    },*/
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
    async crearCompra() {
      if (this.compra.articulos.length < 1) {
        alert("Debe agregar al menos 1 articulo");
      } else {
        this.compra.total = this.calcularTotal(this.compra.articulos);
        await axios.put(this.pathCompraEdit, this.compra).then((data) => {
          this.idDeLaCompra = data.data.id;

          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)
          console.log('Modifiqué la siguiente compra');
          console.log(this.id);
          this.$router.push('/product')

        });
      }
    },
    calcularTotal(articulos) {
      let total = 0
      for (let i = 0; i < articulos.length; i++) {
        console.log(articulos[i].subTotal);
        total = total + articulos[i].subTotal;
        
      }
      return total;
    },
    async goTo(id) {
      if (this.idDeLaCompra == 0) {
        alert("Primero debe crear la compra");
      } else {
        //console.log(this.compra.id);
        this.$router.push(`/agregarCompra/${id}`);

        console.log(`este es el id que pasa  ${id}`);
      }

      console.log(`${id}`);
    },
    agregarArticulos() {
      let articulos = {
        id: this.compra.articulos.length + 1,
        nombre: this.nombreArticulo,
        precio: this.precioArticulo,
        cantidad: this.cantidadArticulo,
        subTotal: this.calcularSubTotal(
          this.precioArticulo,
          this.cantidadArticulo
        ),
      };

      this.compra.articulos.push(articulos);

      (this.nombreArticulo = ""),
        (this.precioArticulo = 0),
        (this.cantidadArticulo = 0);
    },
    calcularSubTotal(precio, cantidad) {
      return precio * cantidad;
    },
    verArticulos(){
      return this.compra.articulos.length
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

#cantArticulos{
   margin: auto;
   width:50px;
   height:50px;
   border:3px solid black;
   border-radius:80px;
   text-align: center;
   color: black;
   justify-content: center;
   align-content: center;
}

#agregarArticulo{
  width: 20%;
  border-radius:20px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

#registrarCompra{
  width: 50%;
  border:3px solid white;
  border-radius:20px;
  margin: auto;
}
</style>