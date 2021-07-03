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
      dogs: [],
      myError: ""
    };
  },
  methods: {
    async getDogs() {
      await axios
        .post("/api/dogs/findmydog", { cadena: this.currentUser.user })
        .then((response) => {
          this.dogs = response.data;
        })
        .catch(function (error) {
          if (error.response) {
            this.myError = error.response.data.message;
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
      if (this.myError.startsWith("JWT expired at")) {
        alert("Debes Cambiar tu contraseña");
        this.$router.push({ name: "Profile" , params:{id: user.role}});
      }
      else {
        this.$store.dispatch("getMascotaByUser", this.dogs);
      }
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
