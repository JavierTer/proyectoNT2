import {defineStore} from 'pinia'

export const useAppStore = defineStore('appStore', {
    //acá se declaran las propiedades
    state:()=>{
        return {
            loginStatus:        false,
            idUser:             0,
            nameUser:           '',
            idCompras:          [],
            meses:              ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            limiteDeCompras:    5000,
            first:               true,
            gastoMaximo:         [],
            img:                 '',
            articulos: []
            
        }
    },
    getters:{

        /* Esta función tiene como objetivo retornar loginStatus.
            true   -> esta logueado 
            false  -> no esta logueado
        */
        getLoginStatus:(state)       =>  state.loginStatus,
        getIdUser:(state)            =>  state.idAdminUser,
        getNameUser:(state)          =>  state.nameAdmin,
        getContadorRegistros:(state) =>  state.contadorRegistros,
        getMeses: (state)            =>  state.meses,
        getGastoMaximo:(state)       =>  state.gastoMaximo

    },
    actions:{
        changeStatus:(state)    =>  {

            if (!state.loginStatus) {
                state.loginStatus = true;
            }
            else {
                state.loginStatus = false;
            }
            console.log('Ahora el status es: ' + state.loginStatus);
        },
        
        incrementarContador:(state)  =>  state.contadorRegistros++,

       



        
        /*
        init:async()=>{
            const usuarios = await fetch("")
            
        }*/
    }
})