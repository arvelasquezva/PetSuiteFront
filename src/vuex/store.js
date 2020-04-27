import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData;
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Token ${
                userData.token
                }`;
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user');
            location.reload();
        }
    },
    actions: {
        registerUsuario({ commit }, [credentials, userClass]) {
            console.log("/api/" + userClass + "/load");
            return axios
                .post("/api/" + userClass + "/load", credentials, {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "Content-Type",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Headers": "*",
                        "cache-control": "no-cache",
                        Authorization: "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q"
                    }
                }).then();
        },
        registerMascota({ commit }, credentials) {
            console.log(credentials);
            return axios.post("api/dogs/register", credentials).then();

        },
        getMascotaById({ commit }, credentials) {
            console.log(credentials);
            return axios.post("api/dogs/findmydog", credentials).then();

        },
        login({ commit }, credentials) {
            return axios
                .post("/api/users/login", credentials, {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "Content-Type",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Headers": "*",
                        "cache-control": "no-cache",
                        Authorization: "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q"
                    }
                }).
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