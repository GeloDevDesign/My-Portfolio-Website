<script setup>
const props = defineProps({
  buttonName: {
    type: String,
    default: "No button Name",
  },
  route: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <NuxtLink
    class="magic-hover magic-hover__square text-white btn bg-[#1E1E1E] border-0 rounded-full font-medium"
    :to="route"
    >{{ buttonName }}</NuxtLink
  >
</template>
