<script setup>
import { onMounted, onUnmounted } from "vue";

// USE NUXT IMAGE
// USE SEO META TAGS FOR EACH SECTION

onMounted(() => {
  const options = {
    cursorOuter: "circle",
    hoverEffect: "circle-move",
    hoverItemMove: false,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
  };
  magicMouse(options);
});

</script>

<template>
    
  <AppHeader />
    <MaintenanceBanner />
  <NuxtPage />
</template>

<style></style>
