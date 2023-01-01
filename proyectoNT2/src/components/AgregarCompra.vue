<template>
  <div>
    <div id="agregarCompra" @agregarArticulos.prevent style="margin: auto">
      <div style="padding: 20px" class="row">
        <div class="col">
          <h2>Registra una compra</h2>
        </div>
        <div class="col" v-if="this.compra.articulos.length > 0">
          <h3 bg-secondary id="cantArticulos">
            {{ this.compra.articulos.length }}
          </h3>
        </div>
      </div>

      <div id="categoria" style="width: 65%; margin: auto; padding: 10px">
        <h6>Selecciona una categoria para la compra</h6>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="compra.categoria"
        >
          <option
            v-for="(categoria, index) in this.userCategorias"
            v-bind:key="index"
            style="width: 80%"
          >
            {{ categoria }}
          </option>
        </select>
      </div>

      <div class="row" style="width: 75%; margin: auto">
        <span class="input-group-text">Fecha de la compra</span>
        <div style="margin: 10px" id="marco" class="form-floating">
          <input
            type="date"
            class="form-control"
            id="floatingInputGroup1"
            placeholder=""
            v-model="compra.mes"
          />
          <label for="floatingInputGroup1"></label>
        </div>
        <br />

        <div class="row" id="articulo_form">
          <a
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Ingrese un artículo
          </a>
        </div>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Historial de artículos
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Elige cualquiera de tu artículos ingresados anteriormente, sin
              importar a que categoría pertenecen.
            </div>
            <div class="dropdown mt-3">
              <select
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                v-model="nombreArticulo"
              >
                <option selected>-</option>

                <option
                  v-for="(articulo, index) in this.misArticulos"
                  v-bind:key="index"
                >
                  {{ articulo }}
                </option>
              </select>
            </div>
          </div>
          <br />

          <!--
        <div class="row">
          <div class="col" id="articulo_collapse">
                        

                  <select class="form-select" aria-label="Default select example" v-model="nombreArticulo">
                                    <option selected>Articulo agregado previamente</option>

        <option v-for="(articulo, index) in this.misArticulos" 
        v-bind:key="index"
        >{{articulo}}</option>
    
      </select>
          </div>-->
          <div class="row" id="articulo_form">
            <p>
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Agregar nuevo articulo
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                <span class="input-group-text">Nombre del articulo</span>
                <div style="margin: 10px" class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGroup1"
                    v-model="nombreArticulo"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
        <!--
        <span class="input-group-text">Nombre del articulo</span>
        <div style="margin: 10px" class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInputGroup1"
            placeholder=""
            v-model="nombreArticulo"
          />

          <label for="floatingInputGroup1"></label>
        </div>
