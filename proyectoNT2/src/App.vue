<script setup>
import AppHeader from './components/AppHeader.vue'
import AppLogin from './components/AppLogin.vue'
import AppLogout from './components/AppLogout.vue'



</script>

<template>
  <div id="app" class="container">
      <AppHeader></AppHeader>
          
      <br>
      <main>
      <router-view></router-view>

      </main>
      <br>

      <aside>
      </aside>
<br>
<br>
<br>
<br>
<br>
      <footer>
        Todos los derechos reservados
      </footer>
    
  </div>
</template>

