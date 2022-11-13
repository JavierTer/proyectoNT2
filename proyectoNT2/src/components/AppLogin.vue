<template>
  <div>
    <h1 v-if="estado" id="title">Bienvenido {{ this.store.nameUser }} !!! </h1>

    <div id="bloqueLogin">
    <h2>Login</h2>
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
    validar() {
      if (this.validarVacio(this.usuario.userName, this.usuario.pass)) {
        alert("Debe ingresar caracteres en los campos");
      } else {
        const usuarioBuscado = this.buscarUsuario(this.usuario);
        if (usuarioBuscado != null) {

          //no cambia todavia el status
          //this.store.changeStatus;
          this.store.idUser = usuarioBuscado.id;
          this.store.nameUser = usuarioBuscado.name;
          this.store.loginStatus = true;

          console.log('el status es: ');
          console.log(this.store.loginStatus);

        } else {
          alert("El usuario no existe");
        }
      }
    },
    validarVacio(userName, pass) {
      return userName <= 1 && pass <= 1;
    },
    buscarUsuario(usuario) {
      return this.users.find((elemento) => elemento.name == usuario.userName && elemento.pass == `pass ${usuario.pass}`);
    },
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

#bloqueLogin {
  margin: auto;
  width: 400px;
  height: 700px;
}


</style>