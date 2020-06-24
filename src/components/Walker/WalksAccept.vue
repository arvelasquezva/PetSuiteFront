<template>
  <div class="body">
    <h1 class="mt-3">Paseos Por Empezar</h1>
    <b-row class="">
      <div v-if="Object.keys(walksAccept).length === 0">
        <NotFound class="mb-5"></NotFound>
      </div>
      <div v-else class="cards mx-5 mb-5">
        <b-card
          v-for="item in walksAccept"
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
            <b-card-text>
              <strong> El paseo debe empezar : </strong>
              {{ item.walk_invoice_date }}
            </b-card-text>
            <b-card-text
              ><strong>El paseo durará: </strong
              >{{ item.walk_invoice_duration }} minutos</b-card-text
            >
            <b-card-text
              ><strong>El usuario {{ item.client_id }} te recomienda: </strong
              >{{ item.walk_invoice_notes }}
            </b-card-text>
            <b-card-text>
              <strong> El precio de este paseo es: </strong> ${{
                item.walk_invoice_price
              }}
            </b-card-text>
          </b-card-body>

          <b-modal v-model="show" size="sm" @ok="handleOk">
            <p class="my-4">Has iniciado el paseo para {{ item.dog_name }}</p>
          </b-modal>
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Cancelar"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk1"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label="Razón Por la que Cancelas el Servicio"
                label-for="razon-input"
                invalid-feedback="name is required"
              >
                <b-form-input
                  id="razon-input"
                  v-model="name"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
          <b-button
            variant="success"
            block
            v-on:click="actualizarEstado(item.walk_invoice_id)"
          >
            Empieza el Paseo
          </b-button>
          <b-button
            variant="danger"
            block
            v-b-modal.modal-prevent-closing
            user="'item'"
            v-on:click="sendInfo(item)"
          >
            Cancela el Servicio
          </b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotFound from "@/components/NotFound.vue";
export default {
  name: "WalksAccept",
  components: {
    NotFound,
  },
  data() {
    return {
      show: false,
      currentUser: "",
      name: "",
      nameState: null,
      selectedUser: "",
    };
  },
  computed: {
    ...mapState(["walksAccept"]),
  },
  created() {
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
    sendInfo(item) {
      this.selectedUser = item;
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    handleOk1(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleSubmit() {
      // Push the name to submitted names
      this.cancelarServicio(
        this.name,
        this.selectedUser.walk_invoice_id,
        this.selectedUser.client_id,
        this.selectedUser.dog_walker_id
      );
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    handleOk() {
      location.reload();
    },
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
    cancelarServicio(name, id_petition, id_user_Cancelled, id_user_whoCancel) {
      this.$store
        .dispatch("cancelWalk", {
          id_petition: id_petition,
          user_Cancelled: id_user_Cancelled,
          user_whoCancel: id_user_whoCancel,
          reasonCancellation: name,
        })
        .then(location.reload());
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
  overflow-x: scroll;
  padding: 1rem;
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
