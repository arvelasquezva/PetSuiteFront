<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <RegisterDaycare></RegisterDaycare>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterDaycare from "@/components/User/RegisterDaycare.vue";
export default {
  name: "DogDayCare",
  components: {
    RegisterDaycare,
  },
  data() {
    return {
      currentUser: "",
    };
  },
  methods: {
    getDogs() {
      this.$store.dispatch("getMascotaByUser", {
        cadena: this.currentUser.user,
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getDogs();
  },
};
</script>

<style scoped></style>
