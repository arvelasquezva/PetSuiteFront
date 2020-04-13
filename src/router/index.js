import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import PaseadorComponente from '@/components/PaseadorComponente.vue';
import UsuarioComponente from '@/components/UsuarioComponente.vue';
import GuarderiaComponente from '@/components/GuarderiaComponente.vue';
import HospeadorComponente from '@/components/HospeadorComponente.vue';
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(VueRouter)

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
        path: '/signUp/:id',
        name: 'signUp',
        component: SignUp,
        children: [
            { path: '/signUp/Paseador', component: PaseadorComponente },
            { path: '/signUp/Usuario', component: UsuarioComponente },
            { path: '/signUp/Guarderia', component: GuarderiaComponente },
            { path: '/signUp/Hospeador', component: HospeadorComponente },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router