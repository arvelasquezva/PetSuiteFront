import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        user: null,
        pets: [],
        petitions: [],
        petitionsforActive: []
    },
    mutations: {
        SET_USER_PET(state, petData) {
            state.pets = petData;
            localStorage.setItem('pet', JSON.stringify(petData));
        },
        SET_USER_PETITION(state, petitionData) {
            state.petitions = petitionData;
            localStorage.setItem('petition', JSON.stringify(petitionData));
        },
        SET_USER_PETITION_ACTIVE(state, petitionsActive) {
            state.petitionsforActive = petitionsActive;
            localStorage.setItem('petitionActive', JSON.stringify(petitionsActive));
        },
        SET_USER_DATA(state, userData) {
            state.user = userData;
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Token ${
                userData.token
                }`;
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user');
            localStorage.removeItem('pet');
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
            console.log("Esto es lo que mando al Back en registrar Mascota " + credentials);
            return axios.post("api/dogs/register", credentials).then();

        },
        registerPetition({ commit }, credentials) {
            console.log(credentials);
            return axios.post("api/walkpetitions/create", credentials).then();

        },
        getMascotaById({ commit }, credentials) {
            return axios
                .post("api/dogs/findmydog", credentials)
                .then(({ data }) => {
                    commit('SET_USER_PET', data)
                });
        },
        getPetitionById({ commit }) {
            return axios
                .get("api/walkpetitions/all")
                .then(({ data }) => {
                    commit('SET_USER_PETITION', data)
                });
        },
        proposePetition({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/propose", credentials);
        },
        getPetitionsforActive({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/findbyuser", credentials)
                .then(({ data }) => {
                    commit('SET_USER_PETITION_ACTIVE', data)
                });
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
        },
        valuePets: state => {
            return state.pets.map((pet) => {
                return { value: pet.dog_id, text: pet.dog_name }
            });
        }
    }
})