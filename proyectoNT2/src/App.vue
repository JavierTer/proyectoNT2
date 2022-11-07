<script setup>
import AppHeader from './components/AppHeader.vue'
import AppLogin from './components/AppLogin.vue'

</script>

<template>
  <div id="app" class="container">
      <AppHeader></AppHeader>
          
      <br>
      <router-view></router-view>
      <br>
      <AppLogin></AppLogin>

    <main>
             

    </main>
  </div>
</template>

