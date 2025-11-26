<script setup>
import AppFooter from './views/layouts/Footer.vue';
import Navbar from './views/layouts/Navbar.vue';
import Compare from './views/pages/Compare.vue';
import Princing from './views/pages/Princing.vue';

</script>

<template>
  
  <div class="container py-3">
    <Navbar/>
   
    <main>
      <router-view/>
      <!-- <Princing/>
      <Compare/> -->
      
      
    </main>
    <AppFooter/>
  </div>
</template>

<style>
/* @import './assets/cusom.css'; */
</style>
