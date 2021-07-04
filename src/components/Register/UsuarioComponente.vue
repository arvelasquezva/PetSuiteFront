<template>
  <div class="body my-2">
    <h1>Regístrate cómo Cliente</h1>
    <div class="SignUp">
      <img height="300" src="@/assets/Images/Usuario(1).png" alt="image slot" />

      <b-form @submit.prevent="registerUsuario" class="pl-4">
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
          label="Tu número de celular:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="client_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
            min="3000000000"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu correo electrónico:"
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
          label="Tu Dirección:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="client_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>

        <vue-recaptcha
          @verify="onVerify"
          sitekey="6LfOinIbAAAAALEDAwEttTjlDBV82jWfz7bnEn_O"
        >
        </vue-recaptcha>

        <b-modal v-model="show1" size="sm">
          <p class="my-4">Captcha incorrecto</p>
        </b-modal>

        <b-button block pill type="submit" variant="success">
          Únete a PetSuite
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueRecaptcha from "vue-recaptcha";
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
      robot: false,
      show1: false,
    };
  },
  methods: {
    onVerify: async function (response) {
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
    registerUsuario() {
      if (this.robot) {
        axios
          .post(
            "/api/clients/load",
            {
              user: this.user,
              password: this.password,
              client_name: this.client_name,
              client_phone: this.client_phone,
              client_e_mail: this.client_e_mail,
              client_address: this.client_address,
            },
            {
              headers: {
                Authorization:
                  "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q",
              },
            }
          )
          .then(({ data }) => {
            if (data === "") {
              alert("Error al Regístrarte");
            } else {
              alert("Bienvenido a PetSuite");
              this.$router.push({ name: "Login" });
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
  background-color: white;
}
</style>
