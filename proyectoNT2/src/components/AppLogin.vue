<template>
  <div>
    
    <h2>Login</h2>
    <div>
    <div class="row">
      <span class="input-group-text">Usuario</span>
      <div style="margin:10px" id="marco" class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInputGroup1"
          placeholder="Username"
          v-model="usuario.userName"
          
        />
        <label for="floatingInputGroup1"></label>
      </div>

      <span class="input-group-text">Password</span>
      <div style="margin:10px" class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInputGroup1"
          placeholder="Password"
          v-model="usuario.pass"

        />
        <label for="floatingInputGroup1"></label>
      </div>

      <button 
        class="btn btn-primary"
        v-on:click="validar"
       >Ingresar</button>   
   
    </div>
  </div>
  </div>
  
</template>
<script>
import {useAppStore} from '../store'
export default {
    /* Aca se deja disponible el state
    */
    setup(){
        const store = useAppStore();
        return {store}
    },
    data() {
        return {
            usuario : {
                userName: '',
                pass: ''
            }
            
        }
    },
    methods: {
        validar() { 
            if(this.usuario.userName === store.nameAdmin && this.usuario.pass === store.idAdminUser){
                alert('Bienvenido store.nameAdmin')
                console.log('llegue aca 1 ' + this.usuario.userName);
            }
            else{
                alert('Datos ingresados incorrectos')
                                console.log('llegue aca 2' + this.usuario.userName);

            }
            
        }
    },
    /* async created(){
        await this.store.init()
    }*/
   
};
</script>

<style>

</style>