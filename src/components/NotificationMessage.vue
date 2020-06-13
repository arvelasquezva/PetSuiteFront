<template>
  <div>
  <b-alert 
  show
  fade="true" 
  dismissible 
  :class="typeClass"
  >
    {{notification.message}}
  </b-alert>
</div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  props: ["notification"],
  data(){
    return {
      timeout: null
    }
  },
  computed: { 
    typeClass() {
      return `alert-${this.notification.type}`;
    }
  },
  created(){
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions(['removeNotification'])
}
</script>

<style>
</style>