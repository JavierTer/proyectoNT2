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
        return {store};
    },
    data() {
        return {
            usuario : {
                userName: '',
                pass: ''
            },
            users : []
            
        }
    },
    async created() {
        
         const resultado = await fetch(
            `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users`);

        const data = await resultado.json();
        console.log('trae lo siguiente');
        console.log(data);
        this.users = data;
        console.log('mis usuarios son: ');
        console.log(this.users);
             
        
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
        validar(){
          if(this.usuario.userName == this.users[0].name){
            alert('Bienvenido ' + this.users[0].name)
          }
          else {
            alert('Datos incorrectos')
          }
        }
        
    }
  
   
};
</script>

<style>

</style>