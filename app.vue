<script setup>
import { onMounted, onUnmounted } from "vue";

// USE NUXT IMAGE
// USE SEO META TAGS FOR EACH SECTION

const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});


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
    
  <div>
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    ></div>

    <AppHeader />
    <MaintenanceBanner />
  <NuxtPage />
  </div>
</template>

<style></style>
