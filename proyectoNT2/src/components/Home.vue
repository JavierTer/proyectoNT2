<template>
  <div>
    <div class="row" id="imgContainer">
      <h1 id="title">Bienvenido a Mis Cuentas</h1>
      <h4 id="textoimagen">Seguí estos simples pasos y comenzá</h4>
    </div>

    <br />
    <br />
    <br />
    <br />

    
  </div>
</template>

<script>
export default {};
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
  font-size: 3.5em;

}
#textoimagen {
  color: white;
  text-align: end;
  width: 80%;
  font-size: 1.5em;
}
</style>