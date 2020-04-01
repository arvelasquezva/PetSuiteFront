<template>
  <div class="body">
    <h1 class="mt-3">Servicios</h1>
    <b-row class="mt-1">
      <b-col cols="12" md="4">
        <div class="cards">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
          <b-card-text
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</b-card-text
          >
          <b-button href="#" variant="dark">Go somewhere</b-button>
        </b-card>
        </div>
      </b-col>

      <b-col cols="12" md="4">
        <div class="cards">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
          <b-card-text
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</b-card-text
          >
          <b-button href="#" variant="dark">Go somewhere</b-button>
        </b-card>
        </div>
      </b-col>

      <b-col cols="12" md="4">
        <div class="cards">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="card"
        >
          <b-card-text
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</b-card-text
          >
          <b-button href="#" variant="dark">Go somewhere</b-button>
        </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      cards: ['1','2','3']
    };
  }
};
</script>

<style lang="scss" scoped>
h1{
  color: #40db9a;
}
.body {
  margin: 0;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cards {
  display: flex;
}
.card {
  background: white;
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
