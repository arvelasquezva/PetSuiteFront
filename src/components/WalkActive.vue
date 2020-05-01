<template>
  <div class="body">
    <h1 class="mt-3">Peticiones</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in Petition"
          :key="item.id"
          :title="item.price"
          tag="article"
          style="max-width: 17rem;"
          class="card"
        >
        </b-card>  
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalkActive",
  data() {
    return {
      currentUser:"",
      Petition: [],
    };
  },
  mounted (){
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
  methods:{
    getPetitionsforActive(){
      this.$store
        .dispatch("getPetitionsforActive",{
          cadena: this.currentUser.user
        })
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
