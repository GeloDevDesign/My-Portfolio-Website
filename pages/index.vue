<script setup></script>

<template>
  <div class="px-28">
    <HeroSection />
    <LazyProjectSection hydrate-on-visible />
  </div>
  <!--  <LazyHeroSection hydrate-on-visible @hydrated="onHydrate"/> -->
</template>


<style>

body{
  scroll-behavior: smooth;
}
</style>
