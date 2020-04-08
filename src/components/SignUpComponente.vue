<template>
  <div class="body">
    <Cards
      msg="Registrate como:"
      v-bind:cards="[
        {
          id: 1,
          title: 'Usuario',
          imagen: 'https://images.pexels.com/photos/3671235/pexels-photo-3671235.jpeg' 
        },
        {
          id: 2,
          title: 'Paseador',
          imagen: 'https://images.pexels.com/photos/165227/pexels-photo-165227.jpeg'
        },
        {
          id: 3,
          title: 'Guarderia',
          imagen: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg'
        },
        {
          id: 4,
          title: 'Hospeador',
          imagen: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg'
        }
      ]"
    >
    </Cards>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  name: "signUpComponente",
  components: {
    Cards
  },
  data() {
    return {
      form: {
        UserId: "",
        password: ""
      },
      show: true
    };
  }
};
</script>

<style scoped>
.body {
  margin-bottom: 20px;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.signUp {
  display: flex;
  padding: 30px;
  border: 1px solid #eef6e1;
  border-radius: 5px;
  background-color: #eef6e1;
}
</style>
