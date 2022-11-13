<template>
    <div>
        <div v-if="estado">
          <h1>Quieres cerrar sesión?</h1>
          <br>
          <button v-on:click="cerrarSesion"  class="btn btn-dark"> Cerrar sesión</button>

        </div>

        <div v-if="!estado">
            <h2>Gracias por usar Mis Cuentas !!! </h2>
            <router-link class="btn btn-primary" to="/"> Ir a home </router-link>
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

    this.store.loginStatus = false;          
    console.log('el status es: ');
    console.log(this.store.loginStatus);

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