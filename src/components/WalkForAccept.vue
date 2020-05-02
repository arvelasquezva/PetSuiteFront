<template>
  <div class="body">
    <h1 class="mt-3">Peticiones</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in Petition"
          :key="item.id"
          :title="item.user"
          tag="article"
          style="max-width: 17rem;"
          class="card"
        >
        <b-form-group
          id="input-group-5"
          label="Propon un precio:"
          label-for="input-5"
        >
          <b-form-input
            id="input-4"
            v-model="valor"
            required
            placeholder="Ej: 5"
            type="number"
            min="1000"
          ></b-form-input>
        </b-form-group>
        <b-button variant="info" v-on:click="proposePetition(item.walk_petition_id)">Pasea al perro de {{item.user}}</b-button>
        </b-card>
        
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
      Petition: [],
      valor: ""
    };
  },
  created (){
    if (localStorage.getItem("petition")) {
      try {
        this.Petition = JSON.parse(localStorage.getItem("petition"));
      } catch (e) {
        localStorage.removeItem("petition");
      }
    }
    this.getPetition();
  },
  methods:{
    getPetition(){
      this.$store
        .dispatch("getPetitionById")
    },
    proposePetition(id_petition){
      this.$store
      .dispatch("proposePetition",{
        walk_petition_id: id_petition, 
        precio_proposal: this.valor
      })
    }
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
