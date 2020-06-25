<template>
  <div class="body">
    <h1 class="mt-3">Paseos por aceptar precio</h1>    
          
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
            <b-card-text> El paseador
              <strong> {{ item.walk_petition_walker_user }} </strong> te propone:
            <strong> ${{ item.precio_proposal }} </strong>
              </b-card-text>
              <b-button 
                v-on:click="obtenerDatosPaseador(item.walk_petition_walker_user);$bvToast.show('toast')" 
                block 
                variant="dark"
                class="datosPaseadorButton"> Ver datos de {{ item.walk_petition_walker_user }}
              </b-button>                         
          </b-card-body>          
          <b-modal 
            centered 
            ok-only
            v-model="show"
            size="sm"
            @ok="handleOk">
            <p class="my-4">
              Se le notificará a {{ item.walk_petition_walker_user }} tu decisión.
            </p>
          </b-modal>
          <b-button
            block
            variant="success"
            type="submit"
            v-on:click="
              sendStatusPetitions(
                item.dog_id,
                item.precio_proposal,
                item.walk_petition_walker_user,
                item.dog_name,
                Aceptar
              )
            "
            > Aceptar </b-button
          >
          <b-button
            block
            variant="danger"
            type="submit"
            v-on:click="
              sendStatusPetitions(
                item.dog_id,
                item.precio_proposal,
                item.walk_petition_walker_user,
                item.dog_name,
                Negar
              )
            "
            > Denegar </b-button
          >
        </b-card>
      </div>
    
        <b-toast
          class="toastData"
          id="toast"  
          solid="true"                 
          title="Datos de Paseador"                     
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
      Aceptar: "Aceptar",
      Negar: "Negar",
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
    sendStatusPetitions(dog_id, price, dogWalker, dogName, state) {
      this.$store
        .dispatch("sendStatusPetition", {
          dog_id: dog_id,
          walk_invoice_price: price,
          dog_walker_id: dogWalker,
          client_id: this.currentUser.user,
          walk_invoice_status: state,
          dog_name: dogName,
        })
        .then((this.show = true));
    },
  }
};
</script>

<style lang="scss" scoped>

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
  background-color: white;
  min-width: 15rem;
  max-width: 20rem;
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
.toastData{
  background: #01071f;
  border: none;
}
.datosPaseadorButton{
  background: #ff5f6d;
  margin: auto;
  border: none;
  width: 75%;
}
</style>
