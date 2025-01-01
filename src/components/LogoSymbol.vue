<script setup>
import { useIntersectionObserver } from '@vueuse/core';
import { onMounted, ref, useTemplateRef } from 'vue';
// import lottie from 'lottie-web';
// Try to import a lighter version of lottie.
import lottie from 'lottie-web/build/player/lottie_light.js';
import animationData from '@/assets/logo-lottie-animation-data.json';

const target = useTemplateRef('target');
const targetIsVisible = ref(false);
const animation = ref(null);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
    if (isIntersecting) {
      animation.value.setSpeed(1);
      animation.value.setDirection(1);
      animation.value.play();
    } else {
      animation.value.setDirection(-1);
      animation.value.setSpeed(2);
      animation.value.play();
    }
  },
  {
    rootMargin: '-50% 0% 0% 0%'
  }
);

onMounted(() => {
  animation.value = lottie.loadAnimation({
    container: target.value, // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: animationData
  });
});
</script>

<template>
  <div ref="target" class="h-lvh w-lvw max-w-[540px] opacity-50"></div>
</template>
