import {defineStore} from 'pinia'

export const useAppStore = defineStore('appStore', {
    //acá se declaran las propiedades
    state:()=>{
        return {
            loginStatus:  false,
            idUser:  0,
            nameUser:    ''
        }
    },
    getters:{

        /* Esta función tiene como objetivo retornar loginStatus.
            true   -> esta logueado 
            false  -> no esta logueado
        */
        getLoginStatus:(state) => state.loginStatus,
        getIdUser:(state)=> state.idAdminUser,
        getNameUser:(state)=>state.nameAdmin
    },
    actions:{
        changeStatus:(state)=> state.loginStatus = true, 
        init:async()=>{
            const usuarios = await fetch("")
            
        }
    }
})