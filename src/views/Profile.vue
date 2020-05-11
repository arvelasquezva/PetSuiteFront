<template>
  <div class="home">
    <div class="body">
      <div v-if="rolIn==='ROLE_CLIENT'">
          <UpdateClient></UpdateClient>
      </div>
      <div v-if="rolIn==='ROLE_DOGWALKER'">
          <UpdateDogwalker></UpdateDogwalker>
      </div>
      <div v-if="rolIn==='ROLE_DOGDAYCARE'">
          <UpdateDaycare></UpdateDaycare>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper.js";
import UpdateClient from "@/components/Update/UpdateClient.vue";
import UpdateDaycare from "@/components/Update/UpdateDaycare.vue";
import UpdateDogwalker from "@/components/Update/UpdateDogwalker.vue";
import UpdatePets from "@/components/Update/UpdatePets.vue";
import { mapState} from 'vuex';

export default {
  name: "Profile",
  components: {
    UpdateClient,
    UpdateDaycare,
    UpdateDogwalker,
  },
  data() {
    return {
      currentUser:"",      
    };
  },
  computed: {
    ...authComputed,
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  }
};
</script>
<style>
.body {
  margin-bottom: 20px;
}
</style>
