<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { useGsap } from '@/composables/useGsap.js';
import MediaBackground from '@/components/MediaBackground.vue';
import { useTextSplit } from '@/composables/useTextSplit.js';
import ContentContainer from '@/views/partials/ContentContainer.vue';
import SectionParagraph from '@/components/SectionParagraph.vue';
import { useFadeInAnimation } from '@/composables/useFadeInAnimation.js';

const props = defineProps({
  backgroundMedia: String,
  heading: String,
  largeWords: Array,
  highlightedWords: Array,
  text: String,
  secondText: String,
});

const { gsap, vh } = useGsap();

const rootElement = useTemplateRef('rootElement');
const mediaBgEl = useTemplateRef('mediaBg');
const headingEl = useTemplateRef('heading');
const paragraphEl = useTemplateRef('paragraph');
const secondParagraphEl = useTemplateRef('secondParagraph');
const { words: headingSplit } = useTextSplit(
  props.heading,
  props.highlightedWords,
  props.largeWords
);
const { initFadeInAnimation } = useFadeInAnimation();

onMounted(() => {
  initFadeInAnimation(mediaBgEl.value.videoElementRef, rootElement.value);

  const textScrubValue = 0.25;

  const textTimeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: rootElement.value,
        start: `+=${vh(50)}`,
        end: `+=${vh(250)}`,
        scrub: textScrubValue
      }
    })
    .add('heading')
    .fromTo(
      headingEl.value,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        stagger: 1,
        ease: 'sine.out',
      }
    );
  if (props.text) {
    textTimeline.add('paragraph').from(paragraphEl.value.el, {
      opacity: 0,
      y: -20
    });
  }
  if (props.secondText) {
    textTimeline.add('second-paragraph').from(secondParagraphEl.value.el, {
      opacity: 0,
      y: -20
    });
  }

  // Exit animation
  gsap.fromTo(
    [headingEl.value, paragraphEl.value?.el, secondParagraphEl.value?.el],
    {
      y: 0
    },
    {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: rootElement.value,
        start: `+=${vh(380)}`,
        end: `bottom center`,
        scrub: true
      }
    }
  );
});
</script>
<template>
  <div ref="rootElement" class="h-[550lvh] relative transform-gpu">
    <MediaBackground ref="mediaBg" :media-background="backgroundMedia">
      <ContentContainer>
        <div class="flex items-center font-condensed-medium">
          <div class="space-y-6">
            <h2 class="whitespace-pre-wrap text-shadow shadow-black/25">
              <template v-for="(headingWord, index) in headingSplit" :key="index">
                <br
                  v-if="headingWord.text === '<br>'"
                  class="max-sm:hidden"
                />
                <span
                  v-else-if="headingWord.text === ' '"
                  :class="[
                    headingWord.isLarge ? 'text-5.5xl/none lg:text-8xl/none 2xl:text-9xl/none' : 'text-4.5xl/none lg:text-6xl/none'
                  ]"
                  >{{ headingWord.text }}</span
                >
                <span
                  v-else
                  ref="heading"
                  class="inline-block"
                  :class="[
                    headingWord.isLarge ? 'text-5.5xl/none lg:text-8xl/none 2xl:text-9xl/none' : 'text-3xl/none lg:text-6xl/none',
                    headingWord.isHighlighted ? 'text-stone-100' : 'text-gray-700'
                  ]"
                >
                  {{ headingWord.text }}
                </span>
              </template>
            </h2>
            <template v-if="text">
              <SectionParagraph
                ref="paragraph"
                class="md:max-w-125"
              >{{text}}</SectionParagraph>
            </template>
            <template v-if="secondText">
              <SectionParagraph
                ref="secondParagraph"
                class="md:max-w-125"
              >{{secondText}}</SectionParagraph>
            </template>
          </div>
        </div>
      </ContentContainer>
    </MediaBackground>
    <slot />
  </div>
</template>
