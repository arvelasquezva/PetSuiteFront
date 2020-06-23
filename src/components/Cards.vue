<template>
  <div class="body">
    <h1 class="mt-3">{{ msg }}</h1>
    <b-row class="mt-1">
      <div class="cards mx-5 mb-5">
        <b-card
          v-for="item in cards"
          :key="item.id"
          :title="item.title"
          :img-src="item.imagen"
          class="card"
        >
        <b-card-body>
          <b-card-text>
            {{item.descripcion}}
          </b-card-text>
        </b-card-body>
          <router-link :to="item.routes">
            <b-button variant="primary" >Únete a PetSuite como {{ item.title }}</b-button>
          </router-link>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    msg: String,
    cards: [],
  },
  data() {
    return {};
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
  max-width: 15rem;
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
