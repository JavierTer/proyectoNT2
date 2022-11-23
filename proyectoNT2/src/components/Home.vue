<template>
  <div>
    <div class="row" id="imgContainer">
      <h1 id="title">Bienvenido a Mis Cuentas</h1>
      <p id="text">Podras administrar tus gastos facilmente</p>
      <h4 id="textoimagen">Seguí estos simples pasos y comenzá</h4>
    </div>

    <br />
  <ul class="list-group" style="cursor:pointer">
  <router-link class="list-group-item active" aria-current="true" to="appRegister ">Registrate</router-link>
  <li class="list-group-item">Establece un monto máximo mensual</li>
  <li class="list-group-item">Inicia sesión</li>
  <li class="list-group-item">Registrá tus compras</li>
</ul>

    
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
      fecha: this.registrarFecha()
  }
  },
  methods: {
    registrarFecha() {
      //creamos 1 nueva fecha obteniendo la fecha del sistema
      //este lo puedo guardar en una variable
      const fecha = new Date()
      console.log(fecha);

      //extraer las horas de la fecha
      const horas = fecha.getHours();
      //console.log(horas);

      //nos traemos el dia de la semana (0 es domingo, 1 es el lunes)
      const dia = fecha.getDay();
      console.log('el dia de la semana es: ' + dia);

      //nos traemos el dia del mes
      const diaDelMes = fecha.getDate();
      console.log('el dia del mes es: ' + diaDelMes);

      //el mes comienza desde el 0
      const mes = fecha.getMonth();
      console.log('nos traemos el mes: ' + mes);

      const anio = fecha.getFullYear();
      console.log('Nos traemos el año: ' + anio);

    }
    
  }
};
</script>

<style>
#imgContainer {
  height: 25vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:  url("https://d500.epimg.net/cincodias/imagenes/2021/03/12/mercados/1615573318_835418_1615573706_noticia_normal.jpg");
  background-size: cover;
  background-position: center;
}
#title {
  color: white;
  text-align: start;
  width: 80%;
  font-size: 2em;

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
</style>