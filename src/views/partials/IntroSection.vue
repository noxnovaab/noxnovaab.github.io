<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue';
import { useGsap } from '@/composables/useGsap.js';
import MediaBackground from '@/components/MediaBackground.vue';

defineProps({
  mediaBackground: String,
  poster: String,
});

const { gsap } = useGsap();

const rootElement = useTemplateRef('rootElement');
const mediaBackgroundRef = useTemplateRef('videoElement');
let sectionTimeline = null;

onMounted(() => {
  //The intro animation
  sectionTimeline = new gsap.timeline({
    scrollTrigger: {
      trigger: rootElement.value,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
      // markers: true
    }
  });

  sectionTimeline.to(mediaBackgroundRef.value.videoElementRef, {
    scale: 1.5
  });
});
onBeforeUnmount(() => {
  sectionTimeline.kill();
});
</script>
<template>
  <div ref="rootElement" class="h-[500lvh] relative isolate">
    <MediaBackground ref="videoElement" :media-background="mediaBackground" :poster="poster" />
  </div>
</template>
