<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="body">
      <div v-if="!loggedIn">
        <Cards msg="Servicios Que Ofrecemos" v-bind:cards="Tarjetas"></Cards>
      </div>
      <div v-else>
          <WalkPetitionComponente></WalkPetitionComponente>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import Carousel from "@/components/Carousel.vue";
import Cards from "@/components/Cards.vue";
import RegisterWalkPetition from "@/components/RegisterWalkPetition.vue";
import { mapState} from 'vuex';

export default {
  name: "Home",
  components: {
    Carousel,
    Cards,
    RegisterWalkPetition,
  },
  async created () {
    try {
      await this.$store.dispatch("user")
    } catch (error) {
      console.error
    }
  },
  data() {
    return {
      currentUser:"",
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
  computed: {
    ...authComputed,
    ...mapState([
      'pets'
    ])
  },
  methods: {
    getDogs() {
      this.$store
        .dispatch("getMascotaById", {
          cadena: this.currentUser.user
          });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getDogs();
  }
};
</script>
<style>
.body {
  margin-bottom: 20px;
}
</style>
