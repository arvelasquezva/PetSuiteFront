<template>
  <div class="body">
    <h1 class="mt-3">Perros a mi cargo</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in petsActive"
          :key="item.id"
          tag="article"
          style="max-width: 19rem;"
          class="card"
        >
        <b-card-body>
            <b-card-title> Tu perro se llama: <strong>{{ item.dog_name }}</strong></b-card-title>
            <b-card-sub-title class="mb-2">Raza: {{item.dog_race}}</b-card-sub-title>
            <b-card-text
              ><strong>El perro le pertenece: </strong
              >{{ item.user}}
            </b-card-text>
            <b-card-text
              ><strong>Peso: </strong
              >{{ item.dog_weight }} kg
            </b-card-text>  
            <b-card-text
              ><strong>Peso: </strong
              >{{ item.dog_height }} cm
            </b-card-text>  
            <b-card-text
              ><strong>Edad: </strong
              >{{ item.dog_age}} años
            </b-card-text>
            <b-card-text
              ><strong>Notas: </strong
              >{{ item.dog_notes}} 
            </b-card-text>
          </b-card-body>
          
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DogsInMyCharge",
  data() {
    return {
      currentUser: "",
    };
  },
  computed: {
    ...mapState(["petsActive"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.dogsInMyCharge();
  },
  methods: {
    dogsInMyCharge() {
      this.$store.dispatch("getDogsInMyCharge",{
        cadena: this.currentUser.user,
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
