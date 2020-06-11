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
        caresActive: [], //Peticiones Activas de una guarderia
        caresInvoice: [], //Peticiones terminadas de una guarderia
        notifications:[] //Notificaciones
    },
    mutations: {
        SET_USER_PET(state, petData) {
            state.pets = petData;
            localStorage.setItem('pet', JSON.stringify(petData));
        },
        SET_USER_PETITION(state, petitionData) {
            state.petitions = petitionData;
        },
        SET_WALKER_PETITION_ACTIVE(state, petitionsActive) {
            state.petitionsforActive = petitionsActive;
        },
        SET_WALKER_WALKSACCEPT(state, walksAccept) {
            state.walksAccept = walksAccept;
        },
        SET_WALKER_WALKSPROGRESS(state, walksProgress) {
            state.walksProgress = walksProgress;
        },
        SET_USER_WALKSDONE(state, walksDone) {
            state.walksDone = walksDone;
        },
        SET_WALKER_PETS_ACTIVE(state, petsActive) {
            state.petsActive = petsActive;
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
        },
        SET_DOGDAYCARE_SERVICES(state, servicesData) {
            state.services = servicesData;
        },
        SET_CLIENT_SERVICES(state, servicesData) {
            state.servicesUser = servicesData;
        },
        SET_CARES_ACTIVE(state, caresData) {
            state.caresActive = caresData;
        },
        SET_CARES_INVOICE(state, invoiceData) {
            state.caresInvoice = invoiceData;
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user');
        },
        PUSH_NOTIFICATION(state, notification){
            state.notifications.push({
                ...notification,
                id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
            })
        },
        REMOVE_NOTIFICATION(state, notificationToRemove){
            state.notifications = state.notifications.filter(notification => {
                return notification.id != notificationToRemove.id;
            })
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
        obtenerDatosPaseador({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/mywalker", credentials);
        },
        buscarGuarderiaGeneral({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/searchdaycarebynameandservice", credentials);
        },
        buscarGuarderiaName({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/searchdaycarebyname", credentials);
        },
        buscarGuarderiaService({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/searchdaycarebyservice", credentials);
        },
        buscarGuarderiaScore({ commit }, [credentials, userClass]) {
            return axios.post("/api/" + userClass + "/searchdaycarebyscore", credentials);
        },
        async updateUsuario({ commit }, [credentials, userClass]) {
            console.log(credentials);
            const { data } = await axios
                .post("/api/" + userClass + "/update", credentials);
            commit('SET_USER_DATA', data);
        },
        async updateMascota({ commit }, credentials) {
            await axios.post("/api/dogs/update", credentials);
        },
        async registerMascota({ commit }, credentials) {
            await axios.post("api/dogs/register", credentials);
        },
        registerPetition({ commit, dispatch }, credentials) {            
            return axios.post("api/walkpetitions/create", credentials)
            .then(dispatch('addNotification', {
                type: 'success',
                message: 'Se ha creado una nueva peticion.'
            }, {root: true}));         
        },
        registerDayCarePetition({ commit }, credentials) {
            return axios
                .post("/api/dog_day_care_invoices/load", credentials);
        },
        async getMascotaByUser({ commit }, credentials) {
            const { data } = await axios
                .post("/api/dogs/findmydog", credentials);
            commit('SET_USER_PET', data);
        },
        async getServicesByUser({ commit }, credentials) {
            const { data } = await axios
                .get("api/dogdaycareservices/myServices?user=" + credentials);
            commit('SET_DOGDAYCARE_SERVICES', data);
        },
        async getServicesByClient({ commit }, credentials) {
            const { data } = await axios
                .get("/api/clients/myServicesAvailables?user=" + credentials);
            commit('SET_CLIENT_SERVICES', data);
        },
        async getPetitionById({ commit }) {
            const { data } = await axios
                .get("api/walkpetitions/all");
            commit('SET_USER_PETITION', data);
        },
        async getWalksAccept({ commit }, credentials) {
            const { data } = await axios
                .post("api/walkinvoices/invoicesAccepted", credentials);
            commit('SET_WALKER_WALKSACCEPT', data);
        },
        async getWalksProgress({ commit }, credentials) {
            const { data } = await axios
                .post("api/walkinvoices/invoicesProgress", credentials);
            commit('SET_WALKER_WALKSPROGRESS', data);
        },
        async getWalksDone({ commit }, credentials) {
            const { data } = await axios
                .post("api/walkinvoices/invoicesEndedClient", credentials);
            commit('SET_USER_WALKSDONE', data);
        },
        async getCaresDone({ commit }, credentials) {
            const { data } = await axios
                .post("/api/clients/seeEndedCares", credentials);
            commit('SET_CARES_INVOICE', data);
        },
        async getDogDayCares({ commit }) {
            const { data } = await axios
                .get("api/clients/allDogDayCares");
            commit('SET_DOGDAYCARE_DATA', data);
        },
        updateStatusWalk({ commit, dispatch }, credentials) {
            return axios
                .post("/api/walkinvoices/updateInvoiceStatus", credentials)
                .then(dispatch('addNotification', {
                    type: 'success',
                    message: 'Se ha actualizado el estado del paseo.'
                }, {root: true}));
        },
        updateStatusCare({ commit }, credentials) {
            return axios
                .post("/api/dog_day_care_invoices/endService", credentials);
        },
        rateWalker({ commit }, credentials) {
            return axios
                .post("/api/walkinvoices/score", credentials);
        },
        rateCare({ commit }, credentials) {
            return axios
                .post("/api/dog_day_care_invoices/score", credentials);
        },
        proposePetition({ commit, dispatch }, credentials) {
            return axios
                .post("api/walkpetitions/propose", credentials)
                .then(dispatch('addNotification', {
                    type: 'success',
                    message: 'Se ha creado una propuesta para una peticion.'
                }, {root: true}));
        },
        async getPetitionsforActive({ commit }, credentials) {
            const { data } = await axios
                .post("api/walkpetitions/findbyuser", credentials);
            commit('SET_WALKER_PETITION_ACTIVE', data);
        },
        async getDogsInMyCharge({ commit }, credentials) {
            const { data } = await axios
                .post("api/walkinvoices/dogsByWalkerAndStatusProgress", credentials);
            commit('SET_WALKER_PETS_ACTIVE', data);
        },
        async getCaresActive({ commit }, credentials) {
            const { data } = await axios
                .post("api/dog_day_cares/pendingCaresList", credentials);
            commit('SET_CARES_ACTIVE', data);
        },
        sendStatusPetition({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/denyoraccept", credentials);
        },
        registerServicesDogDayCare({ commit }, credentials) {
            return axios
                .post("api/dogdaycareservices/load", credentials);
        },
        async login({ commit }, credentials) {
            const { data } = await axios
                .post("/api/users/login", credentials, {
                    headers: {
                        "Content-type": "application/json",
                        "Access-Control-Allow-Origin": "Content-Type",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Headers": "*",
                        "cache-control": "no-cache",
                        Authorization: "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q"
                    }
                });
            commit('SET_USER_DATA', data);
        },
        logout({ commit }) {
            commit('CLEAR_USER_DATA');
        },
        addNotification ({commit}, notification) {
            commit('PUSH_NOTIFICATION', notification);
        },
        removeNotification ({commit}, notification) {
            commit('REMOVE_NOTIFICATION', notification);
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