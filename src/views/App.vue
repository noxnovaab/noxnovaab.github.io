<script setup>
import MediaScrollSection from '@/views/partials/MediaScrollSection.vue';
import FooterSection from '@/views/partials/FooterSection.vue';
import HeaderSection from '@/views/partials/HeaderSection.vue';
import { useLenis } from '@/composables/useLenis.js';
import LogoWithArrowLine from '@/components/LogoWithArrowLine.vue';
import IntroSection from '@/views/partials/IntroSection.vue';
import TextScrollSection from '@/views/partials/TextScrollSection.vue';
import BottomSection from '@/views/partials/BottomSection.vue';

useLenis();
</script>

<template>
  <HeaderSection />
  <main class="bg-gray-950">
    <LogoWithArrowLine />
    <IntroSection media-background="/media/intro.mp4" poster="/media/noxnova-poster.webp" />
    <MediaScrollSection
      background-media="/media/car_ride.mp4"
      media="/media/traffic.mp4"
      text="Tilt your head up and gaze at the night sky. Expanding volume and trillions of possibilities."
      heading="Look up."
      :highlighted-words="['up.']"
      paragraph="Let’s start there."
    />
    <TextScrollSection
      heading="Imagination is every|thing."
      :large-words="['Imagination', 'is', 'every', 'thing.']"
      :highlighted-words="['every']"
      text="Think of us as space cowboys. We do bold and brave work. But with a humble touch. We are dead serious about our missions."
      second-text="Ourselves, though. Not so much."
      background-media="/media/moon.mp4"
    />
    <MediaScrollSection
      background-media="/media/shiny_woman.mp4"
      media="/media/wavy_shape.mp4"
      text="That’s our core. Powered by competence, we seek to challenge the ordinary way."
      heading="We are specialists."
      :highlighted-words="['specialists.']"
      paragraph="By staying true to our vision, we create a community – a space to be."
    />
    <TextScrollSection
      heading="We dream big, <br> like humans do."
      :large-words="['We', 'dream', 'big,']"
      :highlighted-words="['big,', 'like', 'humans', 'do.']"
      text="We’re here. Let’s make some cosmic shit happen."
      background-media="/media/wave.mp4"
    />
    <BottomSection media-background="/media/reflex.mp4" />
  </main>
  <FooterSection
    discord="https://discord.gg/ty2Rz9NkVu"
    linked-in="https://www.linkedin.com/company/nox-nova/"
    instagram="https://www.instagram.com/noxnovaab"
  />
</template>
