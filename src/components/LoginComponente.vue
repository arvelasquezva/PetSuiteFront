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

        <b-button block pill type="submit" variant="success"
          >Ingresa a PetSuite</b-button
        >
        <b-button href="/signUp" block pill variant="danger"> Únete a PetSuite </b-button>
      </b-form>
    
    </div>
    <b-modal ok-only v-model="show" size="sm">
      <p class="my-4">El Usuario o Contraseña son incorrectos</p>
    </b-modal>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComponente",
  data() {
    return {
      user: "",
      password: "",
      show: false,
    };
  },
  methods: {
    async loginUsuario() {
      await axios
        .post(
          "/api/users/login",
          {
            user: this.user,
            password: this.password,
          },
          {
            headers: {
              Authorization:
                "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q",
            },
          }
        )
        .then((response) => {
          if (response.data === 0) {
            this.show = true;
          } else {
            this.$store.dispatch("login", response.data);
            this.$router.push({ name: "Home" });
          }
        });
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
.login {
  margin-left: 10px;
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
