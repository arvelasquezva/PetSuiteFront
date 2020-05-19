<template>
    <div>
        <div class="row">
          <div class="col-md-6">
            <RegisterDaycare></RegisterDaycare>
          </div>
          <div class="col-md-6">
            <InvoiceDaycare></InvoiceDaycare>
          </div>
        </div>
        
    </div>
</template>

<script>
import RegisterDaycare from "@/components/User/RegisterDaycare.vue";
import InvoiceDaycare from "@/components/User/InvoiceDaycare.vue";
export default {
    name: "DogDayCare",
    components: {
        RegisterDaycare,
        InvoiceDaycare
    },
}
</script>

<style scoped>

</style>