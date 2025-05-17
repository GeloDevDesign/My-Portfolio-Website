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
  isScroll: {
    type: Boolean,
    default: false
  }
});

const handleClick = (e) => {
  if (props.isScroll) {
    e.preventDefault();
    const targetElement = document.querySelector(props.route);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <a :href="route"
    class="magic-hover magic-hover__square text-white btn bg-[#1E1E1E] border-0 rounded-full font-medium"
    @click="handleClick"
    >{{ buttonName }}</a
  >
</template>