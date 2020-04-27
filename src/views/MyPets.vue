<template>
  <div class="row">
    <div class="col-md-4">
      <myPetsComponente class="m-4"></myPetsComponente>
    </div>
    <div class="col-md-6">
          <Dogs msg="Tus Mascotas" v-bind:Dogs=Tarjetas></Dogs>
    </div>
  </div>
</template>

<script>
import myPetsComponente from "@/components/MyPetsComponente.vue";
import Dogs from "@/components/Dogs.vue";

export default {
  name: "MyPets",
  components: {
    myPetsComponente,
    Dogs,
  },
  created(){
    
  },
  mounted(){
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    };
    this.getDogs();
    console.log(this.Tarjetas);
  },
  data() {
    currentUser="";
    return {
      Tarjetas: [],
    };
  },
  methods:{
    getDogs(){
      this.$store
      .dispatch("getMascotaById",
        cliente_id: this.currentUser.user
      ).then( data =>{
        this.Tarjetas = data;
      })
    }
  }
};
</script>
<style>

</style>
