<template>
    <div>
        <div v-if="estado" style="text-align:center">
          <h1>Quieres cerrar sesión?</h1>
          <br>
          <button v-on:click="cerrarSesion"  class="btn btn-dark"> Cerrar sesión</button>

        </div>

    </div>
</template>

<script>
import { useAppStore } from "../store";
export default {
  /* Aca se deja disponible el state
   */
  setup() {
    const store = useAppStore();
    return { store };
  },
  data() {
    return {
      
    };
  },
  methods: {
    cerrarSesion(){
      //ver bien como cambiar el loginStatus
   {
   if(!confirm('Desea cerrar sesión?'))return;
        this.store.loginStatus = false;          
                  this.$router.push('/')

   }

    }
   

  },
  computed: {
    estado() {
      return this.store.loginStatus;
    },
  }
  
}
</script>

<style>
</style>