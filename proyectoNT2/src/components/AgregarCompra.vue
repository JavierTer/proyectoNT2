<template>
    <div>
    <div id="agregarCompra">
   
    <h2>Registra una compra</h2>
      <div class="row">
        <span class="input-group-text">Mes</span>
        <div style="margin: 10px" id="marco" class="form-floating">
          <input
            type="text"
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
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder=""
            v-model="precioArticulo"
          />
          <label for="floatingInputGroup1"></label>
        </div>

        <span class="input-group-text">Cantidad</span>
        <div style="margin: 10px" class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder=""
            v-model="cantidadArticulo"
          />
          <label for="floatingInputGroup1"></label>
        </div>
        <button class="btn btn-primary" v-on:click.prevent="guardarCompra"> Guardar </button>
               
        {{compra.mes}} {{compra.articulos.nombre}} {{compra.articulos.precio}} {{compra.articulos.cantidad}} {{compra.userId}}

      </div>
      
      
    </div>
    </div>
</template>
<script>

import { useAppStore } from "../store";
import axios from 'axios';
export default {
  
  setup() {
    const store = useAppStore();
    return { store };
  },
  data() {
    return {
      compra: {
        mes: "",
        articulos : []
      },
      nombreArticulo: '',
      precioArticulo: 0,
      cantidadArticulo: 0,
      pathCompra: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`,
     // pathArticulo: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/1/articulos`
      
    };
  },
  async created() {
    
  },
  methods: {
    /*validar() {
            if(this.usuario.userName == this.store.getNameAdmin && this.usuario.pass == this.store.getIdAdmin){
                alert('Bienvenido ' + this.store.getNameAdmin);
                console.log('llegue aca 1 ' + this.usuario.userName);
            }
            else{
                alert('Datos ingresados incorrectos');
                console.log('llegue aca 2 ' + this.usuario.userName);

            }
            
        }*/
    generarId() {
        //genera un número random y busca si no esta en las compras.
        return 12345
    },
    validar(){
        return true
    },
    async guardarCompra(){
      this.compra.articulos.push(
        {
        id: 1,
        nombre: this.nombreArticulo, 
        precio: this.precioArticulo, 
        cantidad: this.cantidadArticulo}),
       await axios.post(this.pathCompra,    this.compra).then(data => {console.log(data);})

    //   await axios.post(this.pathArticulo,  this.compra.articulos).then(data => {console.log(data);})



    },
    async buscarProximoId(){
       const resultado = await fetch(
      `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
    );

    const data = await resultado.json();

    const ultimoIdDeCompra = data[data.length].id 
    console.log(ultimoIdDeCompra);
    return ultimoIdDeCompra + 1
    }
/*
        {
          var data = {
            
            compra: {
                mes: this.mes,
                compraId: 55555555555,
                userId: this.store.idUser,
                articulos: [{idArticulo: 1112112121, 
                compraId: this.compraId,
                nombreArticulo: this.nombreArticulo,
                precioArticulo: this.precioArticulo,
                cantidadArticulo: this.cantidadArticulo}]

            }
                         

          }
          this.compra.articulos.push(this.articulos);
          this.compra =  {
                      mes: "",
                      compraId: 0,
                      userId: 0,
                      nombreArticulo: '',
                      precioArticulo: 0,
                      cantidadArticulo: 0,
                      articulos : []

          }
      };
        console.log(this.compra.articulos);
    }
   */
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