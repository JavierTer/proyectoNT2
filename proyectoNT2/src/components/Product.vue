<template>
  <div>
    <br />
    
    <h1>Hola {{ this.store.nameUser }}, estas son tus compras</h1>
    <h4>Tenes {{this.compras.length}} compras registradas</h4>
    
    <div class="list-group" v-if="mostrarCompras">
      
      <button class="btn btn-primary" @click="ordenarCompras" >Ordenar por fecha</button>
      <br>

      <a  
          v-for=" compra in compras" 
          :key="compra.id"
          @click="goTo(compra.id)"
          style="cursor: pointer"
          class="list-group-item list-group-item-acion"
        > Fecha de la compra: {{compra.mes}} 
          - |     
          - Monto:  ${{compra.total}}
     </a>
      
       
          <router-view :key="$route.path"> </router-view>

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
      orderBy: 1, // 1 fecha, 2 costo
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
     orderByDate() {
      this.orderBy = 1;
    },
    orderByCost() {
      this.orderBy = 2;
    },
   ordenarCompras() {
    //const comprasPorFecha =  [...this.compras].sort((a, b) => new Date(a.mes).getTime() - new Date(b.mes).getTime());
    //return comprasPorFecha
    //console.log(typeof(this.compras[5].mes));
    return this.compras.sort((a,b) => b.mes.localeCompare(a.mes))
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