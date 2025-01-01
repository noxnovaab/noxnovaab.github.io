<script setup>
import { useTemplateRef } from 'vue';

defineProps({
  mediaBackground: String,
  poster: String,
});
const videoElementRef = useTemplateRef('videoElement');

defineExpose({
  videoElementRef
});
</script>
<template>
  <template v-if="mediaBackground">
    <div class="sticky inset-0 z-10 w-full h-lvh overflow-clip isolate">
      <video
        ref="videoElement"
        class="absolute z-0 inset-0 size-full object-cover grayscale pointer-events-none"
        autoplay
        muted
        loop
        playsinline
        :poster="poster"
      >
        <source :src="mediaBackground" type="video/mp4" />
      </video>
      <div class="bg-gray-800/75 size-full absolute inset-0 z-10 " />
      <div class="relative z-20">
        <slot />
      </div>
    </div>
  </template>
</template>
