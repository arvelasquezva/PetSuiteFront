<template>
  <div class="body_card">
    <h1 class="mt-3">Peticiones Activas</h1>
    <div class="cards col-md-12 mx-5">
      <b-card v-for="item in petitions" :key="item.id" class="card">
        <b-card-body>
          <b-card-title
            ><strong>{{ item.user }}</strong> quiere que pasees a su perro
            <strong>{{ item.dog_name }}</strong></b-card-title
          >
          <b-card-sub-title class="mb-2"
            >Raza: {{ item.dog_race }}</b-card-sub-title
          >
          <b-card-text
            ><strong>Debes recogerlo en: </strong
            >{{ item.walk_petition_address }}
          </b-card-text>
          <b-card-text
            ><strong>El paseo empezará: </strong
            >{{ item.walk_petition_date_time }}
          </b-card-text>
          <b-card-text
            ><strong>El paseo durará: </strong
            >{{ item.walk_petition_duration }} minutos</b-card-text
          >
          <b-card-text>
            <strong>Detalles de {{ item.dog_name }}: </strong>
            <ul>
              <li>Peso: {{ item.dog_weight }} Kg</li>
              <li>Altura: {{ item.dog_height }} cm</li>
              <li>Más: {{ item.dog_notes }}</li>
            </ul>
          </b-card-text>
          <b-card-text
            ><strong>El usuario {{ item.user }} te recomienda: </strong
            >{{ item.walk_petition_notes }}
          </b-card-text>
        </b-card-body>
        <b-button
          variant="primary"
          block
          v-b-modal.modal-prevent-closing
          user="'item'"
          v-on:click="sendInfo(item)"
        >
          Propón un precio
        </b-button>
      </b-card>
    </div>
    <b-modal ok-only v-model="show" size="sm" @ok="handleOk">
      <p class="my-4">Has propuesto un precio correctamente</p>
    </b-modal>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Precio"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk1"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Precio:"
          label-for="razon-input"
          invalid-feedback="Price is required"
        >
          <b-form-input
            id="razon-input"
            v-model="name"
            type="number"
            min="1000"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "WalkPetitionActive",
  data() {
    return {
      show: false,
      currentUser: "",
      name: "",
      nameState: null,
      selectedPet: "",
    };
  },
  computed: {
    ...mapState(["petitions"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getPetitionsById();
  },
  methods: {
    async getPetitionsById() {
      await axios
        .get("api/walkpetitions/all")
        .then((response) => {
          this.$store.dispatch("getPetitionsById", response.data);
        })
        .catch((error) => {
          if (error.response) {
            this.myError = error.response.data.message;
            console.log("This is myError", this.myError);
            if (this.myError.startsWith("JWT expired at")) {
              alert("Debes Cambiar tu contraseña");
              this.$router.push({
                name: "Profile",
                params: { id: this.currentUser.role },
              });
            }
          } else {
            console.log("Error", error.message);
          }
        });
    },
    sendInfo(item) {
      this.selectedPet = item;
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    handleOk1(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleSubmit() {
      // Push the name to submitted names
      this.proposePetition(
        this.name,
        this.selectedPet.walk_petition_id,
        this.selectedPet.dog_id
      );
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    handleOk() {
      location.reload();
    },
    proposePetition(price, id_petition, dog_id_petition) {
      this.$store
        .dispatch("proposePetition", {
          walk_petition_walker_user: this.currentUser.user,
          walk_petition_id: id_petition,
          precio_proposal: price,
          dog_id: dog_id_petition,
        })
        .then((this.show = true));
    },
  },
};
</script>

<style lang="scss" scoped>
.body_card {
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
  border-radius: 1rem;
  min-width: 20rem;
  max-width: 25rem;
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
