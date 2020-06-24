<template>
  <div class="body">
    <h1 class="mt-3">Paseos por aceptar precio</h1>    
    <b-row class="mt-1">      
      <div v-if="Object.keys(petitionsforActive).length === 0">
        <NotFound class="mb-5"></NotFound>
      </div>
      <div v-else class="cards mx-5 mb-5">         
        <b-card
          v-for="item in petitionsforActive"
          :key="item.id"
          class="card"
        >
          <b-card-body>
            <b-card-title
              ><strong>La Petición Para Tu Perro: </strong
              >{{ item.dog_name }}</b-card-title
            >
            <b-card-text
              >El paseador:
              <strong> {{ item.walk_petition_walker_user }}</strong> te propone:
            </b-card-text>
            <b-card-text
              ><strong> ${{ item.precio_proposal }} </strong>
              </b-card-text>
              <b-button v-on:click="obtenerDatosPaseador(item.walk_petition_walker_user);$bvToast.show('toast')" block type="submit" variant="success" >Ver Datos de {{ item.walk_petition_walker_user }}</b-button>                         
          </b-card-body>          
          <b-form-group
            id="input-group-1"
            label="Que deseas hacer?:"
            label-for="input-1"
          >
            <b-form-select
              id="input-1"
              v-model="state"
              :options="Options"
              required
            ></b-form-select>
          </b-form-group>
          <b-modal 
            centered 
            v-model="show"
            size="sm"
            @ok="handleOk">
            <p v-if="state=='Aceptar'" class="my-4">
              Has aceptado el paseo para {{ item.dog_name }} por parte de
              {{ item.walk_petition_walker_user }}
            </p>
            <p v-else>
              Has rechazado el precio para {{ item.dog_name }} por parte de
              {{ item.walk_petition_walker_user }}
            </p>
          </b-modal>
          <b-button v-if="state"
            block
            variant="success"
            type="submit"
            v-on:click="
              sendStatusPetitions(
                item.dog_id,
                item.precio_proposal,
                item.walk_petition_walker_user,
                item.dog_name
              )
            "
            >{{ state }}</b-button
          >
        </b-card>
      </div>
    </b-row>
        <b-toast
          id="toast"                   
          title="Datos de Paseador"            
          solid: true 
          toaster="b-toaster-top-left"
          position= "top-center"
          class="toast"                       
          >
         User ID: {{info.user}} <br/>
         Nombre del paseador: {{info.dog_walker_name}} <br/>
         Teléfono del paseador: {{info.dog_walker_phone}}<br/>
         E-mail del paseador: {{info.dog_walker_e_mail}}<br/>
         Puntaje del paseador: {{info.dog_walker_score}}
        </b-toast>
  </div>  
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';
import  NotFound  from "@/components/NotFound.vue"; 
export default {
  name: "WalkForAccept",
  components:{
    NotFound
  },
  data() {
    return {
      show: false,
      currentUser: "",
      info: [],
      state: "",
      Options: [
        { text: "Aceptar", value: "Aceptar" },
        { text: "Negar", value: "Negar" },
      ],
    };
  },
  computed: {
    ...mapState(["petitionsforActive"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getPetitionsforActive();
  },
  methods: {
    handleOk() {
      location.reload();
    },
    obtenerDatosPaseador(dogWalker) {      
      axios.post("/api/clients/mywalker",{
        cadena: dogWalker,
      })
      .then(response => (this.info = response.data));
    },
    getPetitionsforActive() {
      this.$store.dispatch("getPetitionsforActive", {
        cadena: this.currentUser.user,
      });
    },
    sendStatusPetitions(dog_id, price, dogWalker, dogName) {
      this.$store
        .dispatch("sendStatusPetition", {
          dog_id: dog_id,
          walk_invoice_price: price,
          dog_walker_id: dogWalker,
          client_id: this.currentUser.user,
          walk_invoice_status: this.state,
          dog_name: dogName,
        })
        .then((this.show = true));
    },
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #40db9a;
}
.body {
  margin: 0;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cards {
  display: flex;
  overflow-x: scroll;
  padding: 1rem;
}
.card {
  color: #063869;
  background-color: #eef6e1;
  min-width: 20rem;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 3px 3px 12px 2px rgba(black, 0.6);
  transition: 0.2s;
}
.card:not(:first-child) {
  margin-left: -2rem;
}
.card:not(:last-child):hover,
.card:not(:last-child):focus-within {
  transform: translateY(-1rem);
  ~ .card {
    transform: translateX(2rem);
  }
}
.toast {
background-color:#40db9a
}
</style>
