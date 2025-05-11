<script setup>
import { onMounted } from "vue";

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
  <AppHeader />

  <NuxtPage />
</template>

<style>


</style>
