<script setup>
import Header from './components/Header.vue';
import Team from './components/Team.vue';


</script>

<template>
  <div class="conatiner py-4">
    <Header/>
    <main>
      <router-view>
        
      </router-view>
    </main>

  </div>
 
</template>

<style scoped>

</style>
