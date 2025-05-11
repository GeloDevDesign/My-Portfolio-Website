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
  <section id="project-section" class="w-full py-32">
    <div class="space-y-10">
      <SectionHeading sectionName="RECENT PROJECT" />
      <div class="flex gap-8">
        <div
          v-for="(project, index) in imageAttributes"
          :key="index"
          :style="{ backgroundImage: `url(${project.backgroundImage})` }"
          class="rounded-box w-1/3 h-96 p-4 rounded-xl bg-cover bg-center"
        >
          <div class="w-full flex items-start justify-between">
            <h4 class="w-2/3">
              {{ project.projectTitle }}
            </h4>
            <button
              class="magic-hover btn magic-hover__square rounded-full btn-ghost border-1 border-white h-12 w-12"
            >
              <MoveUpRight size="32" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
