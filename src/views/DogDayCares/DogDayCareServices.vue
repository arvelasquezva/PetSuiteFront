<template>
  <div class="row">
    <div class="col-md-5">
      <RegisterServices class="m-4"></RegisterServices>
    </div>
    <div class="col-md-7">
      <ServicesComponente msg="Tus Servicios"></ServicesComponente>
    </div>
    <div class="col-md-12">
      <Notifications msg="Tus Servicios"></Notifications>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import RegisterServices from "@/components/Dog_Day_Care/RegisterServices.vue";
import ServicesComponente from "@/components/Dog_Day_Care/ServicesComponente.vue";
import Notifications from "@/components/User/Notifications.vue";

export default {
  name: "DogDayCareServices",
  components: {
    RegisterServices,
    ServicesComponente,
    Notifications
  },
};
</script>
<style></style>
