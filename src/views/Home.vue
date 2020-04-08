<template>
  <div class="home">
    <Carousel></Carousel>
    <div class="body">
    <Cards msg="Servicios Que Ofrecemos" v-bind:cards="[{
        id: 1,
        title: 'Paseadores',
          imagen: 'https://images.pexels.com/photos/165227/pexels-photo-165227.jpeg'
      },{
          id: 2,
          title: 'Guarderias',
          imagen: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg'
        },
        {
          id: 3,
          title: 'Hospeadores',
          imagen: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
        }]"
    >></Cards>
    </div>
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
    Cards,
  }
}
</script>
<style>
.body{
   margin-bottom: 20px;
}
</style>
