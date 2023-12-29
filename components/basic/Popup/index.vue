<template>
  <Popover v-slot="{ open, close }" class="relative">
    <PopoverButton class="outline-none">
      <slot name="button" :open="open" :close="close" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel
        :class="[
          'absolute z-10 flex flex-col bg-white rounded-sm drop-shadow-popup outline-none',
          arrow && 'with-arrow',
          xPos === 'left' && [
            'arrow-l left-0',
            anchorPos === 'center' && 'left-1/2 -translate-x-7',
          ],
          xPos === 'right' && [
            'arrow-r right-0',
            anchorPos === 'center' && 'right-1/2 translate-x-7',
          ],
          xPos === 'before' && 'arrow-r left-0 -translate-x-full',
          xPos === 'after' && 'arrow-l left-full',
          xPos === 'center' && 'arrow-center left-1/2 -translate-x-1/2',
          yPos === 'above' && ['-translate-y-full', arrow && 'arrow-b -top-4'],
          yPos === 'below' && [arrow && 'arrow-t mt-4'],
          yPos === 'top' && 'arrow-t top-0',
          yPos === 'bottom' && 'arrow-b bottom-0',
          yPos === 'middle' && 'arrow-middle top-1/2 -translate-y-1/2',
          props.class,
        ]"
      >
        <slot :open="open" :close="close" />
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import type { PopupAnchorPosition, PopupXPosition, PopupYPosition } from './types';

const props = defineProps({
  class: {
    type: String,
    default: 'w-full',
  },
  xPos: {
    type: String as PropType<PopupXPosition>,
    default: 'left',
  },
  yPos: {
    type: String as PropType<PopupYPosition>,
    default: 'below',
  },
  arrow: {
    type: Boolean,
    default: false,
  },
  anchorPos: {
    type: String as PropType<PopupAnchorPosition>,
    default: undefined,
  },
});
</script>
