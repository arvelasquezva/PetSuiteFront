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
        caresPending: [], //Peticiones pendientes por empezar de una guarderia
        caresProgress: [], //Cuidados en Progreso de una guarderia
        caresInvoice: [], //Peticiones terminadas de una guarderia
        caresForBeginning: [], //Cuidados Aceptados para cancelar
        notifications: [] //Notificaciones de un Usuario
    },
    mutations: {
        SET_USER_NOTIFY(state, notifyData) {
            state.notifications = notifyData;
        },
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
        SET_CARES_PENDING(state, caresData) {
            state.caresPending = caresData;
        },
        SET_CARES_PROGRESS(state, caresData) {
            state.caresProgress = caresData;
        },
        SET_CARES_FOR_BEGINNING(state, caresData) {
            state.caresForBeginning = caresData;
        },
        SET_CARES_INVOICE(state, invoiceData) {
            state.caresInvoice = invoiceData;
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user');
        },
        PUSH_NOTIFICATION(state, notification) {
            state.notifications.push({
                ...notification,
                id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
            })
        },
        REMOVE_NOTIFICATION(state, notificationToRemove) {
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
        },
        consultPriceCarePetition({ commit }, credentials) {
            return axios
                .post("/api/dog_day_care_invoices/consultPrice", credentials);
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
        async getTypeDogCare({ commit }, credentials) {
            await axios
                .get("/api/clients/typeOfMyCare?user=" + credentials);
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
        },
        updateStatusCare({ commit }, credentials) {
            return axios
                .post("/api/dog_day_care_invoices/updateCareInvoiceStatus", credentials);
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
        async getCaresPending({ commit }, credentials) {
            const { data } = await axios
                .post("api/dog_day_cares/CaresListStatus", credentials);
            commit('SET_CARES_PENDING', data);
        },
        async getCaresInProgess({ commit }, credentials) {
            const { data } = await axios
                .post("api/dog_day_cares/CaresListStatus", credentials);
            commit('SET_CARES_PROGRESS', data);
        },
        async getCaresForBeginning({ commit }, credentials) {
            const { data } = await axios
                .post("api/clients/CaresListStatus", credentials);
            commit('SET_CARES_FOR_BEGINNING', data);
        },
        sendStatusPetition({ commit }, credentials) {
            return axios
                .post("api/walkpetitions/denyoraccept", credentials);
        },
        cancelCare({ commit }, credentials) {
            return axios
                .post("api/dog_day_care_invoices/cancelPetition", credentials);
        },
        cancelWalk({ commit }, credentials) {
            return axios
                .post("/api/walkinvoices/cancelPetition", credentials);
        },
        getNotification({ commit }, credentials) {
            commit('SET_USER_NOTIFY', credentials);
        },
        registerServicesDogDayCare({ commit }, credentials) {
            return axios
                .post("api/dogdaycareservices/load", credentials);
        },
        login({ commit }, credentials) {
            commit('SET_USER_DATA', credentials);
        },
        logout({ commit }) {
            commit('CLEAR_USER_DATA');
        },
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