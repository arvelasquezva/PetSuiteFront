<template>
  <div class="body">
    <h1 class="mt-3">Paseos En Curso</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in Petition"
          :key="item.id"
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
        <b-form-group
              id="input-group-1"
              label="Califica al paseador:"
              label-for="input-1"
            >
              <b-form-select
                id="input-1"
                v-model="score"
                :options="Options"
                required
              ></b-form-select>
            </b-form-group>
        <b-button
            variant="success" 
            v-on:click="calificarPaseador(item.walk_invoice_id, item.dog_walker_id,score )"
            >Da tu calificación</b-button
          >

        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalksDone",
  data() {
    return {
      currentUser: "",
      score: "",
      Petition: [],
      Options: [
        { text: '1', value: "1"},
        { text: '2', value: "2"},
        { text: '3', value: "3"},
        { text: '4', value: "4"},
        { text: '5', value: "5"},
        ]
    };
  },
  created() {
    if (localStorage.getItem("walksDone")) {
      try {
        this.Petition = JSON.parse(localStorage.getItem("walksDone"));
      } catch (e) {
        localStorage.removeItem("walksDone");
      }
    }
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.walksProgress();
  },
  methods: {
    walksProgress() {
      this.$store.dispatch("getWalksDone",{
        cadena: this.currentUser.user,
      });
    },
    calificarPaseador(walk_invoice_id,dog_walker_id, score){
      this.$store.dispatch("rateWalker",{
        walk_invoice_id : walk_invoice_id,
        dog_walker_id : dog_walker_id,
        walker_score: score
      })
    }
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
