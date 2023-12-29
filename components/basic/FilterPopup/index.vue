<template>
  <BasicPopup
    :class="['w-86 px-1.5 py-5', props.class]"
    :x-pos="xPos"
    :y-pos="yPos"
    :arrow="arrow"
    :anchor-pos="anchorPos"
  >
    <template #button="slotData">
      <slot v-if="$slots.button" name="button" v-bind="slotData" />
      <i v-else class="new-h24-icon-filter text-lg" />
    </template>

    <template #default="{ close }">
      <slot name="header" :title="title" :close="close">
        <div class="flex items-center justify-between border-b border-shade-eb pb-4 mx-3.5 mb-7.5">
          <h3 class="font-bold">{{ title }}</h3>
          <i class="new-h24-icon-close text-sm cursor-pointer" @click="close()" />
        </div>
      </slot>
      <div class="grow px-3.5 overflow-auto">
        <slot />

        <slot name="actions" :reset="onReset" :apply="onApply" :close="close">
          <div class="flex gap-5 mt-7">
            <BasicButton class="w-full" variant="outline" @click="onReset">
              Clear filters
            </BasicButton>
            <BasicButton class="w-full" @click="onApply(close)">Apply</BasicButton>
          </div>
        </slot>
      </div>
    </template>
  </BasicPopup>
</template>

<script setup lang="ts">
import type {
  PopupAnchorPosition,
  PopupXPosition,
  PopupYPosition,
} from '~/components/basic/Popup/types';

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'Filter',
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
    default: true,
  },
  anchorPos: {
    type: String as PropType<PopupAnchorPosition>,
    default: 'center',
  },
});

const emit = defineEmits(['reset', 'apply']);

const onReset = (close: VoidFunction) => {
  emit('reset', close);
};

const onApply = (close: VoidFunction) => {
  emit('apply', close);
};
</script>
