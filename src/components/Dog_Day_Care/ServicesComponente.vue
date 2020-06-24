<template>
  <div class="body">
    <h1 class="mt-3">{{ msg }}</h1>
    <b-row class="mt-1">
      <div v-if="Object.keys(services).length === 0">
          <NotFound class="mb-5"></NotFound>
      </div>
      <div else class="cards mx-5 mb-5">
        <b-card
          v-for="item in services"
          :key="item.id"
          class="card"
        >
        <b-card-body>
          <b-card-title><strong>{{item.dogdaycare_Service_Name}}</strong></b-card-title>
          <b-card-sub-title>$ {{item.dogdaycare_Service_Price}}</b-card-sub-title>
          <b-card-text><strong>Descripción: </strong>{{ item.dogdaycare_Service_Description }} </b-card-text>
        </b-card-body>
        </b-card>
      
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import  NotFound  from "@/components/NotFound.vue";
export default {
  name: "ServicesComponente",
  components:{
    NotFound
  },
  data() {
    return {
    currentUser: "",
    }
  },
  computed: {
    ...mapState(["services"]),
  },
  props: {
    msg: String,
  },
created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getServices();
  },
  methods: {
    getServices(){
      this.$store.dispatch("getServicesByUser", this.currentUser.user);
    }
  },
};
</script>

<style lang="scss" scoped>
.body {
  margin: 0;
  height: auto;
  display: grid;
  place-items: center;
  overflow-x: scroll;
}

.cards {
  display: flex;
}
.card {
  color: #063869;
  background-color: white;
  border-radius: 1rem;
  min-width: 10rem;
  max-width: 15rem;
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
