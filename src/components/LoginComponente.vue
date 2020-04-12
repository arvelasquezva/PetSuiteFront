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
        let currentObj = this;
        this.axios
        .post("http://localhost:8080/token", JSON.stringify( { "userName" : "generic", "id" : "generic", "role" : "ROLE_CLIENT"} ), { headers : {"Content-Type" : "application/json", "Authorization" : "Token "+string} } )
        .then(function (response) {
            alert(response.data);
        })
        .catch(function (error) {
            alert(error);
        });
      },
      //agregue este metodo
      login () {
       this.$http.post('http://localhost:8080/token', { user: this.email, password: this.password })
      .then(request => this.loginSuccessful(request))
      .catch(() => this.loginFailed())
      },
      loginSuccessful (req) {
      if (!req.data.token) {
          this.loginFailed()
          return
      }   
        this.error = false
        localStorage.token = req.data.token
        this.$store.dispatch('login')
        this.$router.replace(this.$route.query.redirect || 'http://localhost:8080/login')
      },
    //este tambien
      loginFailed () {
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
      delete localStorage.token
      },
   //y este
  /* checkCurrentLogin () {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || 'http://localhost:8080/login')
    }
  }*/
   
   },
   //esto tambien
   computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
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

