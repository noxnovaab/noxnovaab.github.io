<template>
  <span class="text-xs font-medium text-gray-700">© {{ currentYear }}. All rights reserved.</span>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear() // Dynamically fetches the current year
    };
  }
};
</script>
