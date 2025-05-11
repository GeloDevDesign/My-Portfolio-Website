<script setup>
const props = defineProps({
  buttonName: {
    type: String,
    default: "No button Name",
  },
  route: {
    type:String,
    default: "/"
  }
});
</script>

<template>
  <NuxtLink class="magic-hover magic-hover__square bg-white text-black px-8 py-4 rounded-full font-semibold" :to="route">{{ buttonName }}</NuxtLink>
</template>
