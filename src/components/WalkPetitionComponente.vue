<template>
  <div class="body">
    <div class="SignUp">
      <img height="300" src="../assets/Images/Walker.jpg" alt="image slot" />
      <b-form @submit.prevent="registerPetition" class="pl-4">
        <!--Perro-->
        <b-form-group
          id="input-group-1"
          label="Selecciona tu perro:"
          label-for="input-1"
        >
          <b-form-select
            id="input-1"
            v-model="dog_selected"
            :options="Dogs"
            required
          ></b-form-select>
        </b-form-group>
        <!-- Fecha-->
        <b-form-group
          id="input-group-2"
          label="Fecha de recogida de tu perro:"
          label-for="input-2"
        >
          <b-form-datepicker
            id="example-datepicker"
            v-model="pickup_date"
            required
            class="mb-2"
          >
          </b-form-datepicker>
        </b-form-group>
        <!-- Hora -->
        <b-form-group
          id="input-group-3"
          label="Hora de recogida de tu perro:"
          label-for="input-3"
      >
        <b-form-timepicker
      id="input-3"
      now-button
      reset-button
      locale="en"
      v-model="pickup_time"
      required
      
    ></b-form-timepicker>
      </b-form-group>

        <!-- Observaciones -->
        <b-form-group
          id="input-group-5"
          label="Observaciones:"
          label-for="input-5">
          <b-form-textarea
            id="input-5"
            v-model="notes"
            placeholder="Escribenos algo que pienses que debamos saber sobre tu perro"
          ></b-form-textarea>
        </b-form-group>

        <!-- Fin de formulario -->
        <b-button block pill type="submit" variant="success"
          >Confirma tu petición</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalkPetitionComponente",
  data() {
    currentUser: "";
    return {
      dog_selected: null,
      pickup_date: "",
      pickup_time: "",
      client_address: "",
      notes: "",
      Dogs: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
    };
  },
  methods: {
    registerPetition() {
      /*
      this.$store
        .dispatch("registerPetition", {
          user: this.currentUser,
          name: this.name,
          race: this.race,
          height: this.height,
          weight: this.weight,
          age: this.age,
          notes: this.notes,
        })
        .then(() => {
          alert("Bienvenido a PetSuite");
        });
    */
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
    console.log(this.currentUser);
  },
};
</script>

<style scoped>
footer{
  color: white;
}
.body {
  margin: 0;
  height: 100vh;
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
