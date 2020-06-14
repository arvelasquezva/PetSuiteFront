<template>
  <div class="row">
    <div class="col-md-12">
      <WalksProgress></WalksProgress>
    </div>
    <div class="col-md-12">
      <DogsInMyCharge></DogsInMyCharge>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import WalksProgress from '@/components/Walker/WalksProgress.vue';
import DogsInMyCharge from '@/components/Walker/DogsInMyCharge.vue';

export default {
  name: "WalksInProgress",
  components: {
    DogsInMyCharge,
    WalksProgress
  },
};
</script>
<style></style>
