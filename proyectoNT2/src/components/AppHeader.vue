<template>
  <div >
 <nav class="navbar navbar-expand-lg bg-light" >
      <div class="container-fluid">
        <i class="bi bi-basket3-fill" style="margin-right:10px"></i>
        <router-link class="nav-link active" aria-current="page" to="/" id="misCuentas"> Mis Cuentas </router-link>
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
           <!-- <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"> Home </router-link>
            </li>-->
            <li class="nav-item" v-if="verificarSaludo" style="margin-left:10px">
               <router-link class="nav-link" to="product"> 
                <i class="bi bi-cart4"></i>
                Mis compras  </router-link>
            </li>
            <li class="nav-item" v-if="verificarSaludo">
              <router-link to="agregarCompra" class="nav-link" > 
              <i class="bi bi-plus-circle"></i>
              Agregar compra  </router-link>
            </li>
            
           
            
            
          </ul>
        
        </div>
        <ul  class="navbar-nav" >
           <li class="nav-item" id="login">
              <router-link :to=verificarEstado class="nav-link"> {{this.loginText}} 
                          <i class="bi bi-person-fill check"></i>

              </router-link>
            </li>
          <li v-if="verificarSaludo" class="nav-item" id="nameUser"> 
              <i class="bi bi-person-circle"> </i> 
             <!-- <img src= "{{this.store.img}}" alt="">-->
              {{ this.store.nameUser }} 
              <router-link 
              i class="bi bi-gear-fill"
              to="EstadisticaMensual"
              style="padding-left:5px"
              >
              </router-link> 
          </li>
         <!-- <li v-if="verificarSaludo" class="nav-item" id="registerUser">
              Mis registros: {{this.store.contadorRegistros}} 
          <li/>-->
          

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

#login {
  padding-right: 20px;
}

#misCuentas{
  font-size: 1.4em;
}
#nameUser {
  margin-right: 0xp;
  font-size: 1.2em;
  color: orangered;
  padding-right: 10px;
  margin: auto;
}

#registerUser {
  margin-right: 0xp;
  font-size: 1.2em;

}


</style>