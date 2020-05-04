<template>
  <div class="body">
    <h1 class="mt-3">Paseos Por Empezar</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in Petition"
          :key="item.id"
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
          <b-card-body>
            <b-card-title>
              No olvides pasear a
              <strong>{{ item.dog_name }}</strong></b-card-title
            >
            <b-card-sub-title class="mb-2"
              >Raza: {{ item.dog_race }}</b-card-sub-title
            >
            <b-card-text
              ><strong>Debes recogerlo en: </strong
              >{{ item.walk_invoice_address }}
            </b-card-text>
            <b-card-text
              ><strong>El paseo debe empezar : </strong
              >{{ item.walk_invoice_date }}
            </b-card-text>
            <b-card-text
              ><strong>El paseo durará: </strong
              >{{ item.walk_invoice_duration }} minutos</b-card-text
            >
            <b-card-text
              ><strong>El usuario {{ item.client_id }} te recomienda: </strong
              >{{ item.walk_invoice_notes }}
            </b-card-text>
            <b-card-text
              ><strong>El precio de este paseo es: </strong>${{
                item.walk_invoice_price
              }}
            </b-card-text>
          </b-card-body>
          <b-button
            variant="success"
            block
            v-on:click="actualizarEstado(item.walk_invoice_id)"
            >Empieza el Paseo</b-button
          >
          <b-modal v-model="show">
            <p class="my-4">Has iniciado el paseo para {{ item.dog_name }}</p>
          </b-modal>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalksAccept",
  data() {
    return {
      show: false,
      currentUser: "",
      Petition: [],
    };
  },
  created() {
    if (localStorage.getItem("walksAccept")) {
      try {
        this.Petition = JSON.parse(localStorage.getItem("walksAccept"));
      } catch (e) {
        localStorage.removeItem("walksAccept");
      }
    }
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getWalksAccept();
  },
  methods: {
    getWalksAccept() {
      this.$store.dispatch("getWalksAccept", {
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
