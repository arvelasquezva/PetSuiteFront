<template>
  <div class="body">
    <div class="SignUp">
      <img
        height="300"
        src="../assets/Images/Usuario(1).png"
        alt="image slot"
      />

      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="pl-4">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
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

        <b-form-group id="input-group-3" label="Your name:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.client_name"
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
            v-model="form.client_phone"
            required
            placeholder="Ej: 3208919191"
            type="number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Your e-mail:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model="form.client_e_mail"
            required
            placeholder="Ej: xxxxx@xxxxx.com"
            type="email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Your Address:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.client_address"
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
  name: "UsuarioComponente",
  data() {
    return {
      form: {
        user: "",
        password: "",
        client_name: "",
        client_phone: "",
        client_e_mail: "",
        client_address: "",
        score: null,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      let currentObj = this;
      axios
		//Campos userName, id y role deben formar parte del JSON para cualquier petición. En el header va solo el tipo de contenido y el 'Authorization' cuyo valor es la palabra token, un espacio y el string largo del token.
		//Se debe tener un token para cualquier tipo de petición a cualquier sección del back que tenga /api en la dirección, así no haya un usuario loggeado, para este caso no hay usuario loggeado entonces valores de userName e ID no importan.
		//El rol siempre debe ser el apropiado, para este caso de registro de usuario regular entonces es ROLE_CLIENT.
		//Este es un método plantilla para obtener un token del servidor. Para pedir un token no debe ir un token en el header, claramente. Está solo como ejemplo para otras peticiones.
 		.post("http://localhost:8080/token", JSON.stringify( { "userName" : "generic", "id" : "generic", "role" : "ROLE_CLIENT"} ), { headers : {"Content-Type" : "application/json", "Authorization" : "Token "+string} } )
        .then(function(response) {
          alert(response.data);
        })
        .catch(function(error) {
          alert(error);
        });
    },
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
.SignUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
