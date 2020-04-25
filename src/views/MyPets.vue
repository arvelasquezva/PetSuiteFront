<template>
  <div class="row">
    <div class="col-md-4">
      <myPetsComponente class="m-4"></myPetsComponente>
    </div>
    <div class="col-md-6">
          <Cards msg="Tus Mascotas" v-bind:cards=Tarjetas
    >></Cards>
    </div>
  </div>
</template>

<script>
import myPetsComponente from "@/components/MyPetsComponente.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "MyPets",
  components: {
    myPetsComponente,
    Cards,
  },
  data() {
    return {
      Tarjetas: [
        {
          id: 1,
          title: "Toby",
          imagen:
            "https://images.pexels.com/photos/165227/pexels-photo-165227.jpeg",
        },
      ],
    };
  },
};
</script>
<style>

</style>
