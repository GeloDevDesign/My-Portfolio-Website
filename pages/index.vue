<script setup></script>

<template>
  <div class="lg:px-26 md:px-12 px-6">
    <HeroSection />
     
    <LazyProjectSection hydrate-on-visible />
  </div>

  <LazySkillsSection hydrate-on-visible />

  <div class="lg:px-26 md:px-12 px-6">
    
    <LazyExperienceSection hydrate-on-visible />
  </div>

  <!--  <LazyHeroSection hydrate-on-visible @hydrated="onHydrate"/> -->
</template>

<style>
body {
  scroll-behavior: smooth;
}
</style>
