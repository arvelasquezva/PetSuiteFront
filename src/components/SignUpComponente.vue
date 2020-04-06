<template>
    <div class="body">
    <div class="signUp">
      <Cards></Cards>
    </div>
  </div>
</template>

<script>

import Cards from '@/components/Cards.vue'

export default {

    name: "signUpComponente",
    components:{
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
  },
}
</script>

<style scoped>
.body {
  margin: 0;
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

