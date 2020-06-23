<template>
    <div class="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ffffff"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption="Necesitas un Guarderia o Un Paseador para tu perro? PetSuite">
          <template v-slot:img>
            <img
              height="480"
              src="@/assets/Images/Slide(1).png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <b-carousel-slide
          caption="Quieres saber la reputación y la calidad de quien cuida de tu mascota? PetSuite"
        >
          <template v-slot:img>
            <img
              height="480"
              src="@/assets/Images/Slide(2).png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <b-carousel-slide
          caption="Algo de último momento y necesitas que alguien cuide a tu mascota? PetSuite"
        >
          <template v-slot:img>
            <img
              height="480"
              src="@/assets/Images/Slide(3).png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
.carousel{
  margin-left: calc(50%-50vw);
  margin-right: calc(50%-50vw);
}
</style>