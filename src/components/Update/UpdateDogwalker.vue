<template>
  <div class="home">
    <div class="body">
      <h1>Actualiza Datos de Caminador</h1>
    <div class="SignUp">
      
      <img height="300" src="@/assets/Images/Paseador(1).png" alt="image slot" />
     <b-form @submit.prevent="updateUsuario" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            :placeholder="currentUser.user"
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
            :placeholder="currentUser.password"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" 
        label="Tu Nombre Completo:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="client_name"
            :placeholder="currentUser.dog_walker_name"
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
            :placeholder="currentUser.dog_walker_e_mail"
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
            v-model="client_phone"
            :placeholder="currentUser.dog_walker_phone"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">Actualiza tus datos</b-button>
      </b-form>
      <!-- <b-modal centered v-model="show">
        <p class="my-4">Has actualizado tus datos de paseador</p>
      </b-modal> -->
    </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "UpdateDogwalker",
  data() {
    return {
      user: "",
      password: "",
      client_name: "",
      client_phone: "",
      client_e_mail: "",    
    };
  },
  methods: {
    updateUsuario() {
      this.$store.dispatch("updateUsuario", [{
        user: this.user,
        password: this.password,
        client_name: this.client_name,
        client_e_mail: this.client_e_mail,
        client_phone: this.client_phone,
      }, "clients"])
      .then(({ data }) => {
          if (data === "") {
            alert("Error al actualizar datos");
          } else {
            alert ("Has actualizado tus datos")
        	  this.$store.dispatch("logout");
            location.replace('/login');
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
  }
};
</script>
<style>
.body {
  margin-bottom: 20px;
}
</style>
