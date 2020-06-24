<template>
  <div class="body">
    <div>
      <h1 class="mt-3 text-center ">Busca una guardería</h1>
      <div class=" mx-1 mb-5">
        <h5 class="mt-6">¿Cómo quieres realizar tu busqueda?</h5>
        <div class="d-flex mt-3">
          <b-button class= "buscadorButton ml-3" v-on:click="toggleGeneral">
            Búsqueda General
          </b-button>
          <b-button class= "buscadorButton ml-3" v-on:click="toggleName">
            Por nombre
          </b-button>
          <b-button class= "buscadorButton ml-3" v-on:click="toggleService">
            Por servicio
          </b-button>
          <b-button class= "buscadorButton ml-3" v-on:click="toggleScore">
            Por Calificación
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
};
</script>

<style lang="scss" scoped>
.body {
  margin: 0;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.buscadorButton{
  background: #ffffff;
  border-style: solid;
  border-width: 1px;
  color: black;
}
</style>
