<template>
  <div id="app">
    <NavbarComponente></NavbarComponente>
    <router-view />
    <notifications-list />
  </div>
</template>

<script>
import NavbarComponente from "@/components/NavbarComponente.vue";
import NotificationsList from "@/components/NotificationsList.vue";
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    
    ...mapGetters({ currentUser: 'currentUser' })
  },
  components: {
    NavbarComponente,
    NotificationsList
  }
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
  place-items: center;
  background: #063869;
}
NavbarComponente{
  position: sticky;
}

</style>
