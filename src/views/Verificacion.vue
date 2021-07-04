<template>
  <div class="body">
    <div class="login">
      <b-form @submit.prevent="dobleLogin">
        <b-form-group id="input-group-1" label="Código:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="mensaje"
            required
            placeholder="Ingresa el mensaje enviado a tu celular"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">
          Verifícate</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
const options = {
  url: 'http://localhost:8085/sendmessage',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Origin': '*',
  },
  data: {
    number: "+573124890620"
  }}

export default {
  name: "Verificacion",
  computed: {
    ...mapState(["user"]),
  },
  data() {
    
    return {
      mensaje: "",
      mensajeRespuesta : ""
    };
  },
  created(){
      this.sendMessage();
  },
  methods: {
    sendMessage(){
      axios(options)
  .then(response => {
    console.log(response.data);
    this.mensajeRespuesta = response.data;
  });
    },
    dobleLogin (){
        if(this.mensajeRespuesta==this.mensaje){
            this.$router.push({ name: "Home" });
        }
        else{
            alert("Error del mensaje")
        }
    }
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
.login {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: white;
}
</style>
