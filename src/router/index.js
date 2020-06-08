import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import MyPets from '../views/User/MyPets.vue';
import Profile from '../views/Profile.vue';
import DogDayCares from '../views/DogDayCares/DogDayCares.vue';
import DogDayCareServices from '../views/DogDayCares/DogDayCareServices.vue';
import Rate from '../views/User/Rate.vue';
import PaseadorComponente from '@/components/Register/PaseadorComponente.vue';
import UsuarioComponente from '@/components/Register/UsuarioComponente.vue';
import GuarderiaComponente from '@/components/Register/GuarderiaComponente.vue';
import HospeadorComponente from '@/components/Register/HospeadorComponente.vue';
import UpdateDaycare from '@/components/Update/UpdateDaycare.vue';
import UpdateDogwalker from '@/components/Update/UpdateDogwalker.vue';
import UpdateClient from '@/components/Update/UpdateClient.vue';
import WalkPetitionActive from '@/components/Walker/WalkPetitionActive.vue';
import WalksAccept from '@/components/Walker/WalksAccept.vue';
import WalksProgress from '@/components/Walker/WalksProgress.vue';
import WalkForAccept from '@/components/User/WalkForAccept.vue';
import DogsInMyCharge from '@/components/Walker/DogsInMyCharge.vue';

import SearchDayCare from '@/components/Dog_Day_Care/SearchDaycare.vue';
import CaresActive from '@/components/Dog_Day_Care/CaresActives.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    //Redireccionar Cualquier Pagina no existente a Home
    {
        path: '*',
        redirect: '/'
    },
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
        path: '/MyServices',
        name: 'MyServices',
        component: DogDayCareServices,
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: SignUp,
    },
    { path: '/signUp/Paseadores', component: PaseadorComponente },
    { path: '/signUp/Usuario', component: UsuarioComponente },
    { path: '/signUp/Guarderias', component: GuarderiaComponente },
    { path: '/signUp/Hospeadores', component: HospeadorComponente },
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
        component: Rate
    },
    {
        //Ruta para las ver los perros a cargo de un paseador
        path: '/DogsInMyCharge',
        name: 'DogsInMyCharge',
        component: DogsInMyCharge
    },
    {
        path: '/Profile/:id',
        name: 'Profile',
        component: Profile,
        children: [
            { path: '/ROLE_DOGDAYCARE', component: UpdateDaycare },
            { path: '/ROLE_DOGWALKER', component: UpdateDogwalker },
            { path: '/ROLE_CLIENT', component: UpdateClient },

        ]
    },
    {
        path: '/SearchDaycare',
        name: 'SearchDaycare',
        component: SearchDayCare
    },
    {
        path: '/CaresActive',
        name: 'CaresActive',
        component: CaresActive
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router