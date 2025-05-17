<script setup>
import { ref } from "vue";
import { MoveUpRight } from "lucide-vue-next";

const imageAttributes = ref([
  {
    projectTitle: "Point of Sale with Inventory Management and Data Analytics",
    backgroundImage: "/Gelowebdeveloperpos.webp",
  },
  {
    projectTitle: "Smart Attendance Management System",
    backgroundImage: "/Gelowebdevattedance.webp",
  },

  {
    projectTitle: "Point of Sale with Inventory Management and Data Analytics",
    backgroundImage: "/Gelowebdevtaskmanagemnet.webp",
  },
]);
</script>

<template>
  <section id="project-section" class="w-full lg:py-14 md:py-12 py-10">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full">
      <div
        v-for="(project, index) in imageAttributes"
        :key="index"
        :style="{ backgroundImage: `url(${project.backgroundImage})` }"
        class="animate-fade-up animate-once animate-delay-100 rounded-box w-full h-96 p-4 rounded-xl bg-cover bg-center magic-hover magic-hover__square"
      >
        <div class="w-full flex items-start justify-between">
          <h4 class="w-2/3">
            {{ project.projectTitle }}
          </h4>
          <button
            class="magic-hover btn magic-hover__square rounded-full btn-ghost border-1 border-white h-12 w-12"
            aria-label="View Project"
          >
            <MoveUpRight size="32" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