-->
        <span class="input-group-text">Precio del articulo</span>
        <div style="margin: 10px" class="form-floating">
          <input
            type="number"
            class="form-control"
            id="floatingInputGroup1"
            placeholder="00.0"
            v-model="precioArticulo"
          />
          <label for="floatingInputGroup1"></label>
        </div>

        <span class="input-group-text">Cantidad</span>
        <div style="margin: 10px" class="form-floating">
          <input
            type="number"
            class="form-control"
            id="floatingInputGroup1"
            placeholder=""
            v-model="cantidadArticulo"
          />
          <label for="floatingInputGroup1"></label>
        </div>

        <div class="row">
          <div class="row">
            <button
              type="button"
              id="agregarArticulo"
              class="btn btn-primary"
              @click="agregarArticulos"
            >
              Agregar articulo
            </button>
          </div>
        </div>

        <div class="row" style="padding: 20px">
          <button
            type="button"
            id="registrarCompra"
            class="btn btn-primary"
            @click="crearCompra"
          >
            Registrar compra
          </button>
        </div>

        <div class="row" v-if="verArticulos">
          <table class="table bordered striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(articulo, index) in compra.articulos"
                v-bind:key="index"
              >
                <td>{{ articulo.nombre }}</td>
                <td>{{ articulo.precio }}</td>
                <td>{{ articulo.cantidad }}</td>
                <td>{{ articulo.subTotal }}</td>
                <td>
                  <i
                    class="bi bi-x-circle-fill"
                    style="cursor: pointer"
                    @click="compra.articulos.splice(index, 1)"
                  >
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--<router-view :key="$route.path"> </router-view>-->

        <!-- <button class="btn btn-primary" v-on:click.prevent="guardarCompra">
          Guardar
        </button> -->
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
      compra: {
        mes: new Date(),
        articulos: [],
        total: 0,
        categoria: "",
      },
      //idDeLaCompra: 0,
      nombreArticulo: "",
      precioArticulo: 0,
      cantidadArticulo: 0,
      pathCompra: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`,
      // pathArticulo: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras/1/articulos`
      pathUser: `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}`,
      userCategorias: [],
      compras: [],
      misArticulos: [],
    };
  },
  async created() {
    if (this.store.loginStatus) {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}`
      );
      const data = await resultado.json();

      this.userCategorias = data.categorias;
      //console.log(this.usuario);

      //agrego aca
      await this.verSiHayArticulos();
    }
  },
  methods: {
    validar() {
      if (this.compra.categoria == "") {
        alert("Debes elegir una categoria");
      } else if (this.compra.articulos.length < 1) {
        alert("Debe agregar al menos 1 articulo");
      } else {
        return true;
      }
    },
    async verSiHayArticulos() {
      const compra = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
      );
      const data = await compra.json();
      this.compras = data;

      for (let index = 0; index < this.compras.length; index++) {
        const unaCompra = this.compras[index];

        for (let x = 0; x < unaCompra.articulos.length; x++) {
          const unArticulo = unaCompra.articulos[x];
          let artBuscado = this.misArticulos.find(
            (elemento) => elemento == unArticulo.nombre.toUpperCase()
          );
          if (artBuscado == null) {
            this.misArticulos.push(unArticulo.nombre.toUpperCase());
          }
        }
      }
    },

    async crearCompra() {
      if (this.validar()) {
        this.compra.total = this.calcularTotal(this.compra.articulos);
        console.log(this.compra.total);
        await axios.post(this.pathCompra, this.compra).then((data) => {
          //objeto router -> tiene 1 pila de ruteo
          //this.$router.push(`/agregarCompra/${id}`)

          this.$router.push("/");
        });
      }
    },
    calcularTotal(articulos) {
      let total = 0;
      for (let i = 0; i < articulos.length; i++) {
        console.log(articulos[i].subTotal);
        total = total + articulos[i].subTotal;
      }
      return total;
    },
    async goTo(id) {
      if (this.idDeLaCompra == 0) {
        alert("Primero debe crear la compra");
      } else {
        //console.log(this.compra.id);
        this.$router.push(`/agregarCompra/${id}`);

        console.log(`este es el id que pasa  ${id}`);
      }

      console.log(`${id}`);
    },
    agregarArticulos() {
      if (
        this.nombreArticulo == "" ||
        this.precioArticulo == 0 ||
        this.cantidadArticulo == 0
      ) {
        alert("Debes completar todos los campos");
      } else {
        let articulos = {
          id: this.compra.articulos.length + 1,
          nombre: this.nombreArticulo,
          precio: this.precioArticulo,
          cantidad: this.cantidadArticulo,
          subTotal: this.calcularSubTotal(
            this.precioArticulo,
            this.cantidadArticulo
          ),
        };
        this.compra.articulos.push(articulos);
      }

      (this.nombreArticulo = ""),
        (this.precioArticulo = 0),
        (this.cantidadArticulo = 0);
    },
    calcularSubTotal(precio, cantidad) {
      return precio * cantidad;
    },
  },

  computed: {
    estado() {
      return this.store.loginStatus;
    },
    verArticulos() {
      return this.compra.articulos.length;
    },
  },
};
</script>

<style>
#articulo_collapse {
  padding-left: 5px;
  padding-top: 5px;
  padding-right: 0px;
  margin: 10px;
  border: 3px solid black;
}

#articulo_form {
  padding: 10px;
  margin: 10px;
}

#title {
  padding-bottom: 20px;
}

#bloqueLogin {
  margin: auto;
  width: 400px;
  height: 700px;
}

#cantArticulos {
  margin: auto;
  width: 50px;
  height: 50px;
  border: 3px solid black;
  border-radius: 80px;
  text-align: center;
  color: black;
  justify-content: center;
  align-content: center;
}

#agregarArticulo {
  width: 20%;
  border: 3px solid white;
  border-radius: 20px;
}

#registrarCompra {
  width: 50%;
  border: 3px solid white;
  border-radius: 20px;
  margin: auto;
}
</style>