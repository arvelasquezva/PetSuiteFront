<template>
  <div class="body">
    <h1 class="mt-3">Registra a tu perro:</h1>
    <div class="SignUp">
      <b-form @submit.prevent="registerMascota">
        <h2>Ingresa los datos de tu perro:</h2>
        <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="dog_name"
            required
            placeholder="Ej: Toby"
          >
            ></b-form-input
          >
        </b-form-group>

        <b-form-group id="input-group-2" label="Raza:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="dog_race"
            required
            placeholder="Ej: Pastor Aleman"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Altura en cm:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="dog_height"
            required
            placeholder="Ej: 60"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Peso en Kg:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="dog_weight"
            required
            placeholder="Ej: 32"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Edad en Años:"
          label-for="input-5"
        >
          <b-form-input
            id="input-4"
            v-model="dog_age"
            required
            placeholder="Ej: 5"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Algo más?:" label-for="input-5">
          <b-form-textarea
            id="input-5"
            v-model="dog_notes"
            placeholder="Medicamentos, Recomendaciones, Cuidados Especiales"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-button block pill type="submit" variant="success"
          >Registra a tu Mascota</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPetsComponente",
  data() {
    currentUser: "";
    return {
      dog_name: "",
      dog_race: "",
      dog_height: "",
      dog_weight: "",
      dog_age: "",
      dog_notes: "",
    };
  },
  methods: {
    registerMascota() {
      this.$store
        .dispatch("registerMascota", {
          client_id: this.currentUser.user,
          dog_name: this.dog_name,
          dog_race: this.dog_race,
          dog_height: this.dog_height,
          dog_weight: this.dog_weight,
          dog_age: this.dog_age,
          dog_notes: this.dog_notes,
        })
        .then(() => {
          alert("Has registrado a " + this.dog_name);
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
