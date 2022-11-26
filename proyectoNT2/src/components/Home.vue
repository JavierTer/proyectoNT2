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
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[0].cantComprasMes > 0"
        >
          <h2>{{ this.store.meses[0] }}</h2>
          <div class="col" id="titulo">
            {{ this.comprasPorMes[0].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[0].compras"
                :key="compras.id"
              >
                {{ compras.mes }} | ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[0].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[0].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[0].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[0] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[1].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[1] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[1].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[1].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[1].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[1].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[1].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[1] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[2].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[2] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[2].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[2].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[2].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[2].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[2].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[2] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[3].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[3] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[3].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[3].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[3].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[3].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[3].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[3] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[4].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[4] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[4].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[4].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[4].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[4].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[4].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[4] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[5].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[5] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[5].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[5].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[5].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[5].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[5].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[5] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[6].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[6] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[6].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[6].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[6].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[6].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[6].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[6] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[7].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[7] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[7].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[7].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[7].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[7].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[7].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[7] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[8].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[8] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[8].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[8].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[8].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[8].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[8].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[8] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[9].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[9] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[9].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[9].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[9].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[9].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[9].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[9] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[10].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[10] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[10].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[10].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[10].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[10].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[10].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[10] }}</h5>
        </div>
      </div>

      <div class="container text-center">
        <div
          class="row p-5 mb-3"
          v-if="this.comprasPorMes[11].cantComprasMes > 0"
        >
          <h3>{{ this.store.meses[11] }}</h3>

          <div class="col" id="titulo">
            {{ this.comprasPorMes[11].cantComprasMes }} Compras
            <!--{{this.comprasPorMes[0]}} -->
            <ul>
              <li
                id="item"
                v-for="compras in this.comprasPorMes[11].compras"
                :key="compras.id"
              >
                {{ compras.mes }}
                ${{ compras.total }}
              </li>
            </ul>
          </div>
          <div class="col" id="titulo">
            Articulos {{ this.comprasPorMes[11].articulos.length }}
            <ul>
              <li
                id="item"
                v-for="articulos in this.comprasPorMes[11].articulos"
                :key="articulos.nombre"
              >
                {{ articulos.nombre }} | {{ articulos.cantidad }} | ${{
                  articulos.monto
                }}
              </li>
            </ul>
          </div>
          <div class="row p-2 mb-2 bg-secundary">
            <p>
              Total gastado en el mes: ${{ this.comprasPorMes[11].totalPorMes }}
            </p>
            <p>Objetivo logrado:</p>
          </div>
        </div>
        <div v-else class="p-5 mb-3">
          <h5>No hay compras registradas en {{ this.store.meses[11] }}</h5>
        </div>
      </div>
    </div>
    <button @click="clasificarArticulos">probando</button>
    <!--<button @click="obtenerComprasMensuales"></button>-->
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
      comprasPorMes: [
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
      ],
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
      this.clasificarArticulos();
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
        this.comprasPorMes[nvaFecha.getMonth()].compras.push(element);
        this.comprasPorMes[nvaFecha.getMonth()].totalPorMes += element.total;
        this.comprasPorMes[nvaFecha.getMonth()].cantComprasMes++;
        this.comprasPorMes[nvaFecha.getMonth()].articulos.push(
          element.articulos
        );

        //console.log('datos de la variable ya modificada a fecha');
        // console.log(nvaFecha.getMonth());
        //console.log(typeof(nvaFecha));

        // console.log(nvaFecha.getMonth());
      }
    },
    clasificarArticulos() {
      for (let i = 0; i < this.comprasPorMes.length; i++) {
        const comprasPorMes = this.comprasPorMes[i];
        let articulos = [];
        for (let x = 0; x < comprasPorMes.articulos.length; x++) {
          const articulosDeUnMes = comprasPorMes.articulos[x];

          for (let y = 0; y < articulosDeUnMes.length; y++) {
            const unArticulo = articulosDeUnMes[y];
            

            let articuloBuscado = articulos.find(
              (element) => element.nombre.toUpperCase() == unArticulo.nombre.toUpperCase()
            );
            console.log("el articulo buscado es: ");
            console.log(articuloBuscado);
            if (articuloBuscado == null) {
              const miPrototipoDeObjeto = {
                nombre: unArticulo.nombre,
                cantidad: parseInt(unArticulo.cantidad),
                monto: unArticulo.subTotal,
              };

              articulos.push(miPrototipoDeObjeto);
            } else {
              let cantidadPars = parseInt(unArticulo.cantidad)
              articuloBuscado.cantidad = articuloBuscado.cantidad + cantidadPars;
              articuloBuscado.monto = articuloBuscado.monto + unArticulo.subTotal;
            }
          }

          //esto tengo q borrar
        }
        this.comprasPorMes[i].articulos = articulos;
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