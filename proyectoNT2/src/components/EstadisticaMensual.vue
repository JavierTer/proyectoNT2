<template>
    <div>
          <h1>hola </h1>


        
        <router-link to="/">Cerrar</router-link>

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
      id: this.$route.params.id,

      compras: [],
      comprasPorMes: [
        { totalPorMes: 0, compras: [], articulos: [], cantComprasMes: 0 }
        
      ],
      fecha: this.registrarFecha(),
      meses:   ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      first:   true
    };
    },
   watch: {
    $route(to, from) {
      this.id = this.$route.params.id;
    },
  },  
  async created() {
   /* if (this.store.loginStatus) {
      const resultado = await fetch(
        `https://636e57b5182793016f3e10ef.mockapi.io/api/v1/users/${this.store.idUser}/compras`
      );
      const data = await resultado.json();

      this.compras = data;
       this.obtenerComprasMensuales();
       this.clasificarArticulos();
    }*/
  },
   methods : {
      /*obtenerComprasMensuales() {
      for ( let i = 0; i < this.compras.length; i++) {
        const element = this.compras[i];
        //console.log(element.mes);
        //console.log(typeof(element.mes));
        //Convierto a fecha el elemento mes de la fecha porque mockapi lo convierte a string cnd lo guarda.
        let nvaFecha = new Date(element.mes);

        //guardo en compraPorMes en la posición que se obtiene del més
       if(nvaFecha === this.id){
       this.comprasPorMes.compras.push(element);
        this.comprasPorMes.totalPorMes += element.total;
        this.comprasPorMes.cantComprasMes++;
        this.comprasPorMes.articulos.push(
          element.articulos
        );

       }

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
    }*/
  }
  
};
</script>

<style>
    
</style>