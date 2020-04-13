<template>
    <div class="body">
    <div class="SignUp">
      <img
        height="300"
        src="../assets/Images/Hospeador(1).png"
        alt="image slot"
      />

      <b-form @submit="onSubmit" v-if="show" class="pl-4">    
        <b-form-group 
          id="input-group-1" 
          label="User ID:" 
          label-for="input-1" >
          <b-form-input
            id="input-1"
            v-model="form.user"
            required
            placeholder="Ej: DiegoAVelasquez"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Tu contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            required
            placeholder="Ingresa una contraseña"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Tu Nombre:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="form.dog_daycare_name"
            required
            placeholder="Ingresa tu Nombre"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tu correo electronico:"
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
          label="Tu numero de celular:"
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
          label="Tu Direccion:" 
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.dog_daycare_address"
            required
            placeholder="Ej: Carrera 97 # 36 - 69 Sur"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">Unete a PetSuite</b-button>
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
        dog_daycare_score: 0,
        dog_daycare_address:"",
        dog_daycare_type: false
      },
      show: true
      }
    },
    methods: {
    onSubmit(evt) {
      evt.preventDefault()
      const url = "/api/dog_day_cares/load";

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
          if (!response.data) {
            alert("Usuario ya registrado pueba con otro");
          } else {
            alert("Bienvenido a PetSuite" + response.data.dog_daycare_name);
          }
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
.SignUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>

