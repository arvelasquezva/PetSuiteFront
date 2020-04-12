<template>
  <div class="body">
    <div class="SignUp">
      <img height="300" src="../assets/Images/Usuario(1).png" alt="image slot" />

      <b-form @submit="onSubmit" v-if="show" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.user" required placeholder="Ej: DiegoAVelasquez"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            required
            placeholder="Enter password"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Your name:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.client_name"
            required
            placeholder="Enter Your Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Your phone:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.client_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Your e-mail:" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="form.client_e_mail"
            required
            placeholder="Ej: xxxxx@xxxxx.com"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Your Address:" label-for="input-6">
          <b-form-input
            id="input-6"
            v-model="form.client_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">SignUp</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsuarioComponente",
  data() {
    return {
      form: {
        user: "",
        password: "",
        client_name: "",
        client_phone: "",
        client_e_mail: "",
        client_address: ""
      },
      show: true
    };
    var strix =
      "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q";
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      const url = "/api/clients/load";

      var config = {
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "Content-Type",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "*",
          "cache-control": "no-cache",
          "Authorization": "Token eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyUGFzc3dvcmQiOiJudWxsIiwicm9sZSI6IlJPTEVfQ0xJRU5UIn0.Bf0RDUGwDNVUUl8jEWXka1uNymXTnFg7QiQfxK_dpDe0bfPpDmOERZu_3sdDSVDK2IWpWrf6pu23J54UQd1N4Q",
        }
      };

      this.axios
        .post(url, this.form, config)
        .then(function(response){
          alert(response.data);
        })
        .catch(function(error){
          alert(error);
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
.SignUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
