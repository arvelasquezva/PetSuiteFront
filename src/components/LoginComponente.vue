<template>
  <div class="body">
    <div class="login">
      <b-form @submit.stop.prevent="loginUsuario">
        <label for="feedback-user">User ID</label>
        <b-form-input
          id="feedback-user"
          v-model="user"
          :state="validationUser"
          required
          placeholder="Ingresa tu User ID"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationUser">
          Tu User ID debe tener almenos 8 caracteres
        </b-form-invalid-feedback>
        <label for="feedback-password">Contraseña</label>
        <b-form-input
          id="input-2"
          v-model="password"
          :state="validationPassword"
          required
          placeholder="Ingresa una contraseña"
          type="password"
        ></b-form-input>
        <b-form-invalid-feedback :state="validationPassword">
          Tu contraseña debe tener almenos 8 caracteres
        </b-form-invalid-feedback>
        </br>
        <vue-recaptcha
          @verify="onVerify"
          sitekey="6LfOinIbAAAAALEDAwEttTjlDBV82jWfz7bnEn_O"
        >
        </vue-recaptcha>
        </br>
        <b-button block pill type="submit" variant="success"
          >Ingresa a PetSuite</b-button
        >
        <b-button href="/signUp" block pill variant="danger">
          Únete a PetSuite
        </b-button>
      </b-form>
    </div>
    <b-modal ok-only v-model="show" size="sm">
      <p class="my-4">El Usuario o Contraseña son incorrectos</p>
    </b-modal>
    <b-modal v-model="show1" size="sm">
      <p class="my-4">Captcha incorrecto</p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import VueRecaptcha from "vue-recaptcha";
export default {
  name: "LoginComponente",
  data() {
    return {
      user: "",
      password: "",
      show: false,
      robot: false,
      show1: false,
    };
  },
  computed: {
    validationUser() {
        return this.user.length > 8
      },
    validationPassword() {
        return this.password.length > 8
      }
  },
  methods: {
    async onVerify(response) {
      console.log(response);
      await axios
        .post(
          "/api/users/captcha",
          {
            cadena: response,
          },
          {
            headers: {
              Authorization:
                "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data == true) {
            this.robot = true;
          } else {
            this.show1 = true;
            this.robot = false;
          }
        });
    },
    async loginUsuario() {
      if (this.robot) {
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
              this.$router.push({ name: "Autenticacion" });
            }
          });
      } else {
        this.show1 = true;
      }
    },
  },
  components: {
    "vue-recaptcha": VueRecaptcha,
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
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: white;
}
</style>
