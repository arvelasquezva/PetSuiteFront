<template>
  <div class="body">
    <h1 class="mt-3">Cuidados Por Empezar</h1>
      <div v-if="Object.keys(caresPending).length === 0">
          <NotFound class="mx-5 mb-5"></NotFound>
        </div>
      <div else class="cards mx-5 mb-5">
        <b-card
          v-for="item in caresPending"
          :key="item.id"
        >
          <b-card-body>
            <b-card-title>
              Tienes un Servicio pendiente para
              <strong>{{
                item.dog_daycare_invoice_dog_name
              }}</strong></b-card-title
            >
            <b-card-sub-title class="mb-2"
              >Duración:
              {{ item.dog_daycare_invoice_duration }} Horas</b-card-sub-title
            >
            <b-card-text
              ><strong>El precio a cobrar es: </strong>$
              {{ item.dog_daycare_invoice_price }}</b-card-text
            >
            <b-card-text
              ><strong>Los servicios que debes hacer es: </strong></b-card-text
            >
            <b-card-text
              v-for="(value, key) in item.dog_daycare_invoice_services_names"
              v-bind:key="key"
            >
              * {{ value }}
            </b-card-text>
          </b-card-body>
          <b-modal v-model="show" size="sm" @ok="handleOk">
            <p class="my-4">
              Has empezado el cuidado para
              {{ item.dog_daycare_invoice_dog_name }}
            </p>
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
            v-on:click="actualizarEstado(item.dog_daycare_invoice_id)"
            >Comienza el Servicio</b-button
          >
          <b-button
            variant="danger"
            block
            v-b-modal.modal-prevent-closing
            user="'item'"
            v-on:click="sendInfo(item)"
            >Cancela el Servicio</b-button
          >
        </b-card>
        </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import  NotFound  from "@/components/NotFound.vue";
export default {
  name: "CaresPending",
  components:{
    NotFound
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
    ...mapState(["caresPending"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getCaresPending();
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
        this.selectedUser.dog_daycare_invoice_id,
        this.selectedUser.dog_daycare_invoice_client_id,
        this.selectedUser.dog_daycare_invoice_dogdaycare_id
      );
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    handleOk() {
      location.reload();
    },
    getCaresPending() {
      this.$store.dispatch("getCaresPending", {
        cadena1: this.currentUser.user,
        cadena2: "Aceptado",
      });
    },
    actualizarEstado(dog_day_care_invoice_id) {
      this.$store
        .dispatch("updateStatusCare", {
          entero: dog_day_care_invoice_id,
        })
        .then((this.show = true));
    },
    cancelarServicio(name, id_petition, id_user_Cancelled, id_user_whoCancel) {
      this.$store.dispatch("cancelCare", {
        id_petition: id_petition,
        user_Cancelled: id_user_Cancelled,
        user_whoCancel: id_user_whoCancel,
        reasonCancellation: name,
      }).then(location.reload());
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
}

.cards {
  display: flex;
  overflow-x: scroll;
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
