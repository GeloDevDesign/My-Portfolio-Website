<script setup>
// Define your skills data
const skillCategories = [
  {
    name: "Front End",
    skills: [
      { src: "/1.svg", alt: "Frontend Skill 1" },
      { src: "/2.svg", alt: "Frontend Skill 2" },
      { src: "/3.svg", alt: "Frontend Skill 3" },
      { src: "/4.svg", alt: "Frontend Skill 4" },
      { src: "/5.svg", alt: "Frontend Skill 5" },
      { src: "/6.svg", alt: "Frontend Skill 6" },
      { src: "/7.svg", alt: "Frontend Skill 7" },
      { src: "/14.svg", alt: "Frontend Skill 8" },
    ],
  },
  {
    name: "Back End",
    skills: [
      { src: "/8.svg", alt: "Backend Skill 1" },
      { src: "/9.svg", alt: "Backend Skill 2" },
      { src: "/10.svg", alt: "Backend Skill 3" },
      { src: "/11.svg", alt: "Backend Skill 4" },
      { src: "/12.svg", alt: "Backend Skill 5" },
      { src: "/13.svg", alt: "Backend Skill 6" },
      { src: "/15.svg", alt: "Backend Skill 7" },
      { src: "/16.svg", alt: "Backend Skill 8" },
      { src: "/17.svg", alt: "Backend Skill 9" },
      { src: "/18.svg", alt: "Backend Skill 10" },
      { src: "/19.svg", alt: "Backend Skill 11" },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { src: "/20.svg", alt: "DevOps Skill 1" },
      { src: "/21.svg", alt: "DevOps Skill 2" },
    ],
  },
];
</script>

<template>
  <section
    id="project-section"
    class="w-full lg:py-32 md:py-24 py-20 space-y-20"
  >
    <SectionHeading sectionName="TECHNICAL SKILLS" />

    <!-- Loop through each skill category -->
    <div
      v-for="(category, index) in skillCategories"
      :key="index"
      :class="{ 'mt-32': index > 0 }"
    >
      <h5 class="text-2xl mb-10">{{ category.name }}</h5>

      <!-- Front End skills - Flex layout with grow -->
      <div v-if="index === 0" class="flex flex-wrap  gap-4">
        <div
          v-for="(skill, skillIndex) in category.skills"
          :key="skillIndex"
          class="  magic-hover magic-hover__square "
        >
          <img
            :src="skill.src"
            :alt="skill.alt"
            class="p-2 bg-[#1E1E1E] rounded-lg w-full aspect-square max-w-20 "
          />
        </div>
      </div>

      <!-- Back End skills - Flex layout with grow -->
      <div v-else-if="index === 1" class="flex flex-wrap gap-4 ">
        <div
          v-for="(skill, skillIndex) in category.skills"
          :key="skillIndex"
          class="magic-hover magic-hover__square"
        >
          <img
            :src="skill.src"
            :alt="skill.alt"
            class="p-2 bg-[#1E1E1E] rounded-lg w-full aspect-square max-w-20"
          />
        </div>
      </div>

      <!-- Version Control skills - Flex layout with grow -->
      <div v-else class="flex flex-wrap gap-4 ">
        <div
          v-for="(skill, skillIndex) in category.skills"
          :key="skillIndex"
          class=" magic-hover  magic-hover__square"
        >
          <img
            :src="skill.src"
            :alt="skill.alt"
            class="p-2 bg-[#1E1E1E] rounded-lg w-full aspect-square max-w-20"
          />
        </div>
      </div>
    </div>
  </section>
</template>