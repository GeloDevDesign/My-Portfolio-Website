<script setup>
const props = defineProps({
  subHeadingName: {
    type: String,
    required: true,
  },
});
</script> 

<template>
  <span class="lg:text-3xl md:text-2xl text-xl">{{ subHeadingName }}</span>
</template>
