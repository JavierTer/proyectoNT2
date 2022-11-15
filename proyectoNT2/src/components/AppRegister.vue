<template>
    
   <div>
    <h1 v-if="estado" id="title">Bienvenido {{ this.store.nameUser }} !!! </h1>

    <div id="bloqueRegister">
    <h2>Registrate</h2>
      <div class="row">
        <span class="input-group-text">Usuario</span>
        <div style="margin: 10px" id="marco" class="form-floating">
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
        <div style="margin: 10px" class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="Password"
            v-model="usuario.pass"
          />
          <label for="floatingInputGroup1"></label>
        </div>

        <button class="btn btn-primary" v-on:click="validar">Ingresar</button>
      </div>
    </div>
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
      usuario: {
        userName: "",
        pass: "",
      },
      users: [],
    };
  },
  async created() {
    const resultado = await fetch(
      `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users`
    );

    const data = await resultado.json();

    this.users = data;
  },
  methods: {
    
    validar() {
      if (this.validarVacio(this.usuario.userName, this.usuario.pass)) {
        alert("Debe ingresar caracteres en los campos");
      } else {
        const usuarioBuscado = this.buscarUsuario(this.usuario);
        if (usuarioBuscado != null) {
                          
            alert('Debe elegir otro nombre de usuario')

        } else {
            agregarUsuario(this.usuario.userName, this.usuario,pass)
        }
      }
    },
    validarVacio(userName, pass) {
      return userName <= 1 || pass <= 5;
    },
    buscarUsuario(usuario) {
      return this.users.find((elemento) => elemento.name == usuario.userName);
    },
  },
  async agregarUsuario(userName, pass){
     const resultado = await fetch(
      `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users`
    );
  },
  computed: {
    estado() {
      return this.store.loginStatus;
    },
  },
};
</script>

<style>
#title {
  padding-bottom: 20px;
}

#bloqueRegister {
  margin: auto;
  width: 400px;
  height: 700px;
}


</style>