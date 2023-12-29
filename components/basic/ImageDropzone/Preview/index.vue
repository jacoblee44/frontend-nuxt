<template>
  <div
    class="group/dropzone-preview relative bg-contain bg-center bg-no-repeat bg-center w-full h-full"
    :class="[rounded === 'sm' && 'rounded-sm']"
    :style="{ backgroundImage: `url(${url})` }"
  >
    <slot v-if="removable" name="remove" :click="onRemove">
      <div
        class="absolute top-1 right-1 z-1 w-6 h-6 hidden group-hover/dropzone-preview:flex items-center justify-center bg-white cursor-pointer hover:opacity-80"
        @click.stop="onRemove"
      >
        <IconTrash class="text-accent w-4 h-4" />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { DropzoneBorderRadius } from '~/components/basic/Dropzone/type';

defineProps({
  url: {
    type: String,
    required: true,
  },
  removable: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String as PropType<DropzoneBorderRadius>,
    default: 'sm',
  },
});

const emit = defineEmits(['remove']);

const onRemove = () => {
  emit('remove');
};
</script>
