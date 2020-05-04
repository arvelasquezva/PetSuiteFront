<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6">
        <Cards msg="Servicios Que Ofrecemos" v-bind:cards="Tarjetas"></Cards>
      </div>
      <div class="col-md-6">
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
          title: "Paseadores",
          imagen:
            "https://images.pexels.com/photos/165227/pexels-photo-165227.jpeg",
        },
        {
          id: 2,
          title: "Guarderias",
          imagen:
            "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
        },
        {
          id: 3,
          title: "Hospeadores",
          imagen:
            "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
        },
      ],
    };
  },
};
</script>
<style></style>
