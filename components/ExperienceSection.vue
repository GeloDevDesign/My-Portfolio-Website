<script setup>
import { Building2 } from "lucide-vue-next";
// Create an array of experience objects
const experiences = [
  {
    title: "Web Developer Intern",
    description:
      "City College of Calamba",
    year: "2024-2025",
    tech_stack: [{ name: "2024-2025" }],
  },
  {
    title: "Freelance Fullstack Developer",
    description:
      "No company name freelance work",
    year: "2024",
    tech_stack: [{ name: "2024-2025" }],
  },
  {
    title: "Freelance Website Designer",
    description:
      "No company name freelance work",
    year: "2023",
    tech_stack: [{ name: "2024" }],
  },
  {
    title: "Hello World",
    description: "Wrote my first line of code",
    year: "2023",
    tech_stack: [{ name: "2023" }],
  },
  {
    title: "BS Information Technology",
    description: "City College of Calamba",
    year: "2021",
    tech_stack: [{ name: "2021" }, { name: "Self" }],
  },
];
</script>

<template>
  <section class="w-full lg:py-24 md:py-20 md:space-y-14 space-y-8">
    <div class="space-y-2">
      <SectionHeading sectionName="WORK & WINS" />
      <p class="text-gray-400 text-medium lg:max-w-2/3 md:w-full w-full lg:text-base md:text-base text-sm">
        The highlights—where skill, hustle, and results collide.
      </p>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="w-full bg-[#1E1E1E] lg:p-6 md:p-6 p-4 space-y-4 rounded-lg magic-hover magic-hover__square"
      >
        <div
          class="flex flex-col justify-between h-full lg:gap-10 md:gap-8 gap-6"
        >
          <div class="flex flex-col gap-4">
            <h4 class="lg:text-lg md:text-lg text-base font-semibold">
              {{ experience.title }}
            </h4>
            <div class="flex gap-2 items-start h-full p-0">
              <div>
                  <Building2 size="16"/>
              </div>
              <p
                class="text-gray-400 text-medium lg:text-sm md:text-sm text-xs"
              >
                {{ experience.description }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 items-center h-full">
            <!-- Tech stack badges -->
            <div
              v-for="(tech, techIndex) in experience.tech_stack"
              :key="techIndex"
              class="badge badge-neutral lg:badge-sm md:badge-sm badge-xs badge-outline border-gray-300 text-gray-300 magic-hover magic-hover__square"
            >
              {{ tech.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
