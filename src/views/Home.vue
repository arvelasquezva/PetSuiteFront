<template>
  <div class="home">
    <Carousel></Carousel>
    <Cards></Cards>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Cards
  }
}
</script>
<style>

</style>
