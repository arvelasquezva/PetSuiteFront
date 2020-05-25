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
            v-model="proposeddog_walkerUser"
            required
            readonly
          >
            </b-form-input
          >
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Tu contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="proposeddog_walkerPassword"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" 
        label="Tu Nombre Completo:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="proposeddog_walkerName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu correo electronico:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="proposeddog_walkerEmail"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu numero de celular:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="proposeddog_walkerPhone"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">Actualiza tus datos</b-button>
      </b-form>
      <b-modal 
        centered 
        v-model="show"
        size="sm"
        @ok="handleOk"
        >
        <p class="my-4">Has actualizado tus datos</p>
      </b-modal>
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
      currentUser:{},
      proposeddog_walkerUser:"",
      proposeddog_walkerPassword:"", 
      proposeddog_walkerName:"",
      proposeddog_walkerPhone:"",
      proposeddog_walkerEmail:""    
    };
  },
  methods: {
    handleOk() {
      location.reload();
    },
    updateUsuario() {
      this.$store.dispatch("updateUsuario", [{
        user: this.proposeddog_walkerUser,
        password: this.proposeddog_walkerPassword,
        dog_walker_name: this.proposeddog_walkerName,
        dog_walker_phone: this.proposeddog_walkerPhone,
        dog_walker_e_mail: this.proposeddog_walkerEmail,
        token: this.currentUser.token,
        role: this.currentUser.role
      }, "dog_walkers"])
      .then(() => {
        alert("Has actualizado tus datos");
        this.$router.push({name: 'Home'});
      });
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
        this.proposeddog_walkerUser = this.currentUser.user
        this.proposeddog_walkerPassword = this.currentUser.password
        this.proposeddog_walkerName = this.currentUser.dog_walker_name
        this.proposeddog_walkerPhone = this.currentUser.dog_walker_phone
        this.proposeddog_walkerEmail = this.currentUser.dog_walker_e_mail
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
