<template>
  <div class="body">
    <h1 class="mt-3">Paseos En Curso</h1>
    <b-row class="mt-1">
      <div v-if="Object.keys(walksProgress).length === 0">
        <NotFound class="mb-5"></NotFound>
      </div>
      <div v-else class="cards mx-5 mb-5">
        <b-card v-for="item in walksProgress" :key="item.id" class="card"
          ><b-card-body>
            <b-card-title>
              Termina el paseo para:
              <strong>{{ item.dog_name }}</strong>
            </b-card-title>
            <b-card-sub-title class="mb-2">
              Raza: {{ item.dog_race }}
            </b-card-sub-title>
            <b-card-text>
              <strong>Debes dejarlo en: </strong>
              {{ item.walk_invoice_address }}
            </b-card-text>
            <b-card-text
              ><strong>Debes cobrar: </strong>${{ item.walk_invoice_price }}
            </b-card-text>
          </b-card-body>
          <b-button
            variant="danger"
            block
            v-on:click="actualizarEstado(item.walk_invoice_id)"
            >Termina el Paseo</b-button
          >
          <b-modal v-model="show" size="sm" @ok="handleOk">
            <p class="my-4">Has terminado el paseo para {{ item.dog_name }}</p>
          </b-modal>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import  NotFound  from "@/components/NotFound.vue";
export default {
  name: "WalksProgress",
  components:{
    NotFound
  },
  data() {
    return {
      show: false,
      currentUser: "",
    };
  },
  computed: {
    ...mapState(["walksProgress"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getWalksProgress();
  },
  methods: {
    handleOk() {
      location.reload();
    },
    getWalksProgress() {
      this.$store.dispatch("getWalksProgress", {
        cadena: this.currentUser.user,
      });
    },
    actualizarEstado(walk_invoice_id) {
      this.$store
        .dispatch("updateStatusWalk", {
          entero: walk_invoice_id,
        })
        .then((this.show = true));
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

.cards {
  display: flex;
  overflow-x: scroll;
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
