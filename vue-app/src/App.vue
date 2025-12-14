<script setup>
import { useRoute } from 'vue-router';
import AppFooter from './views/layouts/Footer.vue';
import Navbar from './views/layouts/Navbar.vue';
import Compare from './views/pages/Compare.vue';
import Princing from './views/pages/Princing.vue';

const route =useRoute();
</script>

<template>
  
  <div class="container py-3" v-if="!route.meta.nolayout">
    <Navbar/>
   
    <main>
      <router-view/>
      <!-- <Princing/>
      <Compare/> -->
      
      
    </main>
    <AppFooter v-if="!route.meta.nolayout"/>
  </div>
</template>

<style>
/* @import './assets/cusom.css'; */
</style>
