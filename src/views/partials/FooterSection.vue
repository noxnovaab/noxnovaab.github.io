<script setup>
import animateScrollTo from '@/utils/animateScrollTo.js';
import FooterCopyright from '@/views/partials/FooterCopyright.vue';
import FooterSoMe from '@/views/partials/FooterSoMe.vue';

defineProps({
  mediaBackground: String,
  discord: String,
  instagram: String,
  linkedIn: String
});

function goToTop() {
  animateScrollTo(0, 2000);
}
</script>
<template>
  <footer
    class="relative z-50 pt-10 md:pt-16 pb-8 px-8 lg:px-20 min-h-96 flex flex-col md:flex-row-reverse gap-4 justify-between items-stretch bg-gray-900"
  >
    <div>
      <div class="flex h-full flex-col items-end justify-between text-right">
        <button class="flex gap-4 flex-col items-end" @click="goToTop">
          <svg
            class="text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="40"
            viewBox="0 0 24 40"
            fill="none"
          >
            <path
              d="M12 38L11.8521 2.00109"
              stroke="#00E87A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19 9L12 2L5 9"
              stroke="#00E87A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-lg font-medium text-stone-100">To the top</span>
        </button>
        <FooterCopyright class="hidden md:block" />
      </div>
    </div>
    <div class="md:self-end pb-12 md:flex gap-10">
      <div>
        <a class="block mb-6 md:mb-8 text-6xl" :href="discord">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="57"
            viewBox="0 0 74 57"
            fill="none"
          >
            <path
              d="M62.6852 4.77366C57.8233 2.51145 52.6907 0.906569 47.4184 0C46.6969 1.31076 46.0441 2.65937 45.4627 4.04016C39.8468 3.18009 34.1357 3.18009 28.5197 4.04016C27.938 2.65951 27.2852 1.31092 26.564 0C21.2884 0.914224 16.1524 2.52292 11.2856 4.78549C1.62382 19.3135 -0.995337 33.4807 0.314243 47.4468C5.97243 51.6955 12.3056 54.9267 19.0383 57C20.5543 54.9277 21.8958 52.7293 23.0486 50.4281C20.8591 49.597 18.7459 48.5717 16.7335 47.3639C17.2631 46.9735 17.7811 46.5713 18.2817 46.1809C24.1375 48.9797 30.5289 50.4308 36.9999 50.4308C43.471 50.4308 49.8624 48.9797 55.7182 46.1809C56.2246 46.6009 56.7426 47.0031 57.2664 47.3639C55.25 48.5736 53.133 49.6009 50.9397 50.434C52.091 52.7342 53.4326 54.9307 54.9499 57C61.6884 54.935 68.0264 51.7053 73.6856 47.4527C75.2222 31.2565 71.0607 17.2195 62.6852 4.77366ZM24.7074 38.8577C21.058 38.8577 18.043 35.4919 18.043 31.3512C18.043 27.2105 20.9532 23.8151 24.6957 23.8151C28.4382 23.8151 31.4299 27.2105 31.3658 31.3512C31.3018 35.4919 28.4266 38.8577 24.7074 38.8577ZM49.2925 38.8577C45.6374 38.8577 42.634 35.4919 42.634 31.3512C42.634 27.2105 45.5442 23.8151 49.2925 23.8151C53.0408 23.8151 56.0092 27.2105 55.9452 31.3512C55.8812 35.4919 53.0117 38.8577 49.2925 38.8577Z"
              fill="white"
            />
          </svg>
        </a>
        <FooterSoMe class="max-md:hidden" :linked-in="linkedIn" :instagram="instagram" />
      </div>
      <div class="mb-6 space-y-3">
        <h2 class="text-4.5xl/none font-condensed-medium text-gray-700">
          We are
          <a :href="discord" target="_blank" rel="noopener noreferrer" class="text-stone-100">
            here!
          </a>
        </h2>
        <p class="text-base font-condensed text-stone-100">
          Join our Discord community to get the latest news, updates, and exclusive insights.
        </p>
      </div>
      <FooterSoMe class="md:hidden" />
    </div>
    <FooterCopyright class="md:hidden" />
  </footer>
</template>
