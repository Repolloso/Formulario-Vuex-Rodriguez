import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    // datos globales de la aplicación
    state: {
        users:[],
    },
    // funciones que modifican el estado de la aplicación
    mutations: {
        SET_USERS(state, response) {
            state.users.push(response);
        }
    },

    // funciones que se encargarán de ejecutar acciones asíncronas (conexion con la base de datos, etc)
    actions: {
        async postRegister(context,payload) {
            let resp = await axios.post(`https://62eeb152c1ef25f3da8d87cf.mockapi.io/api/users`, payload)
            console.log(resp.data)
            let response = {
                id: resp.data.id,
                name: resp.data.name,
                email: resp.data.email,
                password: resp.data.password,
                country: resp.data.country,
            }
            context.commit('SET_USERS', response);
        },
    },
    getters:{
        showUsers(state){
            let usuarios = state.users;
            return usuarios;
        }
    },
    modules: {
    },
})