<template>
  <div class="body">
    <div>
    <h1 class="mt-3 text-center ">Busca una guarderia</h1>
      <div class=" mx-1 mb-5">
        <b-form @submit.prevent="buscarGuarderia">    
          <b-form-group id="input-group-1" label-for="input-1">
            <b-input-group>
              <b-form-input
                  id="input-1"  
                  v-model="cadena"
                  required 
                  placeholder="Escribe lo que quieres buscar"         
                >          
              </b-form-input>
                <template v-slot:append>
                  <b-dropdown variant="success">
                    <template v-slot:button-content>
                      Categoria
                    </template>
                    <b-dropdown-item>Nombre</b-dropdown-item>
                    <b-dropdown-item>Servicios</b-dropdown-item>   
                    <b-dropdown-item>Calificacion</b-dropdown-item>
                  </b-dropdown>                
                </template>
            </b-input-group>
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
        tag="article"
          style="max-width: 17rem;"
          class="card">
        <b-card-body>
          <b-card-title><strong>{{item.dog_daycare_name}}</strong></b-card-title>
          <b-card-sub-title>
            <strong>Telefono: </strong>{{item.dog_daycare_phone}}
            <strong>Dirección:</strong>  {{item.dog_daycare_address}}
          </b-card-sub-title>
          <b-card-text><strong>Puntaje: </strong>{{ item.dog_daycare_score }} </b-card-text>
          <b-card-text><strong>Precio Base: </strong>$ {{ item.dog_daycare_price_base }} </b-card-text>
          <b-card-text><strong>Precio Recargo: </strong>$ {{ item.dog_daycare_tax }} </b-card-text>
        </b-card-body>
        <router-link :to="{name: 'dogDayCares', params:{id: item.user}}">
            <b-button variant="primary">Go to {{ item.dog_daycare_name }}</b-button>
          </router-link>
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
