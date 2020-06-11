<template>
  <div id="app">
    <NavbarComponente></NavbarComponente>
    <router-view />
  </div>
</template>

<script>
import NavbarComponente from "@/components/NavbarComponente.vue";
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    
    ...mapGetters({ currentUser: 'currentUser' })
  },
  components: {
    NavbarComponente
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
