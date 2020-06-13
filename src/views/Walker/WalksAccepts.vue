<template>
  <div class="row">
    <div class="col-md-12">
      <WalksAccept></WalksAccept>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import WalksAccept from '@/components/Walker/WalksAccept.vue';

export default {
  name: "WalksAccepts",
  components: {
    WalksAccept,
  },
};
</script>
<style></style>
