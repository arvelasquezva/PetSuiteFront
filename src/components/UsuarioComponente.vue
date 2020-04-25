<template>
  <div class="body">
    <div class="SignUp">
      <img
        height="300"
        src="../assets/Images/Usuario(1).png"
        alt="image slot"
      />

      <b-form @submit.prevent="registerUsuario"  class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            required
            placeholder="Ej: DiegoAVelasquez"
          >
          </b-form-input>
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

        <b-form-group
          id="input-group-3"
          label="Tu Nombre Completo:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="client_name"
            required
            placeholder="Ingresa tu Nombre"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu numero de celular:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="client_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu correo electronico:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="client_e_mail"
            required
            placeholder="Ej: xxxxx@xxxxx.com"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Tu Direccion:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="client_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success"
          >Unete a PetSuite</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsuarioComponente",
  data() {
    return {
      user: "",
      password: "",
      client_name: "",
      client_phone: "",
      client_e_mail: "",
      client_address: "",
    };
  },
  methods: {
    registerUsuario() {
      this.$store.dispatch("registerUsuario", {
        user: this.user,
        password: this.password,
        client_name: this.client_name,
        client_phone: this.client_phone,
        client_e_mail: this.client_e_mail,
        client_address: this.client_address
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
