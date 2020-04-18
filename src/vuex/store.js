import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Usuario: null
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = Usuario
            localStorage.setItem('Usuario', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${
                userData.token
                }`
        },
        CLEAR_USER_DATA() {

            localStorage.removeItem('user')
            location.reload()
        }
    },
    actions: {
        registerUsuario({ commit }, credentials) {
            return axios
                .post('/api/clients/load', credentials).then(
                    ({ data }) => {
                        commit('SET_USER_DATA', data)
                    }
                );
        },
        login({ commit }, credentials, config) {
            console.log(config);
            return axios
                .post('/api/users/login', credentials, config).
            then(({ data }) => {
                commit('SET_USER_DATA', data)
            });
        },
        logout({ commit }) {
            commit('CLEAR_USER_DATA');
        }
    },
    getters: {
        loggedIn(state) {
            return !!state.user;
        }
    }
})