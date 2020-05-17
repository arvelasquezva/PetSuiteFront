<template>
  <div class="body">
    <h1 class="mt-3">Tus perros</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <UpdatePets 
          v-for="pet in pets"
          :key="pet.id"
          :pet="pet"
          :currenUser="currentUser"
          :title="pet.dog_name"
          tag="article"
          style="max-width: 17rem;"
          class="card">
        </UpdatePets>
        </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import UpdatePets from '@/components/Update/UpdatePets.vue';
export default {
  name: "DogsComponente",
  components: { UpdatePets },
  data() {
    return {
    currentUser: {},
    pets: [],
    }
  },
created() {
    if (localStorage.getItem("pet")) {
      try {
        this.pets = JSON.parse(localStorage.getItem("pet"));
      } catch (e) {
        localStorage.removeItem("pet");
      }
    }
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getMascotas();
  },
  methods: {
    getMascotas(){
      this.$store.dispatch("getMascotaByUser", {
          cadena: this.currentUser.user
      });
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
