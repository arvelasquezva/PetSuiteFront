<template>
  <header
    class="navbar bd-navbar flex-column flex-md-row navbar-light navbar-expand"
  >
    <b-container>
      <b-navbar-brand href="/">
        <img src="@/assets/Images/Isotipo.png" alt="Isotipo" width="30px" />
        Petsuite
      </b-navbar-brand>
      <div v-if="loggedIn">
        <div v-if="rolIn==='ROLE_CLIENT'">
          <b-navbar-nav>
            <b-nav-item href="/MyPets">Mis Mascotas</b-nav-item>
            <b-nav-item href="/MyPetitions">Mis Peticiones</b-nav-item>
            <b-nav-item href="/WalksDone">Califica tus servicios</b-nav-item>
            <b-nav-item href="/SearchDaycare">Busca una guardería</b-nav-item>
          </b-navbar-nav>
        </div>
        <div v-else-if="rolIn==='ROLE_DOGWALKER'">
          <b-navbar-nav>
            <b-nav-item href="/WalkPetitionActive">Solicitudes Pendientes</b-nav-item>
            <b-nav-item href="/WalksAccept">Paseos Por Empezar</b-nav-item>
            <b-nav-item href="/WalksProgress">Paseos En Progreso</b-nav-item>
          </b-navbar-nav>
        </div>
        <div v-else-if="rolIn==='ROLE_DOGDAYCARE'">
          <b-navbar-nav>
            <b-nav-item href="/MyServices">Mis Servicios</b-nav-item>
            <b-nav-item href="/CaresPending">Cuidados Por Empezar</b-nav-item>
            <b-nav-item href="/CaresInProgess">Cuidados En Curso</b-nav-item>
          </b-navbar-nav>
        </div>
      </div>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if="!loggedIn">
          <b-button href="/login" class="loginButton ml-3">
            Inicia sesión</b-button
          >
          <b-button href="/signUp" variant="light" class="registerButton ml-3">
            Regístrate</b-button
          >
        </div>
        <div v-else>
          <router-link :to="{name: 'Profile', params:{id: user.role}}">
                <b-button class="perfilButton mr-3" variant="light">Perfil {{user.user}}</b-button>
            </router-link> 
          <b-button class="logoutButton" @click="logout" href="/login" variant="light"> Cierra Sesión</b-button>
        </div>
      </b-navbar-nav>
    </b-container>
  </header>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import { mapState } from 'vuex';
export default {
  name: "NavbarComponente",
  computed: {
    ...authComputed,
    ...mapState(["user"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.bd-navbar {
  border-style: none;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1071;
}
.loginButton{
  background: #ff5f6d;
  border-style: none;
}
.registerButton{
  background: #ffffff;
  border-style: solid;
  border-color: #ffc371;
  border-width: 2px;
}
.logoutButton{
  background: #ff5f6d;
  border-style: none;
}
.perfilButton{
  background: #ffffff;
  border-style: solid;
  border-color: #ffc371;
  border-width: 2px;
}
</style>
