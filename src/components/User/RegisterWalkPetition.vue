<template>
  <div class="body">
    <h1>Solicita un Paseo</h1>
    <div class="SignUp">
      <img height="300" src="@/assets/Images/Walker.jpg" alt="image slot" />
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
            :min="min"
            :max="max"
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
            label-now-button="Esta hora"
            reset-button
            label-close-button="Cerrar"
            locale="en"
            v-model="pickup_time"
            required
          ></b-form-timepicker>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Ingresa el tiempo en minutos para el paseo:"
          label-for="input-5"
        >
          <b-form-input
            id="input-4"
            v-model="walk_petition_duration"
            required
            placeholder="Ej: 5"
            type="number"
            min="5"
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
      <b-modal centered v-model="show" size="sm" ok-only @ok="handleOk">
        <p class="my-4">Has creado una petición para un paseo</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "RegisterWalkPetition",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const minDate = new Date(today);
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 2);
    return {
      show: false,
      currentUser: "",
      dog_selected: "",
      pickup_date: "",
      pickup_time: "",
      notes: "",
      walk_petition_duration: "",
      min: minDate,
      max: maxDate,
      dogs: [],
      myError: "",
    };
  },
  computed: {
    ...mapState(["pets", "user"]),
    ...mapGetters(["valuePets"]),
  },
  methods: {
    handleOk() {
      location.reload();
    },
    async getMascotas() {
      await axios
        .post("/api/dogs/findmydog", { cadena: this.currentUser.user })
        .then((response) => {
          this.dogs = response.data;
        })
        .catch((error) => {
          if (error.response) {
            this.myError = error.response.data.message;
            console.log("This is myError", this.myError);
            if (this.myError.startsWith("JWT expired at")) {
              alert("Debes Cambiar tu contraseña");
              this.$router.push({
                name: "Profile",
                params: { id: this.currentUser.role },
              });
            }
          } else {
            console.log("Error", error.message);
          }
        });
    },
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
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getMascotas();
  },
};
</script>

<style scoped>
footer {
  color: white;
}
.body {
  margin-top: 10px;
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
  background-color: white;
}
</style>
