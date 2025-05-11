<script setup>
const props = defineProps({
  sectionName: {
    type: String,
    default: "No button Name",
  },
});
</script>

<template>
  <h3 class="text-3xl font-semibold">
    {{ sectionName }}
  </h3>
</template>
