import { defineNuxtPlugin } from '#app';

type DirectiveBinding = {
  value: () => void;
};

type ModifiedHTMLElement = HTMLElement & { clickOutsideEvent?: (event: Event) => void };

export const clickOutsideBeforeMountHook = (el: ModifiedHTMLElement, binding: DirectiveBinding) => {
  el.clickOutsideEvent = (event: Event) => {
    if (!(el === event.target || el.contains(event.target as Node))) {
      binding.value();
    }
  };
  document.addEventListener('click', el.clickOutsideEvent);
};

export const clickOutsideUnmountedHook = (el: ModifiedHTMLElement) => {
  if (el.clickOutsideEvent) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
};

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive('click-outside', {
    beforeMount: clickOutsideBeforeMountHook,
    unmounted: clickOutsideUnmountedHook,
  });
});
