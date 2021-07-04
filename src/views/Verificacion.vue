<template>
  <div class="body">
    <div class="login">
      <b-form @submit.prevent="dobleLogin">
        <b-form-group id="input-group-1" label="User ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="mensaje"
            required
            placeholder="Ingresa el mensaje enviado a tu celular"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" variant="success">
          Verificáte</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
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
  beforeCreate(){
      this.sendMessage();
  },
  methods: {
    async sendMessage() {
        console.log(this.user);
      await axios
        .post("localhost:8085/sendmessage", {
          number: "+57" + this.user.phone,
        })
        .then((response) => {
          this.mensajeRespuesta = response.data;
        });
    },
    dobleLogin (){
        if(this.mensajeRespuesta==this.mensajeRespuesta){
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
