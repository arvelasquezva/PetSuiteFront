<template>
  <div class="home">
    <div class="body">
      <h1>Actualiza Datos de Guarderia</h1>
    <div class="SignUp">      
      <img height="300" src="@/assets/Images/Guarderia(1).png" alt="image slot" />
      <b-form @submit.prevent="updateUsuario" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"            
            :placeholder="currentUser.user"            
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
            :placeholder="currentUser.password"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Nombre de tu Guarderia:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="client_name"
            :placeholder="currentUser.dog_daycare_name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu correo electronico:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="client_e_mail"
            :placeholder="currentUser.dog_daycare_e_mail"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu numero de celular:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="client_phone"
            :placeholder="currentUser.dog_daycare_phone"
            type="number"
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
            :placeholder="currentUser.dog_daycare_address"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Agrega un precio base por cuidado de mascota:"
          label-for="input-7"
        >
          <b-form-input
            id="input-7"
            v-model="client_price_base"
            type="number"
            :placeholder="currentUser.dog_daycare_base"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success"
          >Actualiza tus datos</b-button
        >
      </b-form>
      <!-- <b-modal centered v-model="show">
        <p class="my-4">Has actualizado tus datos de usuario</p>
      </b-modal> -->
    </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "UpdateDaycare",
  data() {
    return {
      user: "",
      password: "",
      client_name: "",
      client_phone: "",
      client_e_mail: "",
      client_address: "",
      client_price_base: "",     
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
        client_address: this.client_address,
        client_price_base: this.client_price_base
      }, "clients"])
      .then(({ data }) => {
          if (data === "") {
            alert("Error al actualizar datos");
          } else {
            alert ("Has actualizado tus datos")
        	  this.$store.dispatch("logout");
            location.replace('/login')
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
