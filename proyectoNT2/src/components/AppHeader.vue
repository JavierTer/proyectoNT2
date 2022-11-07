<template>
  <div>
 <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <i class="bi bi-basket3-fill"></i>
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
            <li class="nav-item">
               <router-link class="nav-link" to="product"> Productos </router-link>
            </li>
            <li class="nav-item">
              <router-link to="agregarCompra" class="nav-link">Agregar compra </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
 
</template>

<script>
export default {

}
</script>

<style>

</style>