<script setup>
import AppHeader from './components/AppHeader.vue'
import AppLogin from './components/AppLogin.vue'
import AppLogout from './components/AppLogout.vue'
import AppFooter from './components/AppFooter.vue'
import AppRegister from './components/AppRegister.vue'
import agregarCompra from './components/AgregarCompra.vue'
import EditarCompra from './components/EditarCompra.vue'




</script>

<template id="screen">
  <div id="app" class="container">
      <AppHeader></AppHeader>
          
      <br>

      
      
          <router-view ></router-view>
      

    
        <br>
        <br>
        <br>
        <br>
        <br>

      <AppFooter id="footer"> </AppFooter>
    
  </div>
</template>

<style >
#app{
  height: 100%;
  margin-bottom: 5xp;
}
#footer{
  margin-bottom: 0px;
}


</style>
