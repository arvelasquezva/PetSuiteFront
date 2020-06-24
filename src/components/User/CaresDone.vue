<template>
  <div class="body">
    <h1 class="mt-3">Guardería Que Debes Calificar</h1>
    <b-row class="mt-1">
      <div v-if="Object.keys(caresInvoice).length === 0">
          <NotFound class="mb-5"></NotFound>
        </div>
      <div v-else class="cards mx-5 mb-5">
        <b-card
          v-for="item in caresInvoice"
          :key="item.id"
          class="card"
        >
        <b-card-body>
            <b-card-title> El Cuidado para: <strong>{{ item.dog_daycare_invoice_dog_name }}</strong> ha terminado</b-card-title>
            <b-card-text> La guardería ha sido: <strong>{{item.dog_daycare_invoice_dogdaycare_id}}</strong></b-card-text>
          </b-card-body>
          <b-modal
            v-model="show"
            size="sm"
            @ok="handleOk">
              <p class="my-4">Has calificado a {{item.dog_daycare_invoice_dogdaycare_id}}</p>
          </b-modal>
        <b-form-group
              id="input-group-1"
              label="Que calificación merece?"
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
            block
            v-on:click="calificarGuarderia(item.dog_daycare_invoice_id, item.dog_daycare_invoice_dogdaycare_id,score )"
            >Califica a {{item.dog_daycare_invoice_dogdaycare_id}}</b-button
          >
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import  NotFound  from "@/components/NotFound.vue";
export default {
  name: "CaresDone",
  components:{
    NotFound
  },
  data() {
    return {
      currentUser: "",
      show: false,
      score: "",
      Options: [
        { text: '1', value: "1"},
        { text: '2', value: "2"},
        { text: '3', value: "3"},
        { text: '4', value: "4"},
        { text: '5', value: "5"},
        ]
    };
  },
  computed: {
    ...mapState(["caresInvoice"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.caresProgress();
  },
  methods: {
    handleOk() {
      location.reload();
    },
    caresProgress() {
      this.$store.dispatch("getCaresDone",{
        cadena1: this.currentUser.user,
        cadena2: "Terminado"
      });
    },
    calificarGuarderia(dog_daycare_invoice_id,dog_daycare_invoice_dogdaycare_id, score) {
      this.$store.dispatch("rateCare",{
        dog_daycare_invoice_id : dog_daycare_invoice_id,
        dog_daycare_invoice_dogdaycare_id : dog_daycare_invoice_dogdaycare_id,
        dog_daycare_invoice_score: score
      }).then(this.show=true)
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
  overflow: hidden;
}

.cards {
  display: flex;
  overflow-x: scroll;
  padding: 1rem;
}
.card {
  color: #063869;
  background-color: white;
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
