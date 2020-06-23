<template>
  <div class="row">
    <div class="col-md-12">
      <WalkForAccept></WalkForAccept>
    </div>
    <div class="col-md-12">
      <CaresForBeginning></CaresForBeginning>
    </div>
    <div class="col-md-12">
      <WalksForBeginning></WalksForBeginning>
    </div>
    
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import WalkForAccept from "@/components/User/WalkForAccept.vue";
import CaresForBeginning from "@/components/User/CaresForBeginning.vue";
import WalksForBeginning from "@/components/User/WalksForBeginning.vue";


export default {
  name: "MyPetitions",
  components: {
    WalkForAccept,
    CaresForBeginning,
    WalksForBeginning,
    
  },
};
</script>
<style></style>
