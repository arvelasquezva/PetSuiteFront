<template>
  <div class="home">
    <div class="body">
      <h1>Actualiza Datos de Usuario</h1>
    <div class="SignUp">
      
      <img height="300" src="@/assets/Images/Usuario(1).png" alt="image slot" />
      <b-form @submit.prevent="updateUsuario" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"  
            v-model="proposedClientUser"
            required 
            readonly          
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
            v-model="proposedClientPassword"
            type="password"
            required  
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Tu Nombre Completo:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="proposedClientName"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu número de celular:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="proposedClientPhone"
            type="number"
            min="3000000000"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu correo electrónico:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="proposedClientEmail"
            type="email"
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
            v-model="proposedClientAddress"
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
export default {
  name: "UpdateClient", 
  data() {
    return {  
      show: false,
      currentUser:{},
      proposedClientUser:"",
      proposedClientPassword:"", 
      proposedClientName:"",
      proposedClientPhone:"",
      proposedClientEmail:"",
      proposedClientAddress:""     
    };
  },
  methods: {
    handleOk() {
      location.reload();
    },
    updateUsuario() {      
      this.$store.dispatch("updateUsuario", [{
        user: this.proposedClientUser,
        password: this.proposedClientPassword,
        client_name: this.proposedClientName,
        client_phone: this.proposedClientPhone,
        client_e_mail: this.proposedClientEmail,
        client_address: this.proposedClientAddress,
        token: this.currentUser.token,
        role: this.currentUser.role
      }, "clients"])
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
        this.proposedClientUser = this.currentUser.user
        this.proposedClientPassword = this.currentUser.password
        this.proposedClientName = this.currentUser.client_name
        this.proposedClientPhone = this.currentUser.client_phone
        this.proposedClientEmail = this.currentUser.client_e_mail
        this.proposedClientAddress = this.currentUser.client_address
      } catch (e) {
        console.log(e);
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
