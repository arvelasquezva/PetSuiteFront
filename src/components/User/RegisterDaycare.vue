<template>
  <div class="body">
    <h1>Inscribete en una guarderia</h1>
    <div class="SignUp">
      
      <img height="300" src="@/assets/Images/Daycare.jpg" alt="image slot" />
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
            :options="valuePets"
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

        <b-form-group
          id="input-group-5"
          label="Duración en Minutos:"
          label-for="input-5"
        >
          <b-form-input
            id="input-4"
            v-model="walk_petition_duration"
            required
            placeholder="Ej: 5"
            type="number"
            min="0"
          ></b-form-input>
        </b-form-group>

        <!-- Observaciones -->
        <b-form-group
          id="input-group-5"
          label="Observaciones:"
          label-for="input-5"
        >
          <b-form-textarea
            id="input-5"
            v-model="notes"
            placeholder="Alguna solicitud para el paseador"
          ></b-form-textarea>
        </b-form-group>

        <!-- Fin de formulario -->
        <b-button block pill type="submit" variant="success">
          Confirma tu petición
        </b-button>
      </b-form>
      <b-modal centered v-model="show">
        <p class="my-4">Has creado una petición para un paseo</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "RegisterDaycare",
  data() {
    return {
      show: false,
      currentUser: "",
      dog_selected: "",
      pickup_date: "",
      pickup_time: "",
      notes: "",
      walk_petition_duration: "",
    };
  },
  computed: {
    ...mapState(["pets"]),
    ...mapGetters(["valuePets"]),
  },
  methods: {
    registerPetition() {
      this.$store
        .dispatch("registerPetition", {
          user: this.currentUser.user,
          dog_id: this.dog_selected,
          walk_petition_date_time: this.pickup_date + " " + this.pickup_time,
          walk_petition_notes: this.notes,
          walk_petition_duration: this.walk_petition_duration,
          walk_petition_address: this.currentUser.client_address,
        })
        .then(({ data }) => {
          console.log(data);
          if (data === "") {
            alert("El perro ya se encuentra en un paseo activo");
          } else {
            this.show = true;
          }
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

<style scoped>
footer {
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
