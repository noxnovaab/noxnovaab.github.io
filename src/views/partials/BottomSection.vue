<script setup>
import MediaBackground from '@/components/MediaBackground.vue';
import { useFadeInAnimation } from '@/composables/useFadeInAnimation.js';
import { onMounted, useTemplateRef } from 'vue';

defineProps({
  mediaBackground: String,
});

const rootElement = useTemplateRef('rootElement');
const mediaBgEl = useTemplateRef('mediaBg');
const { initFadeInAnimation } = useFadeInAnimation();
onMounted(() => {
  initFadeInAnimation(mediaBgEl.value.videoElementRef, rootElement.value);
});
</script>
<template>
  <div ref="rootElement" class="h-lvh relative transform-gpu">
    <MediaBackground ref="mediaBg" :media-background="mediaBackground" />
  </div>
</template>
