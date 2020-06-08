<template>
  <div>
    <h1>{{ show }}</h1>
    <b-modal v-model="show" size="sm" @ok="handleOk">
      <p class="my-4">
        Diego lo logro
      </p>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Notificacions",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleOk() {
      
    },
    solicitarPeticion() {
      setInterval(() => {
        axios.get("/notify").then(response => {
    this.show = response.data;
})
      }, 10000);
    },
  },
  created() {
    this.solicitarPeticion();
  },
  beforeDestroy() {
    
  },
};
</script>
