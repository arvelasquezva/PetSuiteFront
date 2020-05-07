<template>
  <div class="row">
    <div class="col-md-4">
      <registerPets class="m-4"></registerPets>
    </div>
    <div class="col-md-7">
      <DogsComponente msg="Tus Mascotas"></DogsComponente>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import registerPets from "@/components/User/RegisterPets.vue";
import DogsComponente from "@/components/User/DogsComponente.vue";

export default {
  name: "MyPets",
  components: {
    registerPets,
    DogsComponente,
  },
};
</script>
<style></style>
