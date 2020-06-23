<template>
  <div class="body_card">
    <h1 class="mt-3">Guarderias</h1>
      <div class="cards col-md-12">
        <b-card
          v-for="item in dogDayCares"
          :key="item.id"
          class="card"
        >
        <b-card-body>
          <b-card-title><strong>{{item.dog_daycare_name}}</strong></b-card-title>
          <b-card-sub-title>
            <strong>Telefono: </strong>{{item.dog_daycare_phone}}
            <strong>Dirección:</strong>  {{item.dog_daycare_address}}
            <strong v-if="item.dog_daycare_type=true"> Guarderia Oficial</strong>
            <strong v-else> Hospedador</strong>
          </b-card-sub-title>
          <b-card-text><strong>Puntaje: </strong>{{ item.dog_daycare_score }} </b-card-text>
          <b-card-text><strong>Precio Base: </strong>$ {{ item.dog_daycare_price_base }} </b-card-text>
          <b-card-text><strong>Precio Recargo: </strong>$ {{ item.dog_daycare_tax }} </b-card-text>
        </b-card-body>
          <router-link :to="{name: 'dogDayCares', params:{id: item.user}}">
            <b-button variant="primary">Go to {{ item.dog_daycare_name }}</b-button>
          </router-link>
        </b-card>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "DogDayCareList",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["dogDayCares"]),
  },
  created() {
    this.getDogDayCares();
  },
  methods: {
    getDogDayCares() {
      this.$store.dispatch("getDogDayCares");
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #40db9a;
}
.body_card {
  margin: 0;
  height: auto;
  display: grid;
  place-items: center;
  
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
</style>
