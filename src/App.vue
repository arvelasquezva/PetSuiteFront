<template>
  <div id="app">
    <NavbarComponente></NavbarComponente>
    <router-view />
    <footer></footer>
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
NavbarComponente{
  position: sticky;
}
footer{
  background-color: #40db9a;
  padding: 4rem 0;
}
</style>
