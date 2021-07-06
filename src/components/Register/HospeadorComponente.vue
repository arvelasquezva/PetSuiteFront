<template>
  <div class="body my-2">
    <h1>Regístrate cómo Hospedador</h1>
    <div class="SignUp">
      <img
        height="300"
        src="@/assets/Images/Hospeador(1).png"
        alt="image slot"
      />

      <b-form @submit.stop.prevent="registerUsuario" class="pl-4">
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


        <b-form-group id="input-group-3" label="Tu Nombre:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="dog_daycare_name"
            required
            placeholder="El Nombre de tu guardería NO oficial"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu correo electrónico:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="dog_daycare_e_mail"
            required
            placeholder="Ej: xxxxx@xxxxx.com"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Tu número de celular:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="dog_daycare_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
            min="3000000000"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Tu Dirección:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="dog_daycare_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-7"
          label="Agrega un precio base por cuidado de mascota:"
          label-for="input-7"
        >
          <b-form-input
            id="input-7"
            v-model="dog_daycare_price_base"
            required
            type="number"
            min="0"
            placeholder="Ej: 10000"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-8"
          label="Agrega un impuesto por perros grandes:"
          label-for="input-8"
        >
          <b-form-input
            id="input-7"
            v-model="dog_daycare_tax"
            required
            min="0"
            type="number"
            placeholder="Ej: 10000"
          ></b-form-input>
        </b-form-group>
</br>
        <vue-recaptcha
          @verify="onVerify"
          sitekey="6LfOinIbAAAAALEDAwEttTjlDBV82jWfz7bnEn_O"
        >
        </vue-recaptcha>
        </br>
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
  name: "HospedadorComponente",
  data() {
    return {
      user: "",
      password: "",
      dog_daycare_name: "",
      dog_daycare_e_mail: "",
      dog_daycare_phone: "",
      dog_daycare_score: 0,
      dog_daycare_address: "",
      dog_daycare_type: false,
      dog_daycare_price_base: "",
      dog_daycare_tax: "",
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
        this.$store
          .dispatch("registerUsuario", [
            {
              user: this.user,
              password: this.password,
              dog_daycare_name: this.dog_daycare_name,
              dog_daycare_e_mail: this.dog_daycare_e_mail,
              dog_daycare_phone: this.dog_daycare_phone,
              dog_daycare_score: this.dog_daycare_score,
              dog_daycare_address: this.dog_daycare_address,
              dog_daycare_type: this.dog_daycare_type,
              dog_daycare_price_base: this.dog_daycare_price_base,
              dog_daycare_tax: this.dog_daycare_tax,
            },
            "dog_day_cares",
          ])
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
