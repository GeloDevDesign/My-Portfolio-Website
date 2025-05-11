<script setup>
const props = defineProps({
  sectionName: {
    type: String,
    default: "No button Name",
  },
});
</script>

<template>
  <h3 class="lg:text-3xl md:text-2xl text-xl font-semibold">
    {{ sectionName }}
  </h3>
</template>
