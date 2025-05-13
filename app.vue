<script setup>
import { onMounted } from "vue";

// FIX THIS USE NOT IMPORT SRC
// USE NUXT IMAGE
// USE SEO META TAGS FOR EACH SECTION

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://res.cloudinary.com/veseylab/raw/upload/v1684982764/magicmouse-2.0.0.cdn.min.js";
  script.type = "text/javascript";
  script.onload = () => {
    const options = {
      cursorOuter: "circle",
      hoverEffect: "circle-move",
      hoverItemMove: false,
      defaultCursor: false,
      outerWidth: 30,
      outerHeight: 30,
    };
    magicMouse(options);
  };
  document.body.appendChild(script);
});
</script>

<template>
  <ClientOnly>
    <AppHeader />

    <NuxtPage />
    <template #fallback>
      <div class="w-full h-screen flex justify-center items-center flex-col">
        <img src="/gelowebdev.svg" class="w-32" alt="gelowebdev logo" />
        <div class="flex flex-col items-center mt-8">
          <span>Loading please wait ...</span>
          <span class="loading loading-dots w-13"></span>
        </div>
      </div>
    </template>
  </ClientOnly>
</template>

<style></style>
