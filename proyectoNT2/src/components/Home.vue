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
        <li class="list-group-item">
          <router-link
          class="list-group-item "
          aria-current="true"
          
          to="appRegister"
          >
          <i class="bi bi-person-plus"></i>          
          Registrate</router-link
        >
        </li>
        <li class="list-group-item">
          <router-link
          class="list-group-item "
          aria-current="true"
          to="AppLogin"
          >
          <i class="bi bi-person-fill check"></i>
          Inicia sesión</router-link
        >
        </li>
        <li class="list-group-item"
          aria-current="true"
          style="border:1px solid black margin:10px padding:10px"
          >
          <i class="bi bi-reception-4"></i>
          Establece un monto máximo mensual
        </li>
        
       <!-- <li class="list-group-item">Registrá tus compras</li>-->
      </ul>
    </div>

    <div v-else id="fondo">
      
       <h1 class="d-flex justify-content-center" style="padding-top:20px">
        Hola {{ this.store.nameUser }} mira tus estadisticas por mes
      </h1>

      <div class="row" id="container">
       <router-link
       v-for="(mes, index) in this.comprasPorMes" v-bind:key="index"
       type="button"
       class="btn btn-dark"
       id="botonMes"
       :to= "{name: 'detalle', params: { comprasPorMes: mes } }"
       > {{mes.nombre}} </router-link >
      </div>
      
      <br>
      <br>
      <br>
<!--
      <h1 class="d-flex justify-content-center">
        Hola {{ this.store.nameUser }} mira tus estadisticas
      </h1>
-->

            




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
      compras: [],
      comprasPorMes: [
        { nombre: "Enero", totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Febrero",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Marzo",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Abril",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Mayo",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        {nombre: "Junio", totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Julio",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Agosto",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Septiembre",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Octubre",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Noviembre",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
        { nombre: "Diciembre",totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 },
      ],
      //  fecha: this.registrarFecha(),
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      first: true,
      gastoMaximo: this.store.getGastoMaximo
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
    /*goTo(id){
      //objeto router -> tiene 1 pila de ruteo
      
   
      this.$router.push(`/EstadisticaMensual/${id}`)
      

      console.log(`${id}`);
    },*/
    /*registrarFecha() {
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
    },*/
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
    } /*
    goTo(id){
      //objeto router -> tiene 1 pila de ruteo
      this.$router.push(`/estadisticaMensual/${id}`)

      console.log(`${id}`);
    },*/,
   
    clasificarArticulos() {
      for (let i = 0; i < this.comprasPorMes.length; i++) {
        const comprasPorMes = this.comprasPorMes[i];
        let articulos = [];
        for (let x = 0; x < comprasPorMes.articulos.length; x++) {
          const articulosDeUnMes = comprasPorMes.articulos[x];
          for (let y = 0; y < articulosDeUnMes.length; y++) {
            const unArticulo = articulosDeUnMes[y];

            let articuloBuscado = articulos.find(
              (element) =>
                element.nombre.toUpperCase() == unArticulo.nombre.toUpperCase()
            );
            //console.log("el articulo buscado es: ");
            //console.log(articuloBuscado);
            if (articuloBuscado == null) {
              const miPrototipoDeObjeto = {
                nombre: unArticulo.nombre,
                cantidad: parseInt(unArticulo.cantidad),
                monto: unArticulo.subTotal,
              };

              articulos.push(miPrototipoDeObjeto);
              
            

            } else {
              let cantidadPars = parseInt(unArticulo.cantidad);
              articuloBuscado.cantidad =
                articuloBuscado.cantidad + cantidadPars;
              articuloBuscado.monto =
                articuloBuscado.monto + unArticulo.subTotal;
            }
          }

          //esto tengo q borrar
        }
        this.comprasPorMes[i].articulos = articulos;
      }
    },
    verSaldo(){

    }
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
  text-align: center;
  width: 95%;
}

#botonMes {
  padding: 10px;
  margin: 10px;
  width: 13%;
  cursor: pointer;
}

#tit {
  text-align: start;
  align-content: center;
  margin-bottom: 20px;
  padding-top: 10px;
}

#caja {
    text-align: center;
    padding: 15px;
    margin: 15px;
    border: 2px solid black;
}

#container {
  border-radius: 10px;
  justify-content: center;
  padding-top: 50px;
  margin:auto;
  width: 90%;
  
}

#fondo {
  width: 100%;
  height: 100%;
}
</style>