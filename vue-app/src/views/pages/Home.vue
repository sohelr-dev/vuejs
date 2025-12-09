<script setup>
import { useCounterStore } from '@/store/counter';


const counter = useCounterStore();
</script>

<template>
  
  <div class="container py-3">
     <div class="text-center bg-primary bg-opacity-25 ">
          Welcome to Dashboard 
          <h2> {{ counter.count }}</h2>
          <h2> This a  {{ counter.countResult }} Number</h2>
          <div class="justyfy-center">
            <button @click="counter.increment" class="btn btn-outline-primary fs-4"> + </button>
            <button @click="counter.decrement" class="btn btn-outline-primary fs-4"> - </button>
          </div>
     </div>
  </div>
</template>

<style>


</style>
