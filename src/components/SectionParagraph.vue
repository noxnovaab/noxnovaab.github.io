<template>
  <p ref="el" class="text-xl md:text-2xl text-stone-100 text-shadow shadow-black/25">
    <slot />
  </p>
</template>
<script setup>
import { useTemplateRef } from 'vue';

const el = useTemplateRef('el');
defineExpose({ el });
</script>
