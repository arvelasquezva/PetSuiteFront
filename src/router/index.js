import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import MyPets from '../views/MyPets.vue';
import Profile from '../views/Profile.vue';
import DogDayCares from '../views/DogDayCares.vue';
import Forbidden from '../views/Forbidden.vue';
import DogDayCareServices from '../views/DogDayCareServices.vue';
import PaseadorComponente from '@/components/Register/PaseadorComponente.vue';
import UsuarioComponente from '@/components/Register/UsuarioComponente.vue';
import GuarderiaComponente from '@/components/Register/GuarderiaComponente.vue';
import HospeadorComponente from '@/components/Register/HospeadorComponente.vue';
import WalkPetitionActive from '@/components/Walker/WalkPetitionActive.vue';
import WalksAccept from '@/components/Walker/WalksAccept.vue';
import WalksProgress from '@/components/Walker/WalksProgress.vue';
import WalkForAccept from '@/components/User/WalkForAccept.vue';
import DogsInMyCharge from '@/components/Walker/DogsInMyCharge.vue';
import WalksDone from '@/components/User/WalksDone.vue';
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
        component: MyPets,
    },
    {
        path: '/Forbidden',
        name: 'Forbidden',
        component: Forbidden,
    },
    {
        path: '/MyServices',
        name: 'MyServices',
        component: DogDayCareServices,
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
        //Ruta para las Guarderias
        path: '/dogDayCares/:id',
        name: 'dogDayCares',
        component: DogDayCares
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
    {
        //Ruta para las ver los perros a cargo de un paseador
        path: '/DogsInMyCharge',
        name: 'DogsInMyCharge',
        component: DogsInMyCharge
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router