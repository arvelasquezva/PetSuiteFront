<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6.5">
        <Cards msg="Servicios Que Ofrecemos" v-bind:cards="Tarjetas" ></Cards>
      </div>
      <div class="col-md-5.5">
        <LoginComponente></LoginComponente>
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponente from "@/components/LoginComponente.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Login",
  components: {
    LoginComponente,
    Cards,
  },
  
  data() {
    return {
      Tarjetas: [
        {
          id: 1,
          title: "Paseador",
          imagen:
            "https://images.pexels.com/photos/165227/pexels-photo-165227.jpeg",
          descripcion: "Te gusta salir a pasear con perros y tienes la vocación para su cuidado",
          routes: "signUp/Paseadores"
        },
        {
          id: 2,
          title: "Guarderia",
          imagen:
            "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
          descripcion: "Tienes una empresa consolidada y registrada para el cuidado de perros",
          routes: "signUp/Guarderias"
        },
        {
          id: 3,
          title: "Hospeador",
          imagen:
            "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
          descripcion: "Tienes una casa con el espacio para cuidar a perritos pero no estás registrado como empresa",
          routes: "signUp/Hospeadores"
        },
      ],
    };
  },
};
</script>
<style></style>
