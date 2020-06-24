<template>
  <div class="body">
    <h1 class="mt-3">Regístra tu servicio:</h1>
    <div class="SignUp">
      <b-form @submit.prevent="registerServicio">
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
          label="Precio:"
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

        <b-form-group id="input-group-5" label="Descripción del Servicio" label-for="input-5">
          <b-form-textarea
            id="input-5"
            required
            v-model="services_description"
            placeholder="Información adicional"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-button block pill type="submit" variant="success"> Regístra tu servicio </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerServices",
  data() {
    currentUser = "";
    return {
      services_name: "",
      services_price: "",
      services_description: "",
    };
  },
  methods: {
    registerServicio() {
      this.$store
        .dispatch("registerServicesDogDayCare", {
          dogdaycare_Service_ClientId: this.currentUser.user,
          dogdaycare_Service_Name: this.services_name,
          dogdaycare_Service_Price: this.services_price,
          dogdaycare_Service_Description: this.services_description,
        })
        .then(() => {
          alert("Has regístrado tu servicio " + this.services_name);
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
