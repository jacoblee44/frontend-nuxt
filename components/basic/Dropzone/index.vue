<template>
  <div
    class="group flex items-center justify-center flex-shrink-0 border-sm border-dashed relative"
    :class="[
      fullWidth && 'w-full',
      rounded === 'sm' && 'rounded-sm',
      disabled ? 'opacity-60 cursor-default' : 'cursor-pointer',
      empty ? 'border-shade-93' : 'border-transparent',
    ]"
    v-bind="getRootProps()"
  >
    <input v-bind="getInputProps()" />

    <slot v-if="empty" name="placeholder">
      <div class="flex flex-col items-center justify-center text-center">
        <div
          v-if="mode === 'image'"
          class="flex items-center justify-center border-sm border-shade-97 rounded-full"
          :style="{ width: `${placeholderIconSize}px`, height: `${placeholderIconSize}px` }"
        >
          <i
            class="new-h24-icon-add text-shade-93"
            :style="{ fontSize: `${placeholderIconSize * 0.4}px` }"
          />
        </div>

        <div
          v-if="mode === 'pdf'"
          class="flex items-center justify-center"
          :style="{ width: `${placeholderIconSize}px`, height: `${placeholderIconSize}px` }"
        >
          <i
            class="new-h24-icon-pdf text-shade-93"
            :style="{ fontSize: `${placeholderIconSize}px` }"
          />
        </div>

        <span v-if="placeholderText" class="typo-sm mt-3">{{ placeholderText }}</span>
      </div>
    </slot>

    <slot v-if="!empty" name="preview" />

    <slot name="actions" :open="getRootProps().onClick" :empty="empty" :disabled="disabled" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { type FileUploadOptions, useDropzone } from 'vue3-dropzone';
import type { DropzoneBorderRadius } from './type';
import { DropzoneMode } from './type';

const props = defineProps({
  options: {
    type: Object as PropType<Partial<FileUploadOptions>>,
    default: undefined,
  },
  empty: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String as PropType<DropzoneBorderRadius>,
    default: 'sm',
  },
  placeholderIconSize: {
    type: Number,
    default: 80,
  },
  placeholderText: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String as PropType<DropzoneMode>,
    default: DropzoneMode.IMAGE,
  },
});

const { getRootProps, getInputProps } = useDropzone({
  ...props.options,
  disabled: props.disabled,
});
</script>
