<template>
  <div class="body my-2">
    <h1> Regístrate cómo Hospedador </h1>
    <div class="SignUp">
      <img
        height="300"
        src="@/assets/Images/Hospeador(1).png"
        alt="image slot"
      />

      <b-form @submit.prevent="registerUsuario" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            required
            placeholder="Ej: DiegoAVelasquez"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Tu Contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            required
            placeholder="Ingresa una contraseña"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Tu Nombre:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="dog_daycare_name"
            required
            placeholder="El Nombre de tu guardería NO oficial"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu correo electrónico:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="dog_daycare_e_mail"
            required
            placeholder="Ej: xxxxx@xxxxx.com"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu número de celular:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="dog_daycare_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
            min="3000000000"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Tu Dirección:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="dog_daycare_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">
          Únete a PetSuite
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HospedadorComponente",
  data() {
    return {
      user: "",
      password: "",
      dog_daycare_name: "",
      dog_daycare_e_mail: "",
      dog_daycare_phone: "",
      dog_daycare_score: 0,
      dog_daycare_address: "",
      dog_daycare_type: false,
    };
  },
  methods: {
    registerUsuario() {
      this.$store
        .dispatch("registerUsuario", [
          {
            user: this.user,
            password: this.password,
            dog_daycare_name: this.dog_daycare_name,
            dog_daycare_e_mail: this.dog_daycare_e_mail,
            dog_daycare_phone: this.dog_daycare_phone,
            dog_daycare_score: this.dog_daycare_score,
            dog_daycare_address: this.dog_daycare_address,
            dog_daycare_type: this.dog_daycare_type,
          },
          "dog_day_cares",
        ])
        .then(({ data }) => {
          if (data === "") {
            alert("Error al Regístrarte");
          } else {
            alert("Bienvenido a PetSuite");
            this.$router.push({ name: "Login" });
          }
        });
    },
  },
};
</script>

<style scoped>
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
