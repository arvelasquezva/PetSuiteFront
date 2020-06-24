<template>
  <div class="body">
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-form @submit.prevent="updateMascota" class="pl-4">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="proposedDogName"
              required
              readonly
            >
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Raza:" label-for="input-2">
            <b-form-input id="input-2" v-model="proposedDogRace" required>
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Altura en cm:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="proposedDogHeight"
              required
              min="0"
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Peso en Kg:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="proposedDogWeight"
              required
              min="0"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-4"
            label="Edad en años:"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              v-model="proposedDogAge"
              type="number"
              min="0"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-6"
            label="¿Algo más?:"
            label-for="input-6"
          >
            <b-form-textarea
              id="input-6"
              v-model="proposedDogNotes"
              rows="3"
              max-rows="6"
            >
            </b-form-textarea>
          </b-form-group>
          <b-button block pill type="submit" variant="success">
            Actualizar datos</b-button
          >
        </b-form>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["pet", "currentUser"],
  name: "DogsComponente",
  data() {
    return {
      proposedDogName: "",
      proposedDogRace: "",
      proposedDogHeight: "",
      proposedDogWeight: "",
      proposedDogAge: "",
      proposedDogNotes: "",
    };
  },
  created() {
    if (localStorage.getItem("pet")) {
      try {
        this.pets = JSON.parse(localStorage.getItem("pet"));
        this.proposedDogName = this.pets.dog_name;
        this.proposedDogRace = this.pets.dog_race;
        this.proposedDogHeight = this.pets.dog_height;
        this.proposedDogWeight = this.pets.dog_weight;
        this.proposedDogAge = this.pets.dog_age;
        this.proposedDogNotes = this.pets.dog_notes;
      } catch (e) {
        localStorage.removeItem("pet");
      }
    }
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getMascotas();
  },
  methods: {
    getMascotas() {
      this.$store.dispatch("getMascotaById", {
        cadena: this.currentUser.user,
      });
    },
    updateMascota() {
      this.$store
        .dispatch("updateMascota", 
          {
            dog_name: this.proposedDogName,
            dog_race: this.proposedDogRace,
            dog_height: this.proposedDogHeight,
            dog_weight: this.proposedDogWeight,
            dog_age: this.proposedDogAge,
            dog_notes: this.proposedDogNotes,
          }
        )
        .then(({ data }) => {
          if (data === "") {
            alert("Error al actualizar datos");
          } else {
            alert("Has actualizado tus datos");
            location.reload();
          }
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
}
.card {
  color: #063869;
  background-color: white;
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
