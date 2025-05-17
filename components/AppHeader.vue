<script setup>

import { Mails,Github,Linkedin,AlignJustify } from "lucide-vue-next";
</script>

<template>
  <header
    class="flex justify-center w-full lg:py-4 md:py-4 py-4 fixed top-0 z-50"
  >
    <div
      class="lg:max-w-7/8 md:w-8/9 w-9/10 flex bg-[#1E1E1E] justify-between items-center lg:p-3 md:p-2 p-2 rounded-full"
    >
      <img src="/gelowebdev.svg" class="w-18" alt="gelowebdevlogo" />
      <nav class="lg:block md:hidden hidden space-x-2">
        <SecondaryBtn
          buttonName="Experiences"
          route="#experience-section"
          :isScroll="true"
        />
        <SecondaryBtn
          buttonName="Tech Stack"
          route="#skills-section"
          :isScroll="true"
        />
        <SecondaryBtn
          buttonName="Projects"
          route="#project-section"
          :isScroll="true"
        />

        <PrimaryBtn buttonName="Let's Talk" route="/" />
      </nav>
      <div class="lg:hidden md:block block">
        <div class="drawer">
          <input
            id="my-drawer"
            type="checkbox"
            class="drawer-toggle"
            v-model="isDrawerOpen"
          />
          <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="btn btn-ghost btn-xs drawer-button">
              <AlignJustify />
            </label>
          </div>
          <div class="drawer-side h-full">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
              @click="closeDrawer"
            ></label>
            <ul
              class="menu bg-base-100 border-r-1 border-white text-base-content min-h-full w-2/4 p-4 flex items-center"
            >
              <!-- Sidebar content here -->
              <li>
                <a
                  href="#experience-section"
                  @click="scrollToSection('#experience-section')"
                  >Experiences</a
                >
              </li>
              <li>
                <a
                  href="#project-section"
                  @click="scrollToSection('#project-section')"
                  >Projects</a
                >
              </li>
              <li>
                <a
                  href="#skills-section"
                  @click="scrollToSection('#skills-section')"
                  >Tech Stack</a
                >
              </li>

              <button
                onclick="my_modal_1.showModal()"
                class="magic-hover btn magic-hover__square bg-white text-black rounded-full font-semibold"
                :to="route"
              >
                Lets Talk
              </button>
              <dialog id="my_modal_1" class="modal">
                <div class="modal-box border-1 rounded-lg">
                  <form method="dialog">
                    <button
                      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                      ✕
                    </button>
                  </form>
                  <div class="flex items-center gap-2 border-b-1 pb-4">
                    <h3 class="text-lg font-bold">
                      Social media is the best way to reach me
                    </h3>
                  </div>
                  <div class="w-full space-y-6 mt-6">
                    <div class="flex items-center gap-2">
                      <div>
                        <Mails size="24" />
                      </div>
                      <span>angeloserenuela524@gmail.com</span>
                    </div>

                    <div class="flex items-center gap-2">
                      <div>
                        <Linkedin size="24" />
                      </div>
                      <span>Angelo Serenuela</span>
                    </div>

                    <div class="flex items-center gap-2">
                      <div>
                        <Github size="24" />
                      </div>
                      <span>GeloDevDesign</span>
                    </div>
                  </div>
                </div>
              </dialog>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
