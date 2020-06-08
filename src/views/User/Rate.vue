<template>
  <div class="row">
    <div class="col-md-12">
      <WalksDone class="m-4"></WalksDone>
    </div>
    <div class="col-md-12">
      <CaresDone></CaresDone>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import WalksDone from "@/components/User/WalksDone.vue";
import CaresDone from "@/components/User/CaresDone.vue";

export default {
  name: "Rate",
  components: {
    WalksDone,
    CaresDone
  },
};
</script>
<style></style>
