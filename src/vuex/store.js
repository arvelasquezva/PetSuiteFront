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
        petitionsforActive: [], //Paseos por aceptar precio
        walksAccept: [], // Paseos por empezar
        walksProgress: [], //Paseos en progreso
        walksDone: [], //Paseos terminados para calificar
        petsActive: [], //Perros a cargo de un paseador
        dogDayCares: [], //Guarderias
        services: [], //Servicios de una Guarderia
        servicesUser: [], //Servicios que puede ver el cliente
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
        SET_WALKER_PETITION_ACTIVE(state, petitionsActive) {
            state.petitionsforActive = petitionsActive;
            localStorage.setItem('petitionActive', JSON.stringify(petitionsActive));
        },
        SET_WALKER_WALKSACCEPT(state, walksAccept) {
            state.walksAccept = walksAccept;
            localStorage.setItem('walksAccept', JSON.stringify(walksAccept));
        },
        SET_WALKER_WALKSPROGRESS(state, walksProgress) {
            state.walksProgress = walksProgress;
            localStorage.setItem('walksProgress', JSON.stringify(walksProgress));
        },
        SET_USER_WALKSDONE(state, walksDone) {
            state.walksDone = walksDone;
            localStorage.setItem('walksDone', JSON.stringify(walksDone));
        },
        SET_WALKER_PETS_ACTIVE(state, petsActive) {
            state.petsActive = petsActive;
            localStorage.setItem('petsActive', JSON.stringify(petsActive));
        },
        SET_USER_DATA(state, userData) {
            state.user = userData;
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Token ${
                userData.token
                }`;
        },
        SET_DOGDAYCARE_DATA(state, dogDayCareData) {
            state.dogDayCares = dogDayCareData;
            localStorage.setItem('dogDayCares', JSON.stringify(dogDayCareData));
        },
        SET_DOGDAYCARE_SERVICES(state, servicesData) {
            state.services = servicesData;
            localStorage.setItem('services', JSON.stringify(servicesData));
        },
        SET_CLIENT_SERVICES(state, servicesData) {
            state.servicesUser = servicesData;
            localStorage.setItem('servicesUser', JSON.stringify(servicesData));
        },

        CLEAR_USER_DATA() {
            localStorage.removeItem('user');
            localStorage.removeItem('pet');
            localStorage.removeItem('petitions');
            localStorage.removeItem('petitionsforActive');
            localStorage.removeItem('walksDone');
            localStorage.removeItem('walksProgress');
            localStorage.removeItem('walksAccept');
            localStorage.removeItem('petsActive');
            localStorage.removeItem('services');
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
                });
        },
        buscarGuarderia({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/searchdaycarebyname", credentials).then();
        },
        updateUsuario({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/update", credentials).then();
        },
        updateMascota({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/update", credentials).then();
        },
        registerMascota({ commit }, credentials) {
            return axios.post("api/dogs/register", credentials).then();
        },
        registerPetition({ commit }, credentials) {
            console.log(credentials);
            return axios.post("api/walkpetitions/create", credentials);
        },
        registerDayCarePetition({ commit }, credentials) {
            console.log(credentials);
            return axios.post("/api/dog_day_care_invoices/load", credentials);
        },
        getMascotaByUser({ commit }, credentials) {
            return axios
                .post("api/dogs/findmydog", credentials)
                .then(({ data }) => {
                    commit('SET_USER_PET', data)
                });
        },
        getServicesByUser({ commit }, credentials) {
            return axios
                .get("api/dogdaycareservices/myServices", {
                    params: {
                        user: 'jose'
                    }
                })
                .then(({ data }) => {
                    commit('SET_DOGDAYCARE_SERVICES', data)
                });
        },
        getServicesByClient({ commit }, credentials) {
            return axios
                .get("/api/clients/myServicesAvailables", {
                    params: {
                        user: 'jose'
                    }
                })
                .then(({ data }) => {
                    commit('SET_CLIENT_SERVICES', data)
                });
        },
        getPetitionById({ commit }) {
            return axios
                .get("api/walkpetitions/all")
                .then(({ data }) => {
                    commit('SET_USER_PETITION', data)
                });
        },
        getWalksAccept({ commit }, credentials) {
            return axios
                .post("api/walkinvoices/invoicesAccepted", credentials)
                .then(({ data }) => {
                    commit('SET_WALKER_WALKSACCEPT', data)
                });
        },
        getWalksProgress({ commit }, credentials) {
            return axios
                .post("api/walkinvoices/invoicesProgress", credentials)
                .then(({ data }) => {
                    commit('SET_WALKER_WALKSPROGRESS', data)
                });
        },
        getWalksDone({ commit }, credentials) {
            return axios
                .post("api/walkinvoices/invoicesEndedClient", credentials)
                .then(({ data }) => {
                    commit('SET_USER_WALKSDONE', data)
                });
        },
        getDogDayCares({ commit }) {
            return axios
                .get("api/clients/allDogDayCares")
                .then(({ data }) => {
                    commit('SET_DOGDAYCARE_DATA', data)
                });
        },
        updateStatusWalk({ commit }, credentials) {
            return axios
                .post("/api/walkinvoices/updateInvoiceStatus", credentials);
        },
        rateWalker({ commit }, credentials) {
            return axios
                .post("/api/walkinvoices/score", credentials);
        },
        proposePetition({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/propose", credentials);
        },
        getPetitionsforActive({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/findbyuser", credentials)
                .then(({ data }) => {
                    commit('SET_WALKER_PETITION_ACTIVE', data)
                });
        },
        getDogsInMyCharge({ commit }, credentials) {
            return axios
                .post("api/walkinvoices/dogsByWalkerAndStatusProgress", credentials)
                .then(({ data }) => {
                    commit('SET_WALKER_PETS_ACTIVE', data)
                });
        },
        sendStatusPetition({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/denyoraccept", credentials);
        },
        registerServicesDogDayCare({ commit }, credentials) {
            return axios
                .post("api/dogdaycareservices/load", credentials);
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
        },
        valueServices: state => {
            return state.servicesUser.map((service) => {
                return { value: service.dog_daycare_service_id, text: service.dogdaycare_Service_Name }
            });
        },
        rolIn(state) {
            return state.user.role
        }
    }
})