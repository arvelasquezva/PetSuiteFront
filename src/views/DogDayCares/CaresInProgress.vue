<template>
  <div class="row">
    <div class="col-md-12">
      <CaresInProgess></CaresInProgess>
    </div>
    <div class="col-md-12">
      <DogsInMyCharge></DogsInMyCharge>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import CaresInProgess from '@/components/Dog_Day_Care/CaresInProgess.vue'
import DogsInMyCharge from '@/components/Dog_Day_Care/DogsInMyCharge.vue';

export default {
  name: "WalksInProgress",
  components: {
    DogsInMyCharge,
    CaresInProgess
  },
};
</script>
<style></style>
