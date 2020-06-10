<template>
  <div class="body">
    <h1 class="mt-3">Cuidados En Progreso</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in caresProgress"
          :key="item.id"
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
          <b-card-body>
            <b-card-title> Tienes un Servicio pendiente para <strong>{{ item.dog_daycare_invoice_dog_name }}</strong></b-card-title>
            <b-card-sub-title class="mb-2" >Duración: {{ item.dog_daycare_invoice_duration }} Horas</b-card-sub-title>
            <b-card-text><strong>El precio a cobrar es: </strong>$ {{  item.dog_daycare_invoice_price}}</b-card-text>
            <b-card-text><strong>Los servicios que debiste hacer es: </strong></b-card-text>
            <b-card-text 
              v-for="(value,key) in item.dog_daycare_invoice_services_names" 
              v-bind:key="key"
              >
             * {{value}}</b-card-text>
          </b-card-body>
          <b-modal 
            v-model="show"
            size="sm"
            @ok="handleOk"
          >
            <p class="my-4">Has terminado el servicio para {{ item.dog_daycare_invoice_dog_name }}</p>
          </b-modal>
          <b-button variant="success" block v-on:click="actualizarEstado(item.dog_daycare_invoice_id)">Termina el Servicio</b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CaresInProgess",
  data() {
    return {
      show: false,
      currentUser: "",
    };
  },
  computed: {
    ...mapState(["caresProgress"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getCaresInProgess();
  },
  methods: {
    handleOk() {
      location.reload();
    },
    getCaresInProgess() {
      this.$store.dispatch("getCaresInProgess", {
        cadena1: this.currentUser.user,
        cadena2: "En progreso",
      });
    },
    actualizarEstado(dog_day_care_invoice_id){
      this.$store.dispatch("updateStatusCare",{
        entero : dog_day_care_invoice_id
      }).then(this.show=true)
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
