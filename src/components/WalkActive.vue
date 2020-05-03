<template>
  <div class="body">
    <h1 class="mt-3">Peticiones</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in Petition"
          :key="item.id"
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
          <b-card-body>
            <b-card-title><strong>{{ item.user }}</strong> quiere que pasees a su perro <strong>{{item.dog_name}}</strong></b-card-title>
            <b-card-sub-title class="mb-2">Raza: {{item.dog_race}}</b-card-sub-title>
            <b-card-text
              ><strong>Debes recogerlo en: </strong
              >{{ item.walk_petition_address }}
            </b-card-text>
            <b-card-text
              ><strong>El paseo empezara: </strong
              >{{ item.walk_petition_date_time }}
            </b-card-text>
            <b-card-text
              ><strong>El paseo durará: </strong
              >{{ item.walk_petition_duration }} minutos</b-card-text
            >
            <b-card-text> <strong>Detalles de {{item.dog_name}}: </strong> 
            <ul>
              <li>Peso: {{ item.dog_weight }} Kg</li>
              <li>Altura: {{ item.dog_height }} cm</li>
              <li>Más: {{ item.dog_notes }} </li>
            </ul>
              
            </b-card-text>
            <b-card-text
              ><strong>El usuario {{ item.user }} te recomienda: </strong
              >{{ item.walk_petition_notes }}
            </b-card-text>
          </b-card-body>
          <b-form-group
            id="input-group-5"
            label="Propon un precio:"
            label-for="input-5"
          >
            <b-form-input
              id="input-4"
              v-model="valor"
              required
              placeholder="Ej: 10000"
              type="number"
              min="1000"
            ></b-form-input>
          </b-form-group>
          <b-button
            variant="info"
            v-on:click="proposePetition(item.walk_petition_id)"
            >Proponle un precio a {{ item.user }}</b-button
          >
          <b-modal v-model="show">
            <p class="my-4">Le has enviado a {{item.user}} $ {{valor}}</p>
          </b-modal>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalkForAccept",
  data() {
    return {
      show: false,
      currentUser: "",
      Petition: [],
      valor: "",
    };
  },
  created() {
    if (localStorage.getItem("petition")) {
      try {
        this.Petition = JSON.parse(localStorage.getItem("petition"));
      } catch (e) {
        localStorage.removeItem("petition");
      }
    }
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getPetition();
  },
  methods: {
    getPetition() {
      this.$store.dispatch("getPetitionById");
    },
    proposePetition(id_petition) {
      this.$store.dispatch("proposePetition", {
        walk_petition_walker_user: this.currentUser.user,
        walk_petition_id: id_petition,
        precio_proposal: this.valor,
      }).then(this.show=true);
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
