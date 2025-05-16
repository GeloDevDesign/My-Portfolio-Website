<script setup>
import { Type } from 'lucide-vue-next';

const props = defineProps({
  paragraphText: {
    type: String,
    required: true,
  },
});
</script>

<template>
   <p class="text-gray-400 text-medium lg:text-base md:text-base text-sm mt-2">{{ paragraphText }}</p>
</template>