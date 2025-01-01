<script setup>
import { onMounted, useTemplateRef } from 'vue';
import { useGsap } from '@/composables/useGsap.js';
import MediaBackground from '@/components/MediaBackground.vue';
import MediaDivider from '@/components/MediaDivider.vue';
import SectionParagraph from '@/components/SectionParagraph.vue';
import { useTextSplit } from '@/composables/useTextSplit.js';
import ContentContainer from '@/views/partials/ContentContainer.vue';
import { useFadeInAnimation } from '@/composables/useFadeInAnimation.js';

const props = defineProps({
  backgroundMedia: String,
  media: String,
  heading: String,
  highlightedWords: Array,
  text: String,
  paragraph: String
});

const { gsap, vh } = useGsap();

const rootElement = useTemplateRef('rootElement');
const mediaBgEl = useTemplateRef('mediaBg');
const headingEl = useTemplateRef('heading');
const wordsEl = useTemplateRef('words');
const paragraphEl = useTemplateRef('secondParagraph');
const mediaEl = useTemplateRef('mediaElement');
const mediaStrokeTop = useTemplateRef('mediaStrokeTop');
const mediaStrokeBottom = useTemplateRef('mediaStrokeBottom');

const { words: headingSplit } = useTextSplit(props.heading, props.highlightedWords);
const { words: wordsSplit } = useTextSplit(props.text);

function showMediaDividers(params = {}) {
  gsap.fromTo(
    [mediaStrokeTop.value.el, mediaStrokeBottom.value.el],
    {
      width: 0,
      opacity: 0
    },
    {
      width: 120,
      opacity: 1,
      ...params,
      delay: params.delay ?? 0.75
    }
  );
}

function hideMediaDividers(params = {}) {
  gsap.to([mediaStrokeTop.value.el, mediaStrokeBottom.value.el], {
    ...params,
    width: 0,
    opacity: 0,
    delay: params.delay ?? 0.5
  });
}

const { initFadeInAnimation } = useFadeInAnimation();

onMounted(() => {
  initFadeInAnimation(mediaBgEl.value.videoElementRef, rootElement.value);

  const textScrubValue = 0.25;

  gsap.fromTo(
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
      scrollTrigger: {
        trigger: rootElement.value,
        start: `+=${vh(50)}`,
        end: `+=${vh(150)}`,
        scrub: textScrubValue
      }
    }
  );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: rootElement.value,
        start: `+=${vh(200)}`,
        end: `+=${vh(220)}`,
        scrub: textScrubValue
      }
    })
    .add('words')
    .fromTo(
      wordsEl.value,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 4
        },
        ease: 'sine.out',
      }
    )
    .add('paragraph')
    .from(paragraphEl.value.el, {
      opacity: 0,
      y: -20,
      ease: 'sine.out',
    });

  gsap.fromTo(
    mediaEl.value,
    {
      opacity: 0,
      x: -128
    },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: rootElement.value,
        start: `+=${vh(275)}`,
        end: `+=${vh(300)}`,
        scrub: true,
        onEnter: () => {
          showMediaDividers();
        },
        onLeaveBack: () => {
          hideMediaDividers();
        }
      }
    }
  );

  // Exit animation
  gsap.fromTo(
    [
      headingEl.value,
      wordsEl.value,
      paragraphEl.value.el,
      mediaEl.value,
      mediaStrokeTop.value.el,
      mediaStrokeBottom.value.el
    ],
    {
      y: 0
    },
    {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: rootElement.value,
        start: `+=${vh(620)}`,
        end: `bottom center`,
        scrub: true,
        onEnter: () => {
          hideMediaDividers({ delay: 0 });
        },
        onLeaveBack: () => {
          showMediaDividers({ delay: 0 });
        }
      }
    }
  );
});
</script>
<template>
  <div ref="rootElement" class="h-[700lvh] relative transform-gpu">
    <MediaBackground ref="mediaBg" :media-background="backgroundMedia">
      <ContentContainer>
        <div class="flex flex-col gap-6 max-w-[570px]">
          <MediaDivider ref="mediaStrokeTop" class="origin-left" />
          <div ref="mediaElement" class="px-8">
            <div class="relative aspect-[4/5] md:w-full max-h-[40vh] md:max-h-[65vh]">
              <video
                class="absolute z-0 inset-0 size-full object-cover | grayscale pointer-events-none"
                autoplay
                muted
                loop
                playsinline
              >
                <source :src="media" type="video/mp4" />
              </video>
              <div class="bg-gray-800/50 size-full absolute inset-0 z-10 " />
            </div>
          </div>
          <MediaDivider ref="mediaStrokeBottom" class="self-end origin-right" />
        </div>
        <div class="flex items-center font-condensed-medium">
          <div class="xl:pl-12 2xl:pl-30">
            <h2 class="mb-6 text-6.5xl/none lg:text-9xl/none text-shadow shadow-black/25">
              <template v-for="(headingWord, index) in headingSplit" :key="index">
                <span
                  ref="heading"
                  class="inline-block whitespace-pre-wrap"
                  :class="[headingWord.isHighlighted ? 'text-stone-100' : 'text-gray-700']"
                >
                  {{ headingWord.text }}
                </span>
              </template>
            </h2>
            <SectionParagraph class="mb-4 md:mb-6 md:max-w-125">
              <template v-for="(word, index) in wordsSplit" :key="index">
                <span ref="words" class="inline-block whitespace-pre-wrap">
                  {{ word.text }}
                </span>
              </template>
            </SectionParagraph>
            <SectionParagraph ref="secondParagraph" class="md:max-w-125">
              {{ paragraph }}
            </SectionParagraph>
          </div>
        </div>
      </ContentContainer>
    </MediaBackground>
    <slot />
  </div>
</template>
