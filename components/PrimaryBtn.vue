<script setup>
import { Mails,Github,Linkedin } from "lucide-vue-next";
const props = defineProps({
  buttonName: {
    type: String,
    default: "No button Name",
  },
  route: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <button
    onclick="my_modal_1.showModal()"
    class="magic-hover btn magic-hover__square bg-white text-black rounded-full font-semibold"
    :to="route"
  >
    {{ buttonName }}
  </button>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box border-1 border-white rounded-lg">
      <div class="flex items-center gap-2 border-b-1 pb-4">
        <h3 class="text-lg font-bold">You can message me through my social media accounts.</h3>
      </div>
      <div class="w-full space-y-2 mt-6">
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

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
