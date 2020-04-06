<template>
  <div id="app">
    <NavbarComponente></NavbarComponente>
    <router-view />
  </div>
</template>

<script>
import NavbarComponente from "@/components/NavbarComponente.vue";
export default {
  components: {
    NavbarComponente
  }
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
  place-items: center;
  background: #063869;
}
</style>
