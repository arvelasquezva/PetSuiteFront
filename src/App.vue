<template>
  <div id="app">
    <NavbarComponente></NavbarComponente>
    <Notifications></Notifications>
    <router-view />
  </div>
</template>

<script>
import NavbarComponente from "@/components/NavbarComponente.vue";
import Notifications from "@/components/Notifications.vue";
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    
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
  font-family: "Montserrat", sans-serif;
  place-items: center;
  background: linear-gradient(to bottom, #000428, #004e92);
}
NavbarComponente{
  position: sticky;
}

</style>
