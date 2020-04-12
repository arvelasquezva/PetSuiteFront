<template>
    <div class="body">
    <div class="login">
      <img
        height="300"
        src="../assets/Images/LogoSinFondo.png"
        alt="image slot"
      />
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.user"
            required
            placeholder="Enter an User ID"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            required
            placeholder="Enter password"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">Login</b-button>
        <b-button href="/signUp/all" block pill variant="danger">Sign Up</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "LoginComponente",
    data() {
    return {
      form: {
        user: "",
        password: "",
        error: false
      },
      show: true
      }
    },
    // agregue esto
  /*  created () {
  this.checkCurrentLogin()
},
updated () {
  this.checkCurrentLogin()
},*/
//hasta aca
    methods: {
    onSubmit(evt) {
      evt.preventDefault()
      const url = "/api/users/login";

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
          alert(response.data.token);
        })
        .catch(function(error){
          alert(error);
        });
    }
  }
  }
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

