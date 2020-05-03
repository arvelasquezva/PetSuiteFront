<template>
  <div class="body">
    <h1 class="mt-3">Peticiones</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in Petition"
          :key="item.id"
          tag="article"
          style="max-width: 17rem;"
          class="card"
        >
        <b-card-body>
            <b-card-title>La Petición Para Tu Perro: {{ item.dog_id }}</b-card-title>
            <b-card-text>El paseador: <strong> {{ item.walk_petition_walker_user }}</strong> te propone:</b-card-text>
            <b-card-text><strong> ${{item.price}} </strong></b-card-text>
            
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
            <b-button block variant="success" type="submit" v-on:click="sendStatusPetitions(item.dog_id, item.price, item.walk_petition_walker_user)">Aceptar</b-button>
            <b-button block variant="success" type="submit" v-on:click="sendStatusPetitions(item.dog_id, item.price, item.walk_petition_walker_user)">Negar</b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  async created () {
    try {
      await this.$store.dispatch("petition")
    } catch (error) {
      console.error
    }
  },
  name: "WalkForAccept",
  data() {
    
    return {
      currentUser: "",
      Petition: [],
      state: "",
      Options: [
        { text: 'Aceptar', value: "Aceptar"},
        { text: 'Negar', value: "Negar"},
        ]
    };
  },
  computed: {
    ...mapState(['petitionsforActive']),
    ...mapGetters(['valuePetition'])
  },
  mounted() {
    if (localStorage.getItem("petitionActive")) {
      try {
        this.Petition = JSON.parse(localStorage.getItem("petitionActive"));
      } catch (e) {
        localStorage.removeItem("petitionActive");
      }
    }
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
    getPetitionsforActive() {
      this.$store.dispatch("getPetitionsforActive", {
        cadena: this.currentUser.user,
      });
    },
    sendStatusPetitions(dog_id, price, dogWalker) {
      this.$store.dispatch("sendStatusPetition", {
        dog_id: dog_id,
        walk_invoice_price: price,
        dog_walker_id: dogWalker,
        client_id: this.currentUser.user,
        walk_invoice_status: this.state,
      });
    },
  },
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
}
.card {
  color: #063869;
  background-color: #eef6e1;
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
</style>
