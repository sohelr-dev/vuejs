<script setup>
import { useRoute } from "vue-router";
import Navbar from "./views/layouts/Navbar.vue";
import AppFooter from "./views/layouts/Footer.vue";

const route = useRoute();
</script>

<template>
  <div v-if="!route.meta.nolayout">
    <Navbar />
    <main class="container py-3">
      <router-view />
    </main>
    <AppFooter />
  </div>

  <!-- for pages like login -->
  <router-view v-else />
</template>
