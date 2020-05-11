<template>
  <div class="row">
    <div class="col-md-4">
      <RegisterServices class="m-4"></RegisterServices>
    </div>
    <div class="col-md-7">
      <ServicesComponente msg="Tus Servicios"></ServicesComponente>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import RegisterServices from "@/components/Dog_Day_Care/RegisterServices.vue";
import ServicesComponente from "@/components/Dog_Day_Care/ServicesComponente.vue";

export default {
  name: "DogDayCareServices",
  components: {
    RegisterServices,
    ServicesComponente
  },
};
</script>
<style></style>
