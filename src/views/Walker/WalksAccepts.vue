<template>
  <div class="row">
    <div class="col-md-12">
      <WalksAccept></WalksAccept>
    </div>
    <div class="col-md-12">
      <Notifications></Notifications>
    </div>
  </div>
</template>

<script>
import { authComputed } from "@/vuex/helper.js";
import WalksAccept from '@/components/Walker/WalksAccept.vue';
import Notifications from "@/components/User/Notifications.vue";

export default {
  name: "WalksAccepts",
  components: {
    WalksAccept,
    Notifications
  },
};
</script>
<style></style>
