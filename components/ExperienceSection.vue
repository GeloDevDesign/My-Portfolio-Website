<script setup>
// Create an array of experience objects
const experiences = [
  {
    title: "Web Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum rem tempore expedita, quis dolorum",
    year: "2025",
    tech_stack: [
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "Node.js" }
    ]
  },
  {
    title: "Frontend Engineer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum rem tempore expedita, quis dolorum",
    year: "2024",
    tech_stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "SCSS" }
    ]
  },
  {
    title: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum rem tempore expedita, quis dolorum",
    year: "2023",
    tech_stack: [
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Sketch" }
    ]
  },
   {
    title: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laborum rem tempore expedita, quis dolorum",
    year: "2023",
    tech_stack: [
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Sketch" }
    ]
  }
];
</script>

<template>
  <section class="w-full lg:py-32 md:py-24 lg:space-y-20 md:space-y-14 space-y-8">
    <SectionHeading sectionName="EXPERIENCES" />
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      <div 
        v-for="(experience, index) in experiences" 
        :key="index" 
        class="w-full bg-[#1E1E1E] p-6 space-y-4 rounded-lg magic-hover magic-hover__square"
      >
        <div class="flex justify-between items-center">
          <h5 class="text-lg">{{ experience.title }}</h5>
          <span class="text-sm">{{ experience.year }}</span>
        </div>
        <p class="text-gray-400 text-medium lg:text-sm md:text-sm text-xs">
          {{ experience.description }}
        </p>
        <div class="space-x-2 flex flex-wrap gap-2">
         
          <!-- Tech stack badges -->
          <div 
            v-for="(tech, techIndex) in experience.tech_stack"
            :key="techIndex" 
            class="badge badge-neutral badge-sm badge-outline border-gray-300 text-gray-300 magic-hover magic-hover__square"
          >
            {{ tech.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>