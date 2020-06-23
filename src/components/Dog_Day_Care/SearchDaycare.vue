<template>
  <div class="body">
    <div>
      <h1 class="mt-3 text-center ">Busca una guarderia</h1>
      <div class=" mx-1 mb-5">
        <h5 class="mt-6">Como quieres realizar tu busqueda</h5>
        <div class="mt-3">
          <b-button v-on:click="toggleGeneral" squared variant="success">
            Busqueda General
          </b-button>
          <b-button v-on:click="toggleName" squared variant="success">
            Por nombre
          </b-button>
          <b-button v-on:click="toggleService" squared variant="success">
            Por servicio
          </b-button>
          <b-button v-on:click="toggleScore" squared variant="success">
            Por Calificacion
          </b-button>
        </div>
        <keep-alive>
          <component v-bind:is="component" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchByScore from "@/components/Dog_Day_Care/SearchByScore.vue";
import SearchByName from "@/components/Dog_Day_Care/SearchByName.vue";
import SearchByService from "@/components/Dog_Day_Care/SearchByService.vue";
import SearchGeneral from "@/components/Dog_Day_Care/SearchGeneral.vue";
export default {
  name: "SearchDaycare",
  components: {
    SearchByScore,
    SearchByName,
    SearchByService,
    SearchGeneral,
  },
  data() {
    return {
      component: "SearchGeneral",
    };
  },
  methods: {
    toggleName() {
      if (this.component != SearchByName) {
        this.component = SearchByName;
      }
    },
    toggleService() {
      if (this.component != SearchByService) {
        this.component = SearchByService;
      }
    },
    toggleScore() {
      if (this.component != SearchByScore) {
        this.component = SearchByScore;
      }
    },
    toggleGeneral() {
      if (this.component != SearchGeneral) {
        this.component = SearchGeneral;
      }
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #40db9a;
}
h2 {
  color: #40db9a;
}
h5 {
  color: #40db9a;
  text-align: center;
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
