<template>
  <div id="app">
    <NavbarComponente></NavbarComponente>
    <div v-if="loggedIn">
          <Notifications></Notifications>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavbarComponente from "@/components/NavbarComponente.vue";
import Notifications from "@/components/Notifications.vue";
import { mapGetters } from "vuex";
import { authComputed } from "@/vuex/helper.js";
export default {
  name: "app",
  computed: {
    ...authComputed,
    ...mapGetters({ currentUser: "currentUser" }),
  },
  components: {
    NavbarComponente,
    Notifications,
  },
};
</script>
<style>
#app {
  font-family: "Montserrat", "Roboto";
  padding-top: 50px;
  place-items: center;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  overflow: auto;
}
h1 {
  color: white; 
}
h2 {
  color: white; 
}
h3 {
  color: white; 
  text-align: center;
}
h5 {
  color: white; 
  text-align: center;
}
</style>
