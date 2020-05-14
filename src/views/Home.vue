<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="body">
      <div v-if="rolIn === 'ROLE_CLIENT'">
        <div class="row">
          <div class="col-md-6">
            <RegisterWalkPetition></RegisterWalkPetition>
          </div>
          <div class="col-md-6">
            <RegisterDaycare></RegisterDaycare>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import Carousel from "@/components/Carousel.vue";
import RegisterWalkPetition from "@/components/User/RegisterWalkPetition.vue";
import RegisterDaycare from "@/components/User/RegisterDaycare.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Carousel,
    RegisterWalkPetition,
    RegisterDaycare,
  },
  data() {
    return {
      currentUser: "",
    };
  },
  computed: {
    ...authComputed,
    ...mapState(["pets"]),
  },
  methods: {
    getDogs() {
      this.$store.dispatch("getMascotaByUser", {
        cadena: this.currentUser.user,
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
  },
};
</script>
<style>
.body {
  margin-bottom: 20px;
}
</style>
