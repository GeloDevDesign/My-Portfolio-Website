<script setup>
import { Mail, Github, Linkedin } from "lucide-vue-next";
</script>

<template>
  <footer
    id="contact-section"
    class="bg-black border-t text-white w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 lg:py-16"
  >
    <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
      <!-- Copyright text -->
      <p class="text-sm md:text-base lg:text-lg font-medium text-center sm:text-left">
        © 2025 Gelo Web Dev. All rights reserved.
      </p>
      
      <!-- Social icons -->
      <div class="flex gap-2 items-center justify-center sm:justify-end mt-4 sm:mt-0">
           <div class="dropdown dropdown-top dropdown-left">
        <div tabindex="0" role="button" class="btn btn-ghost"><Mail size="24" class="sm:size-24 md:size-8 lg:size-10" /></div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li class="cursor-none"><span>angeloserenuela524@gmail.com</span></li>

        </ul>
      </div>
    
        <NuxtLink class="btn btn-ghost p-2" to="https://github.com/GeloDevDesign">
          <Github size="24" class="sm:size-24 md:size-8 lg:size-10" />
        </NuxtLink>
        
        <NuxtLink 
          class="btn btn-ghost p-2"
          to="https://www.linkedin.com/in/angelo-serenuela-84b01534a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <Linkedin size="24" class="sm:size-24 md:size-8 lg:size-10" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>