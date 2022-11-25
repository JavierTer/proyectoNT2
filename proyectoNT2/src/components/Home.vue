<template>
  <div>
    <div v-if="this.store.getLoginStatus == false">
      <div class="row" id="imgContainer">
        <h1 id="title">Bienvenido a Mis Cuentas</h1>
        <p id="text">Podras administrar tus gastos facilmente</p>
        <h4 id="textoimagen">Seguí estos simples pasos y comenzá</h4>
      </div>

      <br />
      <ul class="list-group" style="cursor: pointer">
        <router-link
          class="list-group-item active"
          aria-current="true"
          to="appRegister "
          >Registrate</router-link
        >
        <li class="list-group-item">Establece un monto máximo mensual</li>
        <li class="list-group-item">Inicia sesión</li>
        <li class="list-group-item">Registrá tus compras</li>
      </ul>
    </div>

    <div v-else>
      <h1 class="d-flex justify-content-center">
        Hola {{ this.store.nameUser }} mira tus estadisticas
      </h1>

      <!-- <div class="container-fluid bg-secondary d-flex justify-content-center">
        <p class="text-light mb-0 p-2 fs-2">holiss</p> -->
      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[0] }}</h3>
          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[0]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[1] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[1]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[2] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[2]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[3] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[3]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[4] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[4]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[5] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[5]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[6] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[6]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[7] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[7]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[8] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[8]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[9] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[9]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[10] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[10]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row p-2 mb-2 bg-primary">
          <h3>{{ this.store.meses[11] }}</h3>

          <div class="col" id="titulo">
            Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[11]"
                :key="compras.id"
              >
                {{ compras.mes }}
                {{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">Articulos</div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>Total gastado:</p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
      </div>
    </div>

    <button @click="obtenerComprasMensuales"></button>
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
      compras: [],
      comprasPorMes: [[], [], [], [], [], [], [], [], [], [], [], []],
      fecha: this.registrarFecha(),
    };
  },
  async created() {
    if (this.store.loginStatus) {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
      );
      const data = await resultado.json();

      this.compras = data;
      this.obtenerComprasMensuales();
    }
  },
  methods: {
    registrarFecha() {
      //creamos 1 nueva fecha obteniendo la fecha del sistema
      //este lo puedo guardar en una variable
      const fecha = new Date();
      console.log(fecha);

      //extraer las horas de la fecha
      const horas = fecha.getHours();
      //console.log(horas);

      //nos traemos el dia de la semana (0 es domingo, 1 es el lunes)
      const dia = fecha.getDay();
      console.log("el dia de la semana es: " + dia);

      //nos traemos el dia del mes
      const diaDelMes = fecha.getDate();
      console.log("el dia del mes es: " + diaDelMes);

      //el mes comienza desde el 0
      const mes = fecha.getMonth();
      console.log("nos traemos el mes: " + mes);

      const anio = fecha.getFullYear();
      console.log("Nos traemos el año: " + anio);
    },
    obtenerComprasMensuales() {
      for (let i = 0; i < this.compras.length; i++) {
        const element = this.compras[i];
        //console.log(element.mes);
        //console.log(typeof(element.mes));
        //Convierto a fecha el elemento mes de la fecha porque mockapi lo convierte a string cnd lo guarda.
        let nvaFecha = new Date(element.mes);

        //guardo en compraPorMes en la posición que se obtiene del més
        this.comprasPorMes[nvaFecha.getMonth()].push(element);

        console.log(
          `esto tengo en comprasPorMes en la posicion ${nvaFecha.getMonth()}`
        );
        console.log(this.comprasPorMes[nvaFecha.getMonth()]);
        //console.log('datos de la variable ya modificada a fecha');
        // console.log(nvaFecha.getMonth());
        //console.log(typeof(nvaFecha));

        // console.log(nvaFecha.getMonth());
      }
    },
  },
};
</script>

<style>
#imgContainer {
  height: 25vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://d500.epimg.net/cincodias/imagenes/2021/03/12/mercados/1615573318_835418_1615573706_noticia_normal.jpg");
  background-size: cover;
  background-position: center;
}
#title {
  color: white;
  text-align: start;
  width: 80%;
  font-size: 2em;
}

#item {
  font-size: 1.1em;
}

#text {
  color: white;
  text-align: start;
  width: 50%;
  font-size: 1.5em;
}

#textoimagen {
  color: white;
  text-align: end;
  width: 80%;
  font-size: 1.3em;
}

#titulo {
  font-size: 1.5em;
}
</style>