<template>
    <div>
        {{compra.mes}} {{compra.articulos.nombre}} {{compra.articulos.precio}} {{compra.articulos.cantidad}} {{compra.userId}}
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
            v-model="compra.articulos.nombre"
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
            v-model="compra.articulos.precio"
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
            v-model="compra.articulos.cantidad"
          />
          <label for="floatingInputGroup1"></label>
        </div>
        <button class="btn btn-primary" v-on:click="guardarCompra"> Guardar </button>
               

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
        mes: "enero",
        compraId: 12345,
        userId: this.store.idUser,
        articulos : [{nombre: 'Gaseosa', precio: 10, cantidad: 1, id: this.compraId+1, compraId: this.compraId }]
      },
      path: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
      
      
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
    guardarCompra(){
        
        axios.post(this.path, this.compra).then(data => {console.log(data);})
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