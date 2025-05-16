<script setup>
import { onMounted, ref } from 'vue';

const skills = [
  { src: "/1.svg", alt: "Frontend Skill 1", category: "Front End" },
  { src: "/2.svg", alt: "Frontend Skill 2", category: "Front End" },
  { src: "/3.svg", alt: "Frontend Skill 3", category: "Front End" },
  { src: "/4.svg", alt: "Frontend Skill 4", category: "Front End" },
  { src: "/5.svg", alt: "Frontend Skill 5", category: "Front End" },
  { src: "/6.svg", alt: "Frontend Skill 6", category: "Front End" },
  { src: "/7.svg", alt: "Frontend Skill 7", category: "Front End" },
  { src: "/14.svg", alt: "Frontend Skill 8", category: "Front End" },
  { src: "/8.svg", alt: "Backend Skill 1", category: "Back End" },
  { src: "/9.svg", alt: "Backend Skill 2", category: "Back End" },
  { src: "/10.svg", alt: "Backend Skill 3", category: "Back End" },
  { src: "/11.svg", alt: "Backend Skill 4", category: "Back End" },
  { src: "/12.svg", alt: "Backend Skill 5", category: "Back End" },
  { src: "/13.svg", alt: "Backend Skill 6", category: "Back End" },
  { src: "/15.svg", alt: "Backend Skill 7", category: "Back End" },
  { src: "/16.svg", alt: "Backend Skill 8", category: "Back End" },
  { src: "/17.svg", alt: "Backend Skill 9", category: "Back End" },
  { src: "/18.svg", alt: "Backend Skill 10", category: "Back End" },
  { src: "/19.svg", alt: "Backend Skill 11", category: "Back End" },
  { src: "/20.svg", alt: "DevOps Skill 1", category: "Version Control" },
  { src: "/21.svg", alt: "DevOps Skill 2", category: "Version Control" },
];

const scrollContainer = ref(null);
const skillsDuplicated = ref([...skills, ...skills, ...skills]); // Triple for seamless loop

onMounted(() => {
  // Auto-scroll animation
  if (scrollContainer.value) {
    const container = scrollContainer.value;
    const containerWidth = container.scrollWidth / 3; // Since we tripled the items
    
    let scrollPosition = 0;
    const scrollSpeed = 1.5; // Adjust speed as needed
    
    function animateScroll() {
      scrollPosition += scrollSpeed;
      
      // Reset to start when reaching the duplicated section
      if (scrollPosition >= containerWidth * 2) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(animateScroll);
    }
    
    // Pause on hover
    container.addEventListener('mouseenter', () => {
      scrollSpeed = 0;
    });
    
    container.addEventListener('mouseleave', () => {
      scrollSpeed = 1;
    });
    
    animateScroll();
  }
});
</script>

<template>
  <section id="skills-section" class=" lg:py-32 md:py-24 py-20 ">
  <div class="w-full flex items-center justify-center">
      <SectionHeading sectionName="TECHNICAL SKILLS"  />
  </div>
    
    <div class="relative group mt-12">
      <!-- Left fade effect -->
      <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
      
      <!-- Infinite scroll container -->
      <div 
        ref="scrollContainer"
        class="flex overflow-x-hidden no-scrollbar py-4 space-x-4"
      >
        <div 
          v-for="(skill, index) in skillsDuplicated" 
          :key="index"
          class="flex-shrink-0 magic-hover magic-hover__square"
        
        >
          <img
            :src="skill.src"
            :alt="skill.alt"
            class="p-2 bg-[#1E1E1E] rounded-lg w-16 h-16 hover:scale-105 transition-transform duration-200"
            :title="skill.category"
          />
        </div>
      </div>
      
      <!-- Right fade effect -->
      <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
    </div>
  </section>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Tooltip styles */
[data-category] {
  position: relative;
}

[data-category]:hover::after {
  content: attr(data-category);
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  text-transform: capitalize;
}
</style>