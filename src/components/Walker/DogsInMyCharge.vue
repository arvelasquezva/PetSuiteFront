<template>
  <div class="body">
    <h1 class="mt-3">Perros a mi cargo</h1>
    
      <div v-if="Object.keys(petsActive).length === 0">
        <NotFound class="mb-5"></NotFound>
      </div>
      <div v-else class="cards mx-5 mb-5">
        <b-card v-for="item in petsActive" :key="item.id" class="card">
          <b-card-body>
            <b-card-title>
              Tu perro se llama:
              <strong>{{ item.dog_name }}</strong></b-card-title
            >
            <b-card-sub-title class="mb-2"
              >Raza: {{ item.dog_race }}</b-card-sub-title
            >
            <b-card-text
              ><strong>El perro le pertenece: </strong>{{ item.user }}
            </b-card-text>
            <b-card-text
              ><strong>Peso: </strong>{{ item.dog_weight }} kg
            </b-card-text>
            <b-card-text
              ><strong>Peso: </strong>{{ item.dog_height }} cm
            </b-card-text>
            <b-card-text
              ><strong>Edad: </strong>{{ item.dog_age }} años
            </b-card-text>
            <b-card-text
              ><strong>Notas: </strong>{{ item.dog_notes }}
            </b-card-text>
          </b-card-body>
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="EMERGENCIA"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk1"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label="Que Pasó?"
                label-for="razon-input"
                invalid-feedback="La descripcion es Requerida"
              >
                <b-form-input
                  id="razon-input"
                  v-model="notification_description"
                  :state="nameState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
          </b-modal>
          <b-button
            variant="danger"
            block
            v-b-modal.modal-prevent-closing
            user="'item'"
            v-on:click="sendInfo(item)"
            >Notificar Emergencia</b-button
          >
        </b-card>
      </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import  NotFound  from "@/components/NotFound.vue";
import axios from "axios";
export default {
  name: "DogsInMyCharge",
  components:{
    NotFound
  },
  data() {
    return {
      currentUser: "",
      notification_description: "",
      nameState: null,
      selectedUser: "",
    };
  },
  computed: {
    ...mapState(["petsActive"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.dogsInMyCharge();
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
      this.notification_description = "";
      this.nameState = null;
    },
    handleSubmit() {
      this.notificarCliente(
        this.notification_description,
        this.selectedUser.dog_name,
        this.selectedUser.user
      );
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    dogsInMyCharge() {
      this.$store.dispatch("getDogsInMyCharge", {
        cadena: this.currentUser.user,
      });
    },
    notificarCliente(description, dogName, dogOwner) {
      axios.post("/api/notifications/sendNotification", {
        notification_subject: dogName,
        notification_description: description,
        notification_status: "No leido",
        user: dogOwner,
      });
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
