<script setup>
import { AlignJustify } from "lucide-vue-next";
</script>

<template>
  <header class="flex justify-center w-full py-4 fixed top-0">
    <div
      class="max-w-7/8 w-full flex bg-[#1E1E1E] justify-between items-center lg:p-4 md:p-3 p-2 rounded-full"
    >
      <div class="w-10 h-10 bg-white rounded-full"></div>
      <nav class="lg:block md:hidden hidden">
        <SecondaryBtn buttonName="Experiences" route="/about" />
        <SecondaryBtn buttonName="Projects" route="/about" />
        <SecondaryBtn buttonName="Contact" route="/about" />
        <PrimaryBtn buttonName="Let's Talk" route="/" />
      </nav>
      <div class="lg:hidden md:block block">
        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="btn btn-ghost btn-xs drawer-button"
              ><AlignJustify
            /></label>
          </div>
          <div class="drawer-side h-full">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
            <ul
              class="menu bg-base-100 border-r-1 border-white text-base-content min-h-full w-3/4 p-4"
            >
              <!-- Sidebar content here -->
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
