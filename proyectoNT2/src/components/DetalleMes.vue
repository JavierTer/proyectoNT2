<template>
    <div>
        <h1>Detalle de {{compraDelMes.nombre}}</h1>
        

        
      
      <div class="row"
                
                  id="caja"
                  > <h2 id="tit">{{compraDelMes.nombre}}</h2>
                    <div class="row" v-if="compraDelMes.cantComprasMes > 0">
                       <div class="col">
                          <h4>Compras : {{compraDelMes.cantComprasMes}}</h4>  
                          <table class="table bordered striped">
                                <thead>
                                  <tr>
                                    <th>Fecha</th>
                                    <th>Total</th>
                                  
                                  </tr>
                                </thead>
                                <tbody>
                                      <tr v-for="(unaCompra, index) in compraDelMes.compras" v-bind:key="index"> 
                                        <td>{{unaCompra.mes}}</td>
                                        <td>${{unaCompra.total}}</td>
                                        
                                      </tr>
                                </tbody>
                            </table>
                      </div>
                    <div class="col">
                       <h4>Articulos : {{ compraDelMes.articulos.length }} </h4> 
                        <table class="table bordered striped">
                                <thead>
                                  <tr>
                                    <th>Nombre</th>
                                    <th>Cantidad Mensual</th>
                                    <th>Gasto Mensual</th>

                                  </tr>
                                </thead>
                                <tbody>
                                      <tr v-for="(unArticulo, index) in compraDelMes.articulos" v-bind:key="index"> 
                                        <td>{{unArticulo.nombre.toUpperCase()}}</td>
                                        <td>{{unArticulo.cantidad}}</td>
                                        <td>${{unArticulo.monto}}</td>

                                      </tr>
                                </tbody>
                            </table>
                    </div>
                    <div class="row">
                      <h5 style="padding-top:20px">Total gastado en {{compraDelMes.nombre}}: ${{compraDelMes.totalPorMes}} </h5>
                      
                    </div>
                    </div>
                    <div v-else>
                      <h6>No se registraron compras en {{compraDelMes.nombre}}</h6>
                      <!--<p>Su objetivo para este mes fue: {{gastoMaximo}}</p>-->
                      <p></p>
                    </div>
                   
            </div>
      <div>
          <router-link 
          type="button"
          class="btn btn-primary"
          style="margin-top:20px"
          to="/" >Volver a Home</router-link>
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
        compraDelMes: this.$route.params.comprasPorMes
    };
    },
   watch: {
   
  },  
  async created() {
   
  },
   methods : {
    
      
  }
  
};
</script>

<style>
    #tit {
  text-align: start;
  align-content: center;
  margin-bottom: 20px;
  padding-top: 10px;
}

#caja {
    text-align: center;
    padding: 15px;
    margin: 15px;
    border: 2px solid black;
  
  background: url("https://img.freepik.com/foto-gratis/piggy-concepto-ahorro-dinero-moneda-sobre-fondo-rosa-renderizado-3d_56104-1444.jpg?w=2000");
  width: 100%;
  height: 100%;
}
</style>