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
import { mapGetters } from 'vuex'
import { authComputed } from "@/vuex/helper.js";
export default {
  name: 'app',
  computed: {
    ...authComputed,
    ...mapGetters({ currentUser: 'currentUser' })
  },
  components: {
    NavbarComponente,
    Notifications
  }
};
</script>
<style>
#app {
  font-family: 'Montserrat', 'Roboto';
  place-items: center;
  background: #259599;
  overflow: auto;
}
NavbarComponente{
  position: sticky;
}

</style>
