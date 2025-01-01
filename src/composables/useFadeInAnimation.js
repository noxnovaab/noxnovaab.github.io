import { useGsap } from './useGsap.js';

const {gsap, vh} = useGsap();

export function useFadeInAnimation() {
  const runAnimation = (targetEl, rootElement, options = {}) => {
    const defaultOptions = {
      startOffset: 10, // default vh(10)
      endOffset: 100 // default vh(100)
    };
    const { startOffset, endOffset } = { ...defaultOptions, ...options };

    if (targetEl && rootElement) {
      gsap.fromTo(
        targetEl,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: rootElement,
            start: `+=${vh(startOffset)} bottom`,
            end: `+=${vh(endOffset)}`,
            scrub: true,
          },
        }
      );
    }
  }

  return { initFadeInAnimation: runAnimation };
}
