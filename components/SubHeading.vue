<script setup>
const props = defineProps({
  subHeadingName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h2 class="lg:text-3xl md:text-2xl text-xl">{{ subHeadingName }}</h2>
</template>
