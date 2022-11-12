<template>
    <div>
        <h1>Quieres cerrar sesión?</h1>
        <br>
        <button >Cerrar sesión</button>
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
    
   

  }
}
</script>

<style>
</style>