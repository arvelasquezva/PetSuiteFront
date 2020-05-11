<template>
  <header
    class="navbar bd-navbar flex-column flex-md-row navbar-dark navbar-expand"
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
            <b-nav-item href="/WalksDone">Califica tu paseo</b-nav-item>
          </b-navbar-nav>
        </div>
        <div v-else-if="rolIn==='ROLE_DOGWALKER'">
          <b-navbar-nav>
            <b-nav-item href="/WalkPetitionActive">Solicitudes Pendientes</b-nav-item>
            <b-nav-item href="/WalksAccept">Paseos Por Empezar</b-nav-item>
            <b-nav-item href="/WalksProgress">Paseos En Progreso</b-nav-item>
          </b-navbar-nav>
        </div>
      </div>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if="!loggedIn">
          <b-button href="/login" variant="light" class="ml-3">
            Inicia sesión</b-button
          >
          <b-button href="/signUp/all" variant="light" class="ml-3">
            Registrate</b-button
          >
        </div>
        <div v-else>
          <b-button
            class="logoutButton"
            @click="logout"
            href="/login"
            variant="light"
          >
            Cierra Sesión</b-button
          >
          <b-button
            class="ml-3"
            href="/Profile"
            variant="light"
          >
            Perfil</b-button
          >
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
  background: #40db9a;
  position: sticky;
  top: 0;
  z-index: 1071;
}
</style>
