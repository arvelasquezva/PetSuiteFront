<template>
  <div class="body">
    <div class="login">
      <img
        height="300"
        src="../assets/Images/LogoSinFondo.png"
        alt="image slot"
      />
      <b-form @submit.prevent="loginUsuario">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            required
            placeholder="Ingresa tu User ID"
          ></b-form-input>
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

        <b-button block pill type="submit" variant="success">Ingresa a PetSuite</b-button>
        <b-button href="/signUp/all" block pill variant="danger">Unete a PetSuite</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponente",
  data() {
    return {
        user: "",
        password: ""
    };
    
  },
  methods: {
    loginUsuario(){
      this.$store.dispatch('login',{
        user: this.user,
        password: this.password
      })
      .then(({ data }) => {
          if (data === "") {
            alert("Error al Registrarte");
          } else {
            alert ("Bienvenido a PetSuite")
        	this.$router.push({name: 'Home'})
          }
        });
    }
  }
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
.login {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
