<template>
  <div>
    <!--    fixed z-20 left-1/2 bottom-1/2 -translate-x-1/2 -->
    <div
      ref="logoContainer"
      class="fixed z-20 left-1/2 -translate-x-1/2 top-[calc(50%-20px)] -translate-y-1/2 pointer-events-none"
    >
      <LogoSymbol />
    </div>
    <div
      ref="arrowContainer"
      class="isolate h-10 fixed z-20 left-10 md:left-1/2 top-3/4 -translate-x-1/2 flex text-green-400"
    >
      <div class="h-full w-0.5 rounded-full bg-green-400" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="12"
        viewBox="0 0 24 10"
        fill="none"
        class="absolute z-10 -bottom-1 -left-[11px]"
      >
        <path
          ref="arrowhead"
          d="M19 0L12 7L5 0"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { useGsap } from '../composables/useGsap.js';
import LogoSymbol from '@/components/LogoSymbol.vue';

const { gsap, vh } = useGsap();
const logoContainer = useTemplateRef('logoContainer');
const arrowContainer = useTemplateRef('arrowContainer');
const arrowhead = useTemplateRef('arrowhead');
let lineTimeline;

const initGsapAnimations = () => {
  lineTimeline = new gsap.timeline({
    scrollTrigger: {
      start: `+=${vh(10)} top`,
      end: `+=${vh(200)}`,
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true,
      onEnter: () => {
        // Immediately fold in the arrowhead when entering the scroll trigger
        gsap.to(arrowhead.value, {
          attr: { d: 'M12 0L12 7L12 0' }, // Fold in
          duration: 0.5,
          ease: 'power1.inOut'
        });
      },
      onLeaveBack: () => {
        // Unfold when scrolling back
        gsap.to(arrowhead.value, {
          attr: { d: 'M19 0L12 7L5 0' }, // Unfold
          duration: 0.5,
          ease: 'power1.inOut'
        });
      }
    }
  });

  lineTimeline.to(arrowContainer.value, {
    height: '100lvh',
    top: 0
  });

  lineTimeline.to(
    logoContainer.value,
    {
      yPercent: '-125',
      delay: 0.06
    },
    '<'
  );
};

onMounted(() => {
  initGsapAnimations();
});

onUnmounted(() => {
  if (lineTimeline) {
    lineTimeline.kill(); // Kill the timeline
  }
});
</script>
