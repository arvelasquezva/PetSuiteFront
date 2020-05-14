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
}).$mount('#app');