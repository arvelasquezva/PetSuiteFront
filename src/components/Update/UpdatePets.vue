<template>
  <div class="body">
    <h1 class="mt-3">{{ msg }}</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in pets"
          :key="item.id"
          :title="item.dog_name"
          tag="article"
          style="max-width: 17rem;"
          class="card"
        >
          <b-form @submit.prevent="updateMascota" class="pl-4">
            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="pet.proposedPetName"             
              required  
              readonly         
            >          
            </b-form-input>
            </b-form-group>
            <b-form-group
            id="input-group-2"
            label="Raza:"
            label-for="input-2"
            >
            <b-form-input
              id="input-2"
              v-model="item.proposedPetRace"
              required
            >
            </b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-3"
            label="Altura en cm:"
            label-for="input-3"
            >
            <b-form-input
              id="input-3"
              v-model="item.proposedPetHeight"
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
              v-model="item.proposedPetWeight"
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
              v-model="item.proposedPetAge"
              type="number"
              min="0"
              required
            ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-6"
            label="Algo mas?:"
            label-for="input-6"
            >
            <b-form-textarea
              id="input-6"
              v-model="item.proposedPetNotes"
             rows="3"
              max-rows="6"
            >
            </b-form-textarea>
            </b-form-group>
           <b-button block pill type="submit" variant="success">
            Actualizar datos</b-button>
           </b-form>    
        </b-card>        
      </div>
    </b-row>
    <div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "DogsComponente",
  data() {
    return {
    proposedPetName:"",
    proposedPetRace:"",
    proposedPetHeight:"",
    proposedPetWeight:"",
    proposedPetAge:"", 
    proposedPetNotes:"", 
    }
  },
  props: {
    msg: String,  
  },
  created() {
    if (localStorage.getItem("pet")) {
      try {
        this.pets = JSON.parse(localStorage.getItem("pet"));
        this.proposedPetName = this.pets.dog_name
        this.proposedPetRace = this.pets.dog_race
        this.proposedPetHeight = this.pets.dog_height
        this.proposedPetWeight = this.pets.dog_weight
        this.proposedPetAge = this.pets.dog_age
        this.proposedPetNotes = this.pets.dog_notes
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
    getMascotas(){
      this.$store.dispatch("getMascotaById", {
          cadena: this.currentUser.user
          });
    },
    updateMascota() {      
      this.$store.dispatch("updateMascota", [{
      dog_name: this.proposedPetName,
      dog_race: this.proposedPetRace,
      dog_height: this.proposedPetHeight,
      dog_weight: this.proposedPetWeight,
      dog_age: this.proposedPetAge,
      dog_notes: this.proposedPetNotes,
      }, "pets"])
      .then(({ data }) => {
          if (data === "") {
            alert("Error al actualizar datos");
          } else {
            alert ("Has actualizado tus datos")
            location.reload();
          }
        });
    }
  },
};
</script>