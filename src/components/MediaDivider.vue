<template>
  <div ref="el" class="w-0 h-0.5 bg-gray-600 transition-all" />
</template>
<script setup>
import { useTemplateRef } from 'vue';

const el = useTemplateRef('el');

defineExpose({ el });
</script>
