<template>
  <div>
 <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <i class="bi bi-basket3-fill" style="margin-right:10px"></i>
        <a class="navbar-brand" > Mis Cuentas </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"> Home </router-link>
            </li>
            <li class="nav-item" v-if="verificarSaludo">
               <router-link class="nav-link" to="product"> Registros </router-link>
            </li>
            <li class="nav-item" v-if="verificarSaludo">
              <router-link to="agregarCompra" class="nav-link">Agregar compra </router-link>
            </li>
            <li class="nav-item">
              <router-link :to=verificarEstado class="nav-link"> {{this.loginText}} </router-link>
            </li>
            
            
          </ul>
        
        </div>
        <ul v-if="verificarSaludo" class="navbar-nav" >
          <li class="nav-item" id="nameUser"> 
              {{ this.store.nameUser }} | 
          </li>
          <li li class="nav-item" id="registerUser">
              Mis registros: {{this.store.contadorRegistros}} 
          </li>
          

        </ul>
          
      </div>
    </nav>
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
      loginText : "Login"
    };
  },
   computed: {
    //anda, pero hay que recargar la pagina para que impacte en el header.
    verificarEstado() {
      if(this.store.getLoginStatus){
        this.loginText = "Logout"
        return 'appLogout'
      }
      else {
        this.loginText = "Login"
        return 'appLogin'
      }
    },
    verificarSaludo(){
      return this.store.loginStatus
    }
  }

}

</script>

<style>
#nameUser {
  margin-right: 0xp;
  font-size: 1.2em;
  color: orangered;
  padding-right: 10px;
}

#registerUser {
  margin-right: 0xp;
  font-size: 1.2em;

}
</style>