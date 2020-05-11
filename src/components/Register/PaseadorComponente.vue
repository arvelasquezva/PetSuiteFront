<template>
  <div class="body">
    <div class="SignUp">
      <img
        height="300"
        src="@/assets/Images/Paseador(1).png"
        alt="image slot"
      />

      <b-form @submit.prevent="registerUsuario" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            required
            placeholder="Ej: DiegoAVelasquez"
          >
            ></b-form-input
          >
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Tu contraseña:"
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

        <b-form-group id="input-group-3" 
        label="Tu Nombre Completo:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="dog_walker_name"
            required
            placeholder="Ingresa tu Nombre"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu correo electronico:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="dog_walker_e_mail"
            required
            placeholder="Ingresa tu correo electronico"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu numero de celular:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="dog_walker_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">Unete a PetSuite</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaseadorComponente",
  
  data() {
    return {
        user: "",
        password: "",
        dog_walker_name: "",
        dog_walker_e_mail: "",
        dog_walker_phone: "",
        dog_walker_score: 0,
    };
  },
  methods: {
    registerUsuario() {
      this.$store.dispatch("registerUsuario", [{
        user: this.user,
        password: this.password,
        dog_walker_name: this.dog_walker_name,
        dog_walker_e_mail: this.dog_walker_e_mail,
        dog_walker_phone: this.dog_walker_phone,
        dog_walker_score: this.dog_walker_score
      }, "dog_walkers"])
      .then(({ data }) => {
          if (data === "") {
            alert("Error al Registrarte");
          } else {
            alert ("Bienvenido a PetSuite")
        	this.$router.push({name: 'Login'})
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
