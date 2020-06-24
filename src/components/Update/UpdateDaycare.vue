<template>
  <div class="home">
    <div class="body">
      <h1>Actualiza Datos de Guardería</h1>
    <div class="SignUp">      
      <img height="300" src="@/assets/Images/Guarderia(1).png" alt="image slot" />
      <b-form @submit.prevent="updateUsuario" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="proposeddog_daycareUser"
            required
            readonly           
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Tu Contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="proposeddog_daycarePassword"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Nombre de tu Guardería:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="proposeddog_daycareName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu correo electrónico:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="proposeddog_daycareEmail"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu número de celular:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="proposeddog_daycarePhone"
            type="number"
            min="3000000000"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Tu Dirección:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="proposeddog_daycareAddress"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Precio base por cuidado de mascota:"
          label-for="input-7"
        >
          <b-form-input
            id="input-7"
            v-model="proposeddog_daycarePriceBase"
            type="number"
            min="1000"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-8"
          label="Impuesto por perros grandes:"
          label-for="input-8"
        >
          <b-form-input
            id="input-8"
            v-model="proposeddog_daycareTax"
            required
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success"
          >Actualiza tus datos</b-button
        >
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
  name: "UpdateDaycare",
  data() {
    return {
      currentUser:{},
      proposeddog_daycareUser:"",
      proposeddog_daycarePassword:"", 
      proposeddog_daycareName:"",
      proposeddog_daycarePhone:"",
      proposeddog_daycareEmail:"",
      proposeddog_daycareAddress:"",
      proposeddog_daycarePriceBase:"",
      proposeddog_daycareTax:"",    
    };
  },
  methods: {
    handleOk() {
      location.reload();
    },
    updateUsuario() {
      this.$store.dispatch("updateUsuario", [{
        user: this.proposeddog_daycareUser,
        password: this.proposeddog_daycarePassword,
        dog_daycare_name: this.proposeddog_daycareName,
        dog_daycare_phone: this.proposeddog_daycarePhone,
        dog_daycare_e_mail: this.proposeddog_daycareEmail,
        dog_daycare_address: this.proposeddog_daycareAddress,
        dog_daycare_price_base: this.proposeddog_daycarePriceBase,
        dog_daycare_tax: this.proposeddog_daycareTax,
        dog_daycare_type: true,
        token: this.currentUser.token,
        role: this.currentUser.role     
      }, "dog_day_cares"])
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
        this.proposeddog_daycareUser = this.currentUser.user
        this.proposeddog_daycarePassword = this.currentUser.password
        this.proposeddog_daycareName = this.currentUser.dog_daycare_name
        this.proposeddog_daycarePhone = this.currentUser.dog_daycare_phone
        this.proposeddog_daycareEmail = this.currentUser.dog_daycare_e_mail
        this.proposeddog_daycareAddress = this.currentUser.dog_daycare_address
        this.proposeddog_daycarePriceBase = this.currentUser.dog_daycare_price_base
        this.proposeddog_daycareTax = this.currentUser.dog_daycare_tax
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
