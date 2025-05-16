<script setup></script>

<template>
 
    <div class="lg:px-26 md:px-12 px-6">
      <HeroSection />
      <LazyProjectSection hydrate-on-visible />
    </div>
    <LazySkillsSection hydrate-on-visible />

  <!--  <LazyHeroSection hydrate-on-visible @hydrated="onHydrate"/> -->
</template>

<style>
body {
  scroll-behavior: smooth;
}
</style>
