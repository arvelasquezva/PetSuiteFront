<template>
  <div class="body">
    <div>
    <h1 class="mt-3 text-center ">Busca una guarderia</h1>
      <div class=" mx-1 mb-5">
        <b-form @submit.prevent="buscarGuarderia">    
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
                id="input-1"  
                v-model="cadena"
                required          
              >          
            </b-form-input>
          </b-form-group>
          <b-button block pill type="submit" variant="success">
            Buscar
          </b-button>
        </b-form>
      </div>
    <div id="app">
  <h2 class="text-center mx-4 mb-4">Resultados</h2>
    <b-row class="mt-1">
      <b-card
        v-for="item in info"
        :key="item"
        class="card mx-5 mb-5">
        <b-form> 
          <b-form-group label="User ID de guarderia:">
            <b-form-input  
                v-model="item.user" 
                readonly>          
            </b-form-input>
          </b-form-group>
          <b-form-group label="E-mail de guarderia:">
            <b-form-input  
                v-model="item.dog_daycare_e_mail" 
                readonly>          
            </b-form-input>
          </b-form-group>
          <b-form-group label="Telefono de guarderia:">
            <b-form-input
                v-model="item.dog_daycare_phone" 
                readonly>          
            </b-form-input>
          </b-form-group>
          <b-form-group label="Direccion de guarderia:">
            <b-form-input
                v-model="item.dog_daycare_address" 
                readonly>          
            </b-form-input>
          </b-form-group>
          <b-form-group label="Puntaje de guarderia:">
            <b-form-input
                v-model="item.dog_daycare_score" 
                readonly>          
            </b-form-input>
          </b-form-group>
        </b-form>        
      </b-card>
    </b-row>
</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "SearchDaycare",
  data() {
    return {
    currentUser: {},
    cadena: "",
    info: []
    }
  },
  computed: {
    ...mapState(["daycares"]),
  },
  methods: { 
      getDaycare(){
      this.$store.dispatch("getDogDayCares", {
          user: this.currentUser.user
          });
    },
      buscarGuarderia() {      
      this.$store.dispatch("buscarGuarderia", [{
        cadena: this.cadena,
      }, "clients"])
      .then(response => (this.info = response.data));
    }
  },
    created() {
        if (localStorage.getItem("user")) {
        try {
            this.currentUser = JSON.parse(localStorage.getItem("user"));
        } catch (e) {
            localStorage.removeItem("user");
            }
        }
    }

};
</script>
<style lang="scss" scoped>
h1 {
  color: #40db9a;
}
h2 {
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
</style>
