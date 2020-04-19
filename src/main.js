import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './vuex/store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
    router,
    axios,
    store,
    created() {
        const userString = localStorage.getItem('user');
        if (userString) {
            const userData = JSON.parse(userString);
            this.$store.commit('SET_USER_DATA', userData);
        }
        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    this.$store.dispatch('logout');
                }
                return Promise.reject(error);
            }
        )
    },
    render: h => h(App)
}).$mount('#app')


//cambios hechos comienzan aca

/*export default {



    const: {
        API_URL_CLIENTS_LOAD: axios.create({
            baseURL: API_URL_CLIENTS_LOAD || 'http://localhost:8080/api/clients/load',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_CLIENTS_ALL: axios.create({
            baseURL: API_URL_CLIENTS_ALL || 'http://localhost:8080/api/clients/all',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_DOGDAYCARES_LOAD: axios.create({
            baseURL: API_URL_DOGDAYCARES_LOAD || 'http://localhost:8080/api/dogdaycares/load',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_DOGDAYCARES_ALL: axios.create({
            baseURL: API_URL_DOGDAYCARES_ALL || 'http://localhost:8080/api/dogdaycares/all',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_DOG_WALKERS_LOAD: axios.create({
            baseURL: API_URL_DOG_WALKERS_LOAD || 'http://localhost:8080/api/dog_walkers/load',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_DOG_WALKERS_ALL: axios.create({
            baseURL: API_URL_DOG_WALKERS_ALL || 'http://localhost:8080/api/dog_walkers/all',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_USERS_LOGIN: axios.create({
            baseURL: API_URL_USERS_LOGIN || 'http://localhost:8080/api/users/login',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        }),

        API_URL_USERS_ALL: axios.create({
            baseURL: API_URL_USERS_ALL || 'http://localhost:8080/api/users/all',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + localStorage.token
            }
        })
    }
}*/
//terminan aca en caso de que haya que borrarlos o modificarlos