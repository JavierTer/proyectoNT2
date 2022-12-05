<template>
  <div>

     <div id="bloqueLogin">
    <h2>Registro</h2>
      <div class="row">
        <span class="input-group-text">Usuario</span>
        <div style="margin: 10px" id="marco" class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="nombre de usuario"
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

        <button class="btn btn-primary" v-on:click="validar">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>

import { useAppStore } from "../store";
import axios from "axios";

export default {
  
  setup() {
    const store = useAppStore();
    return { store };
  },
  data() {
    return {
      usuario: {
        userName: '',
        pass: ''
      },
      users: [],
      ruta : `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users`
    };
  },
  async created() {
    const resultado = await fetch(
      this.ruta
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
            this.agregarUsuario(this.usuario.userName, this.usuario.pass)
        }
      }
    },
    validarVacio(userName, pass) {
      return userName <= 1 || pass <= 5;
    },
    buscarUsuario(usuario) {
      return this.users.find((elemento) => elemento.name == usuario.userName);
    },
    async agregarUsuario(nombre, contrasenia){
      const user = {
        name: nombre,
        pass: `pass ${contrasenia}`
      }
          await axios.post(this.ruta, user).then((data) => {
            console.log(data);
          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)

          this.$router.push('/')

        });
    }
  }/*,
  async agregarUsuario(userName, pass, montoMaximo){
     const resultado = await fetch(
      `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users`
    );
  },*/,
  computed: {
    
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