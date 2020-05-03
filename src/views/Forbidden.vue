<template>
  <div>
  <b-jumbotron>
    <template v-slot:header>Oops, ha ocurrido un error!</template>

    <template v-slot:lead>
      Parece que no tienes los permisos necesarios para acceder a esta pagina.
    </template>

    <hr class="my-4">

    <p>
      Haz click en el boton para ir a la pagina inicial!
    </p>

    <b-button variant="primary" href="/">Ir al inicio</b-button>
  </b-jumbotron>
</div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
export default {
  name: "Forbidden",
  computed: {
    ...authComputed,
  }
};
</script>