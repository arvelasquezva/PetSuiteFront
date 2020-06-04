<template>
  <div class="body">
    <h1>  {{ $route.params.id }} </h1>
    <router-view />
  </div>
</template>

<script>
import GuarderiaComponente from "@/components/Register/GuarderiaComponente.vue"
import HospeadorComponente from "@/components/Register/HospeadorComponente.vue"
import PaseadorComponente from "@/components/Register/PaseadorComponente.vue"
import UsuarioComponente from "@/components/Register/UsuarioComponente.vue"
export default {
  name: "SignUp",
  components: {
    GuarderiaComponente,
    HospeadorComponente,
    PaseadorComponente,
    UsuarioComponente
  },
  beforeCreate(){
      if( localStorage.getItem("user") ){
        this.$router.push( {name: 'Home'} )
      }
  },
};
</script>

<style scoped>
.body {
  margin: 0;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}
</style>
