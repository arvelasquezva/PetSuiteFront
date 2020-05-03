import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import MyPets from '../views/MyPets.vue';
import PaseadorComponente from '@/components/PaseadorComponente.vue';
import UsuarioComponente from '@/components/UsuarioComponente.vue';
import GuarderiaComponente from '@/components/GuarderiaComponente.vue';
import HospeadorComponente from '@/components/HospeadorComponente.vue';
import WalkPetitionActive from '@/components/Walker/WalkPetitionActive.vue';
import WalksAccept from '@/components/Walker/WalksAccept.vue';
import WalksProgress from '@/components/Walker/WalksProgress.vue';
import WalkForAccept from '@/components/WalkForAccept.vue';
import WalksDone from '@/components/WalksDone.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    { path: '*', redirect: '/' },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/MyPets',
        name: 'Mypets',
        component: MyPets
    },
    {
        path: '/signUp/:id',
        name: 'signUp',
        component: SignUp,
        children: [
            { path: '/signUp/Paseador', component: PaseadorComponente },
            { path: '/signUp/Usuario', component: UsuarioComponente },
            { path: '/signUp/Guarderia', component: GuarderiaComponente },
            { path: '/signUp/Hospeador', component: HospeadorComponente },
        ]
    },
    {
        //Ruta para las peticiones a proponer precio
        path: '/WalkPetitionActive',
        name: 'WalkPetitionActive',
        component: WalkPetitionActive
    },
    {
        //Ruta para las peticiones a aceptar precio
        path: '/MyPetitions',
        name: 'MyPetitions',
        component: WalkForAccept
    },
    {
        //Ruta para las peticiones aceptadas
        path: '/WalksAccept',
        name: 'WalksAccept',
        component: WalksAccept
    },
    {
        //Ruta para las peticiones en progreso
        path: '/WalksProgress',
        name: 'WalksProgress',
        component: WalksProgress
    },
    {
        //Ruta para las ver recibos terminados y calificar paseador
        path: '/WalksDone',
        name: 'WalksDone',
        component: WalksDone
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router