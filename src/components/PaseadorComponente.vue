<template>
    <div class="body">
    <div class="SingUp">
      <img
        height="300"
        src="../assets/Images/Paseador(1).png"
        alt="image slot"
      />

      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pl-4">    
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1" >
          <b-form-input
            id="input-1"
            v-model="form.DogWalkerUser"
            required
            placeholder="Enter your User ID"
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

        <b-form-group
          id="input-group-3"
          label="Your name:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.name"
            required
            placeholder="Enter Your Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Your phone:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.phone"
            required
            placeholder="Enter Your Phone"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Your e-mail:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.mail"
            required
            placeholder="Enter Your E-mail"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">SingUp</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
    name: "PaseadorComponente",
    data() {
    return {
      form: {
        DogWalkerUser: "",
        password: "",
        name:"",
        phone: "",
        mail:"",
        score: null
      },
      show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
.SingUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>

