<template>
  <div class="body">
    <div class="my-5">
      <h1> Escoje Tu Rol en Petsuite </h1>
      <b-button class= "rolButton ml-3" href="#Cliente">Cliente</b-button>
      <b-button class= "rolButton ml-3" href="#Paseador">Paseador</b-button>
      <b-button class= "rolButton ml-3" href="#Guarderia">Guardería</b-button>
      <b-button class= "rolButton ml-3" href="#Hospedador">Hospedador</b-button>
    </div>
    <section id="Cliente">
      <UsuarioComponente></UsuarioComponente>
    </section>
    <section id="Paseador">
      <PaseadorComponente></PaseadorComponente>
    </section>
    <section id="Guarderia">
      <GuarderiaComponente></GuarderiaComponente>
    </section>
    <section id="Hospedador">
      <HospedadorComponente></HospedadorComponente>
    </section>
  </div>
</template>

<script>
import GuarderiaComponente from "@/components/Register/GuarderiaComponente.vue";
import HospedadorComponente from "@/components/Register/HospeadorComponente.vue";
import PaseadorComponente from "@/components/Register/PaseadorComponente.vue";
import UsuarioComponente from "@/components/Register/UsuarioComponente.vue";
export default {
  name: "SignUp",
  components: {
    GuarderiaComponente,
    HospedadorComponente,
    PaseadorComponente,
    UsuarioComponente,
  },
  beforeCreate() {
    if (localStorage.getItem("user")) {
      this.$router.push({ name: "Home" });
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
  scroll-behavior: smooth;
}
.rolButton{
  background: white;
  color: black;
  border: none;
}
</style>
