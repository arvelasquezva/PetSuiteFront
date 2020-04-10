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
            v-model="form.UserId"
            required
            placeholder="Enter Your User ID"
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
export default {
    name: "LoginComponente",
    data() {
    return {
      form: {
        UserId: "",
        password: ""
      },
      show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let currentObj = this;
        this.axios.post('http://placeholder', JSON.stringify(this.form))
        .then(function (response) {
            alert(response.data);
        })
        .catch(function (error) {
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

