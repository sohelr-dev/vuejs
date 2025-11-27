<template>
     <div class="container py-4">
          <div class="card">
               <div class="card-herader text-center">Plain Deatails</div>
               <h1>Plan Details Page  </h1>
               
               <h1>Plan Id: {{ queryId }} </h1>


          </div> 

     </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const router =useRoute();
console.log(router);
const queryId =router.params.id;
console.log(queryId);

</script>

<style  scoped>

</style>