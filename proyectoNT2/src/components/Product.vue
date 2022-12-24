<template>
  <div>
    <br />
    <div v-if="mostrarCompras">
          <div class="row">
          <div class="row">
              <h1 >Hola {{ this.store.nameUser }}, tenes {{this.compras.length}} compras registradas</h1>
          </div>
          <div class="row">
               <div class="col" id="botones">
                  <button class="btn btn-primary" style="margin:10px" @click="ordenarCompras" >Ordenar por fecha {{this.orderByDate == 1 ?'⬆':'⬇'}}</button>
                  <button class="btn btn-primary" style="margin:10px"  @click="ordenarComprasMonto" >Ordenar por monto {{this.orderByPrice == 1 ?'⬆':'⬇'}}</button>
               </div>
                
          </div>
              
          
        </div>
    
     <div class="list-group" >
      <br>
      <div class="row">
        <div class="col" style="width:25%">
             <a  
                    v-for=" compra in compras" 
                    :key="compra.id"
                    @click="goTo(compra.id)"
                    style="cursor: pointer"
                    class="list-group-item list-group-item-acion"
                  > 
                  
                  <div class="row">
                        <div class="col">
                            <div class="row"> Fecha: </div>
                            <div class="row">{{compra.mes}}</div>  
                        </div>
                        <div class="col" id="monto">
                            <div class="row">Monto</div>
                             <div class="row">${{compra.total}}</div>           
                        </div>
                       
                  </div>
              </a>
        </div>
        <div class="col" style="width:70%">
                <router-view :key="$route.path"> </router-view>
        </div>
      </div>
    
    </div>
    </div>
    <div v-else>
      <h2>No hay compras registradas</h2>
    </div>
    
    
   
                     

              
      
      
       
          

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
      compras: [],
      orderByDate: 1,
      orderByPrice: 1, // 1 fecha, 2 costo
    };
  },
  async created() {
    if (this.store.loginStatus) {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
      );
      const data = await resultado.json();
      
      //this.compras = this.buscarComprasDelUsuario(this.store.idUser)

      this.compras = data;
      //extraerFecha()
     // this.guardarIdCompras()
    }
  },
  methods: {
     
    edit(){
      console.log('hola');
    },
   ordenarCompras() {
    //const comprasPorFecha =  [...this.compras].sort((a, b) => new Date(a.mes).getTime() - new Date(b.mes).getTime());
    //return comprasPorFecha
    //console.log(typeof(this.compras[5].mes));
    if(this.orderByDate == 1){
         this.orderByDate = 2;
         console.log(this.orderByDate);
         return this.compras.sort((a,b) => b.mes.localeCompare(a.mes))
        
    }
    else {

        this.orderByDate = 1;
        console.log(this.orderByDate);
        return this.compras.sort((a,b) => a.mes.localeCompare(b.mes))
    } 
    },
    ordenarComprasMonto() {
    if(this.orderByPrice == 1){
         this.orderByPrice = 2;
         console.log(this.orderByPrice);
         return this.compras.sort((a,b) => b.total - a.total)
        
    }
    else {

        this.orderByPrice = 1;
        console.log(this.orderByPrice);
        return this.compras.sort((a,b) => a.total - b.total)
    } 
    },
    goTo(id){
      //objeto router -> tiene 1 pila de ruteo
      this.$router.push(`/product/${id}`)

      console.log(`${id}`);
    },

    extraerFecha(){
      
    },
    
    
    calcularTotalPorCompra(){
  
    },
    guardarIdCompras(){
      for (let i = 0; i < this.compras.length; i++) {
        const element = this.compras[i];
        this.store.idCompras.push(this.compras[i].id)
        
      }
          //console.log(this.store.idCompras)

    }
  },
  computed: {
    mostrarCompras() {
      return this.compras.length > 0;
    }
    
  }
};
</script>

<style >
  #button_edit {
    text-align: end;
    width: 20%;
  }

  #monto {
    width: 20%;
    text-align: start;
  }

  #botones{
    text-align: start;
  }
 
 
</style>