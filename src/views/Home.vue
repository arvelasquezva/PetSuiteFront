<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="body">
      <div v-if="rolIn === 'ROLE_CLIENT'">
        <div class="row">
          <div class="col-md-12">
            <RegisterWalkPetition></RegisterWalkPetition>
          </div>
          <div class="col-md-12">
            <DogDayCareList></DogDayCareList>
          </div>
        </div>
      </div>
      <div v-if="rolIn === 'ROLE_DOGWALKER'">
        <div class="row">
          <div class="col-md-12">
            <WalkPetitionActive></WalkPetitionActive>
          </div>
        </div>
      </div>
      <div v-if="rolIn === 'ROLE_DOGDAYCARE'">
        <div class="row">
          <div class="col-md-12">
            <ServicesComponente msg="Tus Servicios"></ServicesComponente>
          </div>
          <div class="col-md-12">
            <CaresPending msg="Tus Servicios"></CaresPending>
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
import DogDayCareList from "@/components/User/DogDayCareList.vue";
import WalkPetitionActive from "@/components/Walker/WalkPetitionActive.vue";
import ServicesComponente from "@/components/Dog_Day_Care/ServicesComponente.vue";
import CaresPending from "@/components/Dog_Day_Care/CaresPending.vue";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Carousel,
    RegisterWalkPetition,
    DogDayCareList,
    WalkPetitionActive,
    ServicesComponente,
    CaresPending,
  },
  data() {
    return {
      currentUser: "",
    };
  },
  computed: {
    ...authComputed,
  },
  methods: {
  },
  beforeCreate(){
      if( !localStorage.getItem("user") ){
        this.$router.push( {name: 'Login'} )
      }
  },
};
</script>
<style>
.body {
  margin-bottom: 20px;
}
</style>
