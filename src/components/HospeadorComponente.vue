<template>
    <div class="body">
    <div class="SignUp">
      <img
        height="300"
        src="../assets/Images/Hospeador(1).png"
        alt="image slot"
      />

      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pl-4">    
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1" >
          <b-form-input
            id="input-1"
            v-model="form.user"
            required
            placeholder="Ej: DiegoAVelasquez"
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
            v-model="form.dog_daycare_name"
            required
            placeholder="Enter Name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Your e-mail:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.dog_daycare_e_mail"
            required
            placeholder="Ej: xxxxx@xxxxx.com"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Your phone:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.dog_daycare_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Your Address:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.dog_daycare_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">SignUp</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
    name: "HospeadorComponente",
    data() {
    return {
      form: {
        user: "",
        password: "",
        dog_daycare_name:"",
        dog_daycare_e_mail:"",
        dog_daycare_phone: "",
        dog_daycare_score: null,
        dog_daycare_address:"",
        dog_daycare_type: false
      },
      show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let currentObj = this;
        this.axios.post('http://localhost:8080/api/dog_day_cares/load', JSON.stringify(this.form))
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
.SignUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>

