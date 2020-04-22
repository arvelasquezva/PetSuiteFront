<template>
  <div class="body">
    <div class="SignUp">
      <img
        height="300"
        src="../assets/Images/Walker.jpg"
        alt="image slot"
      />
<!-- Usuario -->
      <b-form @submit.prevent="registerPetition">
        <b-form-group 
        id="input-group-1" 
        label="User ID:" 
        label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            required
            placeholder="Ej: DiegoAVelasquez"
          >
          </b-form-input>
        </b-form-group>
<!--Perro-->
        <b-form-group
          id="input-group-2"
          label="Selecciona tu perro:"
          label-for="input-2">
          <b-form-select
            id="input-2"
            v-model="dog_selected" 
            :options="options"
            required
            placeholder="Ej: Rex"
          ></b-form-select>
        </b-form-group>
<!-- Fecha-->
        <b-form-group
          id="input-group-3"
          label="Fecha de recogida de tu perro:"
          label-for="input-3">
          <b-form-datepicker
            id="input-3"
            today-button="true"
            reset-button="true"
            close-button="true"
            label-close-button="Cerrar"
            label-today-button="Selecciona Hoy"
            label-reset-button="Limpiar"
            v-model="pickup_date"
            required
            placeholder="Ingresa la fecha usando el botón"
          ></b-form-datepicker>
        </b-form-group>
<!-- Hora -->
        <b-form-group
          id="input-group-4"
          label="Hora de recogida de tu perro:"
          label-for="input-4">
          <b-form-timepicker
            id="input-4"
            reset-button="true"
            close-button="true"
            label-reset-button="Limpiar"
            label-close-button="Cerrar"
            v-model="pickup_time"
            required
            placeholder="Ingresa la hora usando el botón"
          ></b-form-timepicker>
        </b-form-group>
<!-- Dirección -->
        <b-form-group
          id="input-group-5"
          label="Tu Dirección"
          label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="client_address"
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>
<!-- Observaciones -->
        <b-form-group
          id="input-group-6"
          label="Observaciones"
          label-for="input-6">
          <b-form-textarea
            id="input-6"
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
    return {
      user: "",
      dog_selected: null,
      options:[{value: null, text: "Selecciona una opción"}],
      pickup_date: "",
      pickup_time: "",
      client_address: "",
      notes:""
    };
  },
  methods: {
    registerPetition() {
      this.$store.dispatch("registerPetition", {
        user: this.user,
        dog_name: this.dog_name,
        pickup_date: this.pickup_date,
        pickup_time: this.pickup_time,
        client_address: this.client_address,
        notes: this.notes
      })
      .then(()=>{
        this.$router.push({name: 'login'})
      })
    },
  },
};
</script>

<style scoped>
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
