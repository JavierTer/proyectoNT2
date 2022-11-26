<template>
  <div>
    <div id="agregarCompra" @agregarArticulos.prevent style="margin: auto">
      <div style="padding:20px" class="row">
        <div class="col">
            <h2>Registra una compra</h2>
        </div>
            <div class="col" v-if="this.compra.articulos.length > 0">
                <h3 bg-secondary id="cantArticulos">{{this.compra.articulos.length}}</h3>
            </div>
      </div>
      <div class="row" style="width:75%; margin:auto ">
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

        <div class="row">
          <div class="row">
              <button type="button" id="agregarArticulo"  class="btn btn-primary" @click="agregarArticulos">
                  Agregar articulo
              </button>
          </div>
        </div>

        <div class="row" style="padding:20px">
               <button type="button" id="registrarCompra" class="btn btn-primary" @click="crearCompra">
                  Registrar compra
               </button>
        </div>
          
     

       

        <div class="row" v-if="this.compra.articulos.length > 0">
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
                      <tr v-for="articulo in compra.articulos" v-bind:key="articulo"> 
                        <td>{{articulo.nombre}}</td>
                        <td>{{articulo.precio}}</td>
                        <td>{{articulo.cantidad}}</td>
                        <td>{{articulo.subTotal}}</td>
                        
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
        total: 0,
      },
      //idDeLaCompra: 0,
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
    async crearCompra() {
      if (this.compra.articulos.length < 1) {
        alert("Debe agregar al menos 1 articulo");
      } else {
        this.compra.total = this.calcularTotal(this.compra.articulos);
        console.log(this.compra.total);
        await axios.post(this.pathCompra, this.compra).then((data) => {
          this.idDeLaCompra = data.data.id;

          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)
          console.log("Se creo la compra");
          console.log(data.data);
          console.log("este es mi idDeLaCompra");
          console.log(this.idDeLaCompra);
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
  border:3px solid white;
  border-radius:20px;

}

#registrarCompra{
  width: 50%;
  border:3px solid white;
  border-radius:20px;
  margin: auto;
}
</style>