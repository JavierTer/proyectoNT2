<template>
    <div>
       <h1>Hola {{ this.store.nameUser }} gestiona tu cuenta</h1> 


      <div class="row">
        <div class="col">
          <h3>Categorias</h3>
           <div class="row" v-if="this.usuario.categorias.length > 0">
            <table class="table bordered striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                  
                  </tr>
                </thead>
                <tbody>
                      <tr v-for="(categoria, index) in this.usuario.categorias" v-bind:key="index"> 
                        <td>{{categoria}}<td>
                       
                        <td> <i class="bi bi-x-circle-fill" style="cursor:pointer" @click="usuario.categorias.splice(index, 1)"> </i> </td>
                        
                      </tr>
                </tbody>
            </table> 
            
           
           
        </div>
        <span class="input-group-text">Nombre de categoria</span>
        <div style="margin: 10px" class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="00.0"
            v-model="nombreCategoria"
          />
          <label for="floatingInputGroup1"></label>
        </div>
         <button type="button" id="agregarCategoria"  class="btn btn-primary" @click="agregarCategoria">
                  Agregar categoria
          </button>
          <button type="button" id="agregarCategoria"  style=margin:10px; class="btn btn-primary" @click="guardar">
                  Guardar
          </button>
        <!--<div v-else>
          No hay categorias registradas
        </div>-->
        </div>
      </div>
      

        <router-link class="btn btn-primary" style="margin:10px" to="/">Cerrar</router-link>

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
     usuario: {
        categorias: ['comida', 'limpieza', 'salud'],
     },
      nombreCategoria: '',
      meses:   ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      pathUser:  `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}`
    };
    },
   watch: {
    $route(to, from) {
      this.id = this.$route.params.id;
    },
  },  
  async created() {
    if (this.store.loginStatus) {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}`
      );
      const data = await resultado.json();

      this.usuario = data;
      console.log(this.usuario);
      
    }
  },
   methods : {
    agregarCategoria(){
      console.log(this.usuario);
    },
    hayCategorias(){
      return this.usuario.categorias;
    },
    agregarCategoria() {
      let categoriaNueva = this.nombreCategoria;
      if(categoriaNueva.length < 1){
        alert('Debe ingresar un campo')
      }
      else{
      this.usuario.categorias.push(categoriaNueva);
      console.log(this.usuario);
      this.nombreCategoria = ""

      }
    },
    async guardar() {
      if (this.usuario.categorias.length < 1) {
        alert("Debe agregar al menos 1 categoria");
      } else {
        console.log(this.usuario);
        await axios.put(this.pathUser, this.usuario).then((data) => {
          console.log(data);

          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)

          this.$router.push('/')

        });
      }
    },
      /*obtenerComprasMensuales() {
      for ( let i = 0; i < this.compras.length; i++) {
        const element = this.compras[i];
        //console.log(element.mes);
        //console.log(typeof(element.mes));
        //Convierto a fecha el elemento mes de la fecha porque mockapi lo convierte a string cnd lo guarda.
        let nvaFecha = new Date(element.mes);

        //guardo en compraPorMes en la posición que se obtiene del més
       if(nvaFecha === this.id){
       this.comprasPorMes.compras.push(element);
        this.comprasPorMes.totalPorMes += element.total;
        this.comprasPorMes.cantComprasMes++;
        this.comprasPorMes.articulos.push(
          element.articulos
        );

       }

        //console.log('datos de la variable ya modificada a fecha');
        // console.log(nvaFecha.getMonth());
        //console.log(typeof(nvaFecha));

        // console.log(nvaFecha.getMonth());
      }
    },
      clasificarArticulos() {
      for (let i = 0; i < this.comprasPorMes.length; i++) {
        const comprasPorMes = this.comprasPorMes[i];
        let articulos = [];
        for (let x = 0; x < comprasPorMes.articulos.length; x++) {
          const articulosDeUnMes = comprasPorMes.articulos[x];

          for (let y = 0; y < articulosDeUnMes.length; y++) {
            const unArticulo = articulosDeUnMes[y];
            

            let articuloBuscado = articulos.find(
              (element) => element.nombre.toUpperCase() == unArticulo.nombre.toUpperCase()
            );
            console.log("el articulo buscado es: ");
            console.log(articuloBuscado);
            if (articuloBuscado == null) {
              const miPrototipoDeObjeto = {
                nombre: unArticulo.nombre,
                cantidad: parseInt(unArticulo.cantidad),
                monto: unArticulo.subTotal,
              };

              articulos.push(miPrototipoDeObjeto);
            } else {
              let cantidadPars = parseInt(unArticulo.cantidad)
              articuloBuscado.cantidad = articuloBuscado.cantidad + cantidadPars;
              articuloBuscado.monto = articuloBuscado.monto + unArticulo.subTotal;
            }
          }

          //esto tengo q borrar
        }
        this.comprasPorMes[i].articulos = articulos;
      }
    }*/
  }
  
};
</script>

<style>
    
</style>