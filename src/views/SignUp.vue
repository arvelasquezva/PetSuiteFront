<template>
  <div class="SignUp">
    <signUpComponente></signUpComponente>
    <router-view class="row3"></router-view>
  </div>
</template>

<script>

import signUpComponente from '@/components/SignUpComponente.vue'

export default {
  name: "SignUp",
  components: {
    signUpComponente
  }
};
</script>

<style scoped>

</style>
