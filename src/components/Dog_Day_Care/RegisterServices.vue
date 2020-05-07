<template>
  <div class="body">
    <h1 class="mt-3">Registra a tu perro:</h1>
    <div class="SignUp">
      <b-form @submit.prevent="registerMascota">
        <h2>Ingresa los datos de tu perro:</h2>
        <b-form-group id="input-group-1" label="Nombre del servicio:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="services_name"
            required
            placeholder="Ej: Bañar"
          >
            </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Altura en cm:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="services_price"
            required
            placeholder="Ej: 6000"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success"
          >Registra tu servicio</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerPets",
  data() {
    currentUser = "";
    return {
      services_name: "",
      services_price: "",
    };
  },
  methods: {
    registerMascota() {
      this.$store
        .dispatch("registerServicesDogDayCare", {
          client_id: this.currentUser.user,
          services_name: this.services_name,
          services_price: this.services_price,
        })
        .then(() => {
          alert("Has registrado tu servicio " + this.dog_name);
          location.reload();
        });
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  },
};
</script>
<style>
h1 {
  color: #40db9a;
}
.body {
  margin: 0;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.SignUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
