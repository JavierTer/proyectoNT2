<template>
  <div >
    Informe
    <h2 v-if="cantCompras"> Tenes {{cantCompras}} compras registradas</h2>
    <h1 v-if="!hayCompras">No tenes compras registradas</h1>
    {{this.compras}}
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
     
      compras: []
    };
  },
  async created() {
    const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
    );

    const data = await resultado.json();

    this.compras = data;
  },
  methods: {
    
   
  },
  computed: {
    estado() {
      return this.store.loginStatus;
    },
    cantCompras(){
        return this.compras.length
    },
    hayCompras(){
        return this.compras.length > 0
    }
    
  }
};
</script>

<style>



</style>