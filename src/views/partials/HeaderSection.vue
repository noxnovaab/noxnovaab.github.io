<script setup>
import Logo from '@/components/LogoText.vue';
import animateScrollTo from '@/utils/animateScrollTo.js';

function goToBottom() {
  animateScrollTo(document.documentElement.scrollHeight, 2000);
}
function goToTop() {
  animateScrollTo(0, 2000);
}
</script>
<template>
  <header
    class="fixed z-10 inset-x-0 top-0 h-dvh md:h-27 p-8 flex gap-y-7 flex-col items-end justify-between md:flex-row md:justify-between md:items-center text-gray-700"
  >
    <button
      class="max-md:max-w-[112px]"
      @click="goToTop"
    >
      <Logo />
    </button>
    <button
      class="inline-block text-left text-gray-700/75 hover:text-gray-700 focus:text-gray-700 transition-colors"
      @click="goToBottom"
    >
      Contact
    </button>
  </header>
</template>
