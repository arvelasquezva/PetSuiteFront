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
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import Carousel from "@/components/Carousel.vue";
import RegisterWalkPetition from "@/components/User/RegisterWalkPetition.vue";
import DogDayCareList from "@/components/User/DogDayCareList.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Carousel,
    RegisterWalkPetition,
    DogDayCareList,
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
