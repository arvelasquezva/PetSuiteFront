<template>
  <div>
    <h3 class="mt-3">Buscador general</h3>
    <b-form @submit.prevent="buscarGuarderiaGeneral">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-input-group class="mt-3">
          <b-form-input
            id="input-1"
            v-model="cadena"
            required
            placeholder="Busca una guarderia"
          >
          </b-form-input>
          <b-input-group-append>
            <b-button type="submit" variant="success">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-form>
    <h2 class="text-center mx-4 mb-4 mt-3">Resultados</h2>
    <div class="cards col-md-12">
      <b-row class="mt-1">
        <b-card v-for="item in info" :key="item" class="card">
          <b-card-body>
            <b-card-title> <strong>{{ item.dog_daycare_name }} </strong> </b-card-title>
            <b-card-sub-title>
              <strong>Telefono: </strong>{{ item.dog_daycare_phone }}
              <strong>Dirección:</strong> {{ item.dog_daycare_address }}
            </b-card-sub-title>
            <b-card-text
              ><strong>Puntaje: </strong>{{ item.dog_daycare_score }}
            </b-card-text>
            <b-card-text
              ><strong>Precio Base: </strong>$ {{ item.dog_daycare_price_base }}
            </b-card-text>
            <b-card-text
              ><strong>Precio Recargo: </strong>$ {{ item.dog_daycare_tax }}
            </b-card-text>
          </b-card-body>
          <router-link :to="{ name: 'dogDayCares', params: { id: item.user } }">
            <b-button variant="primary"> Ir a {{ item.dog_daycare_name }}</b-button
            >
          </router-link>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchGeneral",
  data() {
    return {
      component: "SearchGeneral",
      cadena: "",
      info: [],
    };
  },
  methods: {
    buscarGuarderiaGeneral() {
      this.$store
        .dispatch("buscarGuarderiaGeneral", [
          {
            cadena: this.cadena,
          },
          "clients",
        ])
        .then((response) => (this.info = response.data));
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  color: #40db9a;
}
h2 {
  color: #40db9a;
}
h3 {
  color: #40db9a;
  text-align: center;
}
h5 {
  color: #40db9a;
  text-align: center;
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
  min-width: 15rem;
  max-width: 21rem;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 3px 3px 12px 2px rgba(black, 0.6);
  transition: 0.2s;
  place-items: center;
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
